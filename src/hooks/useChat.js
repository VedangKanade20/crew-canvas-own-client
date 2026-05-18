"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getChatByTeamspace } from "@/services/chatService";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;

export const useChat = (teamspaceId) => {
    const [messages, setMessages] = useState([]);
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["chat", teamspaceId],
        queryFn: () =>
            getChatByTeamspace(teamspaceId).then((res) => res.data.chat),
        enabled: !!teamspaceId,
        onSuccess: (chatData) => {
            setMessages(chatData?.messages || []);
        },
    });

    useEffect(() => {
        if (!teamspaceId) return;

        const token = localStorage.getItem("token") || "";
        if (!socket) {
            socket = io(
                process.env.NEXT_PUBLIC_SOCKET_URL ||
                    process.env.NEXT_PUBLIC_API_URL,
                {
                    auth: { token },
                    withCredentials: true,
                    transports: ["websocket"],
                }
            );
        }

        socket.emit("joinTeamspace", teamspaceId);

        const handleReceiveMessage = (newMsg) => {
            setMessages((prev) => [...prev, newMsg]);
            queryClient.setQueryData(["chat", teamspaceId], (oldData) => {
                if (!oldData) return { messages: [newMsg] };
                return {
                    ...oldData,
                    messages: [...(oldData.messages || []), newMsg],
                };
            });
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.disconnect();
            socket = null;
        };
    }, [teamspaceId, queryClient]);

    return { messages, isLoading, socket, chat: data };
};

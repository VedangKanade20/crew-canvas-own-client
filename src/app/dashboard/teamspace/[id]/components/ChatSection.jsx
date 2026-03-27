// components/ChatSection.jsx
"use client";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useChat } from "@/hooks/useChat";
import ChatMessageList from "./ChatMessageList";
import ChatInputBox from "./ChatInputBox";

let socket; // global socket instance

import { useQueryClient } from "@tanstack/react-query";

export default function ChatSection({ teamspaceId }) {
    const { data: messages = [], isLoading } = useChat(teamspaceId);
    const queryClient = useQueryClient();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!socket) {
            socket = io(
                process.env.NEXT_PUBLIC_SOCKET_URL ||
                    process.env.NEXT_PUBLIC_API_URL,
                {
                    auth: { token },
                    withCredentials: true,
                }
            );
        }

        socket.emit("joinTeamspace", teamspaceId);

        const handleReceiveMessage = (newMsg) => {
            queryClient.setQueryData(["chat", teamspaceId], (oldData) => {
                // oldData usually is { messages: [...] } or just [...] depend on useChat
                // useChat returns res.data.chat. chat object has messages array.
                // So oldData is the chat object.
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

    if (isLoading) return <div>Loading chat...</div>;

    return (
        <div className="flex flex-col h-[80vh] border rounded-2xl shadow-md overflow-hidden">
            <ChatMessageList messages={messages?.messages || messages || []} />
            <ChatInputBox socket={socket} teamspaceId={teamspaceId} />
        </div>
    );
}

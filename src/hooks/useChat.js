"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getChatByTeamspace,
    addMessageToChat,
    deleteMessage,
} from "@/services/chatService";
import { useEffect } from "react";
import io from "socket.io-client";

let socket;


export const useChat = (teamspaceId, setMessages, user) => {
    const qc = useQueryClient();

    // Initial fetch from backend (load chat history)
    const { data, isLoading } = useQuery({
        queryKey: ["chat", teamspaceId],
        queryFn: () =>
            getChatByTeamspace(teamspaceId).then((res) => res.data.chat),
        enabled: !!teamspaceId,
        onSuccess: (chatData) => {
            // once fetched, load initial messages into state
            setMessages(chatData?.messages || []);
        },
    });

    // Setup socket connection once
    useEffect(() => {
        if (!teamspaceId) return;

        if (!socket) {
            socket = io(process.env.NEXT_PUBLIC_API_URL, {
                withCredentials: true,
            });
        }

        socket.emit("chat_join", { teamspaceId, userId: user?._id });

        socket.on("chat_message", (newMsg) => {
            setMessages((prev) => [...prev, newMsg]);
        });

        socket.on("chat_delete", (msgId) => {
            setMessages((prev) => prev.filter((m) => m._id !== msgId));
        });

        return () => {
            socket.emit("chat_leave", { teamspaceId, userId: user?._id });
            socket.off("chat_message");
            socket.off("chat_delete");
        };
    }, [teamspaceId, user]);

    return { data, isLoading, socket };
};

// ✉️ ADD MESSAGE HOOK — emits via socket and saves via API
export const useAddMessage = (teamspaceId, socket) => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (messageData) => {
            // Emit to socket for instant UI update
            if (socket && teamspaceId) {
                socket.emit("chat_message", messageData);
            }

            // Persist to backend (actual DB save)
            await addMessageToChat(teamspaceId, messageData);

            return messageData;
        },
        onSuccess: () => qc.invalidateQueries(["chat", teamspaceId]),
    });
};

// 🗑️ DELETE MESSAGE HOOK — emits via socket and removes from DB
export const useDeleteMessage = (teamspaceId, socket) => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (messageId) => {
            if (socket && teamspaceId) {
                socket.emit("chat_delete", { messageId, teamspaceId });
            }

            await deleteMessage(teamspaceId, messageId);
            return messageId;
        },
        onSuccess: () => qc.invalidateQueries(["chat", teamspaceId]),
    });
};

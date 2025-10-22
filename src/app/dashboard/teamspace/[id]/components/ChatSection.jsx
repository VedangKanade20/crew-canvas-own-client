// components/ChatSection.jsx
"use client";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { useChat } from "@/hooks/useChat";
import ChatMessageList from "./ChatMessageList";
import ChatInputBox from "./ChatInputBox";

let socket; // global socket instance

export default function ChatSection({ teamspaceId }) {
    const { data: messages, isLoading } = useChat(teamspaceId);

    useEffect(() => {
        // ✅ Connect socket
        const token = localStorage.getItem("token");
        socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
            auth: { token },
        });

        // ✅ Join teamspace room
        socket.emit("joinTeamspace", teamspaceId);

        // Cleanup
        return () => {
            socket.disconnect();
        };
    }, [teamspaceId]);

    if (isLoading) return <div>Loading chat...</div>;

    return (
        <div className="flex flex-col h-[80vh] border rounded-2xl shadow-md overflow-hidden">
            <ChatMessageList messages={messages || []} />
            <ChatInputBox socket={socket} teamspaceId={teamspaceId} />
        </div>
    );
}

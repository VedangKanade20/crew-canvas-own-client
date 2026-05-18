// components/ChatSection.jsx
"use client";
import React from "react";
import { useChat } from "@/hooks/useChat";
import ChatMessageList from "./ChatMessageList";
import ChatInputBox from "./ChatInputBox";

export default function ChatSection({ teamspaceId }) {
    const { messages = [], isLoading, socket } = useChat(teamspaceId);

    if (isLoading) return <div>Loading chat...</div>;

    return (
        <div className="flex flex-col h-[80vh] border rounded-2xl shadow-md overflow-hidden">
            <ChatMessageList messages={messages} />
            <ChatInputBox socket={socket} teamspaceId={teamspaceId} />
        </div>
    );
}

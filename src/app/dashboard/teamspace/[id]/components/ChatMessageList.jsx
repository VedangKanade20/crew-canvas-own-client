// components/ChatMessageList.jsx
"use client";
import React, { useEffect, useState } from "react";

export default function ChatMessageList({ messages = [] }) {
    const [chatMessages, setChatMessages] = useState(messages);

    useEffect(() => {
        setChatMessages(messages);
    }, [messages]);

    useEffect(() => {
        // Scroll to bottom on update
        const chatBox = document.getElementById("chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, [chatMessages]);

    return (
        <div
            id="chat-box"
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
        >
            {chatMessages.length === 0 ? (
                <p className="text-gray-500 text-center">No messages yet</p>
            ) : (
                chatMessages.map((msg) => (
                    <div
                        key={msg._id}
                        className={`flex ${
                            msg.isSelf ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                            className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl ${
                                msg.isSelf
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                            }`}
                        >
                            <p className="text-sm font-medium">
                                {msg.sender?.name}
                            </p>
                            <p>{msg.content}</p>
                            <p className="text-[10px] text-right opacity-70">
                                {new Date(msg.timestamp).toLocaleTimeString(
                                    [],
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

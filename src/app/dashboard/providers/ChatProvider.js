// src/app/dashboard/providers/ChatProvider.js
"use client";
import React, { createContext, useContext } from "react";

const ChatContext = createContext(null);

export default function ChatProvider({ children }) {
    const value = {
        chats: [],
        sendMessage: async () => {},
        subscribeToRoom: (roomId, cb) => {
            // use socket.io client later
        },
    };

    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    );
}

export const useChatContext = () => {
    const ctx = useContext(ChatContext);
    if (!ctx)
        throw new Error("useChatContext must be used within ChatProvider");
    return ctx;
};

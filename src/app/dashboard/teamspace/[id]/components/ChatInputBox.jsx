// components/ChatInputBox.jsx
"use client";
import React, { useState } from "react";

export default function ChatInputBox({ socket, teamspaceId }) {
    const [content, setContent] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        // ✅ Emit socket event
        if (socket) {
            socket.emit("sendMessage", { teamspaceId, content });
        }
        setContent("");
    };

    return (
        <form
            onSubmit={handleSend}
            className="flex items-center p-3 border-t border-gray-300 bg-white"
        >
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Send
            </button>
        </form>
    );
}

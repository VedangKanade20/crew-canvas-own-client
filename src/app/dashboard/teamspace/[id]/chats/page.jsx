// app/(routes)/teamspace/[id]/chat/page.jsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import ChatSection from "../components/ChatSection";

export default function ChatPage() {
    const params = useParams();
    const teamspaceId = params.id;

    return (
        <div className="p-6 min-h-screen bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-6">
                💬 Teamspace Chat — {teamspaceId}
            </h1>

            <div className="bg-white text-black rounded-2xl shadow-xl p-4">
                <ChatSection teamspaceId={teamspaceId} />
            </div>
        </div>
    );
}

"use client";
import { useTeamspaceContext } from "@/providers/TeamspaceProvider";

export default function ChatPage() {
    const { teamspace, isLoading, activeTab, setActiveTab } =
        useTeamspaceContext();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Chat — {teamspace?.teamspaceName}</h1>
            <p>Owner: {teamspace?.OwnerId?.name}</p>
            <button onClick={() => setActiveTab("chat")}>
                Switch Active Tab
            </button>
        </div>
    );
}

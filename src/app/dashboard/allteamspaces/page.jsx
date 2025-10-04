"use client";

import TeamspaceList from "@/app/dashboard/components/TeamspaceList";
import { useState } from "react";

export default function BrowseTeamspacesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="p-10 text-white mt-[10%]  flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6 ">
                📂 Browse Your Teamspaces
            </h1>
            <input
                type="text"
                placeholder="Search teamspaces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-16 w-full max-w-md p-3 rounded-lg bg-gray-700 text-white mt-3 items-start"
            />
            <TeamspaceList searchQuery={searchQuery} />
        </div>
    );
}

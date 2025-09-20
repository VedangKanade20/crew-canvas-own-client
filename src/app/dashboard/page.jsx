// app/dashboard/page.js
"use client";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import TeamspaceList from "./components/TeamspaceList";
import CreateTeamspaceForm from "./components/CreateTeamspaceForm";

export default function DashboardPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <DashboardHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <CreateTeamspaceForm />
            <TeamspaceList searchQuery={searchQuery} />
        </div>
    );
}

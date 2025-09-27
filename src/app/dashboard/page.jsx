"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import DashboardHeader from "./components/DashboardHeader";
import TeamspaceList from "./components/TeamspaceList";
import QuickActions from "./components/QuickActions";

export default function DashboardPage() {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white mt-10 overflow-y-hidden">
            {/* Sidebar offset handled globally in layout */}
            <div className="flex-1 p-10 ml-64">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome + Search */}
                    <DashboardHeader
                        user={user}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    {/* Quick Actions Section */}
                    <QuickActions />

                    {/* Teamspaces Section */}
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold text-gray-200 mb-6">
                            Your Teamspaces :
                        </h2>
                        <TeamspaceList searchQuery={searchQuery} />
                    </div>
                </div>
            </div>
        </div>
    );
}

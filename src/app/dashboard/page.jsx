"use client";

import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import TeamspaceCard from "@/components/TeamspaceCard";

const DUMMY_TEAMSPACES = [
    {
        id: 1,
        name: "Engineering Sprint",
        description: "Current sprint tasks and documentation",
        members: 15,
        updated: "3 days ago",
        initial: "En",
        color: "green",
    },
    {
        id: 2,
        name: "Product Design",
        description: "UI/UX design projects and resources",
        members: 8,
        updated: "2 hours ago",
        initial: "Pr",
        color: "blue",
    },
    {
        id: 3,
        name: "Customer Support",
        description: "Support tickets and customer feedback",
        members: 7,
        updated: "2 days ago",
        initial: "Cu",
        color: "red",
    },
    {
        id: 4,
        name: "Finance Team",
        description: "Budget planning and financial reports",
        members: 4,
        updated: "5 days ago",
        initial: "Fi",
        color: "yellow",
    },
];

const DashboardPage = () => {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    console.log(user);
    const filteredTeamspaces = DUMMY_TEAMSPACES.filter((space) =>
        space.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex bg-black">
                <Sidebar />
                <div className="flex-1 p-8 text-white min-h-screen">
                    <div className="w-[100%] mx-auto mt-[5%] pl-[20%]">
                        {/* Welcome Section */}
                        <div className="mb-10">
                            <h1 className="text-3xl font-bold text-purple-500 mb-4">
                                Dashboard
                            </h1>
                            <p className="text-gray-400 text-base mb-6">
                                Welcome back, {user?.name || "Guest"}
                            </p>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="Search team spaces..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="bg-gray-800 text-white p-3 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                                    + New Space
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-3 gap-8 mb-10">
                            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                                <div className="text-purple-500 text-lg mb-3">
                                    Create Team Space
                                </div>
                                <p className="text-gray-400 text-sm mb-5">
                                    Start a new collaborative workspace
                                </p>
                                <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full">
                                    Create Space
                                </button>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                                <div className="text-blue-400 text-lg mb-3">
                                    Join Team Space
                                </div>
                                <p className="text-gray-400 text-sm mb-5">
                                    Join an existing workspace with a code
                                </p>
                                <button className="bg-blue-400 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors w-full">
                                    Join Space
                                </button>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                                <div className="text-green-400 text-lg mb-3">
                                    Templates
                                </div>
                                <p className="text-gray-400 text-sm mb-5">
                                    Start with pre-built workspace templates
                                </p>
                                <button className="bg-green-400 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition-colors w-full">
                                    Browse Templates
                                </button>
                            </div>
                        </div>

                        {/* Team Spaces Section */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-purple-500">
                                    All Team Spaces
                                </h2>
                                <div className="flex gap-4">
                                    <button className="text-gray-400 hover:text-gray-300">
                                        View Members
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-300">
                                        Sort
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {filteredTeamspaces.map((space) => (
                                    <TeamspaceCard
                                        key={space.id}
                                        space={space}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;

"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import TeamspaceList from "./components/TeamspaceList";
import CreateTeamspaceForm from "./components/CreateTeamspaceForm";
import MemberManagement from "./components/MemberManagement";
import DeleteTeamspaceButton from "./components/DeleteTeamspaceButton";

export default function DashboardPage() {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 ml-64">
                {" "}
                {/* Adjusted to offset sidebar width (64px) */}
                <div className="w-full max-w-7xl mx-auto mt-10">
                    {/* Welcome + Search */}
                    <DashboardHeader
                        user={user}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    {/* Quick Actions (Create / Join / Templates) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-purple-400 text-xl font-semibold mb-3">
                                Create Team Space
                            </div>
                            <p className="text-gray-400 text-sm mb-5">
                                Start a new collaborative workspace
                            </p>
                            <CreateTeamspaceForm />
                        </div>
                        <div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-blue-400 text-xl font-semibold mb-3">
                                Join Team Space
                            </div>
                            <p className="text-gray-400 text-sm mb-5">
                                Join an existing workspace with a code
                            </p>
                            <button className="relative bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full overflow-hidden group/button">
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover/button:opacity-20 transition-opacity duration-300" />
                                Join Space
                            </button>
                        </div>
                        <div className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl hover:border-green-500/50 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-green-400 text-xl font-semibold mb-3">
                                Templates
                            </div>
                            <p className="text-gray-400 text-sm mb-5">
                                Start with pre-built workspace templates
                            </p>
                            <button className="relative bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 w-full overflow-hidden group/button">
                                <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover/button:opacity-20 transition-opacity duration-300" />
                                Browse Templates
                            </button>
                        </div>
                    </div>

                    {/* Teamspaces Section */}
                    <TeamspaceList searchQuery={searchQuery} />

                    {/* Member Management + Delete Teamspace */}
                    <div className="mt-12 flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2">
                            <MemberManagement />
                        </div>
                        <div className="w-full md:w-1/2">
                            <DeleteTeamspaceButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

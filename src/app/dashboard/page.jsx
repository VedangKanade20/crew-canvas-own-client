// app/dashboard/page.js
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
        <div className="flex bg-black min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 text-white">
                <div className="w-[100%] mx-auto mt-[5%] pl-[20%]">
                    {/* Welcome + Search */}
                    <DashboardHeader
                        user={user}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    {/* Quick Actions (Create / Join / Templates) */}
                    <div className="grid grid-cols-3 gap-8 mb-10">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                            <div className="text-purple-500 text-lg mb-3">
                                Create Team Space
                            </div>
                            <p className="text-gray-400 text-sm mb-5">
                                Start a new collaborative workspace
                            </p>
                            <CreateTeamspaceForm />
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

                    {/* Teamspaces Section */}
                    <TeamspaceList searchQuery={searchQuery} />

                    {/* Member Management + Delete Teamspace (can be conditionally shown) */}
                    <div className="mt-10 flex gap-8">
                        <div className="w-[45%]">
                            <MemberManagement />
                        </div>
                        <div className="w-[45%]">
                            <DeleteTeamspaceButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

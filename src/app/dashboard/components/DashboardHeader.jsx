"use client";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardHeader({ searchQuery, setSearchQuery }) {
    const { user } = useAuth();
    return (
        <div className="mb-10 w-[100%] mx-auto mt-[5%] pl-[20%]">
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-800 text-white p-3 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                    + New Space
                </button>
            </div>
        </div>
    );
}

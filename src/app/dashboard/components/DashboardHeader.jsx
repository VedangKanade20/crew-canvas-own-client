"use client";
import { useAuth } from "@/context/AuthContext";

export default function DashboardHeader({ user, searchQuery, setSearchQuery }) {
    return (
        <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                Dashboard
            </h1>
            <p className="text-gray-300 text-lg mb-6">
                Welcome back, {user?.name || "Guest"}
            </p>
            <div className="relative max-w-md">
                <input
                    type="text"
                    placeholder="Search teamspaces..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                </span>
            </div>
        </div>
    );
}

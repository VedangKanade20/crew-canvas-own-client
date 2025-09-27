"use client";
import Link from "next/link";

export default function QuickActions() {
    return (
        <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-purple-500 text-lg mb-3">
                    Create Team Space
                </div>
                <p className="text-gray-400 text-sm mb-5">
                    Start a new collaborative workspace
                </p>
                <Link href="/dashboard/create-team-space">
                    <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full">
                        ➕Create Team Space
                    </button>
                </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-purple-500 text-lg mb-3">
                    Join Team Space
                </div>
                <p className="text-gray-400 text-sm mb-5">
                    Join an existing workspace with a code
                </p>
                <Link href="/dashboard/teamspace/join-team-space">
                    <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full">
                        🎯Join Team Space
                    </button>
                </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-purple-500 text-lg mb-3">
                    View All Teamspaces
                </div>
                <p className="text-gray-400 text-sm mb-5">
                    Browse and explore your teamspaces
                </p>
                <Link href="/dashboard/teamspace">
                    <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full">
                        📂Browse Teamspaces
                    </button>
                </Link>
            </div>
        </div>
    );
}

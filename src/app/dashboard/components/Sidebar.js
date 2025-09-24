"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-950 border-r border-white shadow-lg p-6 flex flex-col fixed h-screen">
            <h2 className="text-2xl font-bold text-white mb-8">Dashboard</h2>

            <nav className="flex-1 space-y-4 text-lg">
                <Link
                    href="/dashboard"
                    className="block text-gray-300 hover:text-purple-400 "
                >
                    🏡 Home
                </Link>
                <Link
                    href="/dashboard/create-teamspace"
                    className="block text-gray-300 hover:text-purple-400"
                >
                    ➕ Create Teamspace
                </Link>
                <Link
                    href="/dashboard/tutorial"
                    className="block text-gray-300 hover:text-purple-400"
                >
                    📝 Tutorial
                </Link>
                <Link
                    href="/dashboard/problem"
                    className="block text-gray-300 hover:text-purple-400"
                >
                    🛠️ Report a Problem
                </Link>

                <div className="mt-8">
                    <h3 className="text-md font-semibold text-gray-500 mb-2">
                        🎯 Your Teamspaces
                    </h3>
                    <ul className="space-y-2">
                        {/* Dummy teamspaces for now → will be hooked with getAllTeamspaces */}
                        <li>
                            <Link
                                href="/teamspace/1"
                                className="text-gray-300 hover:text-purple-400"
                            >
                                Dev Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/teamspace/2"
                                className="text-gray-300 hover:text-purple-400"
                            >
                                Design Crew
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

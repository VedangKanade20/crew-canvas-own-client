"use client";

import Link from "next/link";

export default function TeamspaceCard({ space }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold text-white mb-2">
                {space.teamspaceName}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
                {space.description || "No description provided"}
            </p>
            <p className="text-gray-500 text-xs mb-2">
                Members: {space.members?.length || 0}
            </p>
            <Link
                href={`/teamspaces/${space._id}`}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
                Open →
            </Link>
        </div>
    );
}

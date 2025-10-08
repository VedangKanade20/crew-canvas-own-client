"use client";
import Link from "next/link";

export default function TeamspaceOptions({ teamspaceId }) {
    const options = [
        { name: "Chats", path: `/dashboard/teamspace/${teamspaceId}/chats` },
        {
            name: "Group Call",
            path: `/dashboard/teamspace/${teamspaceId}/call`,
        },
        { name: "Canvas", path: `/dashboard/teamspace/${teamspaceId}/canvas` },
        { name: "Tasks", path: `/dashboard/teamspace/${teamspaceId}/tasks` },
        { name: "Notes", path: `/dashboard/teamspace/${teamspaceId}/notes` },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {options.map((opt) => (
                <Link
                    key={opt.name}
                    href={opt.path}
                    className="bg-gray-800 hover:bg-gray-700 text-center py-4 rounded-xl text-lg font-medium shadow transition"
                >
                    {opt.name}
                </Link>
            ))}
        </div>
    );
}

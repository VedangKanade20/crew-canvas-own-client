"use client";
import Link from "next/link";
import {
    ChatBubbleLeftIcon,
    VideoCameraIcon,
    DocumentTextIcon,
    ClipboardDocumentCheckIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function TeamspaceOptions({ teamspaceId }) {
    const options = [
        {
            name: "Chats",
            path: `/dashboard/teamspace/${teamspaceId}/chats`,
            icon: <ChatBubbleLeftIcon className="w-8 h-8" />,
        },
        {
            name: "Group Call",
            path: `/dashboard/teamspace/${teamspaceId}/call`,
            icon: <VideoCameraIcon className="w-8 h-8" />,
        },
        {
            name: "Canvas",
            path: `/dashboard/teamspace/${teamspaceId}/canvas`,
            icon: <DocumentTextIcon className="w-8 h-8" />,
        },
        {
            name: "Tasks",
            path: `/dashboard/teamspace/${teamspaceId}/tasks`,
            icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
        },
        {
            name: "Notes",
            path: `/dashboard/teamspace/${teamspaceId}/notes`,
            icon: <PencilSquareIcon className="w-8 h-8" />,
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-6">
            {options.map((opt) => (
                <Link
                    key={opt.name}
                    href={opt.path}
                    className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 hover:from-indigo-600 hover:to-purple-600 text-white py-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <div className="mb-2">{opt.icon}</div>
                    <span className="text-lg font-semibold tracking-wide">
                        {opt.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}

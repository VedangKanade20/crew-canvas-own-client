"use client";

import Link from "next/link";

export default function TeamspaceSidebar({ teamspaceId }) {
    return (
        <div className="p-5 space-y-6 g-gradient-to-br from-gray-900 via-gray-950 to-black text-white mt-10 flex-col justify-center   w-60 border-r border-gray-800">
            <h2 className="text-2xl font-semibold text-gray-200 mt-10">
                Teamspace Menu
            </h2>
            <ul className="space-y-4  text-xl ml-3 flex-col">
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}`}
                        className="hover:text-purple-400 "
                    >
                        Overview 📊
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}/chats`}
                        className="hover:text-purple-400"
                    >
                        Chats 💬
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}/tasks`}
                        className="hover:text-purple-400"
                    >
                        Tasks ✅
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}/notes`}
                        className="hover:text-purple-400"
                    >
                        Notes 📝
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}/canvas`}
                        className="hover:text-purple-400"
                    >
                        Canvas 🎨
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/teamspace/${teamspaceId}/call`}
                        className="hover:text-purple-400"
                    >
                        Group Call 📞
                    </Link>
                </li>

                <Link
                    href={`/dashboard`}
                    className="hover:text-purple-400 mt-30"
                >
                    To Dashboard 🏠
                </Link>
            </ul>
        </div>
    );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-black text-white p-6 flex flex-col justify-between border-r border-gray-800">
            <div>
                <nav className="space-y-1">
                    <Link
                        href="/dashboard"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/dashboard"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">🏠</span>
                        <span className="flex-1">Dashboard</span>
                    </Link>
                    <Link
                        href="/all-team-spaces"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/all-team-spaces"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">👥</span>
                        <span className="flex-1">All Team Spaces</span>
                    </Link>
                    <Link
                        href="/new-team-space"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/new-team-space"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">➕</span>
                        <span className="flex-1">New Team Space</span>
                    </Link>
                    <Link
                        href="/settings"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/settings"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">⚙️</span>
                        <span className="flex-1">Settings</span>
                    </Link>
                    <Link
                        href="/help"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/help"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">❓</span>
                        <span className="flex-1">Help & Support</span>
                    </Link>
                    <Link
                        href="/contact"
                        className={`flex items-center p-2 rounded-lg ${
                            pathname === "/contact"
                                ? "bg-gray-800 text-purple-400"
                                : "hover:bg-gray-800"
                        }`}
                    >
                        <span className="mr-3">📞</span>
                        <span className="flex-1">Contact Support</span>
                    </Link>
                </nav>
            </div>
            <div className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Crew-Canvas
                <button
                    onClick={handleLogout}
                    className="mt-4 w-full text-left p-2 rounded-lg hover:bg-gray-800 text-red-400"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

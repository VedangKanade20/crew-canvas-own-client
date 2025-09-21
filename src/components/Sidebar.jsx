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
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900/95 backdrop-blur-md text-white p-6 flex flex-col justify-between border-r border-gray-800/50 shadow-lg">
            <div>
                <div className="mb-8 text-2xl font-bold text-purple-400">
                    Crew-Canvas
                </div>
                <nav className="space-y-2">
                    {[
                        { href: "/dashboard", icon: "🏠", label: "Dashboard" },
                        {
                            href: "/all-team-spaces",
                            icon: "👥",
                            label: "All Team Spaces",
                        },
                        {
                            href: "/new-team-space",
                            icon: "➕",
                            label: "New Team Space",
                        },
                        { href: "/settings", icon: "⚙️", label: "Settings" },
                        { href: "/help", icon: "❓", label: "Help & Support" },
                        {
                            href: "/contact",
                            icon: "📞",
                            label: "Contact Support",
                        },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                                pathname === item.href
                                    ? "bg-gray-800/50 text-purple-400 shadow-md border border-purple-500/50"
                                    : "hover:bg-gray-800/50 hover:text-purple-300 hover:border hover:border-gray-700/50"
                            }`}
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            <span className="flex-1">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="text-gray-500 text-xs">
                <div className="mb-4">
                    © {new Date().getFullYear()} Crew-Canvas
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full text-left p-3 rounded-xl bg-red-600/10 text-red-400 hover:bg-red-600/20 hover:text-red-300 transition-all duration-300 border border-red-500/50"
                >
                    Logout
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export default Sidebar;

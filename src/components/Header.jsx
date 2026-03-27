"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import gsap from "gsap";

const Header = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const headerRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // GSAP Entrance Animation
        if (headerRef.current) {
            gsap.from(headerRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDashboard = pathname?.startsWith("/dashboard");
    const isAuth = pathname === "/login" || pathname === "/signup";

    if (isDashboard || isAuth) return null;

    const handleLogout = async () => {
        setIsDropdownOpen(false);
        try {
            await logout();
            toast.success("Logged out successfully!");
            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
                scrolled
                    ? "bg-[#111113]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            {/* Logo */}
            <div className="flex items-center">
                <Link href={"/"}>
                    <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
                        Crew-Canvas
                    </span>
                </Link>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center gap-4">
                {user ? (
                    // Logged-in state
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 p-1 pr-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                                {user.name
                                    ? user.name.charAt(0).toUpperCase()
                                    : "U"}
                            </div>
                            <span className="text-sm font-medium text-gray-200 group-hover:text-white hidden md:block">
                                {user.name || "User"}
                            </span>
                            <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setIsDropdownOpen(false)}
                                />
                                <div className="absolute right-0 top-full mt-2 w-56 bg-[#1c1c1f] rounded-xl shadow-2xl py-2 z-50 border border-white/10 origin-top-right transition-all duration-200 ease-out transform scale-100 opacity-100">
                                    <div className="px-4 py-3 border-b border-white/5">
                                        <p className="text-sm text-gray-400">
                                            Signed in as
                                        </p>
                                        <p className="text-sm font-medium text-white truncate">
                                            {user.email}
                                        </p>
                                    </div>

                                    <div className="py-2">
                                        <Link
                                            href="/dashboard"
                                            onClick={() =>
                                                setIsDropdownOpen(false)
                                            }
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/profile"
                                            onClick={() =>
                                                setIsDropdownOpen(false)
                                            }
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/settings"
                                            onClick={() =>
                                                setIsDropdownOpen(false)
                                            }
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                                        >
                                            Settings
                                        </Link>
                                    </div>

                                    <div className="border-t border-white/5 py-2">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    // Logged-out state
                    <div className="flex items-center gap-4">
                        <Link href={"/login"}>
                            <button className="text-gray-300 hover:text-white font-medium transition-colors px-4 py-2">
                                Log in
                            </button>
                        </Link>
                        <Link href={"/signup"}>
                            <button className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl px-5 py-2.5 font-semibold transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5">
                                Sign up free
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

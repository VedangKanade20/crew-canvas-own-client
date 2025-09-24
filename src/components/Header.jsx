"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Header = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-[100] w-full flex items-center justify-between px-8 py-2 h-[10%] bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white m-">
            {/* Logo */}
            <div className="flex items-center">
                <Link href={"/"}>
                    <span className="font-semibold text-2xl text-[#a259ff] tracking-[0.5px] [text-shadow:0_0_16px_#a259ff44]">
                        Crew-Canvas
                    </span>
                </Link>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center gap-4">
                {user ? (
                    // Logged-in state
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-2 p-2 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <span className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold">
                                {user.name ? user.name.charAt(0) : "U"}
                            </span>
                            <span className="text-sm font-semibold">
                                {user.name || "User"}
                            </span>
                            <svg
                                className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-700">
                                <Link
                                    href="/dashboard"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                                        Dashboard
                                    </span>
                                </Link>
                                <hr className="border-gray-700 my-2" />
                                <Link
                                    href="/account"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                                        My Account
                                    </span>
                                </Link>
                                <Link
                                    href="/profile"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                                        Profile
                                    </span>
                                </Link>
                                <Link
                                    href="/settings"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
                                        Settings
                                    </span>
                                </Link>
                                <hr className="border-gray-700 my-2" />
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 cursor-pointer"
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Logged-out state
                    <div className="flex items-center gap-4">
                        <Link href={"/login"}>
                            <button className="bg-transparent border border-[#444] text-white rounded-lg px-5 py-2 text-base cursor-pointer mr-2">
                                Log in
                            </button>
                        </Link>
                        <Link href={"/signup"}>
                            <button className="bg-[#a259ff] text-white rounded-lg px-5 py-2 text-base font-semibold cursor-pointer shadow-[0_0_8px_#a259ff55] mr-2">
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

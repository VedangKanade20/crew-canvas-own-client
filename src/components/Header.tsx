"use client";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 z-[100] w-full flex items-center justify-between px-8 py-2 h-16 bg-transparent text-white m-">
            {/* Logo */}
            <div className="flex items-center">
                <Link href={"/"}>
                    <span className="font-semibold text-2xl text-[#a259ff] tracking-[0.5px] [text-shadow:0_0_16px_#a259ff44]">
                        Crew-Canvas
                    </span>
                </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {/* Log in Button */}
                <Link href={"/login"}>
                    <button className="bg-transparent border border-[#444] text-white rounded-lg px-5 py-2 text-base cursor-pointer mr-2">
                        Log in
                    </button>
                </Link>

                {/* Sign up Button */}
                <Link href={"/signup"}>
                    <button className="bg-[#a259ff] text-white rounded-lg px-5 py-2 text-base font-semibold cursor-pointer shadow-[0_0_8px_#a259ff55] mr-2">
                        Sign up free
                    </button>
                </Link>

                {/* Document Icon */}
                <span className="flex items-center ml-2 drop-shadow-[0_0_8px_#00ff8877]">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00ff88"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></svg>
                </span>
            </div>
        </header>
    );
};

export default Header;

"use client";

import { FaGithub, FaTwitter } from "react-icons/fa";

interface SocialButtonsProps {
    onSocialAuth: (provider: "github" | "twitter") => void;
    isLoading?: boolean;
}

export default function SocialButtons({
    onSocialAuth,
    isLoading = false,
}: SocialButtonsProps) {
    return (
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400">
                        OR CONTINUE WITH
                    </span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                    onClick={() => onSocialAuth("github")}
                    disabled={isLoading}
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                    <FaGithub className="w-5 h-5 mr-2" />
                    GitHub
                </button>
                <button
                    onClick={() => onSocialAuth("twitter")}
                    disabled={isLoading}
                    className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                    <FaTwitter className="w-5 h-5 mr-2" />
                    Twitter
                </button>
            </div>
        </div>
    );
}

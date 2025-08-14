/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn, validateEmail, type SignInFormData } from "@/lib/auth";

interface SignInFormProps {
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

export default function SignInForm({ onSuccess, onError }: SignInFormProps) {
    const [email, setEmail] = useState("admin003@example.com");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [localError, setLocalError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLocalError("");

        // Client-side validation
        if (!validateEmail(email)) {
            const errorMsg = "Please enter a valid email address";
            setLocalError(errorMsg);
            onError?.(errorMsg);
            return;
        }

        if (password.length < 6) {
            const errorMsg = "Password must be at least 6 characters";
            setLocalError(errorMsg);
            onError?.(errorMsg);
            return;
        }

        setIsLoading(true);

        try {
            const response = await signIn({ email, password, rememberMe });

            if (response.success) {
                onSuccess?.();
            }
        } catch (error: any) {
            const errorMsg =
                error.message || "Sign in failed. Please try again.";
            setLocalError(errorMsg);
            onError?.(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="admin003@example.com"
                    required
                    disabled={isLoading}
                />
            </div>

            <div>
                <div className="flex justify-between items-center mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-300"
                    >
                        Password
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-sm text-purple-400 hover:text-purple-300 transition duration-200"
                    >
                        Forgot password?
                    </Link>
                </div>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="••••••"
                    required
                    disabled={isLoading}
                />
            </div>

            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 bg-gray-700 rounded"
                    disabled={isLoading}
                />
                <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-300"
                >
                    Remember me for 30 days
                </label>
            </div>

            {localError && (
                <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg">
                    <p className="text-red-300 text-sm">{localError}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-500 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                {isLoading ? "Signing In..." : "Sign In"}
            </button>
        </form>
    );
}

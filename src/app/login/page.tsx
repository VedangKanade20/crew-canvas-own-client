"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
    const [email, setEmail] = useState("admin003@example.com");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Handle sign in logic here
            console.log("Sign in attempt:", { email, password, rememberMe });

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Redirect to dashboard or home page
            // router.push('/dashboard');
        } catch (error) {
            console.error("Sign in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSocialAuth = (provider: string) => {
        console.log(`${provider} authentication`);
        // Implement social authentication logic
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full">
                <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Welcome back
                        </h1>
                        <p className="text-gray-400">
                            Sign in to your CollabSpace account
                        </p>
                    </div>

                    {/* Form */}
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
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-500 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    {/* Social Login */}
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
                                onClick={() => handleSocialAuth("GitHub")}
                                disabled={isLoading}
                                className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                            >
                                <FaGithub className="w-5 h-5 mr-2" />
                                GitHub
                            </button>
                            <button
                                onClick={() => handleSocialAuth("Twitter")}
                                disabled={isLoading}
                                className="w-full inline-flex justify-center items-center px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                            >
                                <FaTwitter className="w-5 h-5 mr-2" />
                                Twitter
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-400">
                            Dont have an account?{" "}
                            <Link
                                href="/signup"
                                className="text-purple-400 hover:text-purple-300 font-medium transition duration-200"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Demo Notice */}
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-300 mb-1">
                            Just click Sign In to continue:
                        </p>
                        <p className="text-sm text-gray-400">
                            No authentication required - this is a demo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

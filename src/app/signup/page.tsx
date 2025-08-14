"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function SignUpPage() {
    const [fullName, setFullName] = useState("John Doe");
    const [email, setEmail] = useState("name@example.com");
    const [password, setPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreeToTerms) {
            alert("Please agree to the Terms of Service and Privacy Policy");
            return;
        }

        setIsLoading(true);

        try {
            // Handle sign up logic here
            console.log("Sign up attempt:", {
                fullName,
                email,
                password,
                agreeToTerms,
            });

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Redirect to dashboard or verification page
            // router.push('/verify-email');
        } catch (error) {
            console.error("Sign up error:", error);
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
                            Create an account
                        </h1>
                        <p className="text-gray-400">
                            Join CollabSpace and start collaborating
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                                placeholder="John Doe"
                                required
                                disabled={isLoading}
                            />
                        </div>

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
                                placeholder="name@example.com"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                                placeholder="••••••••"
                                required
                                minLength={8}
                                disabled={isLoading}
                            />
                            <p className="mt-1 text-sm text-gray-400">
                                Must be at least 8 characters long
                            </p>
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                checked={agreeToTerms}
                                onChange={(e) =>
                                    setAgreeToTerms(e.target.checked)
                                }
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 bg-gray-700 rounded mt-0.5"
                                required
                                disabled={isLoading}
                            />
                            <label
                                htmlFor="agreeToTerms"
                                className="ml-2 block text-sm text-gray-300"
                            >
                                I agree to the{" "}
                                <Link
                                    href="/terms"
                                    className="text-purple-400 hover:text-purple-300 transition duration-200"
                                >
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy"
                                    className="text-purple-400 hover:text-purple-300 transition duration-200"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreeToTerms || isLoading}
                            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            {isLoading
                                ? "Creating Account..."
                                : "Create account"}
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

                    {/* Sign In Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-400">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-purple-400 hover:text-purple-300 font-medium transition duration-200"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Demo Notice */}
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-300 mb-1">
                            Just click Create account to continue:
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

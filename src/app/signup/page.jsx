"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { AuthProvider } from "@/context/AuthContext";

function SignupForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agreeToTerms) {
            toast.error(
                "You must agree to the Terms of Service and Privacy Policy"
            );
            return;
        }

        setIsLoading(true);

        try {
            const response = await api.post("api/auth/signup", {
                name: fullName, // The backend expects a 'name' field
                email,
                password,
            });
            setUser(response.data.user);
            toast.success(
                "Account created successfully! Redirecting to dashboard..."
            );
            router.push("/dashboard");
        } catch (error) {
            toast.error("Sign up failed. Please try again.");
            console.error("Sign up error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
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
                        {isLoading ? "Creating Account..." : "Create account"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
            <AuthProvider>
                <SignupForm />
            </AuthProvider>
        </div>
    );
}

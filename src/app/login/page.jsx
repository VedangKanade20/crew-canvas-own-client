"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post("api/auth/login", { email, password });
            setUser(response.data.user);
            toast.success("Login successful!");
            router.push("/dashboard");
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
            console.error("Sign in error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md w-full">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Welcome back
                    </h1>
                    <p className="text-gray-400">
                        Sign in to your CollabSpace account
                    </p>
                </div>
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
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                            placeholder="admin003@example.com"
                            required
                            disabled={loading}
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
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                            placeholder="••••••"
                            required
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-500 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-purple-400 hover:text-purple-300 font-medium transition duration-200"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
            <AuthProvider>
                <LoginForm />
            </AuthProvider>
        </div>
    );
}

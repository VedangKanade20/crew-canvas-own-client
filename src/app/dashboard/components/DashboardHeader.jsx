"use client";
import { useAuth } from "@/context/AuthContext";

export default function DashboardHeader() {
    const { user } = useAuth();

    return (
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-purple-500 mb-4">
                Dashboard
            </h1>
            <p className="text-gray-400 text-base mb-6">
                Welcome back, {user?.name || "Guest"}
            </p>
        </div>
    );
}

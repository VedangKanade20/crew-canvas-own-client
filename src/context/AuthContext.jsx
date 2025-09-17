"use client";

import { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchUser = async () => {
        try {
            const { data } = await api.get("/api/auth/me");
            setUser(data?.user);
            console.log("FetchUser Success", data);
        } catch (error) {
            setUser(null);
            console.log("FetchUser Error", error);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await api.post("/api/auth/logout");
            setUser(null); // Clear the user from the context state
            router.push("/login"); // Redirect to the login page
        } catch (error) {
            console.error("Logout failed:", error);
            // Even if the API call fails, we should clear the local user state
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const value = { user, loading, setUser, logout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

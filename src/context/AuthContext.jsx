"use client";

import { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const { data } = await api.get("api/auth/protected");
            setUser(data?.user);
        } catch (error) {
            setUser(null);
            console.log("FetchUser Error", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const value = { user, loading, setUser };

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

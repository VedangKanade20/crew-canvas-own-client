"use client";

import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function AppProvider({ children }) {
    return (
        <AuthProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
        </AuthProvider>
    );
}

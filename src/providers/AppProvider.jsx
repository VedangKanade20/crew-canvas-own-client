"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function AppProvider({ children }) {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith("/dashboard");
    const isAuth = pathname === "/login" || pathname === "/signup";

    const shouldShowLayout = !isDashboard && !isAuth;

    return (
        <AuthProvider>
            {shouldShowLayout && <Header />}
            {children}
            {shouldShowLayout && <Footer />}
            <Toaster position="top-right" />
        </AuthProvider>
    );
}

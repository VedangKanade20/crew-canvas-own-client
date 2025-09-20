"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex bg-black min-h-screen">
            <Sidebar />
            <div className="flex-1 p-8 text-white">{children}</div>
        </div>
    );
}

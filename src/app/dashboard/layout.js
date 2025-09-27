// src/app/dashboard/layout.js
"use client";

import DashboardProvider from "./DashboardProvider";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <DashboardProvider>
            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-2 bg-gray-950 ">
                    {children}
                </main>
            </div>
        </DashboardProvider>
    );
}

"use client";

import { useParams } from "next/navigation";
import DashboardProvider from "./DashboardProvider";
import Sidebar from "./components/Sidebar";
import TeamspaceSidebar from "./teamspace/components/TeamspaceSidebar"; // Adjust the path based on your structure

export default function DashboardLayout({ children }) {
    const params = useParams();

    return (
        <DashboardProvider>
            <div className="flex h-screen">
                {/* Sidebar - Conditional rendering based on route */}
                {params?.id ? (
                    <TeamspaceSidebar teamspaceId={params.id} />
                ) : (
                    <Sidebar />
                )}

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-2 bg-gray-950">
                    {children}
                </main>
            </div>
        </DashboardProvider>
    );
}

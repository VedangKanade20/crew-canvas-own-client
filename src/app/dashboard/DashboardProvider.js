// src/app/dashboard/DashboardProvider.js
"use client";

import React from "react";

// import ChatProvider from "@/providers/ChatProvider";
// import CanvasProvider from "@/providers/CanvasProvider";
import { CanvasProvider } from "@/providers/CanvasProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import { TeamspaceProvider } from "@/providers/TeamspaceProvider";

export default function DashboardProvider({ children }) {
    return (
        <TeamspaceProvider>
            <ChatProvider>
                <CanvasProvider>{children}</CanvasProvider>
            </ChatProvider>
        </TeamspaceProvider>
    );
}

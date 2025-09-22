// src/app/dashboard/DashboardProvider.js
"use client";

import React from "react";
import TeamspaceProvider from "./providers/TeamspaceProvider";
import ChatProvider from "./providers/ChatProvider";
import CanvasProvider from "./providers/CanvasProvider";

export default function DashboardProvider({ children }) {
    return (
        <TeamspaceProvider>
            <ChatProvider>
                <CanvasProvider>{children}</CanvasProvider>
            </ChatProvider>
        </TeamspaceProvider>
    );
}

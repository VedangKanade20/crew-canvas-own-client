// src/app/dashboard/DashboardProvider.js
"use client";

import React from "react";
import TeamspaceProvider from "./providers/TeamspaceProvider";
import TaskProvider from "./providers/TaskProvider";
import NotesProvider from "./providers/NotesProvider";
import ChatProvider from "./providers/ChatProvider";
import CanvasProvider from "./providers/CanvasProvider";

/**
 * DashboardProvider composes granular providers so any component under /dashboard
 * can access teamspace, task, notes, chat and canvas contexts.
 */
export default function DashboardProvider({ children }) {
    return (
        <TeamspaceProvider>
            <TaskProvider>
                <NotesProvider>
                    <ChatProvider>
                        <CanvasProvider>{children}</CanvasProvider>
                    </ChatProvider>
                </NotesProvider>
            </TaskProvider>
        </TeamspaceProvider>
    );
}

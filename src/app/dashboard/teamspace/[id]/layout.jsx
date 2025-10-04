"use client";

import { useParams } from "next/navigation";
import { TeamspaceProvider } from "@/providers/TeamspaceProvider";
import { ChatProvider } from "@/providers/ChatProvider";
import { CanvasProvider } from "@/providers/CanvasProvider";
import { NotesProvider } from "@/providers/NotesProvider";
import { TasksProvider } from "@/providers/TaskProvider";

export default function TeamspaceLayout({ children }) {
    const { id } = useParams(); // current teamspace id

    return (
        <TeamspaceProvider teamspaceId={id}>
            <ChatProvider teamspaceId={id}>
                <CanvasProvider teamspaceId={id}>
                    <NotesProvider teamspaceId={id}>
                        <TasksProvider teamspaceId={id}>
                            <div className="flex min-h-screen bg-gray-900 text-white">
                                {/* Main Content */}
                                <main className="flex-1 p-8 mt-10">
                                    {children}
                                </main>
                            </div>
                        </TasksProvider>
                    </NotesProvider>
                </CanvasProvider>
            </ChatProvider>
        </TeamspaceProvider>
    );
}

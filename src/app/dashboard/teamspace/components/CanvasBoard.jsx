"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import io from "socket.io-client";
import debounce from "lodash.debounce";
import { useGetCanvas, useUpdateCanvas } from "@/hooks/useCanvas";
import toast from "react-hot-toast";
import "@excalidraw/excalidraw/dist/excalidraw.min.css";

const Excalidraw = dynamic(
    () => import("@excalidraw/excalidraw").then((m) => m.Excalidraw),
    { ssr: false }
);

// Function to scale down scene elements

export default function CanvasBoard({ teamspaceId, userId }) {
    const excalidrawRef = useRef(null);
    const socketRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    const { data, isLoading } = useGetCanvas(teamspaceId);
    const updateCanvasMutation = useUpdateCanvas(teamspaceId);

    // 🎯 Initialize socket once per teamspace and clean up properly
    useEffect(() => {
        if (!teamspaceId) return;

        const socketClient = io(process.env.NEXT_PUBLIC_API_URL || "/", {
            withCredentials: true,
            transports: ["websocket"],
        });

        socketRef.current = socketClient;
        socketClient.emit("canvas_join", { teamspaceId, userId });

        socketClient.on("canvas_update", (payload) => {
            if (!payload || payload.sender === userId) return;
            if (excalidrawRef.current && payload.scene) {
                excalidrawRef.current.updateScene(payload.scene);
            }
        });

        socketClient.on("connect_error", (err) => {
            console.error("Canvas socket connection error:", err);
            toast.error("Unable to connect to canvas server.");
        });

        return () => {
            socketClient.emit("canvas_leave", { teamspaceId, userId });
            socketClient.off("canvas_update");
            socketClient.off("connect_error");
            socketClient.disconnect();
            socketRef.current = null;
        };
    }, [teamspaceId, userId]);

    // 🧩 Load initial data from backend
    useEffect(() => {
        if (!isLoading && data) {
            const scene = data?.canvas?.canvasData ||
                data?.canvasData ||
                data?.scene || { elements: [], appState: {} };
            if (excalidrawRef.current && scene) {
                excalidrawRef.current.updateScene(scene);
            }
            setIsReady(true);
        }
    }, [isLoading, data]);

    // 🕒 Debounced save (5s after last edit)
    const debouncedSave = useRef(
        debounce(async (scene) => {
            try {
                await updateCanvasMutation.mutateAsync(scene);
                toast.success("Canvas saved", { id: "canvas-save" });
            } catch (err) {
                toast.error("Failed to save canvas");
                console.error("Save error:", err);
            }
        }, 5000)
    ).current;

    // 🧠 Detect changes & broadcast
    const onChange = useCallback(
        (elements, state) => {
            const scene = { elements, appState: state };

            if (socketRef.current && teamspaceId) {
                socketRef.current.emit("canvas_update", {
                    teamspaceId,
                    scene,
                    sender: userId,
                });
            }

            debouncedSave(scene);
        },
        [debouncedSave, teamspaceId, userId]
    );

    // 💾 Manual save (button)
    const handleManualSave = async () => {
        if (!excalidrawRef.current) return;

        const elements =
            typeof excalidrawRef.current.getSceneElements === "function"
                ? excalidrawRef.current.getSceneElements()
                : [];
        const appState =
            typeof excalidrawRef.current.getAppState === "function"
                ? excalidrawRef.current.getAppState()
                : {};

        const scene = { elements, appState };
        await updateCanvasMutation.mutateAsync(scene);
        toast.success("Canvas manually saved");
    };

    return (
        <div className="w-[calc(100%-32px)] h-[80vh] bg-gray-900 rounded-lg p-3">
            <div className="flex items-center justify-between mb-3">
                <div className="text-white font-semibold text-lg">
                    🎨 Canvas — {teamspaceId}
                </div>
                <button
                    onClick={handleManualSave}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 transition rounded text-white text-sm"
                >
                    Save
                </button>
            </div>

            <div className="border border-gray-700 rounded h-[calc(100%-56px)] overflow-auto">
                {isReady ? (
                    <Excalidraw
                        ref={excalidrawRef}
                        onChange={(elements, appState) =>
                            onChange(elements, appState)
                        }
                        initialData={
                            data?.canvas?.canvasData ||
                            data?.canvasData ||
                            data?.scene ||
                            null
                        }
                        UIOptions={{
                            canvasActions: {
                                loadScene: true,
                                saveAsImage: true,
                                export: { saveFileToDisk: true },
                                clearCanvas: true,
                            },
                        }}
                    />
                ) : (
                    <div className="text-gray-400 text-center mt-10">
                        Loading canvas...
                    </div>
                )}
            </div>
        </div>
    );
}

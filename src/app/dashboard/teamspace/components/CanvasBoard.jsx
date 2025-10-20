"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import io from "socket.io-client";
import debounce from "lodash.debounce";
import { useGetCanvas, useUpdateCanvas } from "@/hooks/useCanvas";
import toast from "react-hot-toast";

const Excalidraw = dynamic(
    () => import("@excalidraw/excalidraw").then((m) => m.Excalidraw),
    { ssr: false }
);

// ⚡ Keep socket outside so it doesn't reinit on each render
let socket;

// Function to scale down scene elements
const scaleScene = (scene, scaleFactor = 0.3) => {
    if (!scene || !scene.elements) return scene;
    return {
        ...scene,
        elements: scene.elements.map((element) => ({
            ...element,
            x: element.x * scaleFactor,
            y: element.y * scaleFactor,
            width: element.width ? element.width * scaleFactor : undefined,
            height: element.height ? element.height * scaleFactor : undefined,
            points: element.points
                ? element.points.map((point) => [
                      point[0] * scaleFactor,
                      point[1] * scaleFactor,
                  ])
                : undefined,
        })),
    };
};

export default function CanvasBoard({ teamspaceId, userId }) {
    const excalidrawRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    const { data, isLoading } = useGetCanvas(teamspaceId);
    const updateCanvasMutation = useUpdateCanvas(teamspaceId);

    // 🎯 Initialize socket once
    useEffect(() => {
        if (!teamspaceId) return;
        if (!socket) {
            socket = io(process.env.NEXT_PUBLIC_API_URL, {
                withCredentials: true,
            });
        }

        socket.emit("canvas_join", { teamspaceId, userId });

        socket.on("canvas_update", (payload) => {
            if (!payload || payload.sender === userId) return;
            const scene = scaleScene(payload.scene); // Scale incoming scene
            if (excalidrawRef.current && scene) {
                excalidrawRef.current.updateScene(scene);
            }
        });

        return () => {
            socket.off("canvas_update");
            socket.emit("canvas_leave", { teamspaceId, userId });
        };
    }, [teamspaceId, userId]);

    // 🧩 Load initial data from backend
    useEffect(() => {
        if (!isLoading && data) {
            const scene =
                data?.canvas?.canvasData ||
                data?.canvasData ||
                data?.scene ||
                null;
            const scaledScene = scene ? scaleScene(scene) : null; // Scale initial scene
            if (scaledScene && excalidrawRef.current) {
                excalidrawRef.current.updateScene(scaledScene);
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
            const scaledScene = scaleScene(scene); // Scale before broadcasting and saving

            if (socket && teamspaceId) {
                socket.emit("canvas_update", {
                    teamspaceId,
                    scene: scaledScene,
                    sender: userId,
                });
            }

            debouncedSave(scaledScene);
        },
        [debouncedSave, teamspaceId, userId]
    );

    // 💾 Manual save (button)
    const handleManualSave = async () => {
        if (!excalidrawRef.current) return;
        const scene = excalidrawRef.current.getSceneElements
            ? {
                  elements: excalidrawRef.current.getSceneElements(),
                  appState: {},
              }
            : null;
        const scaledScene = scene ? scaleScene(scene) : null;
        if (scaledScene) {
            await updateCanvasMutation.mutateAsync(scaledScene);
            toast.success("Canvas manually saved");
        }
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

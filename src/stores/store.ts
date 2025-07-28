import { create } from "zustand";

interface CanvasState {
    tool: string;
    setTool: (tool: string) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
    tool: "pen",
    setTool: (tool) => set({ tool }),
}));

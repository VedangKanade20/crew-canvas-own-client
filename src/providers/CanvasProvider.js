// // src/app/dashboard/providers/CanvasProvider.js
// "use client";
// import React, { createContext, useContext } from "react";

// const CanvasContext = createContext(null);

// export default function CanvasProvider({ children }) {
//     const value = {
//         // canvas state and operations
//         canvasByTeamId: {},
//         updateCanvas: async () => {},
//     };

//     return (
//         <CanvasContext.Provider value={value}>
//             {children}
//         </CanvasContext.Provider>
//     );
// }

// export const useCanvasContext = () => {
//     const ctx = useContext(CanvasContext);
//     if (!ctx)
//         throw new Error("useCanvasContext must be used within CanvasProvider");
//     return ctx;
// };

"use client";
import { createContext, useContext, useState } from "react";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
    const [canvasData, setCanvasData] = useState(null);
    return (
        <CanvasContext.Provider value={{ canvasData, setCanvasData }}>
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvasContext = () => useContext(CanvasContext);

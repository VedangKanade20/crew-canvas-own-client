"use client";
import { createContext, useContext, useState } from "react";

const CallContext = createContext(null);

export const CallProvider = ({ children }) => {
    const [callState, setCallState] = useState("idle"); // idle | in-call | ringing
    return (
        <CallContext.Provider value={{ callState, setCallState }}>
            {children}
        </CallContext.Provider>
    );
};

export const useCallContext = () => useContext(CallContext);

"use client";
import { createContext, useContext, useState, useMemo } from "react";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";

const TeamspaceContext = createContext(null);

export const TeamspaceProvider = ({ teamspaceId, children }) => {
    const { data, isLoading, error } = useGetTeamspaceById(teamspaceId);
    const [activeTab, setActiveTab] = useState("overview");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // ✅ Normalize whatever shape API gives
    const teamspace = useMemo(() => {
        if (!data) return null;
        return data.currentTeamspace || data.teamspace || data;
    }, [data]);

    return (
        <TeamspaceContext.Provider
            value={{
                teamspace,
                isLoading,
                error,
                activeTab,
                setActiveTab,
                isSidebarOpen,
                setIsSidebarOpen,
            }}
        >
            {children}
        </TeamspaceContext.Provider>
    );
};

export const useTeamspaceContext = () => useContext(TeamspaceContext);

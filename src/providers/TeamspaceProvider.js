"use client";
import { createContext, useContext, useState } from "react";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";

const TeamspaceContext = createContext(null);

export const TeamspaceProvider = ({ teamspaceId, children }) => {
    const {
        data: teamspace,
        isLoading,
        error,
    } = useGetTeamspaceById(teamspaceId);
    const [activeTab, setActiveTab] = useState("overview");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

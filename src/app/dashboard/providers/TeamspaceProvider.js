"use client";
import React, { createContext, useContext } from "react";
import {
    useGetAllTeamspaces,
    useCreateTeamspace,
    useAddMember,
    useRemoveMember,
    useDeleteTeamspace,
} from "@/hooks/useTeamspace"; // singular

const TeamspaceContext = createContext(null);

export default function TeamspaceProvider({ children }) {
    const query = useGetAllTeamspaces(); // { data, isLoading, isError... }
    const createTeamspace = useCreateTeamspace();
    const addMember = useAddMember();
    const removeMember = useRemoveMember();
    const deleteTeamspace = useDeleteTeamspace();

    return (
        <TeamspaceContext.Provider
            value={{
                query,
                createTeamspace,
                addMember,
                removeMember,
                deleteTeamspace,
            }}
        >
            {children}
        </TeamspaceContext.Provider>
    );
}

export function useTeamspaceContext() {
    return useContext(TeamspaceContext);
}

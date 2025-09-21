import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createTeamspace,
    addMember,
    removeMember,
    deleteTeamspace,
    getTeamspaceById,
    getAllTeamspaces,
} from "@/services/teamspaceService";

// Create Teamspace
export function useCreateTeamspace() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (teamspaceName) => createTeamspace(teamspaceName),
        onSuccess: () => {
            queryClient.invalidateQueries(["teamspaces"]);
        },
    });
}

export function useGetAllTeamspaces() {
    return useQuery({
        queryKey: ["teamspaces"],
        queryFn: getAllTeamspaces,
    });
}

// Get Teamspace by ID
export function useGetTeamspaceById(teamspaceId) {
    return useQuery({
        queryKey: ["teamspace", teamspaceId],
        queryFn: () => getTeamspaceById(teamspaceId),
        enabled: !!teamspaceId,
    });
}

// Add Member
export function useAddMember(teamspaceId) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (memberId) => addMember(teamspaceId, memberId),
        onSuccess: () => {
            queryClient.invalidateQueries(["teamspace", teamspaceId]);
        },
    });
}

// Remove Member
export function useRemoveMember(teamspaceId) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (memberId) => removeMember(teamspaceId, memberId),
        onSuccess: () => {
            queryClient.invalidateQueries(["teamspace", teamspaceId]);
        },
    });
}

// Delete Teamspace
export function useDeleteTeamspace() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (teamspaceId) => deleteTeamspace(teamspaceId),
        onSuccess: () => {
            queryClient.invalidateQueries(["teamspaces"]);
        },
    });
}

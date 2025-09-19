import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createTeamspace,
    getTeamspace,
    addMember,
    removeMember,
    deleteTeamspace,
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

// Get Teamspace by ID
export function useGetTeamspace(teamspaceId) {
    return useQuery({
        queryKey: ["teamspace", teamspaceId],
        queryFn: () => getTeamspace(teamspaceId),
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

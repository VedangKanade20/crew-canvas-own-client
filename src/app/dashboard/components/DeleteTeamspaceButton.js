"use client";
import { useDeleteTeamspace } from "@/hooks/useTeamspace";

export default function DeleteTeamspaceButton({ teamspaceId }) {
    const deleteMutation = useDeleteTeamspace();

    return (
        <button
            onClick={() => deleteMutation.mutate(teamspaceId)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
        >
            {deleteMutation.isLoading ? "Deleting..." : "Delete Teamspace"}
        </button>
    );
}

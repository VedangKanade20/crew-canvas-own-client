"use client";
import { useDeleteTeamspace } from "@/hooks/useTeamspace";

export default function DeleteTeamspaceButton({ teamspaceId }) {
    const deleteMutation = useDeleteTeamspace();

    return (
        <button
            onClick={() => deleteMutation.mutate(teamspaceId)}
            className="relative w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg text-white transition-all duration-300 overflow-hidden group"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            {deleteMutation.isLoading ? "Deleting..." : "Delete Teamspace"}
        </button>
    );
}

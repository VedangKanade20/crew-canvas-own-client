// app/dashboard/components/DeleteTeamspaceButton.js
"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export default function DeleteTeamspaceButton({ teamspaceId }) {
    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: () =>
            api.delete(`/teamspaces/delete-teamspace/${teamspaceId}`),
        onSuccess: () => queryClient.invalidateQueries(["teamspaces"]),
    });

    return (
        <button
            onClick={() => deleteMutation.mutate()}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
        >
            Delete
        </button>
    );
}

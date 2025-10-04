"use client";

import { useParams } from "next/navigation";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";

export default function TeamspaceOverview() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamspaceById(id);

    if (isLoading) return <p className="text-gray-400">Loading...</p>;
    if (isError)
        return <p className="text-red-400">Error fetching teamspace.</p>;

    const teamspace = data?.teamspace || data; // adjust depending on API

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-purple-400 mb-4">
                {teamspace?.teamspaceName || "Untitled Teamspace"}
            </h2>
            <p className="text-gray-400 mb-2">
                Owner: {teamspace?.OwnerId?.username || "Unknown"}
            </p>
            <p className="text-gray-400 mb-2">
                Members: {teamspace?.members?.length || 0}
            </p>
            <p className="text-gray-500 text-sm">
                Created: {new Date(teamspace?.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
}

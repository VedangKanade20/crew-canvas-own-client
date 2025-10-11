"use client";
import { useParams } from "next/navigation";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";

export default function MembersPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamspaceById(id);

    if (isLoading) return <p className="text-gray-400">Loading members...</p>;
    if (isError) return <p className="text-red-400">Failed to load members.</p>;

    const teamspace = data?.currentTeamspace || data;

    return (
        <div className="p-8 mt-10 text-white">
            <h1 className="text-3xl font-semibold mb-6">
                Members of {teamspace.teamspaceName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamspace.members.map((m, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
                    >
                        <h2 className="text-xl font-semibold">
                            {m.user?.name || "Unnamed User"}
                        </h2>
                        <p className="text-gray-400">Role: {m.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

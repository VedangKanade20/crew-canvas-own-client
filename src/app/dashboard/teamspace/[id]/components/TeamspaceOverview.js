"use client";

import { useParams } from "next/navigation";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";
import TeamspaceHeader from "./TeamspaceHeader";
import MemberCard from "./MemberCard";

export default function TeamspaceOverview() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamspaceById(id);

    if (isLoading)
        return <p className="text-gray-400 p-6">Loading teamspace...</p>;
    if (isError)
        return <p className="text-red-500 p-6">Failed to load teamspace.</p>;

    // Data shape depends on your API, so normalize it:
    const teamspace = data?.teamspace || data;

    return (
        <div>
            <TeamspaceHeader teamspace={teamspace} />

            <h2 className="text-xl font-semibold mb-4">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamspace.members?.map((m) => (
                    <MemberCard
                        key={m._id}
                        username={m.user?.username || "Unnamed"}
                        role={m.role}
                    />
                ))}
            </div>
        </div>
    );
}

"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";
import TeamspaceHeader from "./TeamspaceHeader";
import MemberCard from "./MemberCard";

export default function TeamspaceOverview() {
    const { id } = useParams();

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["teamspace", id],
    //     queryFn: () => useGetTeamspaceById(id),
    // });

    const { data, isLoading, isError } = useGetTeamspaceById(id);

    if (isLoading) return <p className="text-gray-400">Loading teamspace...</p>;
    if (isError)
        return <p className="text-red-400">Failed to load teamspace.</p>;

    const teamspace = data?.teamspace || {};

    return (
        <div>
            <TeamspaceHeader name={teamspace.teamspaceName} />

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

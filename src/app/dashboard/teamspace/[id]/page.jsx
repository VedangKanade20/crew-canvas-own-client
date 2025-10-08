"use client";
import { useParams } from "next/navigation";
import { useGetTeamspaceById } from "@/hooks/useTeamspace";
import TeamspaceHeader from "./components/TeamspaceHeader";
import TeamspaceMembers from "./components/TeamspaceMembers";
import TeamspaceActions from "./components/TeamspaceActions";
import TeamspaceOptions from "./components/TeamspaceOptions";

export default function TeamspaceOverviewPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTeamspaceById(id);

    if (isLoading) return <p className="text-gray-400">Loading teamspace...</p>;
    if (isError) return <p className="text-red-400">Error loading teamspace</p>;

    const teamspace = data?.teamspace || data; // normalize response

    return (
        <div className="p-6 mt-10 text-white">
            <TeamspaceHeader teamspace={teamspace} />
            <TeamspaceMembers teamspace={teamspace} />
            <TeamspaceActions teamspace={teamspace} />
            <hr className="my-6 border-gray-700" />
            <TeamspaceOptions teamspaceId={id} />
        </div>
    );
}

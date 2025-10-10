"use client";

import { useTeamspaceContext } from "@/providers/TeamspaceProvider";
import TeamspaceHeader from "./components/TeamspaceHeader";
import TeamspaceMembers from "./components/TeamspaceMembers";
import TeamspaceActions from "./components/TeamspaceActions";
import TeamspaceOptions from "./components/TeamspaceOptions";

export default function TeamspaceOverviewPage() {
    const { teamspace, isLoading, error } = useTeamspaceContext();

    if (isLoading) return <p className="text-gray-400">Loading teamspace...</p>;
    if (error) return <p className="text-red-400">Error loading teamspace</p>;
    if (!teamspace)
        return <p className="text-gray-400">No teamspace data available</p>;

    return (
        <div className="p-6 mt-10 text-white">
            <TeamspaceHeader teamspace={teamspace} />
            <TeamspaceMembers teamspace={teamspace} />
            <TeamspaceActions teamspace={teamspace} />
            <hr className="my-6 border-gray-700" />
            <TeamspaceOptions teamspaceId={teamspace._id} />
        </div>
    );
}

"use client";

import {
    useCreateTeamspace,
    useGetTeamspace,
    useAddMember,
} from "@/hooks/useTeamspace";
import { useState } from "react";

export default function TeamspaceDashboard() {
    const [teamspaceId, setTeamspaceId] = useState("");
    const [memberId, setMemberId] = useState("");

    const { data: teamspace, isLoading } = useGetTeamspace(teamspaceId);
    const createTeamspace = useCreateTeamspace();
    const addMember = useAddMember(teamspaceId);

    return (
        <div>
            {/* Create Teamspace */}
            <button
                onClick={() => createTeamspace.mutate("My First Teamspace")}
                disabled={createTeamspace.isLoading}
            >
                {createTeamspace.isLoading ? "Creating..." : "Create Teamspace"}
            </button>

            {/* Get Teamspace */}
            <input
                value={teamspaceId}
                onChange={(e) => setTeamspaceId(e.target.value)}
                placeholder="Enter Teamspace ID"
            />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <pre>{JSON.stringify(teamspace, null, 2)}</pre>
            )}

            {/* Add Member */}
            <input
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                placeholder="Enter Member ID"
            />
            <button onClick={() => addMember.mutate(memberId)}>
                Add Member
            </button>
        </div>
    );
}

// app/dashboard/components/TeamspaceList.js
"use client";
import { useTeamspaces } from "@/hooks/useTeamspaces";

export default function TeamspaceList() {
    const { data: teamspaces, isLoading, error } = useTeamspaces();

    if (isLoading) return <p>Loading teamspaces...</p>;
    if (error) return <p>Error loading teamspaces</p>;

    return (
        <div className="w-[45%] mx-auto space-y-4">
            {teamspaces?.map((team) => (
                <div
                    key={team._id}
                    className="p-4 bg-gray-800 rounded-xl shadow-md text-white"
                >
                    <h2 className="font-bold">{team.name}</h2>
                    <p className="text-sm text-gray-400">
                        Members: {team.members.length}
                    </p>
                </div>
            ))}
        </div>
    );
}

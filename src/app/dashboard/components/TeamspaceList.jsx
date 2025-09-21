"use client";
import { useGetAllTeamspaces } from "@/hooks/useTeamspace";

export default function TeamspaceList({ searchQuery }) {
    const { data, isLoading, isError } = useGetAllTeamspaces();

    if (isLoading)
        return <p className="text-gray-400">Loading teamspaces...</p>;
    if (isError)
        return <p className="text-red-400">Error fetching teamspaces</p>;

    // normalize: if API returns { teamspaces: [...] } use that, else []
    const teamspaces = Array.isArray(data) ? data : data?.teamspaces || [];

    const filteredData = teamspaces.filter((space) =>
        space.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-4 w-full max-w-2xl">
            {filteredData.map((space) => (
                <div
                    key={space._id}
                    className="relative bg-gray-800/50 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-semibold text-purple-400">
                        {space.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{space.description}</p>
                </div>
            ))}
        </div>
    );
}

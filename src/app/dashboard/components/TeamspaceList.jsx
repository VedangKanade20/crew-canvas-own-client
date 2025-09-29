"use client";
import Link from "next/link";
import { useGetAllTeamspaces } from "@/hooks/useTeamspace";

export default function TeamspaceList({ searchQuery }) {
    const { data: teamspaces = [], isLoading, isError } = useGetAllTeamspaces();
    console.log("Teamspaces:", teamspaces);

    if (isLoading) {
        return <p className="text-gray-400">Loading teamspaces...</p>;
    }
    if (isError) {
        return <p className="text-red-400">Error fetching teamspaces</p>;
    }

    const filteredData = teamspaces.filter((space) =>
        (space.teamspaceName ?? "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    console.log("Filtered data:", filteredData);
    return (
        <div className="space-y-4 w-screen max-w-2xl ml-64 flex-col items-center">
            {filteredData.map((space) => (
                <Link
                    href={`dashboard/teamspace/${space._id}`}
                    className="block text-white p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                    <div
                        key={space.OwnerId}
                        className="relative bg-gray-800/50 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="text-xl font-semibold text-purple-400">
                            {space.teamspaceName}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {space.createdAt}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

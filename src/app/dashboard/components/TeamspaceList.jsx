"use client";
import { useGetTeamspace } from "@/hooks/useTeamspace";

export default function TeamspaceList() {
    const { data, isLoading, isError } = useGetTeamspace();

    if (isLoading) return <p>Loading teamspaces...</p>;
    if (isError)
        return <p className="text-red-500">Error fetching teamspaces</p>;

    return (
        <div className="space-y-4 w-[45%]">
            {data?.map((space) => (
                <div
                    key={space._id}
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                    <h3 className="text-xl font-semibold text-purple-400">
                        {space.name}
                    </h3>
                    <p className="text-gray-400">{space.description}</p>
                </div>
            ))}
        </div>
    );
}

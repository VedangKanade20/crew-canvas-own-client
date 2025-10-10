"use client";

export default function TeamspaceMembers({ teamspace }) {
    return (
        <div className="my-4">
            <h2 className="text-xl font-medium mb-2">Members</h2>
            <div className="flex flex-wrap gap-3">
                {teamspace?.members?.map((m) => (
                    <div
                        key={m?.user?._id}
                        className="bg-gray-800 px-3 py-2 rounded-lg shadow text-sm"
                    >
                        {m?.user?.name || "User"}{" "}
                        <span className="text-gray-500">({m?.role})</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

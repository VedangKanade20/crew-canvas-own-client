"use client";

export default function TeamspaceActions({ teamspace }) {
    const isAdminOrOwner = teamspace.members?.some(
        (m) => m.role === "admin" || m.role === "owner"
    );
    console.log(isAdminOrOwner);
    return (
        <div className="flex gap-4 my-4">
            {isAdminOrOwner && (
                <>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                        Add Member
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                        Delete Teamspace
                    </button>
                </>
            )}
            <button className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg">
                Leave Teamspace
            </button>
        </div>
    );
}

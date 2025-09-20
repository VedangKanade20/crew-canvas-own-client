"use client";
import { useAddMember, useRemoveMember } from "@/hooks/useTeamspace";
import { useState } from "react";

export default function MemberManagement({ teamspaceId }) {
    const [memberId, setMemberId] = useState("");
    const addMember = useAddMember();
    const removeMember = useRemoveMember();

    return (
        <div className="bg-gray-800 p-4 rounded-lg w-[45%]">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
                Manage Members
            </h3>
            <div className="flex space-x-2 mb-3">
                <input
                    type="text"
                    placeholder="Enter member ID"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="p-2 flex-1 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <button
                    onClick={() => {
                        if (!memberId.trim()) return;
                        addMember.mutate({ teamspaceId, memberId });
                        setMemberId("");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg"
                >
                    {addMember.isLoading ? "Adding..." : "Add"}
                </button>
            </div>
            <button
                onClick={() => {
                    if (!memberId.trim()) return;
                    removeMember.mutate({ teamspaceId, memberId });
                    setMemberId("");
                }}
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg"
            >
                {removeMember.isLoading ? "Removing..." : "Remove"}
            </button>
        </div>
    );
}

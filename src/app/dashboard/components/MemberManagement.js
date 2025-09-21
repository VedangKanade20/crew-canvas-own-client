"use client";
import { useAddMember, useRemoveMember } from "@/hooks/useTeamspace";
import { useState } from "react";

export default function MemberManagement({ teamspaceId }) {
    const [memberId, setMemberId] = useState("");
    const addMember = useAddMember();
    const removeMember = useRemoveMember();

    return (
        <div className="relative bg-gray-800/50 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
                Manage Members
            </h3>
            <div className="flex space-x-3 mb-4">
                <input
                    type="text"
                    placeholder="Enter member ID"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="p-3 flex-1 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
                <button
                    onClick={() => {
                        if (!memberId.trim()) return;
                        addMember.mutate({ teamspaceId, memberId });
                        setMemberId("");
                    }}
                    className="relative bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-all duration-300 overflow-hidden group"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    {addMember.isLoading ? "Adding..." : "Add"}
                </button>
            </div>
            <button
                onClick={() => {
                    if (!memberId.trim()) return;
                    removeMember.mutate({ teamspaceId, memberId });
                    setMemberId("");
                }}
                className="relative bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-all duration-300 overflow-hidden group"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {removeMember.isLoading ? "Removing..." : "Remove"}
            </button>
        </div>
    );
}

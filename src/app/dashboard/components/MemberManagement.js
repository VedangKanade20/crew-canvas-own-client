// app/dashboard/components/MemberManagement.js
"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export default function MemberManagement({ teamspaceId }) {
    const [memberId, setMemberId] = useState("");
    const queryClient = useQueryClient();

    const addMember = useMutation({
        mutationFn: (id) =>
            api.put(`/teamspaces/${teamspaceId}/add-member`, { memberId: id }),
        onSuccess: () => {
            queryClient.invalidateQueries(["teamspaces"]);
            setMemberId("");
        },
    });

    return (
        <div className="w-[45%] mx-auto my-6">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addMember.mutate(memberId);
                }}
                className="flex space-x-2"
            >
                <input
                    type="text"
                    placeholder="User ID to add"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="p-2 w-[70%] rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import {
    useAddMember,
    useRemoveMember,
    useDeleteTeamspace,
} from "@/hooks/useTeamspace";
// import Link from "next/link";

export default function TeamspaceActions({ teamspace }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [memberId, setMemberId] = useState("");

    const { mutate: addMember, isLoading: adding } = useAddMember(
        teamspace._id
    );
    const { mutate: removeMember, isLoading: removing } = useRemoveMember(
        teamspace._id
    );
    const { mutate: deleteTeamspace } = useDeleteTeamspace(teamspace._id);

    const handleAddMember = () => {
        if (!memberId) return toast.error("Please enter a user ID");
        addMember(memberId, {
            onSuccess: () => {
                toast.success("Member added successfully!");
                setMemberId("");
                setShowAddModal(false);
            },
            onError: () => toast.error("Failed to add member"),
        });
    };

    const handleRemoveMember = () => {
        if (!memberId) return toast.error("Please enter a user ID");
        removeMember(memberId, {
            onSuccess: () => {
                toast.success("Member removed successfully!");
                setMemberId("");
                setShowAddModal(false);
            },
            onError: () => toast.error("Failed to Remove member"),
        });
    };

    const isAdminOrOwner = teamspace.members?.some(
        (m) => m.role === "admin" || m.role === "owner"
    );

    return (
        <div className="flex flex-col gap-4 my-4">
            {isAdminOrOwner && (
                <div className="flex gap-4">
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                        Add Member
                    </button>

                    <button
                        onClick={() => setShowRemoveModal(true)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                        Remove Member
                    </button>
                    <button
                        onClick={() => {
                            deleteTeamspace(undefined, {
                                onSuccess: () =>
                                    toast.success("Teamspace deleted!"),
                                onError: () => toast.error("Failed to delete"),
                            });
                        }}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                        Delete Teamspace
                    </button>
                </div>
            )}

            {/* Add Member Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">
                            Add Member
                        </h2>
                        <input
                            type="text"
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            placeholder="Enter user ID"
                            className="w-full p-2 rounded bg-gray-700 mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="bg-gray-600 px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddMember}
                                disabled={adding}
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                            >
                                {adding ? "Adding..." : "Add"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Remove Member Modal */}
            {showRemoveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">
                            Add Member
                        </h2>
                        <input
                            type="text"
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            placeholder="Enter user ID"
                            className="w-full p-2 rounded bg-gray-700 mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setShowRemoveModal(false)}
                                className="bg-gray-600 px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleRemoveMember}
                                disabled={removing}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                            >
                                {removing ? "Removing..." : "Remove"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg w-60">
                Leave Teamspace
            </button>
            {/* <Link
                href={`/dashboard/teamspace/${teamspace}/members`}
                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg w-60 text-center"
            >
                Teamspace Settings
            </Link> */}

            <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg w-60">
                View All Members
            </button>
        </div>
    );
}

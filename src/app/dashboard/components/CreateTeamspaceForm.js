"use client";
import { useState } from "react";
import { useCreateTeamspace } from "@/hooks/useTeamspaces";

export default function CreateTeamspaceForm() {
    const [name, setName] = useState("");
    const createMutation = useCreateTeamspace();

    return (
        <div className="w-[45%] mx-auto my-6">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createMutation.mutate({ name });
                }}
                className="flex space-x-2"
            >
                <input
                    type="text"
                    placeholder="New teamspace name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 w-[70%] rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                >
                    Create
                </button>
            </form>
        </div>
    );
}

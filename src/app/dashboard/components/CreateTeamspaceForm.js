"use client";
import { useState } from "react";
import { useCreateTeamspace } from "@/hooks/useTeamspace";

export default function CreateTeamspaceForm() {
    const [name, setName] = useState("");
    const createMutation = useCreateTeamspace();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!name.trim()) return;
                createMutation.mutate({ name });
                setName("");
            }}
            className="flex space-x-2 w-[45%] my-6"
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
                {createMutation.isLoading ? "Creating..." : "Create"}
            </button>
        </form>
    );
}

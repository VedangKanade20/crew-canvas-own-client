"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCreateTeamspace } from "@/hooks/useTeamspace";
import { toast } from "react-hot-toast";

export default function CreateTeamspacePage() {
    const [name, setName] = useState("");
    const router = useRouter();
    const { mutate: create, isLoading, isSuccess } = useCreateTeamspace();

    useEffect(() => {
        if (isSuccess) {
            router.push("/dashboard");
            toast.success("Teamspace created successfully!"); // Assuming you have a toast notification system
        }
    }, [isSuccess, router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        create({ teamspaceName: name });
        setName("");
    };

    return (
        <div className="p-10 text-white mt-[10%] ml-64 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">
                ➕ Create a New Teamspace
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md"
            >
                <label className="block mb-3">
                    <span className="text-gray-300">Teamspace Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white"
                        placeholder="Enter teamspace name..."
                    />
                </label>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-4 w-full bg-purple-500 hover:bg-purple-600 px-5 py-2 rounded-lg"
                >
                    {isLoading ? "Creating..." : "Create"}
                </button>
            </form>
            {isSuccess && (
                <p className="text-green-400 mt-4">
                    ✅ Teamspace created successfully!
                </p>
            )}
        </div>
    );
}

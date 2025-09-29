"use client";
//add reactvtoast on joining and redirect to dashboard on success
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function JoinTeamspacePage() {
    const [code, setCode] = useState("");
    const router = useRouter();

    const handleJoin = (e) => {
        e.preventDefault();
        toast.success(`🎯 Joining teamspace with code: ${code}`);
        setCode("");
        router.push("/dashboard");
    };

    return (
        <div className="p-10 text-white mt-[10%] ml-64 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">🎯 Join a Teamspace</h1>
            <form
                onSubmit={handleJoin}
                className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md"
            >
                <label className="block mb-3">
                    <span className="text-gray-300">Invite Code</span>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white"
                        placeholder="Paste invite code..."
                    />
                </label>
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
                >
                    Join
                </button>
            </form>
        </div>
    );
}

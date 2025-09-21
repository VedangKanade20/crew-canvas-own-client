// src/app/dashboard/_components/CreateTeamspaceForm.js
"use client";
import { useState } from "react";
import { useTeamspaceContext } from "../providers/TeamspaceProvider";

export default function CreateTeamspaceForm() {
  const [name, setName] = useState("");
  const { createTeamspace, createStatus } = useTeamspaceContext();

  const submitting = createStatus?.createStatus?.isLoading || false; // optional

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    try {
      await createTeamspace({ teamspaceName: name });
      setName("");
      // show toast success
    } catch (err) {
      // show toast error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        placeholder="New teamspace name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded-md bg-gray-900 text-white border border-gray-700"
      />
      <button disabled={submitting} className="bg-purple-500 px-4 py-2 rounded-md">
        {submitting ? "Creating..." : "Create"}
      </button>
    </form>
  );
}

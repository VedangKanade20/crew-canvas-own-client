"use client";
import React, { useState } from "react";

export default function TaskInputBox({ onCreate }) {
    const [title, setTitle] = useState("");
    const [assignee, setAssignee] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !assignee) return;
        onCreate({ title, assignee, dueDate });
        setTitle("");
        setAssignee("");
        setDueDate("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 mb-4 bg-gray-800 p-4 rounded-lg"
        >
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                className="flex-1 px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Assign to (user ID or email)"
                className="flex-1 px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="px-3 py-2 rounded bg-gray-700 text-white"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
                Assign
            </button>
        </form>
    );
}

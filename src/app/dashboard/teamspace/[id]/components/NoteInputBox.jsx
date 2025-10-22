// components/notes/NoteInputBox.jsx
"use client";
import React, { useState } from "react";

export default function NoteInputBox({ onAdd }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onAdd({ title: title.trim(), content: content.trim() });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title"
                className="p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note content..."
                rows={4}
                className="p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Note
                </button>
            </div>
        </form>
    );
}

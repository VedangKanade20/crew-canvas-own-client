"use client";
import React, { useState, useEffect } from "react";

export default function EditNoteModal({ note, isOpen, onClose, onSave }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // Load note details when modal opens
    useEffect(() => {
        if (note) {
            setTitle(note.title || "");
            setContent(note.content || "");
        }
    }, [note]);

    if (!isOpen) return null;

    const handleSave = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onSave({ ...note, title, content });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-[400px] p-5 relative">
                <h2 className="text-lg font-bold mb-3 text-gray-800">
                    Edit Note
                </h2>
                <form onSubmit={handleSave} className="flex flex-col gap-3">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Note title"
                        className="border border-gray-300 rounded p-2"
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Note content..."
                        rows={4}
                        className="border border-gray-300 rounded p-2"
                    />
                    <div className="flex justify-end gap-2 mt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

"use client";
import React from "react";

export default function NoteItem({ note, onDelete, onOpen }) {
    return (
        <div className="flex justify-between items-start bg-gray-100 text-black p-3 rounded hover:bg-gray-200 transition-colors duration-150">
            {/* Clickable area for title + content */}
            <div className="flex-1 cursor-pointer" onClick={() => onOpen(note)}>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {note.title || "Untitled Note"}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-3">
                    {note.content || "No content available."}
                </p>
            </div>

            {/* Delete button */}
            <button
                onClick={() => onDelete(note._id)}
                className="ml-3 px-3 py-1 text-red-600 hover:bg-red-100 rounded transition"
            >
                Delete
            </button>
        </div>
    );
}

// components/notes/NotesList.jsx
"use client";
import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ notes, onDelete, onOpen }) {
    if (!notes?.length)
        return <p className="text-gray-400 italic">No notes yet.</p>;

    return (
        <div className="space-y-2">
            {notes.map((note) => (
                <NoteItem
                    key={note._id}
                    note={note}
                    onDelete={onDelete}
                    onOpen={onOpen}
                />
            ))}
        </div>
    );
}

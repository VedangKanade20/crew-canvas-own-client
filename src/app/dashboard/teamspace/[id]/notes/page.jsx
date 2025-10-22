// components/notes/NotesSection.jsx
"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import {
    useListNotes,
    useCreateNote,
    useDeleteNote,
    useUpdateNote,
} from "@/hooks/useNotes";
import NoteInputBox from "../components/NoteInputBox";
import NotesList from "../components/NotesList";
import EditNoteModal from "../components/EditNoteModal";

export default function NotesSection() {
    // IMPORTANT: use the actual route param name. Replace 'teamspaceId' with your dynamic segment name if different.
    const params = useParams();
    // Check both possible keys to be safe:
    const teamspaceId = params.teamspaceId || params.id;
    // debug:
    // console.log("NotesSection teamspaceId:", teamspaceId);

    const { data: notes = [], isLoading } = useListNotes(teamspaceId);
    const createNote = useCreateNote(teamspaceId);
    const deleteNote = useDeleteNote(teamspaceId);
    const updateNote = useUpdateNote(teamspaceId);

    const [selectedNote, setSelectedNote] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddNote = async ({ title, content }) => {
        try {
            // debug:
            // console.log("Creating note", { teamspaceId, title, content });
            await createNote.mutateAsync({ title, content });
            toast.success("Note created");
        } catch (err) {
            console.error("Create note failed:", err?.response?.data || err);
            toast.error("Failed to create note");
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            await deleteNote.mutateAsync(id);
            toast.success("Deleted note");
        } catch (err) {
            console.error(err);
            toast.error("Delete failed");
        }
    };

    const handleOpenNote = (note) => {
        setSelectedNote(note);
        setIsModalOpen(true);
    };

    const handleSaveNote = async (updated) => {
        try {
            await updateNote.mutateAsync({
                noteId: updated._id,
                data: { title: updated.title, content: updated.content },
            });
            toast.success("Note updated");
            setIsModalOpen(false);
        } catch (err) {
            console.error("Update failed:", err);
            toast.error("Update failed");
        }
    };

    if (isLoading) return <p>Loading notes...</p>;

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Teamspace Notes</h2>

            <NoteInputBox onAdd={handleAddNote} />

            <NotesList
                notes={notes}
                onDelete={handleDeleteNote}
                onOpen={handleOpenNote}
            />

            <EditNoteModal
                isOpen={isModalOpen}
                note={selectedNote}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveNote}
            />
        </div>
    );
}

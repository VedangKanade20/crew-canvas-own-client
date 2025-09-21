// src/app/dashboard/providers/NotesProvider.js
"use client";
import React, { createContext, useContext } from "react";

const NotesContext = createContext(null);

export default function NotesProvider({ children }) {
    const value = {
        notes: [],
        notesLoading: false,
        createNote: async () => {},
        updateNote: async () => {},
        deleteNote: async () => {},
    };

    return (
        <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
    );
}

export const useNotesContext = () => {
    const ctx = useContext(NotesContext);
    if (!ctx)
        throw new Error("useNotesContext must be used within NotesProvider");
    return ctx;
};

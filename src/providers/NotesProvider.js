"use client";
import { createContext, useContext, useState } from "react";

const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotesContext = () => useContext(NotesContext);

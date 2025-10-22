// hooks/useNotes.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createNote,
    getNoteById,
    listNotesByTeamspace,
    updateNote,
    deleteNote,
} from "@/services/noteService";

export const useListNotes = (teamspaceId) => {
    return useQuery({
        queryKey: ["notes", teamspaceId],
        queryFn: () =>
            listNotesByTeamspace(teamspaceId).then((res) => res.data.notes),
        enabled: !!teamspaceId,
    });
};

export const useNote = (teamspaceId, noteId) => {
    return useQuery({
        queryKey: ["note", noteId],
        queryFn: () =>
            getNoteById(teamspaceId, noteId).then((res) => res.data.note),
        enabled: !!noteId && !!teamspaceId,
    });
};

export const useCreateNote = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data) => createNote(teamspaceId, data),
        onSuccess: () => qc.invalidateQueries(["notes", teamspaceId]),
    });
};

export const useUpdateNote = (teamspaceId, noteId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data) => updateNote(teamspaceId, noteId, data),
        onSuccess: () => {
            qc.invalidateQueries(["notes", teamspaceId]);
            qc.invalidateQueries(["note", noteId]);
        },
    });
};

export const useDeleteNote = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (noteId) => deleteNote(teamspaceId, noteId),
        onSuccess: () => qc.invalidateQueries(["notes", teamspaceId]),
    });
};

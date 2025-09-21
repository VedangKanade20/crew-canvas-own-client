import api from "./api"; // preconfigured axios instance

export const createNote = (teamspaceId, data) =>
    api.post(`api/teamspace/${teamspaceId}/create-note`, data);

export const getNoteById = (teamspaceId, noteId) =>
    api.get(`api/teamspace/${teamspaceId}/note/${noteId}`);

export const listNotesByTeamspace = (teamspaceId) =>
    api.get(`api/teamspace/${teamspaceId}/notes`);

export const updateNote = (teamspaceId, noteId, data) =>
    api.put(`api/teamspace/${teamspaceId}/update-note/${noteId}`, data);

export const deleteNote = (teamspaceId, noteId) =>
    api.delete(`api/teamspace/${teamspaceId}/delete-note/${noteId}`);

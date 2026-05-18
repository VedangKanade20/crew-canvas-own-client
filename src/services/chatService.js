// services/chatService.js
import api from "@/lib/api";

export const getChatByTeamspace = (teamspaceId) =>
    api.get(`/api/teamspace/${teamspaceId}/get-chat`);

export const addMessageToChat = (teamspaceId, content) =>
    api.put(`/api/teamspace/${teamspaceId}/add-message`, { content });

export const deleteMessage = (teamspaceId, messageId) =>
    api.put(`/api/teamspace/${teamspaceId}/delete-message/${messageId}`);

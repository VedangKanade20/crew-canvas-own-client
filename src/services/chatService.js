// services/chatService.js
import api from "@/lib/axios";

export const getChatByTeamspace = (teamspaceId) =>
    api.get(`api/teamspaces/${teamspaceId}/chat`);

export const addMessageToChat = (teamspaceId, content) =>
    api.post(`api/teamspaces/${teamspaceId}/chat`, { content });

export const deleteMessage = (teamspaceId, messageId) =>
    api.delete(`api/teamspaces/${teamspaceId}/chat/${messageId}`);


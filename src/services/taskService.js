// services/taskService.js
import api from "./api"; // preconfigured axios instance

export const createTask = (teamspaceId, data) =>
    api.post(`api/teamspaces/${teamspaceId}/tasks`, data);

export const getTasksFromTeamspace = (teamspaceId) =>
    api.get(`api/teamspaces/${teamspaceId}/tasks`);

export const getTask = (teamspaceId, taskId) =>
    api.get(`api/teamspaces/${teamspaceId}/tasks/${taskId}`);

export const updateTask = (teamspaceId, taskId, data) =>
    api.put(`api/teamspaces/${teamspaceId}/tasks/${taskId}`, data);

export const deleteTask = (teamspaceId, taskId) =>
    api.delete(`api/teamspaces/${teamspaceId}/tasks/${taskId}`);

export const toggleTaskStatus = (teamspaceId, taskId) =>
    api.patch(`api/teamspaces/${teamspaceId}/tasks/${taskId}/status`);

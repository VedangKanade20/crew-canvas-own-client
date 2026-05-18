// services/taskService.js
import api from "@/lib/api";

export const createTask = (teamspaceId, data) =>
    api.post(`/api/teamspace/${teamspaceId}/create-task`, data);

export const getTasksFromTeamspace = (teamspaceId) =>
    api.get(`/api/teamspace/${teamspaceId}/tasks`);

export const getTask = (teamspaceId, taskId) =>
    api.get(`/api/teamspace/${teamspaceId}/task/${taskId}`);

export const updateTask = (teamspaceId, taskId, data) =>
    api.put(`/api/teamspace/${teamspaceId}/task/${taskId}`, data);

export const deleteTask = (teamspaceId, taskId) =>
    api.delete(`/api/teamspace/${teamspaceId}/task/${taskId}`);

export const toggleTaskStatus = (teamspaceId, taskId) =>
    api.put(`/api/teamspace/${teamspaceId}/task/${taskId}/toggle-status`);

import api from "./api"; // preconfigured axios instance

export const getCanvasByTeamspace = (teamspaceId) =>
    api.get(`api/teamspace/${teamspaceId}/canvas`);

export const updateCanvasData = (teamspaceId, data) =>
    api.put(`api/teamspace/${teamspaceId}/canvas`, data);

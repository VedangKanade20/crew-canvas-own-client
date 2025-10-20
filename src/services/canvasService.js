// preconfigured axios instance

import api from "@/lib/api";

export const getCanvasByTeamspace = async (teamspaceId) => {
    const res = await api.get(`/api/teamspace/${teamspaceId}/canvas`);
    // normalize: backend may return { canvas } or { canvas: { canvasData: ... } }
    return res.data;
};

export const updateCanvasData = async (teamspaceId, data) => {
    // backend expects { data } or full body; adjust if needed
    const res = await api.put(`/api/teamspace/${teamspaceId}/canvas`, { data });
    return res.data;
};

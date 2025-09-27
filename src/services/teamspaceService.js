import api from "@/lib/api";

export const getAllTeamspaces = async () => {
    const res = await api.get("api/teamspace/get-allTeamspaces");
    return res.data.teamspaces;
};

export const getTeamspaceById = async (teamspaceId) => {
    const res = await api.get(`api/teamspace/getTeamspace/${teamspaceId}`);
    return res.data;
};

export const createTeamspace = async (newTeam) => {
    const res = await api.post("api/teamspace/create-teamspace", newTeam);
    return res.data;
};

export const addMember = async ({ teamspaceId, memberId }) => {
    const res = await api.put(`api/teamspace/${teamspaceId}/add-member`, {
        memberId,
    });
    return res.data;
};

export const removeMember = async ({ teamspaceId, memberId }) => {
    const res = await api.put(`api/teamspace/${teamspaceId}/remove-member`, {
        memberId,
    });
    return res.data;
};

export const deleteTeamspace = async (teamspaceId) => {
    const res = await api.delete(
        `api/teamspace/delete-teamspace/${teamspaceId}`
    );
    return res.data;
};

// import api from "@/lib/api";

// // CREATE Teamspace
// export async function createTeamspace(teamspaceName) {
//     const { data } = await api.post("/api/teamspace/create-teamspace", {
//         teamspaceName,
//     });
//     return data;
// }

// // GET Teamspace (by id)
// export async function getTeamspace(teamspaceId) {
//     const { data } = await api.get(`/api/teamspace/${teamspaceId}`);
//     return data.currentTeamspace;
// }

// // ADD Member
// export async function addMember(teamspaceId, memberId) {
//     const { data } = await api.put(`/api/teamspace/${teamspaceId}/add-member`, {
//         memberId,
//     });
//     return data;
// }

// // REMOVE Member
// export async function removeMember(teamspaceId, memberId) {
//     const { data } = await api.put(`/api/teamspace/${teamspaceId}/remove-member`, {
//         memberId,
//     });
//     return data;
// }

// // DELETE Teamspace
// export async function deleteTeamspace(teamspaceId) {
//     const { data } = await api.delete(`/api/teamspace/delete-teamspace/${teamspaceId}`);
//     return data;
// }

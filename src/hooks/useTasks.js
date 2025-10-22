import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createTask,
    getTasksFromTeamspace,
    updateTask,
    deleteTask,
    toggleTaskStatus,
} from "@/services/taskService";

export const useTasks = (teamspaceId) =>
    useQuery({
        queryKey: ["tasks", teamspaceId],
        queryFn: () =>
            getTasksFromTeamspace(teamspaceId).then((res) => res.data.tasks),
        enabled: !!teamspaceId,
    });

export const useCreateTask = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data) => createTask(teamspaceId, data),
        onSuccess: () => qc.invalidateQueries(["tasks", teamspaceId]),
    });
};

export const useToggleTaskStatus = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (taskId) => toggleTaskStatus(teamspaceId, taskId),
        onSuccess: () => qc.invalidateQueries(["tasks", teamspaceId]),
    });
};

export const useDeleteTask = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (taskId) => deleteTask(teamspaceId, taskId),
        onSuccess: () => qc.invalidateQueries(["tasks", teamspaceId]),
    });
};

// hooks/useTasks.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as taskService from "@/services/taskService";

export const useTasks = (teamspaceId) => {
    return useQuery({
        queryKey: ["tasks", teamspaceId],
        queryFn: () =>
            taskService
                .getTasksFromTeamspace(teamspaceId)
                .then((res) => res.data.tasks),
        enabled: !!teamspaceId, // fetch only if available
    });
};

export const useCreateTask = (teamspaceId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) =>
            taskService.createTask(teamspaceId, data).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(["tasks", teamspaceId]);
        },
    });
};

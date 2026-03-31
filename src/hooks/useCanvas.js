import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getCanvasByTeamspace,
    updateCanvasData,
} from "@/services/canvasService";

export function useGetCanvas(teamspaceId) {
    return useQuery({
        queryKey: ["canvas", teamspaceId],
        queryFn: () => getCanvasByTeamspace(teamspaceId),
        enabled: !!teamspaceId,
        staleTime: 1000 * 60 * 5, // 5 min
    });
}

export function useUpdateCanvas(teamspaceId) {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data) => updateCanvasData(teamspaceId, data),
        onSuccess: () => {
            qc.invalidateQueries(["canvas", teamspaceId]);
        },
    });
}

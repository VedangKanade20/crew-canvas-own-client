// hooks/useChat.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getChatByTeamspace,
    addMessageToChat,
    deleteMessage,
} from "@/services/chatService";

export const useChat = (teamspaceId) => {
    return useQuery({
        queryKey: ["chat", teamspaceId],
        queryFn: () =>
            getChatByTeamspace(teamspaceId).then((res) => res.data.chat),
        enabled: !!teamspaceId,
    });
};

export const useAddMessage = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (content) => addMessageToChat(teamspaceId, content),
        onSuccess: () => qc.invalidateQueries(["chat", teamspaceId]),
    });
};

export const useDeleteMessage = (teamspaceId) => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (messageId) => deleteMessage(teamspaceId, messageId),
        onSuccess: () => qc.invalidateQueries(["chat", teamspaceId]),
    });
};

"use client";
import { useParams } from "next/navigation";
import { useTeamspaceContext } from "@/providers/TeamspaceProvider";
import CanvasBoard from "../../components/CanvasBoard";
import { useAuth } from "@/context/AuthContext";

export default function CanvasPage() {
    const { id } = useParams();
    const { user } = useAuth();
    const { teamspace } = useTeamspaceContext();
    const userId =
        teamspace?.members?.find((m) => m.user?._id === user?._id)?._id ||
        /*auth id*/ null;

    return (
        <div className="p-6">
            <CanvasBoard teamspaceId={id} userId={userId} />
        </div>
    );
}

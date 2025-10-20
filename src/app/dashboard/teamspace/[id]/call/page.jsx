"use client";
import { useParams } from "next/navigation";
import VoiceVideoCall from "../components/VoiceVideoCall";
import { useTeamspaceContext } from "@/providers/TeamspaceProvider";
import { Users, Video, Phone } from "lucide-react";

export default function CallsPage() {
    const { id } = useParams();
    const { teamspace } = useTeamspaceContext();

    const userId = teamspace?.OwnerId?._id || "guest-user";

    return (
        <div className="p-6 mt-10 bg-gray-900 text-white min-h-screen rounded-2xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Video className="w-6 h-6 text-blue-400" />
                        {teamspace?.teamspaceName || "Unnamed Teamspace"}
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Voice/Video Channel — collaborate in real time
                    </p>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>View Participants</span>
                </button>
            </div>

            {/* Video Call Area */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-inner">
                <VoiceVideoCall teamspaceId={id} userId={userId} />
            </div>

            {/* Footer */}
            <div className="flex justify-center gap-6 mt-8">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Join Call
                </button>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Leave Call
                </button>
            </div>
        </div>
    );
}

"use client";
import { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import axios from "axios";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

export default function VoiceVideoCall({ teamspaceId, userId }) {
    const [joined, setJoined] = useState(false);
    const [localTracks, setLocalTracks] = useState([]);
    const [remoteUsers, setRemoteUsers] = useState([]);
    const [appId, setAppId] = useState("");
    const [token, setToken] = useState("");
    const [uid, setUid] = useState(null);

    useEffect(() => {
        async function init() {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/agora/generateToken`,
                { params: { channelName: teamspaceId, uid: userId } }
            );
            setAppId(data.appId);
            setToken(data.token);
            setUid(data.uid);
        }
        init();
    }, [teamspaceId]);

    async function joinCall() {
        if (!token || !appId) return;

        await client.join(appId, teamspaceId, token, uid);

        const [microphoneTrack, cameraTrack] =
            await AgoraRTC.createMicrophoneAndCameraTracks();
        setLocalTracks([microphoneTrack, cameraTrack]);

        const localPlayer = document.getElementById("local-player");
        localPlayer.innerHTML = "";
        cameraTrack.play(localPlayer);

        await client.publish([microphoneTrack, cameraTrack]);

        client.on("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);
            if (mediaType === "video") {
                const remotePlayer = document.getElementById(
                    `remote-player-${user.uid}`
                );
                if (!remotePlayer) {
                    const player = document.createElement("div");
                    player.id = `remote-player-${user.uid}`;
                    player.className =
                        "w-1/2 aspect-video bg-gray-700 rounded-lg";
                    document
                        .getElementById("remote-container")
                        .appendChild(player);
                    user.videoTrack.play(player);
                }
            }
            if (mediaType === "audio") {
                user.audioTrack.play();
            }
        });

        client.on("user-unpublished", (user) => {
            const remotePlayer = document.getElementById(
                `remote-player-${user.uid}`
            );
            if (remotePlayer) remotePlayer.remove();
        });

        setJoined(true);
    }

    async function leaveCall() {
        localTracks.forEach((track) => track.stop() && track.close());
        await client.leave();
        setRemoteUsers([]);
        setJoined(false);
    }

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-2xl">
            <div className="flex gap-4 mb-4">
                {!joined ? (
                    <button
                        onClick={joinCall}
                        className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                        Join Call
                    </button>
                ) : (
                    <button
                        onClick={leaveCall}
                        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                        Leave Call
                    </button>
                )}
            </div>

            <div
                id="local-player"
                className="w-1/2 aspect-video bg-gray-800 rounded-lg mb-4"
            />
            <div
                id="remote-container"
                className="flex flex-wrap gap-4 w-full justify-center"
            ></div>
        </div>
    );
}

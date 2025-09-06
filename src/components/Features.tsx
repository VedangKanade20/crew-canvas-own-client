"use client";

import React, { useState } from "react";

const features = [
    {
        icon: (
            <span className="bg-cyan-900/60 text-cyan-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M16 4l7 24-7-6-7 6 7-24z" />
                </svg>
            </span>
        ),
        title: "Collaborative Canvas",
        description:
            "Draw, sketch, and visualize ideas together in real-time with our Excalidraw-like canvas. Create diagrams, wireframes, and mind maps that update instantly as team members contribute.",
        details:
            "Our collaborative canvas supports multiple drawing tools, shapes, and text elements. Add sticky notes, create connections between ideas, and export your work in various formats. Perfect for brainstorming sessions and visual planning.",
    },
    {
        icon: (
            <span className="bg-green-900/60 text-green-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <rect x="8" y="8" width="16" height="20" rx="2" />
                    <path d="M16 16h4M12 20h8" />
                </svg>
            </span>
        ),
        title: "Smart Notes",
        description:
            "Create and organize notes collaboratively with Notion-like functionality and real-time editing. Build a knowledge base that grows with your team.",
        details:
            "Format your notes with rich text editing, embed images and files, and create nested pages to organize information. Use templates for common note types, and search across all your team's notes instantly.",
    },
    {
        icon: (
            <span className="bg-yellow-900/60 text-yellow-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <rect x="6" y="6" width="20" height="20" rx="3" />
                    <path d="M10 16h8M10 20h6" />
                </svg>
            </span>
        ),
        title: "Task Management",
        description:
            "Assign, track, and complete tasks with your team using our intuitive task management system. Set priorities, deadlines, and dependencies.",
        details:
            "View tasks in multiple formats including lists, boards, and calendars. Set up automated workflows, recurring tasks, and get notifications for upcoming deadlines. Track progress with visual dashboards and reports.",
    },
    {
        icon: (
            <span className="bg-blue-900/60 text-blue-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <rect x="8" y="12" width="16" height="12" rx="2" />
                    <path d="M12 8h8" />
                </svg>
            </span>
        ),
        title: "Team Chat",
        description:
            "Communicate instantly with team members through integrated chat channels and direct messages. Keep conversations organized and searchable.",
        details:
            "Create topic-based channels, share files directly in conversations, and use @mentions to get someone's attention. All messages are searchable and can be bookmarked for later reference.",
    },
    {
        icon: (
            <span className="bg-orange-900/60 text-orange-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="16" cy="16" r="7" />
                    <path d="M16 23v3" />
                    <path d="M16 8v2" />
                </svg>
            </span>
        ),
        title: "Team Spaces",
        description:
            "Create dedicated spaces for different teams and projects with customizable permissions. Keep work organized and focused.",
        details:
            "Control who can view, edit, or manage content in each space. Create templates for new projects, and easily move or copy content between spaces. Get insights into team activity and collaboration patterns.",
    },
    {
        icon: (
            <span className="bg-red-900/60 text-red-400 p-4 rounded-xl text-3xl inline-block">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="16" cy="20" r="4" />
                    <path d="M16 4v8" />
                </svg>
            </span>
        ),
        title: "Voice Calling",
        description:
            "Jump into quick voice calls with teammates without leaving your workflow. Discuss ideas in real-time while collaborating on documents.",
        details:
            "Start voice calls directly from any canvas, note, or chat. Share your screen to walk through ideas, and record important discussions for team members who couldn't attend.",
    },
];

export default function Features() {
    const [selectedFeature, setSelectedFeature] = useState<
        null | (typeof features)[0]
    >(null);

    return (
        <section className="bg-[#111113] text-white py-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">
                    Everything you need to collaborate
                </h2>
                <p className="text-center text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
                    Crew-Canvas combines the best collaboration tools in one
                    seamless platform, helping your team work together more
                    effectively.
                </p>

                <div className="grid gap-12 md:grid-cols-2">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="flex flex-col md:flex-row items-start gap-6 bg-transparent rounded-2xl p-8 shadow-lg shadow-purple-900/30 transition-shadow"
                        >
                            <div>{f.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    {f.title}
                                </h3>
                                <p className="text-gray-300 mb-2">
                                    {f.description}
                                </p>
                                <button
                                    onClick={() => setSelectedFeature(f)}
                                    className="mt-4 px-4 py-2 rounded-lg border border-gray-700 text-gray-200 hover:bg-purple-900/30 transition"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedFeature && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#1c1c1f] p-8 rounded-2xl max-w-lg w-full shadow-xl relative">
                        <button
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                        >
                            ✕
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                            {selectedFeature.icon}
                            <h3 className="text-2xl font-bold text-white">
                                {selectedFeature.title}
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            {selectedFeature.description}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {selectedFeature.details}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

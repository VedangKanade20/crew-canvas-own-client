"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: (
            <span className="bg-cyan-500/10 text-cyan-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                >
                    <path d="M16 4l7 24-7-6-7 6 7-24z" />
                </svg>
            </span>
        ),
        title: "Collaborative Canvas",
        description:
            "Draw, sketch, and visualize ideas together in real-time with our Excalidraw-like canvas. Create diagrams, wireframes, and mind maps.",
        details:
            "Our collaborative canvas supports multiple drawing tools, shapes, and text elements. Add sticky notes, create connections between ideas, and export your work in various formats. Perfect for brainstorming sessions and visual planning.",
        color: "cyan",
    },
    {
        icon: (
            <span className="bg-green-500/10 text-green-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                >
                    <rect x="8" y="8" width="16" height="20" rx="2" />
                    <path d="M16 16h4M12 20h8" />
                </svg>
            </span>
        ),
        title: "Smart Notes",
        description:
            "Create and organize notes collaboratively with Notion-like functionality and real-time editing. Build a knowledge base that grows.",
        details:
            "Format your notes with rich text editing, embed images and files, and create nested pages to organize information. Use templates for common note types, and search across all your team's notes instantly.",
        color: "green",
    },
    {
        icon: (
            <span className="bg-yellow-500/10 text-yellow-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                >
                    <rect x="6" y="6" width="20" height="20" rx="3" />
                    <path d="M10 16h8M10 20h6" />
                </svg>
            </span>
        ),
        title: "Task Management",
        description:
            "Assign, track, and complete tasks with your team using our intuitive task management system. Set priorities and deadlines.",
        details:
            "View tasks in multiple formats including lists, boards, and calendars. Set up automated workflows, recurring tasks, and get notifications for upcoming deadlines. Track progress with visual dashboards and reports.",
        color: "yellow",
    },
    {
        icon: (
            <span className="bg-blue-500/10 text-blue-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(96,165,250,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                >
                    <rect x="8" y="12" width="16" height="12" rx="2" />
                    <path d="M12 8h8" />
                </svg>
            </span>
        ),
        title: "Team Chat",
        description:
            "Communicate instantly with team members through integrated chat channels and direct messages. Keep conversations organized.",
        details:
            "Create topic-based channels, share files directly in conversations, and use @mentions to get someone's attention. All messages are searchable and can be bookmarked for later reference.",
        color: "blue",
    },
    {
        icon: (
            <span className="bg-orange-500/10 text-orange-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(251,146,60,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
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
        color: "orange",
    },
    {
        icon: (
            <span className="bg-red-500/10 text-red-400 p-4 rounded-xl text-3xl inline-block shadow-[0_0_20px_rgba(248,113,113,0.2)]">
                <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                >
                    <circle cx="16" cy="20" r="4" />
                    <path d="M16 4v8" />
                </svg>
            </span>
        ),
        title: "Voice Calling",
        description:
            "Jump into quick voice calls with teammates without leaving your workflow. Discuss ideas in real-time.",
        details:
            "Start voice calls directly from any canvas, note, or chat. Share your screen to walk through ideas, and record important discussions for team members who couldn't attend.",
        color: "red",
    },
];

export default function Features() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(".feature-card", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111113] text-white py-24 px-4 md:px-12 relative overflow-hidden"
        >
            <div className="absolute top-[10%] left-0 w-[35%] h-[35%] rounded-full bg-purple-900/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div ref={titleRef} className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
                        Collaboration features
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Everything your team needs to stay aligned.
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Build richer workflows with an integrated canvas, notes,
                        tasks, chat, and live collaboration tools designed to
                        keep teams moving in sync.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
                    <div className="space-y-6">
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">
                                Why teams choose Crew-Canvas
                            </p>
                            <h3 className="text-3xl font-bold text-white mb-4">
                                A unified workspace for every phase of your
                                project.
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-purple-400" />
                                    <span>
                                        Instant team-wide updates across canvas,
                                        tasks, and chat.
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-pink-400" />
                                    <span>
                                        Structured workspaces with permissions
                                        and clear ownership.
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                                    <span>
                                        Fast onboarding with templates, notes,
                                        and shared context.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                                    Fast setup
                                </p>
                                <p className="mt-3 text-2xl font-bold text-white">
                                    5 minutes
                                </p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                                    Cross-team sync
                                </p>
                                <p className="mt-3 text-2xl font-bold text-white">
                                    Real-time
                                </p>
                            </div>
                        </div>
                    </div>

                    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
                        {features.map((feature) => (
                            <article
                                key={feature.title}
                                className="feature-card rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/20"
                            >
                                <div>{feature.icon}</div>
                                <h3 className="mt-6 text-2xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

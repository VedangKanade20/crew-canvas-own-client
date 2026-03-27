"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const heroRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const previewRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                badgeRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 }
            )
                .fromTo(
                    titleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
                    "-=0.4"
                )
                .fromTo(
                    subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    buttonsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    previewRef.current,
                    { y: 30, opacity: 0, scale: 0.98 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.8 },
                    "-=0.6"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden bg-[#09090c] text-white"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="absolute top-[20%] right-[-10%] w-80 h-80 rounded-full bg-pink-500/10 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center">
                    <div className="max-w-2xl">
                        <div
                            ref={badgeRef}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-100 shadow-sm backdrop-blur"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                            Built for remote-first teams
                        </div>

                        <h1
                            ref={titleRef}
                            className="mt-8 text-5xl md:text-[4.5rem] font-black tracking-tight leading-[0.95] text-white"
                        >
                            Design, organize, and ship
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
                                all in one workspace.
                            </span>
                        </h1>

                        <p
                            ref={subtitleRef}
                            className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-8"
                        >
                            Crew-Canvas combines a collaborative whiteboard,
                            project planning, smart notes, and team voice
                            calling into a single experience that keeps your
                            team aligned and moving faster.
                        </p>

                        <div
                            ref={buttonsRef}
                            className="mt-10 flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/signup">
                                <button className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_80px_rgba(106,41,255,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_90px_rgba(106,41,255,0.2)]">
                                    Start free trial
                                </button>
                            </Link>
                            <Link href="/dashboard">
                                <button className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                                    View demo
                                </button>
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                <p className="text-2xl font-bold text-white">
                                    4.9/5
                                </p>
                                <p className="mt-2 text-slate-400">
                                    User satisfaction
                                </p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                <p className="text-2xl font-bold text-white">
                                    1.2K+
                                </p>
                                <p className="mt-2 text-slate-400">
                                    Teams onboarded
                                </p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                                <p className="text-2xl font-bold text-white">
                                    Realtime
                                </p>
                                <p className="mt-2 text-slate-400">
                                    Collaboration sync
                                </p>
                            </div>
                        </div>
                    </div>

                    <div ref={previewRef} className="relative">
                        <div className="rounded-[2rem] border border-white/10 bg-[#0f0f15]/80 p-6 shadow-2xl shadow-[#0b0b14]/40 backdrop-blur-xl">
                            <div className="mb-5 flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300 border border-white/10">
                                <span className="font-semibold text-white">
                                    Canvas preview
                                </span>
                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                                    Live
                                </span>
                            </div>

                            <div className="grid gap-4">
                                <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-[#111118]/90 p-5">
                                    <div className="flex items-center gap-2 text-xs text-slate-400">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                                        <span className="ml-auto">
                                            Untitled board
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
                                            Empathy map
                                        </span>
                                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                                            Sprint plan
                                        </span>
                                        <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs text-pink-200">
                                            Task flow
                                        </span>
                                    </div>
                                    <div className="h-48 rounded-3xl bg-gradient-to-br from-slate-950 via-[#111119] to-slate-900 p-4 overflow-hidden border border-white/5">
                                        <div className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_30%)] p-4 text-white text-sm overflow-hidden">
                                            <div className="grid gap-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                                        Active canvas
                                                    </span>
                                                    <span className="text-xs text-slate-400">
                                                        5 editors
                                                    </span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="h-3 rounded-full bg-white/10 w-3/4" />
                                                    <div className="h-3 rounded-full bg-white/10 w-2/3" />
                                                    <div className="h-3 rounded-full bg-white/10 w-5/6" />
                                                </div>
                                                <div className="grid gap-3 sm:grid-cols-2">
                                                    <div className="h-24 rounded-3xl bg-white/5 border border-white/10 p-3">
                                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                                            Wireframe
                                                        </p>
                                                        <div className="mt-3 h-10 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
                                                    </div>
                                                    <div className="h-24 rounded-3xl bg-white/5 border border-white/10 p-3">
                                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                                            Sticky note
                                                        </p>
                                                        <div className="mt-3 h-10 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                            Realtime status
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold text-white">
                                            Live
                                        </p>
                                    </div>
                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                                            Connected
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold text-white">
                                            24 team members
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

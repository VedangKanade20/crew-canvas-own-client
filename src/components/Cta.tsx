"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function CTA() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(titleRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(buttonRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex justify-center py-24 bg-[#111113] relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div
                ref={containerRef}
                className="max-w-5xl w-full mx-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1d] via-[#161618] to-black px-8 md:px-16 py-16 text-center shadow-2xl relative z-10 overflow-hidden group"
            >
                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                >
                    Ready to transform <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        how your team works?
                    </span>
                </h2>
                <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of teams already using{" "}
                    <span className="text-white font-semibold">
                        Crew-Canvas
                    </span>{" "}
                    to collaborate more effectively and bring their ideas to
                    life.
                </p>

                <div
                    ref={buttonRef}
                    className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <Link href="/signup">
                        <button className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-white font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
                            Start for free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="rounded-xl border border-gray-700 bg-white/5 px-8 py-4 text-white font-bold text-lg hover:bg-white/10 hover:border-gray-500 transition-all"
                    >
                        Go to Top
                    </button>
                </div>
            </div>
        </section>
    );
}

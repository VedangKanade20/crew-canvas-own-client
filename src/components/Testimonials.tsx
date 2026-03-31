"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Project Lead",
        feedback:
            "Crew-Canvas has transformed how our team works together. It's intuitive, efficient, and keeps everyone on the same page.",
        avatar: "AM",
        color: "bg-purple-600",
    },
    {
        name: "Sara Kapoor",
        role: "UI/UX Designer",
        feedback:
            "The real-time updates are a game changer. I can see changes instantly and coordinate with developers without delays.",
        avatar: "SK",
        color: "bg-pink-600",
    },
    {
        name: "Rohan Sharma",
        role: "Developer",
        feedback:
            "I love the simplicity and speed of Crew-Canvas. It’s perfect for agile teams working on fast-moving projects.",
        avatar: "RS",
        color: "bg-blue-600",
    },
    {
        name: "Priya Nair",
        role: "Marketing Head",
        feedback:
            "It’s never been easier to manage campaigns and track progress. Our productivity has gone up significantly.",
        avatar: "PN",
        color: "bg-cyan-600",
    },
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(".testimonial-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-[#111113] text-white relative"
        >
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Heading */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Empowering Collaboration
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto text-lg">
                        See how teams are using Crew-Canvas to collaborate on
                        projects, competitions, and tasks.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 group"
                        >
                            {/* Avatar */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-xl font-bold shadow-lg`}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Feedback */}
                            <p className="text-gray-300 leading-relaxed text-lg italic">
                                &ldquo;{testimonial.feedback}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

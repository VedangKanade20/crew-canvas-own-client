// components/TestimonialsSection.jsx
import React from "react";

const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Project Lead",
        feedback:
            "Crew-Canvas has transformed how our team works together. It's intuitive, efficient, and keeps everyone on the same page.",
        avatar: "AM",
    },
    {
        name: "Sara Kapoor",
        role: "UI/UX Designer",
        feedback:
            "The real-time updates are a game changer. I can see changes instantly and coordinate with developers without delays.",
        avatar: "SK",
    },
    {
        name: "Rohan Sharma",
        role: "Developer",
        feedback:
            "I love the simplicity and speed of Crew-Canvas. It’s perfect for agile teams working on fast-moving projects.",
        avatar: "RS",
    },
    {
        name: "Priya Nair",
        role: "Marketing Head",
        feedback:
            "It’s never been easier to manage campaigns and track progress. Our productivity has gone up significantly.",
        avatar: "PN",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-[#111113] text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Empowering Collaboration
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                        See how teams are using Crew-Canvas to collaborate on
                        projects, competitions, and tasks.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
                        >
                            {/* Avatar */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-lg font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Feedback */}
                            <p className="text-gray-300">
                                {testimonial.feedback}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

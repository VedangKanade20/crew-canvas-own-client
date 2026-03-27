"use client";

const stats = [
    { label: "Teams onboarded", value: "1.2K+" },
    { label: "Live sessions / week", value: "4.8K" },
    { label: "Tasks tracked", value: "78K+" },
    { label: "Notes created", value: "24K+" },
];

export default function StatsSection() {
    return (
        <section className="bg-[#0e0e14] text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                        >
                            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                                {stat.label}
                            </p>
                            <p className="mt-4 text-4xl font-extrabold text-white">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

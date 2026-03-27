export default function UseCases() {
    const useCases = [
        {
            title: "Brainstorm faster",
            description: "Convert ideas into structured plans in seconds.",
        },
        {
            title: "Align remote teams",
            description: "Keep every stakeholder synced with shared context.",
        },
        {
            title: "Ship with confidence",
            description: "Track progress from concept to launch in one place.",
        },
        {
            title: "Keep conversations live",
            description:
                "Chat, call, and document everything without context switching.",
        },
    ];

    return (
        <section className="bg-[#0c0c12] text-white py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {useCases.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm transition hover:border-purple-500/20 hover:bg-white/10"
                    >
                        <p className="text-sm uppercase tracking-[0.27em] text-slate-500 mb-3">
                            {item.title}
                        </p>
                        <p className="text-base leading-7 text-slate-300">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

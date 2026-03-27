export default function ProcessSteps() {
    const steps = [
        {
            step: "01",
            label: "Create a space",
            detail: "Start new boards and invite your team instantly.",
        },
        {
            step: "02",
            label: "Add ideas",
            detail: "Use canvas, notes, and tasks to capture context.",
        },
        {
            step: "03",
            label: "Move fast",
            detail: "See changes live, coordinate work, and ship faster.",
        },
    ];

    return (
        <section className="bg-[#111113] text-white py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
                {steps.map((item) => (
                    <div
                        key={item.step}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold shadow-lg">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                {item.label}
                            </h3>
                        </div>
                        <p className="text-slate-300 leading-7">
                            {item.detail}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

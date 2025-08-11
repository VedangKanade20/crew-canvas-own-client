import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="flex justify-center py-12 bg-[#111113]">
            <div className="max-w-4xl w-full rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black px-8 py-12 text-center shadow-lg">
                <h2 className="text-3xl font-bold text-white">
                    Ready to transform how your team works?
                </h2>
                <p className="mt-4 text-gray-400">
                    Join thousands of teams already using{" "}
                    <span className="text-white">CollabSpace</span> to
                    collaborate more effectively and bring their ideas to life.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-500 transition">
                        Start for free
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="rounded-lg border border-gray-700 px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
                        Go to Top
                    </button>
                </div>
            </div>
        </section>
    );
}

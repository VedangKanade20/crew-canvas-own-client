import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center h-[60%] bg-[#111014] text-white px-4 mt-10">
            {/* Badge */}

            <div className="mb-6">
                <span className="bg-[#6C3EF6] bg-opacity-20 text-[#d8cbe8] px-4 py-2 rounded-full text-sm font-medium">
                    Collaboration Reimagined
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-[#B983FF] to-[#FF5EDB] text-transparent bg-clip-text mb-4">
                Where Teams Create,
                <br />
                Collaborate, and Conquer
                <br />
                Together
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10">
                Crew-Canvas brings your teams ideas to life with real-time
                collaboration tools, interactive whiteboards, voice calling, and
                project management—all in one seamless workspace.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
                <Link href={"/signup"}>
                    <button className="bg-[#B983FF] hover:bg-[#a16ee6] text-white px-8 py-3 rounded-lg font-semibold transition">
                        Start for free <span aria-hidden>→</span>
                    </button>
                </Link>
                <Link href={"/dashboard"}>
                    <button className="bg-black bg-opacity-10 hover:bg-opacity-20 text-white px-8 py-3 rounded-lg font-semibold transition border border-white border-opacity-20">
                        Explore the app
                    </button>
                </Link>
            </div>
        </section>
    );
}

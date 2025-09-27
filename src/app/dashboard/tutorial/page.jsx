import React from "react";

export default function TutorialPage() {
    return (
        <div className="m-5 font-sans mt-[10%] ml-70 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">Tutorial Page</h1>
            <p className="mb-6">
                Welcome to our tutorial. This is a dummy page to help you get
                started.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                    Step 1: Introduction
                </h2>
                <p>
                    In this section, we introduce the key concepts and features
                    of our platform. Learn the basics and start your journey.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                    Step 2: Getting Started
                </h2>
                <p className="mb-2">
                    Follow these steps to set up and start using the
                    application:
                </p>
                <ol className="list-decimal list-inside ml-5">
                    <li>Log in to your dashboard.</li>
                    <li>Explore different sections.</li>
                    <li>Select the tools you need.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">
                    Step 3: Conclusion
                </h2>
                <p>
                    You now have a basic understanding of our application. Dive
                    in to discover more features.
                </p>
            </section>
        </div>
    );
}

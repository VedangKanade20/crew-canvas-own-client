"use client";

import { useState } from "react";

export default function ReportProblemPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
        alert("Your problem report has been submitted!");
        setFormData({ name: "", email: "", description: "" });
    };

    return (
        <div className="p-8 mt-[10%] ml-90 flex flex-col items-center bg-white text-black rounded-lg shadow-lg max-w-2xl justify-center">
            <h1 className="text-3xl font-bold mb-4">
                Report a Problem or Issue
            </h1>
            <p className="mb-6">
                If you're experiencing an issue or have a problem to report,
                please fill out the form below and we will contact you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Problem Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                        rows="4"
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>

            <div className="mt-8">
                <p>
                    Alternatively, you can directly contact us at{" "}
                    <a
                        href="mailto:support@crewcanvas.com"
                        className="text-blue-600 hover:underline"
                    >
                        support@crewcanvas.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

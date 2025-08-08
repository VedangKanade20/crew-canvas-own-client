"use client";
import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-black text-white py-4 text-center font-inherit">
        <div className="text-xl font-bold text-violet-400 mb-1">
            CrewCanvas
        </div>
        <div className="text-zinc-300 mb-3 text-sm">
            The all-in-one collaboration platform for modern teams
        </div>
        <div className="flex justify-center gap-6 mb-3">
            <a
                href="#"
                className="text-zinc-300 text-xl hover:text-violet-400 transition-colors"
                aria-label="Twitter"
            >
                <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.5 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 1.13a4.48 4.48 0 0 0-.61 2.27c0 1.56.8 2.93 2.02 3.74A4.48 4.48 0 0 1 2 6.13v.06c0 2.18 1.55 4 3.62 4.41a4.52 4.52 0 0 1-2.02.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 0 1 1 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
            </a>
            <a
                href="#"
                className="text-zinc-300 text-xl hover:text-violet-400 transition-colors"
                aria-label="GitHub"
            >
                <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
            </a>
        </div>
        <div className="text-zinc-300 text-xs mt-3">
            <small>
                &copy; {new Date().getFullYear()} Crew Canvas. All rights reserved.
            </small>
        </div>
    </footer>
);

export default Footer;

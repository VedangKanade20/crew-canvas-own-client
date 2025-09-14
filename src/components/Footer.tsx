"use client";
import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-transparent text-white py-4 text-center font-inherit">
        <div className="text-xl font-bold text-violet-400 mb-1">CrewCanvas</div>
        <div className="text-zinc-300 mb-3 text-sm">
            The all-in-one collaboration platform for modern teams
        </div>
        
        
        <div className="text-zinc-300 text-xs mt-3">
            <small>
                &copy; {new Date().getFullYear()} Crew Canvas. All rights
                reserved.
            </small>
        </div>
    </footer>
);

export default Footer;

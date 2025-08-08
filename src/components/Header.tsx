"use client";
import React from "react";

const Header: React.FC = () => {
    return (
        <header
            style={{
                background: "transparent",
                color: "#fff",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem 2rem",
                height: "64px",
            }}
        >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <span
                    style={{
                        fontWeight: 600,
                        fontSize: "2rem",
                        color: "#a259ff",
                        fontFamily: "inherit",
                        textShadow: "0 0 16px #a259ff44",
                        letterSpacing: "0.5px",
                    }}
                >
                    Crew-Canvas
                </span>
            </div>

            {/* Right Side */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {/* Log in Button */}
                <button
                    style={{
                        background: "none",
                        border: "1px solid #444",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "0.5rem 1.2rem",
                        fontSize: "1rem",
                        cursor: "pointer",
                        marginRight: "0.5rem",
                    }}
                >
                    Log in
                </button>

                {/* Sign up Button */}
                <button
                    style={{
                        background: "#a259ff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0.5rem 1.2rem",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 0 8px #a259ff55",
                        marginRight: "0.5rem",
                    }}
                >
                    Sign up free
                </button>

                {/* Document Icon */}
                <span
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "0.5rem",
                        filter: "drop-shadow(0 0 8px #00ff8877)",
                    }}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00ff88"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></svg>
                </span>
            </div>
        </header>
    );
};

export default Header;

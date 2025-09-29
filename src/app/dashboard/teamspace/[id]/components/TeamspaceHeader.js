"use client";

export default function TeamspaceHeader({ name }) {
    return (
        <header className="mb-6">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-gray-500">Welcome to your teamspace overview</p>
        </header>
    );
}

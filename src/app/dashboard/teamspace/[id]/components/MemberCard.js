"use client";

export default function MemberCard({ username, role }) {
    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <p className="font-medium">{username}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    );
}

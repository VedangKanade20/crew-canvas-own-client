"use client";
import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
    const { _id, title, assignee, status, dueDate } = task;

    return (
        <div
            className={`flex justify-between items-center p-3 rounded-lg ${
                status === "completed" ? "bg-green-700" : "bg-gray-800"
            }`}
        >
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">
                    Assigned to: {assignee?.name || assignee}
                </p>
                {dueDate && (
                    <p className="text-xs text-gray-400">
                        Due: {new Date(dueDate).toLocaleDateString()}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => onToggle(_id)}
                    className={`px-3 py-1 rounded ${
                        status === "completed"
                            ? "bg-gray-600"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {status === "completed" ? "Undo" : "Mark Done"}
                </button>
                {onDelete && (
                    <button
                        onClick={() => onDelete(_id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

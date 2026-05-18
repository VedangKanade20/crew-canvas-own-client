"use client";
import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
    const { _id, taskName, taskAssignedTo, taskStatus, taskDescription } = task;

    return (
        <div
            className={`flex justify-between items-center p-3 rounded-lg ${
                taskStatus === "Completed" ? "bg-green-700" : "bg-gray-800"
            }`}
        >
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{taskName}</h3>
                <p className="text-sm text-gray-300">
                    Assigned to: {taskAssignedTo?.name || taskAssignedTo}
                </p>
                {taskDescription && (
                    <p className="text-xs text-gray-400">{taskDescription}</p>
                )}
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => onToggle(_id)}
                    className={`px-3 py-1 rounded ${
                        taskStatus === "Completed"
                            ? "bg-gray-600"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {taskStatus === "Completed" ? "Undo" : "Mark Done"}
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

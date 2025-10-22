"use client";
import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (!tasks?.length)
        return <p className="text-gray-400 italic">No tasks yet.</p>;

    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
    useTasks,
    useCreateTask,
    useToggleTaskStatus,
    useDeleteTask,
} from "@/hooks/useTasks";
import TaskInputBox from "../components/TaskInputBox";
import TaskList from "../components/TaskList";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext"; // assuming you have this

export default function TasksSection() {
    const { id: teamspaceId } = useParams();
    const { user } = useAuth();

    const { data: tasks, isLoading } = useTasks(teamspaceId);
    const createTask = useCreateTask(teamspaceId);
    const toggleStatus = useToggleTaskStatus(teamspaceId);
    const deleteTask = useDeleteTask(teamspaceId);

    const isAdmin = user?.role === "admin" || user?._id === tasks?.ownerId;

    const handleCreate = async (taskData) => {
        try {
            await createTask.mutateAsync(taskData);
            toast.success("Task assigned successfully!");
        } catch {
            toast.error("Error creating task");
        }
    };

    const handleToggle = async (taskId) => {
        try {
            await toggleStatus.mutateAsync(taskId);
        } catch {
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await deleteTask.mutateAsync(taskId);
            toast.success("Task deleted");
        } catch {
            toast.error("Delete failed");
        }
    };

    if (isLoading) return <p className="text-gray-400">Loading tasks...</p>;

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Teamspace Tasks</h1>
            {isAdmin && <TaskInputBox onCreate={handleCreate} />}
            <TaskList
                tasks={tasks}
                onToggle={handleToggle}
                onDelete={isAdmin ? handleDelete : null}
            />
        </div>
    );
}

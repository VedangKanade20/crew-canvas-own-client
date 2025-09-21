// src/app/dashboard/providers/TaskProvider.js
"use client";
import React, { createContext, useContext } from "react";

const TaskContext = createContext(null);

export default function TaskProvider({ children }) {
    // TODO: swap these stubs for useQuery/useMutation hooks for tasks
    const value = {
        tasks: [],
        tasksLoading: false,
        createTask: async (payload) => {
            // call task service or mutation here
        },
        updateTask: async (payload) => {},
        deleteTask: async (id) => {},
    };

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
}

export const useTaskContext = () => {
    const ctx = useContext(TaskContext);
    if (!ctx)
        throw new Error("useTaskContext must be used within TaskProvider");
    return ctx;
};

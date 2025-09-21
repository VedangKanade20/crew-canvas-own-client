"use client";

import DashboardProvider from "./DashboardProvider";

export default function DashboardLayout({ children }) {
    // You can keep other layout bits (header specific to dashboard) here if needed.
    return <DashboardProvider>{children}</DashboardProvider>;
}

// import { DashboardProvider } from "@/providers/DashboardProvider";

import DashboardProvider from "./DashboardProvider";

export default function DashboardLayout({ children }) {
    return <DashboardProvider>{children}</DashboardProvider>;
}

import type React from "react";
import type { User } from "./user";


export interface DashboardlayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    logout: () => void;
    user: User | null;

}
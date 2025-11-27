import type { ReactNode } from "react";
import type { User } from "./user";



export interface SidebarProps {

    activetab: string;
    setActiveTab: (tab: string) => void;
    logout: () => void;
    user: User | null;
}

export interface SidebarItem {
    id: string;
    label: string;
    icon: ReactNode;
    badge?: string | number;
    role?: string[];
    subitems?: SubSidebarItem[];
    
}

export interface SubSidebarItem {
    id: string;
    label: string;
    route: string;
}

export interface SidebarSection {
    title?: string;
    items: SidebarItem[];
}
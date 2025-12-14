import type { ReactNode } from "react";
import type { User } from "./user";
import type { FamilyMember } from "./familyMember";



export interface SidebarProps {

    logout: () => void;
    user: User | null;
    members: FamilyMember[];
    addMember: () => void;
    onMembersChanged?: () => void;
}

export interface SidebarItem {
    id: string;
    label: string;
    icon: ReactNode;
    route: string;
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
import type React from "react";
import type { User } from "./user";
import type { FamilyMember } from "./familyMember";


export interface DashboardlayoutProps {
    children: React.ReactNode;
    logout: () => void;
    user: User | null;
    refreshKey?: number;
}
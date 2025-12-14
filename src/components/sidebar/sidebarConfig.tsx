import type { SidebarSection } from "../../types/sidebar";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";




export const sidebarConfig: SidebarSection[] = [
    {
        items: [
            {
                id: "dashboard",
                label: "Dashboard",
                icon: <TbLayoutDashboard size={20} />,
                route: "",
            },
            {
                id: "explore",
                label: "Explore",
                icon: <MdOutlineExplore size={20}/>,
                route:"explore",
            },

        ]

    }
    
];
import React from 'react'
import type { DashboardlayoutProps } from "../types/dashboard"
import Sidebar from "../components/sidebar/Sidebar"

const DashboardLayout: React.FC<DashboardlayoutProps> = ({children, activeTab, setActiveTab, logout,user}) => {


  return (
    <div className="flex w-full h-screen bg-neutral-900 overflow-hidden">
        <Sidebar 
        activetab={activeTab}
        setActiveTab={setActiveTab}
        logout={logout}
        user={user}  
        />

        <div className="flex-1 bg-neutral-100 h-[calc(100vh-16px)] m-2 rounded-2xl overflow-hidden relative shadow-2xl ring-1 ring-white/10 flex flex-col">

            <div className="w-full h-full overflow-y-auto">
                {children}
            </div>
        </div>

    </div>
  )
}

export default DashboardLayout
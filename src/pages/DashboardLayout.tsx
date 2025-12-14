import React, { useEffect, useState } from 'react'
import type { DashboardlayoutProps } from "../types/dashboard"
import Sidebar from "../components/sidebar/Sidebar"
import { useNavigate } from "react-router-dom";
import { getFamilyMembersApi } from "../services/familyMembers";
import { message } from "antd";

const DashboardLayout: React.FC<DashboardlayoutProps> = ({children, logout,user, refreshKey}) => {


  const [members, setMembers] = useState([]);

  const navigate = useNavigate();

  const userId = user?.id;

  const loadMembers = async() => {
    if(!userId){
      message.error("userId not found");
      return;
    }
    const res = await getFamilyMembersApi(userId);
    setMembers(res);
  };

  useEffect(() => {
    loadMembers();

  },[user?.id, refreshKey]);

  return (
    <div className="flex w-full h-screen bg-neutral-900 overflow-hidden">
        <Sidebar 
        
        logout={logout}
        user={user}
        members={members}
        addMember={() => navigate("addmember")}
        onMembersChanged={loadMembers}
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
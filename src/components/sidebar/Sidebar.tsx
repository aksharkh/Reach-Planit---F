import React from "react";
import type { SidebarProps } from "../../types/sidebar";
import { FiZap } from "react-icons/fi";
import { sidebarConfig } from "./sidebarConfig";
import { Avatar } from "antd";
import { HiSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { MdDelete, MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteFamilyMemberApi } from "../../services/familyMembers";

const Sidebar: React.FC<SidebarProps> = ({
  logout,
  user,
  addMember,
  members,
  onMembersChanged,
}) => {
  const navigate = useNavigate();
  const location = useLocation();



  const currentPath = location.pathname.replace("/dashboard/", "");

  return (
    <div className="flex flex-col w-64 h-screen bg-neutral-900 text-white p-4 z-20 left-0 top-0 sticky">

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-8 px-2 mt-2">
        <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-2xl">
          <FiZap />
        </div>
        <span className="font-bold text-2xl text-white">PLANIT</span>
      </div>

      {/* MAIN SECTIONS */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">

        {/* STATIC ITEMS */}
        {sidebarConfig.map((section, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const isActive = currentPath === item.route || (currentPath === "" && item.route === "");

                return (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/dashboard/${item.route}`)}
                    className={`
                      group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all mb-1
                      ${isActive ? "bg-zinc-800 text-white" : "text-neutral-500 hover:text-white hover:bg-zinc-700"}
                    `}
                  >
                    <div className={`${isActive ? "text-white" : "text-neutral-500 group-hover:text-white"}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* FAMILY MEMBERS SECTION */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider">
              Family Members
            </h4>
            <button
              onClick={() => navigate("/dashboard/addmember")}
              className="text-gray-400 cursor-pointer hover:text-white transition"
            >
              +
            </button>
          </div>

          {/* Dynamic Members */}
          <div className="flex flex-col gap-0.5">
            {members?.map((m) => {
              const isActive = currentPath === `member/${m.id}`;

              return (
                <div
                  key={m.id}
                  className={`
                      group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all mb-1
                      ${isActive ? "bg-zinc-800 text-white" : "text-neutral-500 hover:text-white hover:bg-zinc-700"}
                    `}
                >

                  <div className="flex items-center gap-3 flex-1" onClick={() => navigate(`/dashboard/member/${m.id}`)}>
                  <FaRegUser size={18} />
                  <span className="text-sm">{m.name}</span>
                  </div>


                  <button className="text-red-700 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" onClick={async(e) => {
                    e.stopPropagation();
                    
                    if(!user) return;

                    const confirmDelete = window.confirm(`Do you really want to delete ${m.name}?`);

                    if(!confirmDelete) return;

                    await deleteFamilyMemberApi(user?.id, m.id);
                    onMembersChanged?.();
                    navigate(`/dashboard`);
                    
                  }}>
                    <MdDelete />
                  </button>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-4 border-t border-zinc-700">
        <div className="bg-zinc-800 p-3 rounded-xl mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar size={32} shape="square" className="rounded-lg bg-indigo-500/20" />

            <div>
              <p className="text-sm font-bold text-white truncate mb-0.5 ">
                {user?.userName}
              </p>
              <p className="text-[10px] text-gray-400 truncate">Free Plan</p>
            </div>
          </div>

          <span className="bg-green-600 text-black text-[10px] font-bold px-2 py-1 rounded-md cursor-pointer">
            Pro
          </span>
        </div>

        <div className="flex items-center justify-between px-1">
          <div className="flex bg-zinc-900 rounded-full p-1 gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-white shadow-lg">
              <HiSun size={12} />
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-gray-500 hover:text-white cursor-pointer">
              <IoMdMoon size={12} />
            </div>
          </div>

          <button
            onClick={logout}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <MdLogout size={16} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;

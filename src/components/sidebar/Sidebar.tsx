import React from 'react'
import type { SidebarProps } from "../../types/sidebar"
import { FiZap } from "react-icons/fi"
import { sidebarConfig } from "./sidebarConfig"
import { Avatar } from "antd"
import { HiSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Sidebar: React.FC<SidebarProps> = ({activetab, setActiveTab, logout, user }) => {


  return (
    <div className="flex flex-col w-64 h-screen bg-neutral-900 text-white p-4 z-20 left-0 top-0 sticky ">{/*border-r border-zinc-900*/}
      <div className="flex items-center gap-3 mb-8 px-2 mt-2">
        <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-2xl">
          <FiZap />
        </div>
        <span className="font-bold text-2xl text-white">PLANIT</span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {sidebarConfig.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.title && (
              <h4 className="px-3 text-xs font-semibold uppercase tracking-wider mb-2">
                {section.title}
              </h4>
            )}

            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <div key={item.id} onClick={() => setActiveTab(item.id)}
                  className={` group flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all mb-1
                  ${activetab === item.id ? "bg-zinc-800 text-white" : "text-neutral-500 hover:text-white hover:bg-zinc-700"}`}>

                      <div className={`${activetab === item.id ? "text-white" : "text-neutral-500 group-hover:text-white"}`}>
                        {item.icon}
                      </div>


                      <span className="text-sm font-medium"> {item.label}</span>


                </div>
                
              ))}
            </div>
          </div>
        ))}
        
      </div>

      <div className="mt-auto pt-4 border-t border-zinc-700">
        <div className="bg-zinc-800 p-3 rounded-xl mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar 
            size={32}
            shape="square"
            className="rounded-lg bg-indigo-500/20" />

            <div>
              <p className="text-sm font-bold text-white truncate mb-0.5 ">{user?.userName}</p>
              <p className="text-[10px] text-gray-400 truncate">Free Plan</p>
            </div>

          </div>

          <span className="bg-green-600 text-black text-[10px font-bold px-2 py-1 rounded-md cursor-pointer ]"> Pro</span>

        </div>

        <div className="flex items-center justify-between px-1">
          <div className="flex bg-zinc-900 rounded-full p-1 gap-2">
            <div className="w-6 h-6  rounded-full bg-zinc-800 flex items-center justify-center text-white shadow-lg">
              <HiSun size={12} />
            </div>
            <div className="w-6 h-6  rounded-full bg-zinc-800 flex items-center justify-center text-gray-500 hover:text-white cursor-pointer">
              <IoMdMoon size={12} />
            </div>

          </div>

          <button 
          onClick={logout}
          className="text-gray-500 cursor-pointer hover:text-white transition-colors">
            <MdLogout size={16}/>
          </button>

        </div>

      </div>
    </div>
  )
}

export default Sidebar;
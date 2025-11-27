import React from "react";
import type { NavbarProps } from "../types/user";
import { IoSearchOutline } from "react-icons/io5";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { FaRegBell } from "react-icons/fa";

const Navbar: React.FC<NavbarProps> = ({userName}) => {
  return (
    <div className="flex justify-between items-center mb-8 pt-2 ">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 m-0 tracking-tight">Hello, {userName?.split(' ')[0]} 👋</h1>
        <p className="text-gray-500 text-sm mt-1">Here's what's happening with your events today.</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search />          

        </div>

        <Button
        shape="circle"
        icon={<FaRegBell size={18}/>}
        className="bg-white border-gray-200 text-gray-500 hover:text-indigo-600 shadow-sm flex items-center justify-center"
        />
      </div>

    </div>
  );
};

export default Navbar;

import { Card } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {

    const { user, logout} = useContext(AuthContext);


      const categories = [
    { title: "Birthdays", sub: "Celebrate special days", count: "3 upcoming", icon: <Gift size={24} />, color: "from-orange-300 to-amber-400" },
    { title: "Anniversary", sub: "Love celebrations", count: "1 upcoming", icon: <Heart size={24} />, color: "from-violet-400 to-fuchsia-500" },
    { title: "House Party", sub: "Casual gatherings", count: "Plan now", icon: <Home size={24} />, color: "from-emerald-300 to-teal-400" },
    { title: "Corporate", sub: "Formal events", count: "0 upcoming", icon: <Briefcase size={24} />, color: "from-blue-400 to-cyan-500" },
    { title: "Weddings", sub: "Big days", count: "Explore", icon: <Star size={24} />, color: "from-pink-400 to-rose-500" },
  ];

    // Reusable Components
  const QuickActionBtn = ({ icon, label }) => (
    <button className="flex items-center gap-2 px-4 py-2.5 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl text-white text-sm font-medium hover:bg-white/30 transition-all">
      {icon}
      <span>{label}</span>
    </button>
  );

    const NavItem = ({ icon, label, active, onClick }) => (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
    >
      <div className={`transition-transform ${active ? 'scale-110' : ''}`}>{icon}</div>
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  );

  const DesktopSidebarItem = ({ icon, label, active, onClick }) => (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-pink-50 text-pink-600 font-semibold' : 'text-gray-500 hover:bg-gray-50'}`}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans flex">
      <h1 className="text-3xl font-bold mb-2">
        Hello, {user?.userName || "User"} 👋
      </h1>
      <p className="text-gray-500 mb-6">Welcome to your dashboard</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Card One</h2>
          <p className="text-gray-500">Some dashboard content...</p>
        </Card>

        <Card className="shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Card Two</h2>
          <p className="text-gray-500">Analytics & metrics...</p>
        </Card>

        <Card className="shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Card Three</h2>
          <p className="text-gray-500">More content here...</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

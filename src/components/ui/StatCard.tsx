import React from 'react'

const StatCard = ({title, icon: Icon, colorClass, onClick} : any) => {
  return (
    <div 
    className={`h-32 rounded-[2rem] p-5 relative overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${colorClass} shadow-sm group`}
    onClick={onClick}
  >
    <div className="relative z-10 flex flex-col justify-between h-full">
      <span className="font-bold text-gray-800 text-lg group-hover:translate-x-1 transition-transform">{title}</span>
      <div className="self-end bg-white/40 p-2.5 rounded-xl backdrop-blur-sm shadow-sm group-hover:scale-110 transition-transform">
         <Icon size={22} className="text-gray-800" />
      </div>
    </div>
    {/* Decorative Circle */}
    <div className="absolute -right-6 -bottom-8 w-28 h-28 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
  </div>
  )
}

export default StatCard
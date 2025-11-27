import React from "react";
import type { User } from "../types/user";
import Navbar from "../components/Navbar";
import { Button, Card } from "antd";
import CountdownBadge from "../components/ui/CountdownBadge";
import { FiPlus } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import StatCard from "../components/ui/StatCard";
import { FaGifts } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const Dashboard: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="p-6 lg:p-10 pb-20">
      <Navbar userName={user?.userName} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-12 lg:col-span-6 xl:col-span-5">
          <Card className="h-60 rounded-2xl bg-linear-to-r from-[#E0F2FE] to-[#EFF6FF]  shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute right-0 top-0 w-48 h-full bg-white/30 -skew-x-12 translate-x-12 pointer-events-none transition-transform group-hover:translate-x-8"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="bg-white/60 text-indigo-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-sm">
                  Upcoming
                </span>
                <h3 className="text-2xl font-bold text-gray-900 m-0 mt-3">
                  Sarah's Birthday
                </h3>
                <p className="text-gray-500 text-xs m-0 mt-1 font-medium">
                  Turning 25 on Saturday
                </p>
              </div>

              <div className="flex gap-3 mt-4 items-center">
                <div className="flex gap-2">
                  <CountdownBadge val="02" />
                  <span className="self-center font-bold text-indigo-300">
                    :
                  </span>
                  <CountdownBadge val="14" />
                  <span className="self-center font-bold text-indigo-300">
                    :
                  </span>
                  <CountdownBadge val="35" />
                </div>

                <Button
                  size="small"
                  className="ml-auto bg-indigo-600 text-white border-none rounded-full px-5 text-xs font-bold shadow-lg hover:bg-indigo-700 h-9 tracking-wide"
                >
                  View Plan
                </Button>
              </div>
            </div>

            <div className="absolute top-8 right-6 flex opacity-90 scale-110">
              <div
                className="relative animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-12 bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-0.5 h-8 bg-gray-400/30 mx-auto"></div>
              </div>
              <div
                className="relative mt-3 -ml-2 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="w-9 h-11 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-0.5 h-8 bg-gray-400/30 mx-auto"></div>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-4 lg:col-span-2 xl:col-span-2">
          <div className=" h-60 rounded-xl bg-white border-2 border-dotted border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/20 cursor-pointer shadow-lg flex flex-col items-center justify-center group transition-all " >
            <div className=" w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 group-hover:scale-110 transition-all mb-4 shadow-sm text-gray-400 group-hover:text-indigo-600 " >
              <FiPlus size={24} />
            </div>

            <span className="font-semibold text-gray-500 group-hover:text-indigo-700 text-sm">
              Create New
            </span>
          </div>
        </div>


        <div className="md:col-span-4 lg:col-span-2 xl:col-span-2">
            <Card 
                
                className="h-60 rounded-[2rem] bg-white shadow-sm flex flex-col items-center justify-center relative overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
                <div className="text-center z-10">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-red-500 group-hover:scale-110 transition-transform">
                    <BsCalendar3 size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 m-0">Calendar</h4>
                  <p className="text-gray-400 text-xs m-0 mt-1 font-medium">3 Events today</p>
                </div>
                
                {/* Mini Calendar Visual */}
                <div className="grid grid-cols-3 gap-1.5 mt-5 opacity-20">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                  ))}
                </div>
            </Card>
          </div>

          <div className="md:col-span-4 lg:col-span-2 xl:col-span-3">
            <Card 
                className="h-60 rounded-[2rem] bg-white shadow-sm relative overflow-hidden hover:shadow-md transition-all cursor-pointer"
            >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-800 text-sm m-0">Shopping Hub</h4>
                  <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg">
                    <FaArrowTrendUp size={16} />
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-6 font-medium">Amazon vs. Others</div>
                
                {/* Chart Visual */}
                <div className="relative h-28 w-full flex items-end gap-2 px-1 mt-auto">
                  <div className="w-1/4 bg-indigo-50 h-[40%] rounded-t-md"></div>
                  <div className="w-1/4 bg-indigo-100 h-[65%] rounded-t-md"></div>
                  <div className="w-1/4 bg-indigo-600 h-[90%] rounded-t-md relative group/chart">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/chart:opacity-100 transition-opacity whitespace-nowrap font-bold z-20">
                        $240 Saved
                      </div>
                  </div>
                  <div className="w-1/4 bg-indigo-200 h-[50%] rounded-t-md"></div>
                </div>
            </Card>
          </div>
      </div>


      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <StatCard 
          title="Bithdays"
          icon={FaGifts }
          colorClass="bg-emerald-100 hover:bg-green-200"
          onClick={() =>{}}
          />

          <StatCard 
          title="Anniversaries"
          icon={FaHeart}
          colorClass="bg-rose-200 hover:bg-rose-300"
          onClick={() => {}}
          />
          <StatCard 
          title="Parties"
          icon={GiPartyPopper}
          colorClass="bg-violet-200 hover:bg-violet-300"
          onClick={() => {}}
          />

        </div>

      </div>


      <div className="pb-10">
        <div className="flex justify-between items-center mb-4">
          <h3>More Categories</h3>
          <Button type="text" className="text-gray-400 hover:text-indigo-600 flex items-center gap-1 text-xs font-semibold">
              See All
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hidden">
          {["Weddings", "Meetups", "Travel", "Gaming"].map((cat, i) => (
            <div key={i} className="min-w-40 h-20 bg-white rounded-2xl p-4 flex items-center gap-3 shadow-md border border-gray-100 hover:border-indigo-200 cursor-pointer transition-colors group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform${i % 2 === 0 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'}`}>
                <FaGifts size={16}/>
              </div>
              <span className="font-bold text-gray-700 text-sm">{cat}</span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Dashboard;

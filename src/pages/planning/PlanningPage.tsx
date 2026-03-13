import { Button, message, Skeleton, Tabs, Tag } from "antd"
import React, { useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5"
import { useNavigate, useParams } from "react-router-dom"
import { getEventDetailsApi } from "../../services/events"
import StatusBadge from "../../components/common/StatusBadge"
import { BsCalendar3 } from "react-icons/bs"
import { FaGift, FaMap, FaMusic, FaPlane, FaUtensils } from "react-icons/fa"
import TabPane from "antd/es/tabs/TabPane"
import GiftTab from "./TabComponents/GiftTab"
import DineOutTab from "./TabComponents/DineOutTab"
import { getSingleMemberApi } from "../../services/familyMembers"

const PlanningPage = ({user}) => {

  const navigate = useNavigate();
  const { eventId } = useParams<{eventId: string}>();
  console.log(eventId);

  console.log(user);


  const [activeTab, setActiveTab] = useState("gifts");
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [planningData, setPlanningData] = useState({
    gifts:[],
    dineOut:[]
  });


  // const tabs = [
  //   { id: 'gifts', label: 'Gifts', icon: <FaGift size={18} />, component: <GiftsTab interests={interests} memberName={selectedMember.name} /> },
  //   { id: 'dineout', label: 'Dine Out', icon: <FaUtensils size={18} />, component: <DineOutTab location="Bengaluru" memberName={selectedMember.name} /> },
  //   { id: 'activities', label: 'Activities', icon: <FaPlane size={18} />, component: <ActivitiesTab interests={interests} memberName={selectedMember.name} /> }
  // ];
  const tabs = [
    { id: 'gifts', label: 'Gifts', icon: <FaGift size={18} />, component: <GiftTab interests={selectedMember?.interests}/>},
    { id: 'dineout', label: 'Dine Out', icon: <FaUtensils size={18} />, component: <DineOutTab /> },
    { id: 'activities', label: 'Activities', icon: <FaPlane size={18} />, component: <GiftTab /> },
  ];






  console.log(" event",eventDetails);

      const loadEventDetails = async() => {
        console.log("Loading event details...");
        
        if(!eventId) return;
        console.log("Loading event details for eventId:", eventId);
        const eventIdNum = Number(eventId);

        if(isNaN(eventIdNum)) return;

        const res = await getEventDetailsApi(user.id, eventIdNum);
        setEventDetails(res);
        console.log(res);
      };


      const loadMemberDetails = async () => {
        console.log("Member details:");
        if(!user || !eventId) return;

        try {
          const res = await getSingleMemberApi(user.id, eventDetails?.memberId);
          setSelectedMember(res);
          console.log("Member details:", res);

        } catch (error) {
          message.error("Failed to load member details");
        }
      }

      // const loadPlanningData = async() => {
        
        
      //   try {
      //     setLoading(true);

      //     const res = await 
          
      //   } catch (error) {
          
      //   } finally {
      //     setLoading(false);
      //   }
      // }

  useEffect(() => {
    if(!user || !eventId) return;
    loadEventDetails();
    
    
  },[eventId, user]);
  

  useEffect(() => {
  if (!user || !eventDetails?.memberId) return;
  loadMemberDetails();
}, [eventDetails?.memberId, user]);


  return (
    <div className="p-6">
      <div className="flex items-center justify-start mb-6">
        <div className="flex gap-4">
          <Button icon={<IoArrowBack size={20}/>} shape="circle" size="large" onClick={() => navigate(-1)} className="border-none shadow-sm flex items-center justify-center"/>

          <div>
            <h1 className="font-bold text-2xl">Planning for akshar</h1>
            <p>milestone . date</p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl border-none shadow-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden p-6">
            <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-end gap-4"> 
              <div>
                <StatusBadge status="upcoming" />
                <h1 className="text-3xl font-bold text-white mb-2">{eventDetails?.memberName} 's {eventDetails?.categoryName}</h1>
                <p className="opacity-90 flex items-center gap-2 text-sm font-medium"><BsCalendar3 size={16}/> {eventDetails?.eventDate}</p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 text-center min-w-[100px]">
                <p className="text-xs opacity-80 mb-0">Days Left</p>
                <p className="text-3xl font-bold m-0 leading-none">14</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-1 shadow-xl border border-gray-200">
            <div className="flex border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            <div>
              {tabs.find(t => t.id === activeTab)?.component}
            </div>
          </div>
        </div>
      </div>

        <div>

        </div>
      </div>
    
  )
}

export default PlanningPage
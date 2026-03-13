import React, { useContext, useState } from 'react'
import DashboardLayout from "../pages/DashboardLayout"
import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Explore from "../pages/Explore"
import StepperForm from "../components/stepperForm/StepperForm"
import UserAdded from "../components/stepperForm/steps/UserAdded"
import { AuthContext } from "../context/AuthContext"
import MemberDetails from "../pages/familyMembers/MemberDetails"
import CreateBirthday from "../pages/events/birthday/CreateBirthday"
import CreateAnniversary from "../pages/events/anniversary/CreateAnniversary"
import PlanningPage from "../pages/planning/PlanningPage"

const DashboardRoutes = () => {

    const {user, logout} = useContext(AuthContext);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleMembersChanged = () => {
      setRefreshKey(prev => prev + 1);
    };

  return (
    <DashboardLayout user={user} logout={logout} refreshKey={refreshKey}>
        <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/addmember" element={<StepperForm onMembersChanged={handleMembersChanged} />} />
            <Route path="/useradded" element={<UserAdded />} />
            {/* <Route path="/birthday-planning/:id" element={<CreateBirthday />} />
            <Route path="/anniversary-planning/:id" element={<CreateAnniversary />} /> */}

            <Route path="/planning/:eventId" element={<PlanningPage user={user}/>} />

            <Route path="/member/:id" element={<MemberDetails onMembersChanged={handleMembersChanged} user={user} />} />
        </Routes>
    </DashboardLayout>

  )
}

export default DashboardRoutes
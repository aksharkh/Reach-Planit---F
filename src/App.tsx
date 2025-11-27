import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./pages/DashboardLayout"
import { useContext, useState } from "react"
import { AuthContext } from "./context/AuthContext"
import Explore from "./pages/Explore"

function App() {

    const { user, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard user={user} />;
      case 'explore': return <Explore />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout 
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      user={user}
      logout={logout}>
        {renderContent()}
      </DashboardLayout>} />
    </Routes>
  )
}

export default App

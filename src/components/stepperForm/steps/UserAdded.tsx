import { Button, Result } from "antd";
import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom"

const UserAdded:React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const name = location.state?.name || "User";
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <Result
        // icon={<FaCheck className="text-green-500 animate-pulse " size={40}/>}
        status="success"
        title={`Successfully added ${name} .`}
        extra={
            [<Button type="primary" key="dashboard" onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>]
        }
        >

        </Result>
    </div>
  )
}

export default UserAdded
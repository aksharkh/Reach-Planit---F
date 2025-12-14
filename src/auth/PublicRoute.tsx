import React from 'react'
import { Navigate } from "react-router-dom";
import type { PublicRouteProps } from "../types/auth";

const PublicRoute: React.FC<PublicRouteProps> = ({children}) => {

    const token = localStorage.getItem("jwtToken");

    if(token) {
        return <Navigate to="/dashboard" replace />
    }
  return (
    children
  )
}

export default PublicRoute
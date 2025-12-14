import React from 'react'
import { Navigate } from "react-router-dom";
import type { ProtectedRouteProps } from "../types/auth";
import { isTokenExpired } from "../utils/checkToken";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {

    const token = localStorage.getItem("jwtToken");

    const expired = isTokenExpired(token);

    if(!token || expired) {
        return <Navigate to="/login" replace />
    }

  return (
    children
  )
}

export default ProtectedRoute
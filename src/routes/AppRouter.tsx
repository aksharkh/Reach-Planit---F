import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import DashboardRoutes from "./DashboardRoutes"
import ProtectedRoute from "../auth/ProtectedRoute"
import PublicRoute from "../auth/PublicRoute"

const AppRouter = () => {

    

  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={
        <PublicRoute>
            <Login />
        </PublicRoute>
        } />

      <Route path="/signup" element={<Signup />} />


      <Route path="/dashboard/*" element={
        <ProtectedRoute>
            <DashboardRoutes />
        </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter
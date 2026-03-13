import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.tsx"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ConfigProvider } from "antd"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#000000",
        colorPrimaryHover: "#262626",
        colorPrimaryActive: "#1f1f1f",
      }
    }}
    >
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ConfigProvider>
  </StrictMode>,
)

import React, { useEffect, useRef } from "react";
import { Button } from "antd";

interface AppleSignInProps {
  onSuccess: (token: string) => void;
  onError: () => void;
}

declare global {
  interface Window {
    AppleID?: {
      auth?: {
        init: (config: any) => void;
        signIn: () => Promise<any>;
        getAuthorization: () => Promise<any>;
      };
    };
  }
}

const AppleSignIn: React.FC<AppleSignInProps> = ({ onSuccess, onError }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Apple Sign-In script
    const script = document.createElement("script");
    script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid.auth.js";
    script.async = true;
    script.onload = () => {
      if (window.AppleID?.auth) {
        window.AppleID.auth.init({
          clientId: import.meta.env.VITE_APPLE_CLIENT_ID || "com.example.planit",
          teamId: import.meta.env.VITE_APPLE_TEAM_ID || "",
          redirectURI: window.location.origin,
          scope: ["name", "email"],
          usePopup: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleAppleSignIn = async () => {
    try {
      if (window.AppleID?.auth) {
        const response = await window.AppleID.auth.signIn();

        if (response?.authorization?.identityToken) {
          onSuccess(response.authorization.identityToken);
        } else {
          onError();
        }
      }
    } catch (error) {
      console.error("Apple Sign-In error:", error);
      onError();
    }
  };

  return (
    <div ref={buttonRef}>
      <Button
        onClick={handleAppleSignIn}
        className="flex-1 h-12 rounded-xl border-gray-200 bg-black text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.05 13.5c-.91 0-1.82.58-2.75 1.73.79.95 1.54 2.04 2.08 3.24.95.03 2.39-.54 2.39-2.12 0-1.2-.95-2.85-1.72-2.85zm-4.58-8.5h-4.94l3.48 1.53 1.46-1.53zm-4.58 13.75l-1.46-1.53h4.94l-3.48 1.53z" />
        </svg>
        Apple
      </Button>
    </div>
  );
};

export default AppleSignIn;

import React, { createContext, useEffect, useState } from "react";
import type { User } from "../types/user";
import type { LoginData, SignupData } from "../types/auth";
import { getUserApi, googleLoginApi, appleLoginApi, loginApi, signupApi } from "../services/auth";



interface AuthContextType {
    user: User | null;
    login: (data: LoginData) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;
    googleLogin: (idToken: string) => Promise<void>;
    appleLogin: (identityToken: string) => Promise<void>;

}


export const AuthContext = createContext<AuthContextType>({

    user: {userName: "Akshar" , email: "akshar@gmail.com", role:"USER"} ,
    login: async () => {},
    signup: async () => {},
    logout: () => {},
    googleLogin: async () => {},
    appleLogin: async () => {},

});

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children}) => {
    
    const [user, setUser] = useState<User | null>(null);

    const loadUser = async() => {
        try {
            const userData = await getUserApi();
            setUser(userData);
        } catch (error) {
            console.error("Invalid or expired token");
            localStorage.removeItem("jwtToken");
            setUser(null);
        }
    }

    useEffect(() => {

        const token =  localStorage.getItem("jwtToken");

        if(token) {
            loadUser();
        }
    }, []);

    const login = async (data: LoginData) => {

        const res = await loginApi(data);

        localStorage.setItem("jwtToken", res.jwtToken);

    };

    const signup = async(data: SignupData) => {
        const res = await signupApi(data);

        localStorage.setItem("jwtToken", res.jwtToken);
        await loadUser();
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setUser(null);
    };

    const googleLogin = async(idToken: string) => {
        const token = await googleLoginApi(idToken);
        console.log("GOOGLE LOGIN API RESPONSE =", token);
        localStorage.setItem("jwtToken", token);
        await loadUser();
    }

    const appleLogin = async(identityToken: string) => {
        const token = await appleLoginApi(identityToken);
        console.log("APPLE LOGIN API RESPONSE =", token);
        localStorage.setItem("jwtToken", token);
        await loadUser();
    }

    return (
        <AuthContext.Provider value={{user, login, signup, logout, googleLogin, appleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}
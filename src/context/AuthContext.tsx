import React, { createContext, useEffect, useState } from "react";
import type { User } from "../types/user";
import type { LoginData, SignupData } from "../types/auth";
import { loginApi, signupApi } from "../services/auth";



interface AuthContextType {
    user: User | null;
    login: (data: LoginData) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => void;

}


export const AuthContext = createContext<AuthContextType>({

    user: {userName: "Akshar" , email: "akshar@gmail.com", role:"USER"} ,
    login: async () => {},
    signup: async () => {},
    logout: () => {}

});

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children}) => {
    
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        const token =  localStorage.getItem("jwtToken");

        if(token) {
            
        }
    }, []);

    const login = async (data: LoginData) => {

        const res = await loginApi(data);

        localStorage.setItem("jwtToken", res.jwtToken);

    };

    const signup = async(data: SignupData) => {
        const res = await signupApi(data);

        localStorage.setItem("jwtToken", res.jwtToken);
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
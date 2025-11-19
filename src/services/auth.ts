import api from "../api/axiosInstance";
import type { AuthTokenResponse, LoginData, SignupData } from "../types/auth";



export const loginApi = async (data: LoginData): Promise<AuthTokenResponse> => {
    const res = await api.post("/auth/login", data);
    return res.data;
}

export const signupApi = async(data: SignupData): Promise<AuthTokenResponse> => {
    const res = await api.post("/auth/signup", data);
    return res.data;
}




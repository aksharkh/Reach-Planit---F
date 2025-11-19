import axios from "axios";
import { config } from "dotenv";




// const API_BASE = import.meta.env.VITE_API_BASE ;
   const API_BASE = "http://localhost:8080/api";

const axiosInstance = axios.create({
    baseURL: API_BASE,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwtToken");
    if(token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;

    }

    return config;
});


export default axiosInstance;
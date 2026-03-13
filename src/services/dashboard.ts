import api from "../api/axiosInstance";


export const getDashboardDataApi = async(userId: number) => {
    const res = await api.get(`/dashboard/${userId}`);
    return res.data;
}
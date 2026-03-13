import api from "../api/axiosInstance";



export const getAllBirthdayTypes = async() => {
    const res = await api.get("/helper/birthdayType");
    return res.data;
};
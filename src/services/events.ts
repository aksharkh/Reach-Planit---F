import api from "../api/axiosInstance";
import type { CreateEventPayload } from "../types/event";


export const addEventApi = async(userId: number, data:CreateEventPayload) => {
    const res = await api.post(`/event/${userId}`, data);
    return res.data;
}

export const getEventDetailsApi = async(userId: number, eventId: number ) => {
    const res = await api.get(`/event/${userId}/${eventId}`);
    return res.data;
}
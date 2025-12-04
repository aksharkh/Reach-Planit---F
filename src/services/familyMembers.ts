import api from "../api/axiosInstance";


export const getFamilyMembersApi = async(userId: number) => {

    const res = await api.get(`/family-member/${userId}`);
    return res.data;
};

export const addFamilyMemberApi = async(userId: number, data: any) => {
    const res = await api.post(`/family-member/${userId}`);
    return res.data;
};

export const updateFamilyMemberApi = async(userId: number, memberId: number, data: any) => {
    const res = await api.put(`/family-member/${userId}/${memberId}`);
    return res.data;
};

export const deleteFamilyMemberApi = async(userId: number, memberId: number) => {
    const res = await api.delete(`/family-member/${userId}/${memberId}`);
    return res.data;
}
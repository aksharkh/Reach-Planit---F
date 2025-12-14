import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../context/AuthContext"
import { addFamilyMemberApi, deleteFamilyMemberApi, getFamilyMembersApi, updateFamilyMemberApi } from "../../services/familyMembers";
import { Button, message } from "antd";
import AddEditMemberModal from "./AddEditMemberModal";

const FamilyMembers: React.FC = () => {

    const {user} = useContext(AuthContext);
    const [members, setMembers] = useState<string[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [editData, setEditData] = useState<any | null>(null);


    const loadMembers = async() => {
        if(user) {
            const res = await getFamilyMembersApi(1);
            setMembers(res);
        }
    };

    useEffect(() => {
        loadMembers();
    }, [user]);

    const handleSubmit = async(values: any) => {

        const payload = {
            ...values,
            dob: values.dob ? values.dob.format("YYYY-MM-DD") : null,
            hobbies: Array.isArray(values.hobbies)
            ? values.hobbies
            : values.hobbies
            ? values.hobbies.split(",").map((x: string) => x.trim())
            : [],
            interests: Array.isArray(values.interests)
            ? values.interests
            : values.interests
            ? values.interests.split(",").map((x: string) => x.trim())
            : [],
                };

        console.log("Submitted values:", payload);
        if(editData) {
            await updateFamilyMemberApi(1, editData.id, payload);
            message.success("Mwmber updated");
        } else {
            console.log("entered the add api");
            await addFamilyMemberApi(1, payload);
            message.success("Member added");
        }
        setOpenModal(false);
        loadMembers();
    }

    const deleteMember = async(memberId: number) => {
        await deleteFamilyMemberApi(1, memberId);
        message.success("Member deleted ");
        loadMembers();
    };

    const openAddModal = () => {
        setEditData(null);
        setOpenModal(true);
    };

    const openEditModal = (member: any) => {
        setEditData(member);
        setOpenModal(true);
    };



  return (
    <div className="p-5 text-black bg-amber-900">
        <h1 className="text-xl font-bold mb-5">Your Family Members</h1>

        <Button type="primary" onClick={openAddModal}>
            + Add Member
        </Button>
        

        <div className="space-y-3">
            {members.map((m: any) => (
                <div key={m.id} className="bg-white p-4 rounded-2xl shadow-md flex justify-between items-center">
                    <div>
                        <p className="font-bold">{m.name}</p>
                        <p className="text-sm text-gray-500">{m.relation}</p>
                        <p className="text-sm text-gray-500">{m.age} years old</p>
                    </div>



                    <div className="flex gap-3">
                        <Button danger onClick={() => deleteMember(m.id)}>
                            Delete
                        </Button>
                        <Button type="primary" onClick={() => openEditModal(m)}>
                            Edit
                        </Button>
                    </div>
                    

                </div>
            ))}

        </div>

        <AddEditMemberModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        initialData={editData}
        onSubmit={handleSubmit}
        >

        </AddEditMemberModal>
    </div>
  )
}

export default FamilyMembers
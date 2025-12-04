import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../context/AuthContext"
import { deleteFamilyMemberApi, getFamilyMembersApi } from "../../services/familyMembers";
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
        >

        </AddEditMemberModal>
    </div>
  )
}

export default FamilyMembers
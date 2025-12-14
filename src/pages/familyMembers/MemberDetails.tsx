import { Button, Card, Spin } from "antd";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { LoadingOutlined } from '@ant-design/icons';
import { deleteFamilyMemberApi, getSingleMemberApi } from "../../services/familyMembers";
import type { User } from "../../types/user";


interface MemberDetailsProps {
    user: User;
    onMembersChanged: () => void;
}

const MemberDetails:React.FC<MemberDetailsProps> = ({user, onMembersChanged}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);

    useEffect(() => {

        const fetchMember = async() => {
        
        if(id) {
            const res = await getSingleMemberApi(user.id, parseInt(id));
            console.log("member data", res);
            setMember(res);
        }
        
    };

    fetchMember();
    },[id]);

    if(!member) return <div className="flex items-center justify-center w-full h-screen"><Spin indicator={<LoadingOutlined spin />} size="large"/> </div>;
  return (
    <div className="p-6">
        <Card title={member.name} className="shadow-2xl">
            <p><b>Relation:</b> {member.relation}</p>
            <p><b>DOB:</b> {member.dob}</p>
            <p><b>Gender:</b> {member.gender}</p>


            <div className="mt-6 flex gap-4">
                <Button type="primary" onClick={() => navigate(`/dashboard/member/${id}/edit`)}>
                    Edit Member
                </Button>

                <Button danger onClick={ async () => {

                    if(!user && !id) return;

                    const confirmDelete = window.confirm(`Do you really want to delete ${member.name}?`);

                    if(!confirmDelete) return;

                    await deleteFamilyMemberApi(user.id, parseInt(id));
                    onMembersChanged?.();
                    navigate("/dashboard");
                }}>
                    Delete Member
                </Button>

            </div>

        </Card>
    </div>
  )
}

export default MemberDetails
import { Button, Form, message, Steps } from "antd"
import React, { useContext, useState } from 'react'
import type { StepConfig } from "../../types/stepperForm"
import UserInfoStep1 from "./steps/UserInfoStep1";
import UserInfoStep2 from "./steps/UserInfoStep2";
import UserInfoStep3 from "./steps/UserInfoStep3";
import { addFamilyMemberApi } from "../../services/familyMembers";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const { Step } = Steps;

const StepperForm: React.FC<{ onMembersChanged?: () => void }> = ({ onMembersChanged }) => {

    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    const userId = user?.id;

    console.log(user);

    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();

    const steps: StepConfig[] = [
        { title: "User Info", fields: ["name", "relation", "dob", "gender"],content: <UserInfoStep1 form={form}/>},
        { title: "User Info", fields: ["interests"],content: <UserInfoStep2 form={form}/>},
        { title: "User Info", fields: ["hobbies"],content: <UserInfoStep3 form={form}/>},
    ];

    const next = async () => {
        try {
            await form.validateFields(steps[current].fields);
            setCurrent((prev) => prev + 1);
        } catch (error) {
            console.log("Next Error", error);
        }
    };
    
    const prev = () => setCurrent((prev) => prev -1);

    const submit = async () => {
        try {
            await form.validateFields(steps[current].fields);
            const values = form.getFieldsValue(true);

            if(values.dob){
                values.dob = values.dob.format("YYYY-MM-DD");
            }

            console.log("Final submission:", values);
            
            if(!userId) {
                message.error("user not found");
                return;
            }
            await addFamilyMemberApi(userId, values);
            message.success("Form submited successfully");
            onMembersChanged?.();
            navigate("/dashboard/useradded", {state: {name: values.name}});
        } catch (error) {
            console.error("Submit error:" , error);
        }
    }



  return (
    <div className="p-5 ">
        <Steps current={current}>
            {steps.map((s) => (
                <Step key={s.title} title={s.title} />
            ))}
        </Steps>

        <Form
        form={form}
        layout="vertical"
        style={{marginTop: 32}}
        >
            {steps.map((step, index) => (
                <div key={index} style={{display: current === index ? "block" : "none"}}>
                    {step.content}
                </div>
            ))}

            <div className="mt-24 flex items-center justify-center">
                {current > 0 && (
                    <Button className="mr-8" onClick={prev}>
                        Previous
                    </Button>
                )}

                {current < steps.length -1 && (
                    <Button type="primary" onClick={next}>
                        Next
                    </Button>
                )}

                {current === steps.length - 1 && (
                    <Button type="primary" onClick={submit}>
                        Submit
                    </Button>
                )}
            </div>
        </Form>
    </div>
  )
}

export default StepperForm
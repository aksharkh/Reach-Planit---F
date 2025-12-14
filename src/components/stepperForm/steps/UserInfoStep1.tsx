import React from 'react'
import type { StepProps } from "../../../types/stepperForm"
import { DatePicker, Form, Input, Select } from "antd"


const { Option } = Select;

const UserInfoStep1: React.FC<StepProps> = ({form}) => {


  return (
    <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          name="relation"
          label="Relation"
          rules={[{ required: true }]}
        >
          <Input placeholder="Father, Mother, etc" />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[{ required: true }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
    
    </>
  )
}

export default UserInfoStep1
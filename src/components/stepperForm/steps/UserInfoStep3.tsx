import { Form, Select } from "antd"
import React from 'react'


const { Option } = Select;

const UserInfoStep3 = ({form}) => {

  const HOBBY_OPTIONS = [
  'Gaming', 'Hiking', 'Yoga', 'Painting', 'DIY Crafts', 'Watching Movies', 'Sports'
];

  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-2">How do they spend weekends?</h1>
      <p className="text-gray-500 mb-4">Knowing their hobbies helps us suggest activities and trips.</p>
    
    <Form.Item
    name="hobbies"
    label="Select hobbies"
    rules={[{required: true, message: "Please select at least one hobby"}]}
    >
      <Select
      mode="tags"
      size="large"

      >
        {HOBBY_OPTIONS.map((hobby) => (
          <Option key={hobby} value={hobby}>
            {hobby}
          </Option>
        ))}
      </Select>
    </Form.Item>
    
    
    </div>
  )
}

export default UserInfoStep3
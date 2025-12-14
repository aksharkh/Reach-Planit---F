import { Form } from "antd";
import React from "react";
import { FaBookOpen, FaCamera, FaGamepad, FaMusic, FaPlane, FaUtensils } from "react-icons/fa";
import { FaCheck, FaShirt } from "react-icons/fa6";

const UserInfoStep2 = ({ form }) => {
  const INTEREST_OPTIONS = [
    { label: "Tech & Gadgets", value: "Tech", icon: <FaGamepad size={20} /> },
    { label: "Fashion & Style", value: "Fashion", icon: <FaShirt size={20} /> },
    { label: "Reading & Books", value: "Reading", icon: <FaBookOpen size={20} /> },
    { label: "Music & Audio", value: "Music", icon: <FaMusic size={20} /> },
    { label: "Travel & Adventure", value: "Travel", icon: <FaPlane size={20} /> },
    { label: "Food & Cooking", value: "Cooking", icon: <FaUtensils size={20} /> },
    { label: "Photography", value: "Photography", icon: <FaCamera size={20} /> },
  ];

  // Watch selected interests (always default to [])
  const selected = Form.useWatch("interests", form) || [];
  const name = Form.useWatch("name", form);

  const toggle = (value: string) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    form.setFieldValue("interests", updated);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">
        What gets {name} excited?
      </h1>

      <p className="text-gray-500 mb-4">
        Select categories to help our AI recommend the perfect gifts.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {INTEREST_OPTIONS.map((opt) => {
          const isSelected = selected.includes(opt.value);

          return (
            <div
              key={opt.value}
              onClick={() => toggle(opt.value)}
              className={`flex items-center p-3 rounded-2xl border cursor-pointer transition 
                ${isSelected ? "border-blue-600 bg-blue-500/10" : "border-gray-300 hover:border-blue-300"}
              `}
            >
              <span className="mr-3">{opt.icon}</span>
              <span className="font-medium">{opt.label}</span>

              {isSelected && <FaCheck className="ml-auto text-blue-600" size={18} />}
            </div>
          );
        })}
      </div>

      {/* Hidden form item ensures validation still works */}
      <Form.Item
        name="interests"
        rules={[{ required: true, message: "Select at least one interest" }]}
        hidden
      >
        <input />
      </Form.Item>
    </div>
  );
};

export default UserInfoStep2;

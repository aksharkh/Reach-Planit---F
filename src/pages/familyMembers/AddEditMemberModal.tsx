import { DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

const { Option } = Select;

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  initialData?: any | null;
}

const AddEditMemberModal: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      form.setFieldValue({
        ...initialData,
      });
    } else {
      form.resetFields();
    }
  }, [initialData]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      okText={initialData ? "Update" : "Add"}
      title={initialData ? "Edit Family Member" : "Add New Family Member"}
      centered
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
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
          </Select>
        </Form.Item>

        <Form.Item name="hobbies" label="Hobbies">
          <Input placeholder="Reading, etc" />
        </Form.Item>
        <Form.Item name="interests" label="Interests">
          <Input placeholder="Music, etc" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditMemberModal;

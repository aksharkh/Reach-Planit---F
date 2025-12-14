import type { FormInstance } from "antd";


export interface StepConfig {
    title: string;
    fields: string[];
    content: React.ReactNode;
};

export interface StepProps {
    form: FormInstance;
}
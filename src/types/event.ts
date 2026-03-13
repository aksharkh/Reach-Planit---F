export type EventCategory = "Birthday" | "Anniversary" | "Other";



export interface CreateEventPayload {

    categoryId: number;
    memberId: number;
    birthDate: string;
    eventDate: string;
    description: string;
    milestoneType: string;
    customMilestone?: string | null;


}
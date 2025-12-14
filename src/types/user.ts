export interface User {
    id: number;
    email: string;
    userName: string;
    role: string;

}

export interface NavbarProps {
    userName: string | undefined;
    
}
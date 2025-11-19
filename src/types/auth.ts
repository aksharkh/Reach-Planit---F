export interface LoginData {
    email: string;
    password: string;
}


export interface SignupData {
    userName: string;
    email: string;
    password: string;
    role: string;  //"USER" | "ADMIN"
}


export interface AuthTokenResponse {
    jwtToken: string;
    tokenType: string;
}

export interface GoogleAuthData {
    idToken: string;
}
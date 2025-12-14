

export const isTokenExpired = (token: string | null):boolean => {


    if(!token) return true;

    try {
        const payloadPart = token.split(".")[1];
        const decoded = JSON.parse(atob(payloadPart));

        const expiry = decoded.exp * 1000;
        const now = Date.now();

        return now >= expiry;

    } catch (error) {
        console.error("Invalid token: " , error);
        return true;
    }
};
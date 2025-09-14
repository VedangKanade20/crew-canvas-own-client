import axios from "axios";

// Next.js environment variables use NEXT_PUBLIC_ prefix for client-side access
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    withCredentials: true,
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized, redirecting to login...");
            // Handle redirect
        }
        return Promise.reject(error);
    }
);

export default API;

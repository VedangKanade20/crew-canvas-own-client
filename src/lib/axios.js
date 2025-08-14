import axios from "axios";

// Next.js environment variables use NEXT_PUBLIC_ prefix for client-side access
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    withCredentials: true,
});

API.interceptors.request.use(
    (config) => {
        // In Next.js, we need to check if we're in the browser before accessing localStorage
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default API;

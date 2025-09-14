/* eslint-disable @typescript-eslint/no-explicit-any */
import API from "./api";

export interface SignInFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface SignUpFormData {
    fullName: string;
    email: string;
    password: string;
    agreeToTerms: boolean;
}

export interface AuthResponse {
    success: boolean;
    message?: string;
    token?: string;
    user?: {
        id: string;
        email: string;
        fullName: string;
    };
}

// Sign In API call
export const signIn = async (data: SignInFormData): Promise<AuthResponse> => {
    try {
        const response = await API.post("/auth/login", {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
        });

        // Store token in localStorage if sign in is successful
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);

            // Store user data if needed
            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }
        }

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Sign in failed");
    }
};

// Sign Up API call
export const signUp = async (data: SignUpFormData): Promise<AuthResponse> => {
    try {
        const response = await API.post("/auth/signup", {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
        });

        // Optionally auto-login after signup
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);

            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }
        }

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Sign up failed");
    }
};

// Social Auth API calls
export const socialAuth = async (
    provider: "github" | "twitter"
): Promise<string> => {
    try {
        const response = await API.get(`/auth/${provider}`);
        return response.data.redirectUrl; // Return the OAuth URL
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message || `${provider} authentication failed`
        );
    }
};

// Logout function
export const logout = async (): Promise<void> => {
    try {
        await API.post("/auth/logout");
    } catch (error) {
        console.error("Logout error:", error);
    } finally {
        // Clear local storage regardless of API call success
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
};

// Get current user
export const getCurrentUser = async () => {
    try {
        const response = await API.get("/auth/me");
        return response.data.user;
    } catch (error) {
        // If token is invalid, clear it
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        throw error;
    }
};

// Validation functions
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 8;
};

export const validateFullName = (name: string): boolean => {
    return name.trim().length >= 2;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
    if (typeof window !== "undefined") {
        return !!localStorage.getItem("token");
    }
    return false;
};

// Get stored user data
export const getStoredUser = () => {
    if (typeof window !== "undefined") {
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null;
    }
    return null;
};

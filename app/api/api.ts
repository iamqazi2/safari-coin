import axios, { AxiosError } from "axios";
import {
  RegisterRequestBody,
  LoginRequestBody,
  VerifyOTPRequestBody,
  ResendOTPRequestBody,
} from "../types/apiTypes";

// Use an environment variable for the base URL
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://staging.printsup.org";

const api = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

interface ErrorResponse {
  message?: string;
}

export const registerUser = async (data: RegisterRequestBody) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Registration failed"
    );
  }
};

export const loginUser = async (data: LoginRequestBody) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw (
      axiosError.response?.data?.message || axiosError.message || "Login failed"
    );
  }
};

export const verifyOTP = async (data: VerifyOTPRequestBody) => {
  try {
    const response = await api.post("/auth/verify-otp", data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "OTP verification failed"
    );
  }
};

export const resendOTP = async (data: ResendOTPRequestBody) => {
  try {
    const response = await api.post("/auth/resend-otp", data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Failed to resend OTP"
    );
  }
};

export default api;

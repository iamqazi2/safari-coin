"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../components/loader";
import { loginUser } from "@/app/api/api";

interface FormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await loginUser({
        email: formData.email,
        password: formData.password,
      });
      toast.success("Login successful! Welcome back!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      // Reset form
      setFormData({
        email: "",
        password: "",
      });
      // Optionally redirect to dashboard or home page
      // window.location.href = "/dashboard";
    } catch (err) {
      const errorMessage =
        typeof err === "string" ? err : "Login failed. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgetPassword = () => {
    console.log("Forget password clicked");
    // Handle forget password logic here
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <ToastContainer />
            <div className="w-full max-w-[770px]">
              <div
                className="p-8"
                style={{
                  borderRadius: "16.047px",
                  border: "0.535px solid rgba(255, 255, 255, 0.34)",
                  background: "rgba(26, 27, 35, 0.52)",
                  boxShadow: "0 6.419px 0 0 #5DE7FF",
                }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-white text-[24px] md:text-[38px] font-bold mb-4">
                    Login
                  </h1>
                  <div className="text-white space-y-1">
                    <p className="text-[20px] leading-tight md:text-[32px]">
                      Welcome to SafariQ World Earn SED Tokens & travel rewards.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Password"
                      className="w-full px-6 py-4 pr-12 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Forget Password Link */}
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={handleForgetPassword}
                      className="text-white hover:text-white transition-colors duration-200 text-sm"
                    >
                      Forget Password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 bg-[#3EB9CF] text-white font-semibold rounded-full transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Logging In..." : "Login"}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center mt-6">
                  <p className="text-white">
                    Don&apos;t have any account?{" "}
                    <a
                      href="/Signup"
                      className="text-[#3EB9CF] transition-colors duration-200 underline"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignInForm;

"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/loader";

interface FormData {
  email: string;
}

const ForgetPasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle forget password submission logic here
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {" "}
          <div className="min-h-screen bg-black flex items-center justify-center p-4">
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
                    Forget Password
                  </h1>
                  <div className="text-white space-y-1">
                    <p className="text-[20px] leading-tight md:text-[32px]">
                      Enter your email so we can send a 4-digit code to reset
                      your password
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-[#3EB9CF] text-white font-semibold rounded-full transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForgetPasswordForm;

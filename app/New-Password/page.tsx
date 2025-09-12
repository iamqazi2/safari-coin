"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import LoadingScreen from "../components/loader";
interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const NewPasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("New password submitted:", formData);
    // Handle new password submission logic here
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
                    New Password
                  </h1>
                  <div className="text-gray-300 space-y-1">
                    <p className="text-[20px] leading-tight md:text-[32px]">
                      Create a new password to enjoy SafariQ World
                    </p>
                    <p className="text-[20px] leading-tight md:text-[32px]">
                      & Earn SED Tokens & travel rewards.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* New Password Input */}
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Create New Password"
                      className="w-full px-6 py-4 pr-12 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {showNewPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm New Password"
                      className="w-full px-6 py-4 pr-12 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
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

export default NewPasswordForm;

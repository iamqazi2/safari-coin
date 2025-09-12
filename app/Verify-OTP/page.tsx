"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../components/loader";
import { resendOTP, verifyOTP } from "../api/api";

interface FormData {
  otp: string;
}

interface VerifyOTPFormProps {
  email: string;
}

const VerifyOTPForm: React.FC<VerifyOTPFormProps> = ({ email }) => {
  const [formData, setFormData] = useState<FormData>({
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is missing. Please try signing up again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Submitting OTP verification with data:", {
        email,
        otp: formData.otp,
        type: "email",
      });
      await verifyOTP({
        email,
        otp: formData.otp,
        type: "email",
      });
      toast.success("Email verified successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      router.push("/Signin");
    } catch (err) {
      const errorMessage =
        typeof err === "string"
          ? err
          : "OTP verification failed. Please try again.";
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
      setIsSubmitting(false);
    }
  };

  const handleResendOTP = async () => {
    if (!email) {
      toast.error("Email is missing. Please try signing up again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Resending OTP for email:", email);
      await resendOTP({ email });
      toast.success("OTP resent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (err) {
      const errorMessage =
        typeof err === "string"
          ? err
          : "Failed to resend OTP. Please try again.";
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
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <LoadingScreen />
      ) : (
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
              <div className="text-center mb-8">
                <h1 className="text-white text-[24px] md:text-[38px] font-bold mb-4">
                  Verify OTP
                </h1>
                <div className="text-white space-y-1">
                  <p className="text-[20px] leading-tight md:text-[32px]">
                    Enter the 6-digit OTP code sent to{" "}
                    <span className="font-semibold">{email}</span>.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    placeholder="Enter OTP"
                    maxLength={6}
                    className="w-full px-6 py-4 bg-black/20 border border-white/30 rounded-full text-white placeholder-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#3EB9CF] text-white font-semibold rounded-full transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Verifying..." : "Verify"}
                </button>
              </div>

              <div className="text-center mt-6">
                <p className="text-white">
                  Didn&apos;t receive OTP?{" "}
                  <button
                    onClick={handleResendOTP}
                    disabled={isSubmitting}
                    className={`text-[#3EB9CF] transition-colors duration-200 underline ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Resend OTP
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyOTPForm;

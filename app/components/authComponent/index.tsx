"use client";

import React, { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

// Types for different screen configurations
interface FormField {
  name: string;
  type: "text" | "email" | "password" | "dropdown";
  placeholder: string;
  required?: boolean;
  options?: string[]; // for dropdown fields
}

interface AuthScreenConfig {
  title: string;
  subtitle?: string;
  description?: string;
  fields: FormField[];
  submitButtonText: string;
  bottomText?: string;
  bottomLinkText?: string;
  onBottomLinkClick?: () => void;
  onSubmit: (data: Record<string, string>) => void;
}

interface AuthComponentProps {
  config: AuthScreenConfig;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ config }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>(
    {}
  );
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPasswords((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  const toggleDropdown = (fieldName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    config.onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    const fieldValue = formData[field.name] || "";

    switch (field.type) {
      case "dropdown":
        const isOpen = openDropdowns[field.name];
        return (
          <div key={field.name} className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown(field.name)}
              className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-left text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 flex items-center justify-between"
            >
              <span className={fieldValue ? "text-white" : "text-gray-400"}>
                {fieldValue || field.placeholder}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && field.options && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-2xl shadow-lg z-10 max-h-48 overflow-y-auto">
                {field.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      handleInputChange(field.name, option);
                      toggleDropdown(field.name);
                    }}
                    className="w-full px-6 py-3 text-left text-white hover:bg-gray-600 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case "password":
        const showPassword = showPasswords[field.name];
        return (
          <div key={field.name} className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={fieldValue}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-6 py-4 pr-12 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              required={field.required}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field.name)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        );

      default:
        return (
          <input
            key={field.name}
            type={field.type}
            value={fieldValue}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            required={field.required}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-3xl p-8 border border-cyan-400 shadow-2xl shadow-cyan-400/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-white text-4xl font-bold mb-4">
              {config.title}
            </h1>
            {config.subtitle && (
              <p className="text-gray-300 text-lg mb-2">{config.subtitle}</p>
            )}
            {config.description && (
              <p className="text-gray-300 text-lg">{config.description}</p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {config.fields.map(renderField)}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-semibold rounded-2xl hover:from-cyan-500 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              {config.submitButtonText}
            </button>
          </form>

          {/* Bottom Link */}
          {config.bottomText && (
            <div className="text-center mt-6">
              <p className="text-gray-400">
                {config.bottomText}{" "}
                {config.bottomLinkText && (
                  <button
                    onClick={config.onBottomLinkClick}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline"
                  >
                    {config.bottomLinkText}
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage configurations for all screens:

// 1. Sign Up Screen
export const signUpConfig: AuthScreenConfig = {
  title: "Sign Up",
  subtitle: "Join early, Invite Friends",
  description: "Earn SED Tokens & travel rewards.",
  fields: [
    {
      name: "fullName",
      type: "text",
      placeholder: "Enter your Full Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "country",
      type: "dropdown",
      placeholder: "Select your country",
      required: true,
      options: [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "Pakistan",
        "India",
        "Brazil",
      ],
    },
    {
      name: "password",
      type: "password",
      placeholder: "Create Password",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Re-enter Password",
      required: true,
    },
  ],
  submitButtonText: "Sign Up",
  bottomText: "Already have an account?",
  bottomLinkText: "Sign In",
  onBottomLinkClick: () => console.log("Navigate to Sign In"),
  onSubmit: (data) => console.log("Sign Up submitted:", data),
};

// 2. Login Screen
export const loginConfig: AuthScreenConfig = {
  title: "Login",
  subtitle: "Welcome Back to SED World",
  description: "Earn SED Tokens & travel rewards.",
  fields: [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ],
  submitButtonText: "Login",
  bottomText: "Don't have an account?",
  bottomLinkText: "Sign Up",
  onBottomLinkClick: () => console.log("Navigate to Sign Up"),
  onSubmit: (data) => console.log("Login submitted:", data),
};

// 3. Forgot Password Screen
export const forgotPasswordConfig: AuthScreenConfig = {
  title: "Forgot Password",
  description:
    "Enter your email so we can send a 4-digit code to reset your password",
  fields: [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
  ],
  submitButtonText: "Send Code",
  bottomText: "Remember your password?",
  bottomLinkText: "Sign In",
  onBottomLinkClick: () => console.log("Navigate to Sign In"),
  onSubmit: (data) => console.log("Forgot Password submitted:", data),
};

// 4. Verify OTP Screen
export const verifyOtpConfig: AuthScreenConfig = {
  title: "Verify OTP",
  description: "Enter the 4-digit code we sent to your email",
  fields: [
    { name: "otp", type: "text", placeholder: "Enter OTP", required: true },
  ],
  submitButtonText: "Verify",
  bottomText: "Didn't receive code?",
  bottomLinkText: "Resend",
  onBottomLinkClick: () => console.log("Resend OTP"),
  onSubmit: (data) => console.log("OTP submitted:", data),
};

// 5. New Password Screen
export const newPasswordConfig: AuthScreenConfig = {
  title: "New Password",
  subtitle: "Create a new password to login SED World",
  description: "& Earn SED Tokens & travel rewards.",
  fields: [
    {
      name: "newPassword",
      type: "password",
      placeholder: "Create New Password",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm New Password",
      required: true,
    },
  ],
  submitButtonText: "Update Password",
  onSubmit: (data) => console.log("New Password submitted:", data),
};

// Usage Examples:
export const SignUpScreen = () => <AuthComponent config={signUpConfig} />;
export const LoginScreen = () => <AuthComponent config={loginConfig} />;
export const ForgotPasswordScreen = () => (
  <AuthComponent config={forgotPasswordConfig} />
);
export const VerifyOtpScreen = () => <AuthComponent config={verifyOtpConfig} />;
export const NewPasswordScreen = () => (
  <AuthComponent config={newPasswordConfig} />
);

export default AuthComponent;

"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Country data for dropdown
const countries = [
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  // Add more countries as needed
];
const Referral = [
  { code: "rf", name: "Referral LiCodenk " },

  // Add more countries as needed
];

const TravelSignupSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    walletAddress: "",
    referralCode: "",
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isReferalOpen, setReferalOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCountrySelect = (country: string) => {
    handleInputChange("country", country);
    setIsCountryOpen(false);
  };
  const handleReferalSelect = (referal: string) => {
    handleInputChange("referal", referal);
    setReferalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="relative overflow-hidden">
      <div className="min-h-screen bg-black p-6 flex relative items-center justify-center">
        <Image
          src={"/blurbg.svg"}
          alt="contact"
          width={100}
          height={100}
          className="h-full max-w-[800px] right-50 -top-10 absolute w-full"
        />

        <div className="max-w-7xl relative z-10 w-full">
          <div
            style={{
              backdropFilter: "blur(6px)",
            }}
            className="rounded-[15px] border-[0.5px] border-[rgba(255,255,255,0.34)] bg-[rgba(26,27,35,0.52)] p-6 shadow-[0_6px_0_0_#5DE7FF]"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Illustration */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src={"/contact.svg"}
                  alt="contact"
                  width={100}
                  height={100}
                  className="h-full  w-full"
                />
              </div>

              {/* Right Side - Form */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-[400] text-white mb-4 leading-tight">
                    Join early, Invite Friends
                  </h1>
                  <p className="text-xl text-gray-300 font-light">
                    Earn SED Tokens & travel rewards.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>
                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>
                  {/* Country Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-left text-white focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200 flex items-center justify-between"
                    >
                      <span
                        className={
                          formData.country ? "text-white" : "text-white/70"
                        }
                      >
                        {formData.country || "Select your country"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                          isCountryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isCountryOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/20 rounded-2xl shadow-xl z-10 max-h-60 overflow-y-auto">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleCountrySelect(country.name)}
                            className="w-full px-6 py-3 text-left text-white hover:bg-black/80 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                          >
                            {country.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your Password"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>{" "}
                  <div>
                    <input
                      type="email"
                      placeholder="Re-enter your Password"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setReferalOpen(!isReferalOpen)}
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-left text-white focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200 flex items-center justify-between"
                    >
                      <span
                        className={
                          formData.country ? "text-white" : "text-white/70"
                        }
                      >
                        {formData.country || "Enter referral code (optional)"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                          isCountryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {Referral && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/20 rounded-2xl shadow-xl z-10 max-h-60 overflow-y-auto">
                        {Referral.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleReferalSelect(country.name)}
                            className="w-full px-6 py-3 text-left text-white hover:bg-black/80 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                          >
                            {country.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#3EB9CF] text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#3EB9CF]/50"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/texture.svg"}
        alt="contact"
        width={100}
        height={100}
        className="h-full w-full"
      />
      ;
    </div>
  );
};

export default TravelSignupSection;

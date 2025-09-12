"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Country data for dropdown
const countries = [
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" }, // Note: "UK" is commonly used, but ISO code is "GB"
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CR", name: "Costa Rica" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea, North" },
  { code: "KR", name: "Korea, South" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican City" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

const Referral = [{ code: "rf", name: "Referral LiCodenk" }];

const TravelSignupSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    password: "", // Added password field
    confirmPassword: "", // Added confirm password field
    referralCode: "",
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isReferalOpen, setReferalOpen] = useState(false);
  const [error, setError] = useState(""); // Added error state for validation

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user types in password fields
    if (field === "password" || field === "confirmPassword") {
      setError("");
    }
  };

  const handleCountrySelect = (country: string) => {
    handleInputChange("country", country);
    setIsCountryOpen(false);
  };

  const handleReferalSelect = (referral: string) => {
    handleInputChange("referralCode", referral);
    setReferalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate password and confirm password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here (e.g., API call)
  };

  return (
    <div id="contact" className="relative overflow-hidden">
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
                  src={"/new_contact.svg"}
                  alt="contact"
                  width={100}
                  height={100}
                  className="h-full w-full"
                />
              </div>

              {/* Right Side - Form */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-5xl font-[400] text-white mb-4 leading-tight">
                    Join early, Invite Friends
                  </h1>
                  <p className="text-[18px] md:text-xl text-gray-300 font-light">
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
                  {/* Password Input */}
                  <div>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>
                  {/* Confirm Password Input */}
                  <div>
                    <input
                      type="password"
                      placeholder="Re-enter your Password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200"
                    />
                  </div>
                  {/* Error Message */}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {/* Referral Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setReferalOpen(!isReferalOpen)}
                      className="w-full px-6 py-4 bg-transparent border border-white/20 rounded-full text-left text-white focus:outline-none focus:border-[#3EB9CF] focus:ring-2 focus:ring-[#3EB9CF]/20 transition-all duration-200 flex items-center justify-between"
                    >
                      <span
                        className={
                          formData.referralCode ? "text-white" : "text-white/70"
                        }
                      >
                        {formData.referralCode ||
                          "Enter referral code (optional)"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                          isReferalOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isReferalOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/20 rounded-2xl shadow-xl z-10 max-h-60 overflow-y-auto">
                        {Referral.map((referral) => (
                          <button
                            key={referral.code}
                            type="button"
                            onClick={() => handleReferalSelect(referral.name)}
                            className="w-full px-6 py-3 text-left text-white hover:bg-black/80 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                          >
                            {referral.name}
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
    </div>
  );
};

export default TravelSignupSection;

import React from "react";
import { Navbar } from "../navbar";
import Image from "next/image";

// Hero Section Component
export const HeroSectionMain = () => {
  return (
    <div className="relative min-h-screen px-2 bg-black overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[20px] md:pt-[70px] ">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className=" text-[20px] md:text-[40px] max-w-[888px] mx-auto font-[400] text-white leading-normal mb-4 ">
            Travel is Broken. We&apos;re Fixing It - With Web3 + Patent-Ready
            AI.
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[24px]  text-white/80  max-w-[888px] mx-auto leading-relaxed">
            From scattered bookings to zero loyalty, the travel industry is
            fragmented.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-[24px]">
            <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 ">
              Join the Journey
            </button>
            <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 ">
              How SafariQ Works
            </button>
            <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 ">
              White Paper
            </button>
          </div>

          <Image
            src={"/Network.svg"}
            width={100}
            height={100}
            alt="network image"
            className="w-full py-6 h-[420px]"
          />
        </div>
      </div>
    </div>
  );
};

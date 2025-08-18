import { ecosystemBackgroundImage } from "@/utils/assets";
import React from "react";
import { Navbar } from "./navbar";

const HeroSectionBackground = () => {
  return (
    <div className="relative w-full h-[70vh] px-2 ">
      <Navbar />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ecosystemBackgroundImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 lg:px-4">
        {/* Main Heading */}
        <div className="mb-4 md:mb-5 lg:mb-6">
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-white mb-2">
            A Smart Travel Ecosystem
          </h1>
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-normal text-white">
            Born in the UAE, Built for the World
          </h2>
        </div>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] lg:text-xl font-normal text-white max-w-4xl leading-relaxed px-2 md:px-4 lg:px-0">
          SafariQ is a next-generation travel tech platform, designed to make
          every journey smarter, safer, and more rewarding.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionBackground;

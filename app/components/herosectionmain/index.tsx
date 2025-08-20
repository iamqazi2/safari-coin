import React from "react";
import { Navbar } from "../navbar";
import Image from "next/image";
import Lines from "../heroanimation";
import Starfield from "../heroanimation/starfield";
import dynamic from "next/dynamic";
import networkAnimation from "../../../public/animation.json";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Hero Section Component
export const HeroSectionMain = () => {
  return (
    <div className="relative min-h-screen px-2 bg-black overflow-hidden">
      <Image
        src={"/bg.png"}
        width={1920}
        height={1920}
        priority={true}
        quality={100}
        alt="network image"
        style={{
          animation: "spin 130s linear infinite",
        }}
        className="w-full h-full z-2 -bottom-110 object-contain opacity-20 animate-spin absolute"
      />
      <Starfield />
      <Lines />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 pt-[100px] md:pt-[140px] ">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className=" text-[28px] md:text-[40px] max-w-[888px] mx-auto font-[400] text-white leading-normal mb-4 ">
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
            <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5]  bg-black text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 ">
              Join the Journey
            </button>
            <a
              href={"/how-it-works"}
              className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 "
            >
              How SafariQ Works
            </a>
            <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[30px] py-4 rounded-full font-semibold text-lg transition-all duration-300 ">
              White Paper
            </button>
          </div>

          {/* Lottie Animation with Centered Circle SVG */}
          <div className="w-full relative py-6 h-[300px] md:h-[420px]">
            {/* Centered Circle SVG - Responsive across all screen sizes */}
            <Image
              src={"/CoinAnim.gif"}
              width={150}
              height={150}
              alt="network image"
              className="absolute top-[58%] left-[48.6%] lg:top-[55%] lg:left-[49.1%] md:top-[55%] md:left-[48.5%] transform -translate-x-1/2  -translate-y-1/2 z-10 w-[75px] h-[75px]  md:w-[140px] md:h-[140px] lg:w-[155px] lg:h-[155px]"
            />
            {/* Lottie Animation Background */}
            <Lottie
              animationData={networkAnimation}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
              className="absolute "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

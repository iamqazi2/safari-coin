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
    <div className="relative min-h-[calc(100vh-0px)] md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-120px)] px-2 bg-black overflow-hidden">
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
        className="w-full h-full z-2 object-contain opacity-20 animate-spin absolute bottom-[-50%] left-1/2 transform -translate-x-1/2"
      />
      <Starfield />
      <Lines />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-8 pt-[200px] md:pt-[120px] lg:pt-[120px] md:min-h-screen">
        <div className="text-center  gap-2 flex flex-col justify-between pb-4 sm:pb-6 md:pb-8">
          {/* Content Section */}
          <div className="flex-shrink-0">
            {/* Main Heading */}
            <h1 className="text-[16px] sm:text-[28px] md:text-[36px] lg:text-[40px] max-w-[888px] mx-auto font-[400] text-white leading-tight sm:leading-normal mb-3 sm:mb-4">
              Travel is Broken. We&apos;re Fixing It - <br />
              With Web3 + Patent-Ready AI.
            </h1>

            {/* Subtitle */}
            <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white/80 max-w-[888px] mx-auto leading-relaxed mb-2">
              From scattered bookings to zero loyalty, the travel industry is
              fragmented. SafariQ is building a unified ecosystem powered by
              Web3 and a revolutionary AI core, bridging global services into
              one intelligent travel experience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center mb-4 sm:mb-6 md:mb-8">
              <button className="w-[200px] md:w-[250px] border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300">
                Join the Journey
              </button>
              <a
                href={"/how-it-works"}
                className="w-[200px] md:w-[250px] border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300"
              >
                How SafariQ Works
              </a>
              <button className="w-[200px] md:w-[250px] border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300">
                White Paper
              </button>
            </div>
          </div>

          {/* Animation Section - Larger Lottie animation with centered coin */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] h-[200px] md:max-w-[580px] md:h-[440px] lg:max-w-[700px] lg:h-[520px] xl:max-w-[800px] xl:h-[450px] ">
              {/* Lottie Animation Background */}
              <Lottie
                animationData={networkAnimation}
                loop={true}
                autoplay={true}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className="absolute inset-0"
              />

              {/* Centered Circle SVG - Perfectly centered and proportionally sized */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={"/CoinAnim.gif"}
                    width={150}
                    height={150}
                    alt="network image"
                    className="z-10 w-[70px] h-[70px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px]
             -translate-x-[6px] -translate-y-[2px]
             md:-translate-x-[9px] md:-translate-y-[3px]
             lg:-translate-x-[11px] lg:-translate-y-[2px]]
             xl:-translate-x-[11px] xl:-translate-y-[2px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

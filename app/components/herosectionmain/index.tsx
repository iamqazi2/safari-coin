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
        className="w-full h-full z-2 object-contain opacity-20 animate-spin absolute -bottom-[60%] md:bottom-[-75%] left-1/2 transform -translate-x-1/2"
      />
      <Starfield />
      <Lines />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] md:pt-[100px] lg:pt-[120px] min-h-screen">
        <div className="text-center min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-120px)] flex flex-col justify-between pb-4 sm:pb-6 md:pb-8">
          {/* Content Section */}
          <div className="flex-shrink-0">
            {/* Main Heading */}
            <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] max-w-[888px] mx-auto font-[400] text-white leading-tight sm:leading-normal mb-3 sm:mb-4">
              Travel is Broken. We&apos;re Fixing It - With Web3 + Patent-Ready
              AI.
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white/80 max-w-[888px] mx-auto leading-relaxed mb-4 sm:mb-6">
              From scattered bookings to zero loyalty, the travel industry is
              fragmented. SafariQ is building a unified ecosystem powered by
              Web3 and a revolutionary AI core, bridging global services into
              one intelligent travel experience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-4 sm:mb-6 md:mb-8">
              <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300">
                Join the Journey
              </button>
              <a
                href={"/how-it-works"}
                className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300"
              >
                How SafariQ Works
              </a>
              <button className="w-full sm:w-auto border-1 hover:bg-[#00A8C5] border-[#00A8C5] bg-black text-white px-[24px] sm:px-[30px] py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300">
                White Paper
              </button>
            </div>
          </div>

          {/* Animation Section - Fixed height instead of flex-1 */}
          <div className="flex-shrink-0 flex items-center justify-center py-4">
            <div className="relative w-full max-w-[280px] h-[200px] sm:max-w-[320px] sm:h-[240px] md:max-w-[380px] md:h-[280px] lg:max-w-[450px] lg:h-[320px] xl:max-w-[520px] xl:h-[340px] 2xl:max-w-[570px] 2xl:h-[360px]">
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

              {/* Centered Circle SVG - Fixed positioning for perfect center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={"/CoinAnim.gif"}
                    width={150}
                    height={150}
                    alt="network image"
                    className="z-10 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px] xl:w-[110px] xl:h-[110px] 2xl:w-[130px] 2xl:h-[130px]"
                    style={{
                      transform: "translate(-4.5px, -2px)", // Fine-tune centering if needed
                    }}
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

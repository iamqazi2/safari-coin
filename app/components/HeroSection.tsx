import { heroContainerImage } from "@/utils/assets";
import Image from "next/image";
import React from "react";
import { Navbar } from "./navbar";

const HeroSections = () => {
  return (
    <div className="bg-black max-xl:px-2 pb-6 md:pb-10 text-white">
      <Navbar />

      <div className="container mx-auto py-6 md:py-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          {/* Content Section */}
          <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-auto order-2 lg:order-1">
            <h2 className="text-white font-normal text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[130%] text-center lg:text-left">
              {`How SafariQ Works`}
            </h2>
            <p className="text-white font-normal text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] opacity-80 leading-[130%] text-center lg:text-left">
              {`Built in the UAE for the World's Everyday Traveler`}
            </p>
            <p className="text-white font-normal text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] opacity-80 leading-[130%] text-center lg:text-left">
              {`SafariQ is your smart travel companion, designed to simplify,
            reward, and empower your travel journey. Whether you're a seasoned
            explorer or a casual vacationer, SafariQ brings every travel need
            under one intelligent platform. From booking flights to earning
            crypto rewards, SafariQ transforms how people travel, plan, and even
            earn, all from one place.`}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[365px] mt-[100px] lg:h-[365px] xl:w-[401px] xl:h-[401px] flex justify-center items-center order-1 lg:order-2">
            <div className="w-full lg:w-[365px] lg:h-[365px] xl:w-[401px] xl:h-[401px] flex justify-center items-center order-1 lg:order-2">
              <Image
                src={heroContainerImage}
                alt="AI Engine"
                className="object-cover w-[120px] h-[120px] md:w-[350px] md:h-[350px] lg:w-[365px] lg:h-[365px] xl:w-[401px] xl:h-[401px] animate-spin"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 401px"
                width={401}
                height={401}
                style={{
                  animation: "spin 10s linear infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSections;

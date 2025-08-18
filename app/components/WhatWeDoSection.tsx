import React from "react";
import { containerBlack } from "@/utils/assets";
import Icon from "@/component/icon";

const WhatWeDoSection = () => {
  return (
    <div>
      <section className="bg-black border border-black py-10 md:py-12 lg:py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 md:h-24 lg:h-32 opacity-10">
          <div className="absolute top-2 md:top-3 lg:top-4 left-6 md:left-8 lg:left-10 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 bg-gray-300 rounded-full blur-xl"></div>
          <div className="absolute top-4 md:top-6 lg:top-8 right-12 md:right-16 lg:right-20 w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 bg-gray-300 rounded-full blur-xl"></div>
          <div className="absolute top-8 md:top-12 lg:top-16 left-1/3 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-gray-300 rounded-full blur-xl"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Title Section */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-[28px] md:text-[36px] lg:text-4xl xl:text-5xl font-normal text-white mb-4 md:mb-5 lg:mb-6">
              What We Do
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-xl xl:text-2xl font-normal text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed">
              SafariQ combines smart travel tools with earning opportunities in
              one seamless ecosystem
            </p>
          </div>

          {/* Feature Boxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            {/* Row 1 */}
            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  TRAVEL INVENTORY PROVIDERS:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  Access To Vast Global Inventory At Competitive Prices
                </p>
              </div>
            </div>

            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  TRAVEL SAFETY & SMART REMINDERS:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  From Flight Alerts To Check-In Deadlines
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  AI-GENERATED ITINERARIES:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  Personalized Trip Planning
                </p>
              </div>
            </div>

            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  NFT-BACKED REWARDS & ACCESS:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  Utility NFTs That Unlock Lifetime Benefits
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  VISA & INSURANCE ASSISTANCE:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  Integrated Support For Stress-Free Travel
                </p>
              </div>
            </div>

            <div
              className="rounded-xl md:rounded-2xl"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-xl md:rounded-2xl mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[16px] md:text-[18px] lg:text-xl xl:text-[28px] font-bold text-white mb-2 md:mb-2.5 lg:mb-3">
                  COMMUNITY & RESELLER TOOLS:
                </h3>
                <p className="text-white text-opacity-80 text-[14px] md:text-[16px] lg:text-lg xl:text-2xl leading-relaxed">
                  Earn By Sharing SafariQ Within Your Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-12">
        <Icon
          src={containerBlack}
          className={`bg-cover rotate-180 w-full h-12`}
        />
      </div>
    </div>
  );
};

export default WhatWeDoSection;

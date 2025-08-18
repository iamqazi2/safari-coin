import React from "react";

const WhatMakesDifferentSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-[28px] md:text-[36px] lg:text-4xl xl:text-5xl font-normal text-black mb-4 md:mb-5 lg:mb-6">
            What Makes SafariQ Different?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8 xl:gap-10 font-medium">
          {/* Card 1: Web3 at the Core */}
          <div
            className="bg-white font-medium rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              border: "1px solid #62626257",
              backdropFilter: "blur(56px)",
              boxShadow: "0px 4px 0px 0px #00A8C5",
            }}
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-2xl xl:text-[32px] text-black mb-3 md:mb-3.5 lg:mb-4">
              Web3 at the Core
            </h3>
            <p className="text-black leading-relaxed text-[16px] md:text-[18px] lg:text-xl xl:text-2xl">
              Expiry free Rewards with our native token, the SafariQ E Dirham
              (SED), for bookings, referrals, and engagement.
            </p>
          </div>

          {/* Card 2: AI Integration */}
          <div
            className="bg-white font-medium rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              border: "1px solid #62626257",
              backdropFilter: "blur(56px)",
              boxShadow: "0px 4px 0px 0px #00A8C5",
            }}
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-2xl xl:text-[32px] text-black mb-3 md:mb-3.5 lg:mb-4">
              AI Integration
            </h3>
            <p className="text-black leading-relaxed text-[16px] md:text-[18px] lg:text-xl xl:text-2xl">
              Patent ready Core Ai for Smart recommendations, real-time
              assistance, and post-trip journaling.
            </p>
          </div>

          {/* Card 3: Earn Without Traveling */}
          <div
            className="bg-white font-medium rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              border: "1px solid #62626257",
              backdropFilter: "blur(56px)",
              boxShadow: "0px 4px 0px 0px #00A8C5",
            }}
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-2xl xl:text-[32px] text-black mb-3 md:mb-3.5 lg:mb-4">
              Earn Without Traveling
            </h3>
            <p className="text-black leading-relaxed text-[16px] md:text-[18px] lg:text-xl xl:text-2xl">
              Prelaunch campaigns, NFT rewards, and reseller income streams.
            </p>
          </div>

          {/* Card 4: NFT Utility Funding Model */}
          <div
            className="bg-white font-medium rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{
              border: "1px solid #62626257",
              backdropFilter: "blur(56px)",
              boxShadow: "0px 4px 0px 0px #00A8C5",
            }}
          >
            <h3 className="text-[20px] md:text-[24px] lg:text-2xl xl:text-[32px] text-black mb-3 md:mb-3.5 lg:mb-4">
              NFT Utility Funding Model
            </h3>
            <p className="text-black leading-relaxed text-[16px] md:text-[18px] lg:text-xl xl:text-2xl">
              Our early backers don&apos;t just fund us, they gain lifetime perks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSection;

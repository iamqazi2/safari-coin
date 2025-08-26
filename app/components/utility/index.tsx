import Image from "next/image";
import React from "react";

const SafariQSection: React.FC = () => {
  return (
    <section className="relative bg-black p-4 md:p-8 lg:p-12 overflow-hidden">
      <Image
        src={"/glow.svg"}
        alt="glow"
        width={900}
        height={1040}
        className="absolute z-0 -bottom-20 -left-80 opacity-30 sm:opacity-50 md:opacity-100"
      />
      <div className="relative z-50 max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal my-6 text-center ">
            <span className="text-[#fff]">
              Own Your Travel, With SED Tokens, NFTs, and Real Utility
            </span>
          </h1>
          <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed">
            SafariQ blends real-world travel with Web3 innovation, powered by
            two core pillars:  SafariQ Engagement Dirham (Token) and the
            Foundation Brick NFT Collection. Together, they create a
            rewards-driven, reseller-ready, and future-ready ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 shadow-[0_6px_0_0_#5DE7FF] border border-white/20 rounded-[16px] p-8 lg:grid-cols-3 gap-4 lg:gap-2 items-center ">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 lg:pr-8 lg:col-span-2">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-[20px] md:text-[24px] lg:text-[36px] xl:text-[36px] font-bold text-[#00A8C5] leading-tight">
                SafariQ Engagement Dirham (SED)
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] text-white font-medium">
                Your Everyday Travel Currency
              </p>
            </div>

            {/* Description */}
            <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed">
              SED is more than a reward system, It&apos;s a liquid, expiry-free,
              multi-purpose, AED pegged traveler&apos;s currency with built-in
              Moon Engine.
            </p>

            {/* How You Earn It */}
            <div className="space-y-4">
              <h2 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-white">
                How You Earn It:
              </h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Daily bookings, referrals, and social activities</span>
                </li>
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Extra rewards for early adopters and community participation
                  </span>
                </li>
              </ul>
            </div>

            {/* How You Use It */}
            <div className="space-y-4">
              <h2 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-white">
                How You Use It:
              </h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    World&apos;s widest utility → every city, every service.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Pay for hotels, local transportation & other travel needs
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Unlock SED-ONLY premium services and experiences</span>
                </li>
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Shop in the SafariQ marketplace</span>
                </li>
                <li className="flex items-start space-x-3 text-[16px] md:text-[20px]">
                  <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Join governance votes for shaping SafariQ&apos;s Web3 growth
                    & stacking rewards
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Statement */}
            <div className="pt-6">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-white">
                Unlike traditional loyalty points, SED keeps growing in value as
                SafariQ expands.
              </p>
            </div>
          </div>

          {/* Right Content - Coins Image */}
          <div className="relative h-96 md:h-[500px] lg:h-[500px] xl:h-[400px] lg:col-span-1">
            <Image
              src={"/coins_img.svg"}
              alt="SafariQ Engagement Dirham Coins"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariQSection;

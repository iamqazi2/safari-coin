import { whoAreYou } from "@/utils/assets";
import Image from "next/image";
import React from "react";

const WhoWeAreSection = () => {
  return (
    <div className="py-8 mx-auto md:py-10 lg:py-12 mx0auto container px-4 md:px-6">
      <div>
        <div
          className="bg-white rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-4 md:p-6 lg:p-8 xl:p-12 shadow-lg"
          style={{
            boxShadow: "0px 4px 0px 0px #00A8C5",
            backdropFilter: "blur(56px)",
            border: "1px solid #62626257",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-10 text-base md:text-lg lg:text-xl items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <p className="text-black leading-relaxed text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                  SafariQ is driven by a global team of travel industry
                  innovators, blockchain architects, and AI specialists, aiming
                  to redefine travel.
                </p>

                <p className="text-black leading-relaxed text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                  Our Operational Headquarter is in the UAE, while Web3
                  operations are managed through SafariQ Web3 in Estonia, a
                  European jurisdiction for blockchain and digital asset
                  businesses.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-black text-[16px] md:text-[18px] lg:text-base xl:text-[20px]">
                  This dual structure ensures:
                </h3>

                <ul className="space-y-2 pl-2 md:pl-3 lg:pl-4">
                  <li className="text-black leading-relaxed flex items-start text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                    <span className="text-black mr-2">•</span>
                    Global credibility through regulated company setups
                  </li>
                  <li className="text-black leading-relaxed flex items-start text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                    <span className="text-black mr-2">•</span>
                    Compliance with both UAE tourism and EU Web3 standards
                  </li>
                  <li className="text-black leading-relaxed flex items-start text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                    <span className="text-black mr-2">•</span>
                    Trust and transparency in how rewards, NFTs, and tokens are
                    managed
                  </li>
                </ul>
              </div>

              <p className="text-black leading-relaxed text-[14px] md:text-[16px] lg:text-base xl:text-[20px]">
                Individual profiles are being held back until an official global
                reveal, with credibility reflected in our transparent
                blockchain-based reward system, public NFT utility model, and
                corporate structure in two forward-thinking jurisdictions.
              </p>
            </div>

            {/* Right Section - Image with Overlay */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-[280px] h-[330px] md:w-[350px] md:h-[410px] lg:w-[444px] lg:h-[525px] rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  width={444}
                  height={525}
                  src={whoAreYou}
                  alt="SafariQ Team"
                  className="w-[280px] h-[330px] md:w-[350px] md:h-[410px] lg:w-[444px] lg:h-[525px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;

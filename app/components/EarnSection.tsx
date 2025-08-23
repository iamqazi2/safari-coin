import React from "react";
import {
  tick,
  containerBlack,
  blackBackground,
  graidentBackground2,
} from "@/utils/assets";
import Image from "next/image";
import Icon from "@/component/icon";

const EarnSection: React.FC = () => {
  return (
    <div>
      <section className="py-8 md:py-10 lg:py-12 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-black w-full h-[400px] md:h-[600px] lg:h-[765px]"
          style={{ backgroundImage: `url(${blackBackground})` }}
        />
        <div
          className="absolute top-0 left-0 inset-0 bg-center bg-black bg-no-repeat w-full md:w-[600px] lg:w-[828px] h-[400px] md:h-[600px] lg:h-[765px]"
          style={{ backgroundImage: `url(${graidentBackground2})` }}
        />
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          {/* Title Section */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-white mb-4 md:mb-5 lg:mb-6">
              Earn with SafariQ, Even Without Traveling
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-xl text-white font-normal text-opacity-90 max-w-4xl mx-auto leading-relaxed">
              With SafariQ, you don&apos;t need to must travel to earn. We
              empower users across the globe through:
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 lg:gap-8 relative">
            {/* Pre-Launch Campaigns Card */}
            <div
              className="backdrop-blur-sm w-full max-w-[625px] mx-auto lg:mx-0 rounded-[30px] md:rounded-[40px] lg:rounded-[53px] p-4 md:p-6 lg:p-8 transition-all duration-300"
              style={{
                border: "1.34px solid #D3D3D357",
                background: "#1A1B235E",
              }}
            >
              <div className="w-full flex justify-center items-center">
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] w-full lg:w-[445px] text-center font-bold text-white mb-4 md:mb-5 lg:mb-6">
                  Pre-Launch Campaigns
                </h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-4 md:py-5 lg:py-6 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-opacity-90">
                    Buy and collect Foundation Brick KEY NFTs, Instant rewards
                    with huge future value.
                  </span>
                </li>
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-4 md:py-5 lg:py-6 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-opacity-90">
                    Refer friends to earn early rewards and bonuses.
                  </span>
                </li>
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-4 md:py-5 lg:py-6 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-opacity-90">
                    Join our Web3 gamified quests and community drives.
                  </span>
                </li>
              </ul>
            </div>

            {/* Post-Launch Income Opportunities Card */}
            <div
              className="rounded-[30px] md:rounded-[40px] lg:rounded-[53px] w-full max-w-[625px] mx-auto lg:mx-0 p-4 md:p-6 lg:p-8 transition-all duration-300 backdrop-blur-sm relative"
              style={{
                border: "1.34px solid #D3D3D357",
                background: "#1A1B235E",
              }}
            >
              <div className="w-full flex justify-center items-center">
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] w-full lg:w-[445px] text-center font-bold text-white mb-4 md:mb-5 lg:mb-6">
                  Post-Launch Income Opportunities:
                </h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-3 md:py-3 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white font-normal text-[16px] md:text-[18px] lg:text-xl">
                    <strong>Become a Reseller,</strong>{" "}
                    <span className="opacity-80">
                      Hold a NFT as a Reseller account approval. earn
                      commissions on maximum travel services like flight, hotel,
                      or package bookings for others.
                    </span>
                  </span>
                </li>
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-3 md:py-3 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-opacity-90">
                    Refer & Earn SED token rewards for every user you onboard
                    and even more rewards by holding the NFT.
                  </span>
                </li>
                <li
                  className="flex items-start rounded-xl md:rounded-2xl px-3 md:px-4 py-3 md:py-3 font-normal text-[16px] md:text-[18px] lg:text-xl"
                  style={{
                    background: "#0000003D",
                    border: "1px solid #FFFFFF38",
                  }}
                >
                  <Image
                    height={10}
                    width={10}
                    src={tick}
                    alt="checkmark"
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-opacity-90">
                    Community Engagement participate in promotions, reviews, and
                    feedback loops for more rewards.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* SafariQ Coin Image */}
        <div className="absolute -bottom-2 -right-8 md:-right-12 lg:-right-16 z-0 w-72 h-72 md:w-80 md:h-80 lg:w-[455px] lg:h-[426px] opacity-90">
          <Image
            height={10}
            width={10}
            src={"/Coin_Combined_new.svg"}
            alt="SafariQ E-Dirham Coin"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
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

export default EarnSection;

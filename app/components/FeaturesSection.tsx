import React from "react";
import {
  bookSmarter,
  travelSafer,
  earnMore,
  participateInFuturistic,
} from "@/utils/assets";
import Icon from "@/component/icon";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-7 lg:mb-8">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-black mb-2">
            SafariQ Is More Than a Travel Platform
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-xl font-normal text-black max-w-3xl mx-auto leading-relaxed">
            It&apos;s a movement - a shift in how people see travel, technology,
            and value.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Top-Left Card: Book Smarter */}
          <div
            className="rounded-xl md:rounded-2xl p-3 md:p-4 transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #00a8c5",
              backdropFilter: "blur(56px)",
            }}
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="rounded-full h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px]">
                <div className="bg-[#4CD9ED] h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px] rounded-full flex items-center justify-center">
                  <Icon
                    src={bookSmarter}
                    className={`bg-contain w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px]`}
                  />
                </div>
              </div>
              <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-normal text-black">
                Book Smarter
              </h3>
            </div>
          </div>

          {/* Top-Right Card: Travel Safer */}
          <div
            className="rounded-xl md:rounded-2xl p-3 md:p-4 transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #00a8c5",
              backdropFilter: "blur(56px)",
            }}
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="rounded-full h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px]">
                <div className="bg-[#4CD9ED] h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px] rounded-full flex items-center justify-center">
                  <Icon
                    src={travelSafer}
                    className={`bg-contain w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px]`}
                  />
                </div>
              </div>

              <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-normal text-black">
                Travel Safer
              </h3>
            </div>
          </div>

          {/* Bottom-Left Card: Earn More */}
          <div
            className="rounded-xl md:rounded-2xl p-3 md:p-4 transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #00a8c5",
              backdropFilter: "blur(56px)",
            }}
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="rounded-full h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px]">
                <div className="bg-[#4CD9ED] h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px] rounded-full flex items-center justify-center">
                  <Icon
                    src={earnMore}
                    className={`bg-contain w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px]`}
                  />
                </div>
              </div>
              <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-normal text-black">
                Earn More
              </h3>
            </div>
          </div>

          {/* Bottom-Right Card: Participate in Futuristic Economy */}
          <div
            className="rounded-xl md:rounded-2xl p-3 md:p-4 transition-shadow duration-300"
            style={{
              background: "#ffffff",
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #00a8c5",
              backdropFilter: "blur(56px)",
            }}
          >
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="rounded-full h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px]">
                <div className="bg-[#4CD9ED] h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[84px] lg:w-[84px] rounded-full flex items-center justify-center">
                  <Icon
                    src={participateInFuturistic}
                    className={`bg-contain w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px]`}
                  />
                </div>
              </div>
              <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-normal text-black">
                Participate in a futuristic, decentralized economy
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from "react";
import Icon from "./icon";
import { containerBlack } from "@/utils/assets";

const AIWeb3Section: React.FC = () => {
  return (
    <div>
      <div className="w-full h-12 -mb-2">
        <Icon src={containerBlack} className={`bg-cover w-full h-12`} />
      </div>
      <section className="bg-black border-black border py-12 md:py-16 lg:py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-[28px] md:text-[36px] lg:text-4xl xl:text-5xl font-normal text-white mb-4 md:mb-5 lg:mb-6">
              Powered by AI, Enhanced by Web3
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-xl xl:text-2xl font-normal text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed">
              SafariQ isn&apos;t just another travel platform, it&apos;s a next-Generation
              travel ecosystem.
            </p>
          </div>

          {/* Content Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 lg:gap-8">
            {/* AI Integration Box */}
            <div
              className="rounded-2xl w-full max-w-[610px] mx-auto lg:mx-0"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-2xl w-full h-auto min-h-[300px] md:min-h-[350px] lg:h-[411px] mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white mb-4 md:mb-5 lg:mb-6">
                  AI Integration
                </h3>
                <ul className="space-y-3 md:space-y-4 text-[16px] md:text-[18px] lg:text-xl xl:text-2xl font-normal">
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Personalized recommendations (hotels, flights, activities)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Smart reminders and real-time assistance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Post-trip journaling & auto-generated timelines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Auto-assist for bookings, document handling, and more
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web3 Integration Box */}
            <div
              className="rounded-2xl w-full max-w-[610px] mx-auto lg:mx-0"
              style={{
                boxShadow: "0px 2px 0px 0px #00A8C5",
              }}
            >
              <div
                className="rounded-2xl w-full h-auto min-h-[300px] md:min-h-[350px] lg:h-[411px] mb-1 p-4 md:p-5 lg:p-6 xl:p-8 transition-colors duration-300"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #4CD9ED",
                }}
              >
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white mb-4 md:mb-5 lg:mb-6">
                  Web3 Integration
                </h3>
                <ul className="space-y-3 md:space-y-4 text-[16px] md:text-[18px] lg:text-xl xl:text-2xl font-normal">
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Travel is now a revenue stream, not just an expense.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Every booking, referral, or engagement earns you AED
                      pegged SafariQ E Dirham (SED), our native crypto reward
                      token.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3 mt-1">•</span>
                    <span className="text-white text-opacity-90">
                      Seamless Web3 wallet access, token rewards, and NFT
                      utilities, all within the SafariQ platform.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWeb3Section;

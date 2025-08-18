import React from "react";
import Icon from "./icon";
import { driveInnovation, buildSustainable, leadInWeb3 } from "@/utils/assets";

const UAEWeb3Section: React.FC = () => {
  return (
    <section className="relative pb-8 md:pb-10 lg:pb-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Top Section - Main Heading */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h1 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] leading-[130%] text-center text-black mb-4 md:mb-5 lg:mb-6">
            Built in the UAE,
            <br />
            Powered by Estonia&apos;s Web3 Credibility
          </h1>

          {/* Introductory Description */}
          <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[130%] text-center text-black text-opacity-90">
            We are proud to be UAE-born, aligning with the country&apos;s vision
            to:
          </p>
        </div>

        {/* Middle Section - Three Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4 mb-10 md:mb-12 lg:mb-16">
          {/* Card 1: Drive Innovation */}
          <div className="flex flex-col items-center">
            <div
              className="bg-white rounded-[15px] p-4 md:p-5 lg:p-6 w-full flex flex-col items-center justify-center gap-3"
              style={{
                boxShadow: "0px 4px 0px 0px #00A8C5",
                backdropFilter: "blur(56px)",
                border: "1px solid #62626257",
              }}
            >
              {/* Icon with circular background */}
              <div className="rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px]">
                <div className="bg-[#4CD9ED] rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px] flex items-center justify-center">
                  <Icon
                    src={driveInnovation}
                    className={`bg-contain w-[35px] md:w-[40px] lg:w-[50px] h-[35px] md:h-[40px] lg:h-[50px]`}
                  />
                </div>
              </div>

              {/* Card Text */}
              <h3 className="font-normal text-[18px] md:text-[20px] lg:text-[24px] leading-[130%] text-center text-black">
                Drive innovation in travel and tourism
              </h3>
            </div>
          </div>

          {/* Card 2: Build Sustainable Economies */}
          <div className="flex flex-col items-center">
            <div
              className="bg-white rounded-[15px] p-4 md:p-5 lg:p-6 w-full flex flex-col items-center justify-center gap-3"
              style={{
                boxShadow: "0px 4px 0px 0px #00A8C5",
                backdropFilter: "blur(56px)",
                border: "1px solid #62626257",
              }}
            >
              {/* Icon with circular background */}
              <div className="rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px]">
                <div className="bg-[#4CD9ED] rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px] flex items-center justify-center">
                  <Icon
                    src={buildSustainable}
                    className={`bg-contain w-[35px] md:w-[40px] lg:w-[50px] h-[35px] md:h-[40px] lg:h-[50px]`}
                  />
                </div>
              </div>

              {/* Card Text */}
              <h3 className="font-normal text-[18px] md:text-[20px] lg:text-[24px] leading-[130%] text-center text-black">
                Build sustainable, tech-driven economies
              </h3>
            </div>
          </div>

          {/* Card 3: Lead in Web3 */}
          <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
            <div
              className="bg-white rounded-[15px] p-4 md:p-5 lg:p-6 w-full flex flex-col items-center justify-center gap-3"
              style={{
                boxShadow: "0px 4px 0px 0px #00A8C5",
                backdropFilter: "blur(56px)",
                border: "1px solid #62626257",
              }}
            >
              {/* Icon with circular background */}
              <div className="rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px]">
                <div className="bg-[#4CD9ED] rounded-full h-[70px] md:h-[80px] lg:h-[95px] w-[70px] md:w-[80px] lg:w-[95px] flex items-center justify-center">
                  <Icon
                    src={leadInWeb3}
                    className={`bg-contain w-[35px] md:w-[40px] lg:w-[50px] h-[35px] md:h-[40px] lg:h-[50px]`}
                  />
                </div>
              </div>

              {/* Card Text */}
              <h3 className="font-normal text-[18px] md:text-[20px] lg:text-[24px] leading-[130%] text-center text-black">
                Lead in Web3 and blockchain adoption
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Section - Concluding Statement */}
        <div className="text-center">
          <p className="font-normal text-[20px] md:text-[26px] lg:text-[32px] leading-[130%] text-center text-black text-opacity-90">
            Through SafariQ Web3 in Estonia, we reinforce our global trust
            framework, combining UAE&apos;s tourism leadership with
            Europe&apos;s blockchain-friendly regulations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UAEWeb3Section;

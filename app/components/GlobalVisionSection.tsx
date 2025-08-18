import React from "react";
import { buildings } from "@/utils/assets";
import Image from "next/image";

const GlobalVisionSection: React.FC = () => {
  return (
    <section className="container px-4 mx-auto pt-14 md:px-6">
      <div className="">
        {/* Main Container */}
        <div
          className="bg-white rounded-[20px] overflow-hidden md:rounded-[30px] lg:rounded-[40px] relative p-6 md:p-8 lg:p-0"
          style={{
            background: "#ffffff",
            border: "1px solid #62626257",
            boxShadow: "0px 4px 0px 0px #00a8c5",
            backdropFilter: "blur(56px)",
          }}
        >
          <h2 className="absolute w-full top-6 left-0 right-0 text-[24px] md:text-[32px] lg:text-[40px] text-center font-normal text-black px-4 md:px-6">
            Global Vision, UAE Roots
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12  items-center pt-20 md:pt-24 lg:pt-0">
            {/* Left Side - Text Content */}
            <div className="space-y-4 lg:mt-8 max-xl:mt-8 md:space-y-5 lg:space-y-6 pl-4 md:pl-8 lg:pl-12 order-2 lg:order-1">
              <p className="text-[16px] md:text-[20px] lg:text-2xl font-normal text-black mb-6 md:mb-7 lg:mb-8">
                Proudly Based in the UAE, SafariQ stands as a symbol of
                innovation from the Middle East to the world. We are committed
                to
              </p>

              <ul className="space-y-3 md:space-y-4 text-[16px] md:text-[20px] lg:text-2xl font-normal text-black">
                <li className="flex items-start">
                  <span className="mr-2 md:mr-3 mt-1 text-lg md:text-xl">
                    •
                  </span>
                  <span className="text-sm md:text-base lg:text-lg">
                    Supporting the UAE&apos;s Travel and Web3 ecosystems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 md:mr-3 mt-1 text-lg md:text-xl">
                    •
                  </span>
                  <span className="text-sm md:text-base lg:text-lg">
                    Offering real-world utility to global users
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 md:mr-3 mt-1 text-lg md:text-xl">
                    •
                  </span>
                  <span className="text-sm md:text-base lg:text-lg">
                    Becoming the most rewarding travel platform across borders
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side - Dubai Cityscape Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-48 md:h-64 lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  fill
                  src={buildings}
                  alt="Dubai Cityscape with Burj Khalifa and modern architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalVisionSection;

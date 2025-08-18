"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const TravelTokensSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPinned, setIsPinned] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Pin when section reaches top of viewport
        if (sectionTop <= 0 && sectionTop > -sectionHeight + windowHeight) {
          setIsPinned(true);

          // Calculate scroll progress within the pinned section
          const scrollProgress =
            Math.abs(sectionTop) / (sectionHeight - windowHeight);

          // Switch to step 2 when scrolled halfway through the pinned section
          if (scrollProgress > 0.5) {
            setActiveStep(2);
          } else {
            setActiveStep(1);
          }
        } else if (sectionTop <= -sectionHeight + windowHeight) {
          // Keep section visible after animation completes
          setIsPinned(false);
          setActiveStep(2);
        } else {
          setIsPinned(false);
          if (sectionTop > 0) {
            setActiveStep(1);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="h-[100vh] bg-black text-white relative">
      <Image
        src={"/glow.svg"}
        alt="coins"
        width={900}
        height={900}
        className=" absolute -left-100 z-30 -bottom-50 "
      />
      <div
        className={`${
          isPinned ? "fixed top-0 left-0 w-full" : ""
        } h-screen bg-black`}
      >
        <div className="flex items-center justify-between px-8 lg:px-16 h-full max-w-[1240px]  mx-auto">
          {/* Left Side - Steps */}
          <div className="flex-1 ">
            {/* Step Navigation */}
            <div className="space-y-8">
              {/* Step 01 */}
              <div className="flex items-start space-x-6">
                <div
                  className={`flex-shrink-0 w-16 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                    activeStep === 1
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-gray-600 text-gray-500"
                  }`}
                >
                  01
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-start space-x-6">
                <div
                  className={`flex-shrink-0 w-16 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                    activeStep === 2
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-gray-600 text-gray-500"
                  }`}
                >
                  02
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="">
            <div className="relative">
              {/* Card 1 */}
              <div className={`${activeStep === 1 ? "block" : "hidden"}`}>
                <div className="relative w-[1046px] z-10 h-[560px] bg-[url('/new-blur.png')]  bg-cover bg- bg-no-repeat ">
                  {/* Subtle gradient overlay */}

                  {/* Content */}
                  <div className=" py-8 px-6 z-10">
                    <div className="mb-6">
                      <h3 className="text-[20px] md:text-[36px] text-[#00A8C5] font-medium mb-3">
                        SafariQ Engagement Dirham111
                      </h3>
                      <div className="text-[24px] text-gray-300 space-y-1">
                        <p>
                          Created for Rewards,{" "}
                          <span className="text-white text-[24px] font-semibold">
                            AED Pegged SED
                          </span>
                          .
                        </p>
                        <p>Prelaunch → Signup + referrals.</p>
                        <p>Post Launch → travel cashback.</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-[20px] text-gray-300 mb-8">
                      <div className="flex items-start">
                        <span className="w-3 h-3 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          World&apos;s widest utility → every city, every service.
                        </span>
                      </div>
                      <div className="flex text-[20px] items-start">
                        <span className="w-3 h-3 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          Imagine: Travellers Currency without borders &
                          conversions.
                        </span>
                      </div>
                    </div>

                    <Image
                      src={"/coins.svg"}
                      alt="coins"
                      width={100}
                      height={100}
                      className="w-[500px] h-[340px] absolute top-10 -right-8"
                    />

                    {/* Buttons */}
                    <div className="flex absolute bottom-10 right-1/10 space-x-3 mt-auto">
                      <button className="px-6 py-2.5 bg-slate-700/70 hover:bg-slate-600/70 text-white text-sm rounded-xl border border-slate-500/40 transition-all duration-200 hover:border-slate-400/60">
                        Mint NFT
                      </button>
                      <button className="px-6 py-2.5 bg-[#3EB9CF] text-white text-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-teal-500/25">
                        Get Bonus
                      </button>
                    </div>
                  </div>

                  {/* Subtle decorative gradient blob */}
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`${activeStep === 2 ? "block" : "hidden"}`}>
                <div className="relative w-[1046px] z-10 h-[560px] bg-[url('/new-blur.png')]  bg-cover bg- bg-no-repeat ">
                  {/* Subtle gradient overlay */}

                  {/* Content */}
                  <div className=" py-8 px-6 z-10">
                    <div className="mb-6">
                      <h3 className="text-[20px] md:text-[36px] text-[#00A8C5] font-medium mb-3">
                        SafariQ Engagement Dirham
                      </h3>
                      <div className="text-[24px] text-gray-300 space-y-1">
                        <p>
                          Created for Rewards,{" "}
                          <span className="text-white text-[24px] font-semibold">
                            AED Pegged SED
                          </span>
                          .
                        </p>
                        <p>Prelaunch → Signup + referrals.</p>
                        <p>Post Launch → travel cashback.</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-[20px] text-gray-300 mb-8">
                      <div className="flex items-start">
                        <span className="w-3 h-3 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          World&apos;s widest utility → every city, every service.
                        </span>
                      </div>
                      <div className="flex text-[20px] items-start">
                        <span className="w-3 h-3 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>
                          Imagine: Travellers Currency without borders &
                          conversions.
                        </span>
                      </div>
                    </div>

                    <Image
                      src={"/coins.svg"}
                      alt="coins"
                      width={100}
                      height={100}
                      className="w-[500px] h-[340px] absolute top-10 -right-8"
                    />

                    {/* Buttons */}
                    <div className="flex absolute bottom-10 right-1/10 space-x-3 mt-auto">
                      <button className="px-6 py-2.5 bg-slate-700/70 hover:bg-slate-600/70 text-white text-sm rounded-xl border border-slate-500/40 transition-all duration-200 hover:border-slate-400/60">
                        Mint NFT
                      </button>
                      <button className="px-6 py-2.5 bg-[#3EB9CF] text-white text-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-teal-500/25">
                        Get Bonus
                      </button>
                    </div>
                  </div>

                  {/* Subtle decorative gradient blob */}
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTokensSection;

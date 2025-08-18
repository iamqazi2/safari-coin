import React from "react";

const JoinMovementSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-4xl p-12 md:p-16 text-center">
          {/* Main Heading */}
          <h2 className="text-[40px] font-normal leading-[130%] text-center text-white mb-6">
            Join the SafariQ Movement
          </h2>

          {/* Description */}
          <p className="text-[20px] font-semibold leading-[130%] text-center text-white mb-12 max-w-4xl mx-auto">
            SafariQ is more than a travel brand, it&apos;s a movement redefining how
            people see travel, technology, and rewards
          </p>

          {/* Bullet Points Section */}
          <div className="mb-12">
            {/* First Row - 3 bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <div className="flex items-start justify-center">
                <span className="text-black bg-white rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-[20px] font-medium leading-[130%] text-left">
                  Mint your Foundation Brick NFT
                </span>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-black bg-white rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-[20px] font-medium leading-[130%] text-left">
                  Join our prelaunch referral campaign
                </span>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-black bg-white rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-[20px] font-medium leading-[130%] text-left">
                  Earn rewards now, travel later |
                </span>
              </div>
            </div>

            {/* Second Row - 2 bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">
              <div className="flex items-start justify-center">
                <span className="text-black bg-white rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-[20px] font-medium leading-[130%] text-left">
                  Become a travel reseller after launch
                </span>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-black bg-white rounded-full w-1.5 h-1.5 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-white text-[20px] font-medium leading-[130%] text-left">
                  Help shape the future of global travel
                </span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#00A8C5] border border-[#FFFFFF4D] text-white font-semibold text-base leading-[100%] text-center px-[30px] py-[18px] rounded-[50px] transition-all duration-300">
              Mint Your NFT
            </button>
            <button className="bg-[#1A1B235E] border-2 border-[#D3D3D357] text-white font-semibold text-base leading-[100%] text-center px-8 py-4 rounded-[47px] transition-all duration-300">
              Join Prelaunch Rewards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;

import React from "react";

const ReadyToBeginSection: React.FC = () => {
  return (
    <section className="py-6 md:py-8 lg:py-10 px-4">
      <div className="max-w-[1116px] mx-auto px-0">
        {/* Main Dark Container */}
        <div className="bg-black rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-6 md:p-10 lg:p-16 text-center relative">
          {/* Content */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-8 md:mb-10 lg:mb-12">
            {/* Main Heading */}
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-normal leading-[130%] text-center text-white mb-6 md:mb-7 lg:mb-8">
              Ready to Begin?
            </h2>

            {/* Taglines */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[130%] text-center text-white">
              Explore. Book. Earn. Share.
            </p>

            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[130%] text-center text-white">
              Be part of the SafariQ journey from Day One.
            </p>

            {/* Call to Action Text */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[130%] text-center text-white mt-6 md:mt-7 lg:mt-8">
              Get your Foundation Brick NFT today and unlock a lifetime of
              benefits.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            {/* Primary Button - Get Prelaunch bonus - Join */}
            <button className="bg-[#00A8C5] border border-[#FFFFFF4D] text-white font-normal text-sm md:text-base leading-[100%] text-center px-[20px] md:px-[25px] lg:px-[30px] py-[14px] md:py-[16px] lg:py-[18px] rounded-[40px] md:rounded-[45px] lg:rounded-[50px] transition-all duration-300 min-w-[180px] md:min-w-[190px] lg:min-w-[200px]">
              Get Prelaunch bonus - Join
            </button>

            {/* Secondary Button - White Paper */}
            <button className="bg-[#1A1B235E] border border-[#D3D3D357] text-white font-normal text-sm md:text-base leading-[100%] text-center px-[20px] md:px-[25px] lg:px-[30px] py-[14px] md:py-[16px] lg:py-[18px] rounded-[40px] md:rounded-[45px] lg:rounded-[50px] backdrop-blur-[56px] transition-all duration-300 min-w-[180px] md:min-w-[190px] lg:min-w-[200px]">
              White Paper
            </button>

            {/* Secondary Button - Mint Your NFT Now */}
            <button className="bg-[#1A1B235E] border border-[#D3D3D357] text-white font-normal text-sm md:text-base leading-[100%] text-center px-[20px] md:px-[25px] lg:px-[30px] py-[14px] md:py-[16px] lg:py-[18px] rounded-[40px] md:rounded-[45px] lg:rounded-[50px] backdrop-blur-[56px] transition-all duration-300 min-w-[180px] md:min-w-[190px] lg:min-w-[200px]">
              Mint Your NFT Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBeginSection;

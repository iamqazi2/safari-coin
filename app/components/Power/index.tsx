import Image from "next/image";
import React from "react";

const SEDNFTsSection: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 relative lg:px-8">
      <Image
        src={"/glow.svg"}
        alt="glow"
        width={900}
        height={1040}
        className="absolute z-0 -bottom-10 -left-80 opacity-30 sm:opacity-50 md:opacity-100"
      />
      <div className="max-w-7xl border relative shadow-[0_6px_0_0_#5DE7FF] border-white/20 rounded-[16px] p-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-normal text-[#00a8c5] mb-6">
                <span className="">The Power of SED + NFTs</span>
              </h2>

              <h3 className="text-[18px] md:text-[18px] lg:text-[20px] font-normal text-white mb-8">
                Together, they create a self-reinforcing economy
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[14px] md:text-[16px] text-white/80">
                    <span className="font-normal">SED =</span> Traveler Rewards
                    & Payments
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-[14px] md:text-[16px] text-white/80">
                    <span className="font-normal">NFTs =</span> Business Rights
                    & Future Metaverse Passport
                  </p>
                </div>
              </div>

              <p className="text-lg text-white/80 mt-8 leading-relaxed">
                This dual system ensures that the more travelers and resellers
                join SafariQ, the stronger both assets become.
              </p>
            </div>
          </div>

          {/* Right Content - Placeholder for Image */}
          <div className="relative">
            <Image
              src={"/power.svg"}
              width={100}
              height={100}
              alt="power image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEDNFTsSection;

import Image from "next/image";
import React from "react";

const FoundationBrickSection: React.FC = () => {
  return (
    <section className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="text-[#00A8C5]">
            Foundation Brick NFT Collection
          </span>
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* First Card - Your Reseller Key & Beyond */}
          <div className="bg-black border border-white/20 p-8 shadow-[0_6px_0_0_#5DE7FF] rounded-[16px] ">
            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-white mb-6">
              Your Reseller Key & Beyond
            </h2>

            <p className="text-white/80 text-[16px] text-[20px] leading-relaxed mb-4">
              World&apos;s largest NTF collection in Paid, RWA and Business
              Utility categories. Each Foundation Brick KEY NFT is a functional
              certificate, your entry pass to the SafariQ reseller economy and
              future Metaverse.
            </p>

            <Image
              src={"/nfts.svg"}
              height={100}
              width={300}
              className="w-full h-[150px]  md:h-[210px] "
              alt="nft images"
            />
          </div>

          {/* Second Card - Utility & Perks */}
          <div className="bg-black border border-white/20 p-8 rounded-[16px] shadow-[0_6px_0_0_#5DE7FF]">
            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-white mb-4">
              Utility & Perks:
            </h2>

            <div className="space-y-1">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  Acts as a SafariQ Reseller Certificate (just like becoming an
                  Amazon reseller).
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  Unlocks reseller dashboards, bulk deals & commission earnings.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  Doubled referral rewards & access to beta features.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  Instant minting surprises, NFTs holds random rewards worth up
                  to $10,000.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  Ultra Rare, Grail NFTs grant extraordinary privileges.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] text-[20px] leading-relaxed">
                  In the future, Bricks also unlock roles in the SafariQ
                  Metaverse, with AR travel routes and storytelling experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationBrickSection;

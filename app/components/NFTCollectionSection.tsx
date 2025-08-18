import React from "react";

const NFTCollectionSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Header Section */}
        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-black mb-4 md:mb-5 lg:mb-6">
          SafariQ is Funded & Powered by Utility NFT Collection
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-xl font-normal text-black max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10 lg:mb-12">
          At the heart of our Web3 model is the SafariQ Foundation Brick KEY NFT
          Collection, a unique NFT-based crowdfunding approach designed to
          democratize support and participation.
        </p>

        {/* Top Row of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-7">
          {/* Card 1: 1 Million Foundation Bricks */}
          <div
            className="bg-white p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center rounded-[30px] md:rounded-[35px] lg:rounded-[43px]"
            style={{
              border: "1px solid #62626257",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl text-black">
              <span className="font-bold">1 Million </span>
              <span className="font-normal">
                Foundation <br /> Bricks divided into
              </span>
            </h3>
            <span className="font-bold text-black text-[18px] md:text-[20px] lg:text-2xl">
              10 Layers
            </span>
          </div>

          {/* Card 2: Layer 1 Starting at just $5 */}
          <div
            className="bg-white p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center rounded-[30px] md:rounded-[35px] lg:rounded-[43px]"
            style={{
              border: "1px solid #62626257",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
              Layer 1 Starting at just <span className="font-bold">$5</span>
            </h3>
            <span className="font-normal text-black text-[18px] md:text-[20px] lg:text-2xl">
              these NFTs represent early belief in our ecosystem.
            </span>
          </div>

          {/* Card 3: Each NFT offers lifetime utility */}
          <div
            className="bg-white p-4 md:p-6 lg:p-6 flex flex-col justify-center items-center text-center rounded-[30px] md:rounded-[35px] lg:rounded-[43px] sm:col-span-2 lg:col-span-1"
            style={{
              border: "1px solid #62626257",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black mb-3 md:mb-4">
              Each NFT offers lifetime utility, such as:
            </h3>
            <ul className="list-none flex flex-wrap gap-x-2 md:gap-x-3 space-y-1 md:space-y-2 text-xs md:text-sm font-medium text-black">
              <li>• Travel vouchers</li>
              <li>• Exclusive airdrops</li>
              <li>• Guaranteed SED token rewards</li>
              <li>• Resale rights</li>
              <li>• Referral bonuses and marketplace perks</li>
            </ul>
          </div>
        </div>

        {/* Separator Text */}
        <p className="text-[18px] md:text-[20px] lg:text-xl text-black font-medium mb-6 md:mb-7">
          Special NFT serials unlock even more
        </p>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          {/* Card 4: Ultra Rare / Grails */}
          <div
            className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center"
            style={{
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #7FB900",
              backdropFilter: "blur(56px)",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
              Ultra Rare / Grails
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-2xl font-normal text-black">
              Round numbers Serials = $10,000 BuyBack value + Utility
            </p>
          </div>

          {/* Card 5: 5 continuous identical digits */}
          <div
            className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center"
            style={{
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #E08A00",
              backdropFilter: "blur(56px)",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
              5 continuous identical digits
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-2xl font-normal text-black">
              serial number = $550 travel voucher + Utility
            </p>
          </div>

          {/* Card 6: 4 continuous identical digits */}
          <div
            className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1"
            style={{
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #0081FB",
              backdropFilter: "blur(56px)",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
              4 continuous identical digits
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-2xl font-normal text-black">
              serial number = $55 travel voucher + Utility
            </p>
          </div>
        </div>

        {/* Third Row of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Card 7: Standard Numbers */}
          <div
            className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center"
            style={{
              border: "1px solid #62626257",
              boxShadow: "0px 4px 0px 0px #9D00FF",
              backdropFilter: "blur(56px)",
            }}
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
              Standard Numbers
            </h3>
            <p className="text-[16px] md:text-[18px] lg:text-2xl font-normal text-black">
              = 55 SED tokens + Utility
            </p>
          </div>

          {/* Card 8: Standard numbers with "AZ" */}
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden"
            style={{
              border: "1px solid #62626257",
              backdropFilter: "blur(56px)",
              boxShadow: "0px 4px 0px 0px #DF00FF",
            }}
          >
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center relative">
              <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold text-black">
                Standard numbers with &quot;AZ&quot;
              </h3>
              <p className="text-[16px] md:text-[18px] lg:text-2xl font-normal text-black">
                Founder&apos;s signature Trait in the Brick = 155 SED tokens +
                Utility
              </p>

              {/* Gradient bottom border */}
              {/* <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl md:rounded-b-3xl bg-gradient-to-r from-[#DF00FF] to-[#710081]" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCollectionSection;

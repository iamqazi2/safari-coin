import React from "react";

const JoinSafariqSection: React.FC = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Main Dark Container */}
        <div className="bg-black rounded-[40px] p-16 text-center relative">
          {/* Content */}
          <div className="space-y-6 mb-12">
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Join the SafariQ Movement</h2>

            {/* Taglines */}
            <p className="text-xl text-white font-medium">
              SafariQ is more than a travel brand, it’s a movement redefining how people see travel, technology, and
              rewards
            </p>

            <p className="text-xl text-white font-medium">Be part of the SafariQ journey from Day One.</p>

            {/* Call to Action Text */}
            <p className="text-2xl text-white font-medium mt-8">
              Get your Foundation Brick NFT today and unlock a lifetime of benefits.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button - Get Prelaunch bonus - Join */}
            <button className="bg-[#00A8C5] hover:bg-[#0095B0] text-white font-semibold py-4 px-8 rounded-2xl transition-colors duration-300 min-w-[200px]">
              Get Prelaunch bonus - Join
            </button>

            {/* Secondary Button - White Paper */}
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]">
              White Paper
            </button>

            {/* Secondary Button - Mint Your NFT Now */}
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]">
              Mint Your NFT Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSafariqSection;

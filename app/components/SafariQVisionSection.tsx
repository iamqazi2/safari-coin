import React from "react";

const SafariQVisionSection = () => {
  return (
    <section className="relative py-12 mx-auto md:py-16 lg:py-20 container overflow-hidden px-4 md:px-6">
      <div className="relative z-10">
        {/* Upper Text Block */}
        <div className="mb-10 md:mb-12 max-w-[1000px] mx-auto  lg:mb-16 space-y-4 md:space-y-5 lg:space-y-6">
          <p className="font-normal text-center text-[16px] md:text-[20px] lg:text-2xl leading-[150%]  text-black">
            Headquartered in the <strong>United Arab Emirates</strong>, SafariQ
            draws inspiration from the visionary leadership of His Highness{" "}
            <strong>Sheikh Mohammed bin Rashid Al Maktoum</strong>, whose
            commitment to innovation, smart city infrastructure, and global
            excellence drives our mission.
          </p>

          <p className="font-normal text-center text-[16px] md:text-[20px] lg:text-2xl leading-[150%]  text-black">
            From flight bookings to AI-powered travel assistance and Web3-based
            rewards, SafariQ is creating a travel experience that works for
            everyone, whether you&apos;re traveling every month or just dreaming
            about your next trip.
          </p>
        </div>

        {/* Information Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Our Vision Card */}
          <div>
            <div
              className="relative bg-white h-auto min-h-[220px] lg:min-h-[330px] lg:h-[420px] xl:h-[366px] rounded-[25px] md:rounded-[35px] lg:rounded-[43px] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                border: "1px solid #62626257",
                backdropFilter: "blur(56px)",
              }}
            >
              <h3 className="font-normal text-[24px] md:text-[30px] lg:text-[38px] leading-[130%] text-center text-black mb-4 md:mb-5 lg:mb-6">
                Our Vision
              </h3>
              <p className="font-normal text-[16px] md:text-[18px] lg:text-2xl leading-[130%] text-center text-black">
                To build a global travel ecosystem where every journey is
                seamless, secure, and financially rewarding, powered by AI,
                Web3, and a community-first approach.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="h-3 md:h-4 bg-[#00A8C5]/60 w-[calc(100%-80px)] md:w-[calc(100%-96px)] lg:w-[calc(100%-112px)] rounded-b-[25px] md:rounded-b-[35px] lg:rounded-b-[43px]"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #62626257",
                }}
              />
              <div
                className="h-2 md:h-3 bg-[#5DE7FF]/60 w-[calc(100%-100px)] md:w-[calc(100%-120px)] lg:w-[calc(100%-134px)] rounded-b-[25px] md:rounded-b-[35px] lg:rounded-b-[43px]"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #62626257",
                }}
              />
            </div>
          </div>

          {/* Our Mission Card */}
          <div>
            <div
              className="relative bg-white h-auto min-h-[220px] lg:min-h-[330px] lg:h-[420px] xl:h-[366px] rounded-[25px] md:rounded-[35px] lg:rounded-[43px] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg"
              style={{
                border: "1px solid #62626257",
                backdropFilter: "blur(56px)",
              }}
            >
              <h3 className="font-normal text-[24px] md:text-[30px] lg:text-[38px] leading-[130%] text-center text-black mb-4 md:mb-5 lg:mb-6">
                Our Mission
              </h3>
              <div className="space-y-3 md:space-y-4">
                <p className="font-normal text-[16px] md:text-[18px] lg:text-2xl leading-[130%] text-center text-black">
                  We aim to enable everyday travelers to:
                </p>
                <ul className="space-y-2 md:space-y-3 text-left">
                  <li className="font-normal text-[14px] md:text-[18px] lg:text-xl leading-[130%] text-black flex items-start">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-2 md:mt-3 mr-2 md:mr-3 flex-shrink-0"></span>
                    Book with confidence and convenience
                  </li>
                  <li className="font-normal text-[14px] md:text-[18px] lg:text-xl leading-[130%] text-black flex items-start">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-2 md:mt-3 mr-2 md:mr-3 flex-shrink-0"></span>
                    Travel with enhanced safety and peace of mind
                  </li>
                  <li className="font-normal text-[14px] md:text-[18px] lg:text-xl leading-[130%] text-black flex items-start">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-2 md:mt-3 mr-2 md:mr-3 flex-shrink-0"></span>
                    Earn rewards from every booking, referral, or interaction
                  </li>
                  <li className="font-normal text-[14px] md:text-[18px] lg:text-xl leading-[130%] text-black flex items-start">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full mt-2 md:mt-3 mr-2 md:mr-3 flex-shrink-0"></span>
                    Participate in a decentralized, user-powered travel economy
                  </li>
                </ul>
              </div>
            </div>
            {/* Bottom accent line */}
            <div className="flex flex-col items-center justify-center">
              <div
                className="h-3 md:h-4 bg-[#00A8C5]/60 w-[calc(100%-80px)] md:w-[calc(100%-96px)] lg:w-[calc(100%-112px)] rounded-b-[25px] md:rounded-b-[35px] lg:rounded-b-[43px]"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #62626257",
                }}
              />
              <div
                className="h-2 md:h-3 bg-[#5DE7FF]/60 w-[calc(100%-100px)] md:w-[calc(100%-120px)] lg:w-[calc(100%-134px)] rounded-b-[25px] md:rounded-b-[35px] lg:rounded-b-[43px]"
                style={{
                  backdropFilter: "blur(56px)",
                  border: "1px solid #62626257",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariQVisionSection;

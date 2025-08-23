"use client";

import Image from "next/image";
import React, { useRef } from "react";

// ✅ Define props for CardContent
interface CardButton {
  text: string;
  primary: boolean;
}

interface CardContentProps {
  title: string;
  subtitle: string;
  prelaunch?: string;
  postlaunch?: string;
  points?: string[];
  image?: string;
  buttons?: CardButton[];
}

const TravelTokensSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // ✅ Card Data
  const cardData: CardContentProps[] = [
    {
      title: "SafariQ Engagement Dirham",
      subtitle:
        "Created for Rewards,Floor AED pegged with, Built-in Moon Engine..",
      prelaunch: "Signup + referrals.",
      postlaunch: "Travel cashback.",
      points: ["World's widest utility → every city, every service."],
      image: "/coins_img.svg",
      buttons: [{ text: "Get Prelaunch Bonus", primary: true }],
    },
    {
      title: "Foundation Brick ~ Key NFTs",
      subtitle:
        "World's largest NFT collection in Paid category, RWA and Business Utility.",
      prelaunch: "Low cost with real rewards upto 10,000$",
      postlaunch: "Highest utility value ever.",
      points: ["Live Minting counter 1326 / 100,000, Layer 1"],
      image: "/second-card.svg",
      buttons: [{ text: "Mint NFT", primary: true }],
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="web3"
      className=" py-1 md:py-14 bg-black text-white relative overflow-hidden"
    >
      {/* Background Images */}
      {/* <Image
        src={"/utility-texture.svg"}
        alt="texture"
        width={500}
        height={60}
        className="absolute z-50 w-full top-0 md:-top-3 lg:-top-9"
        style={{ zIndex: 100 }}
      /> */}
      <Image
        src={"/glow.svg"}
        alt="glow"
        width={500}
        height={340}
        className="absolute -bottom-10 sm:-bottom-20 md:-bottom-40 -left-140 lg:-bottom-70 z-0 w-full h-full opacity-30 sm:opacity-50 md:opacity-100"
      />
      <Image
        src={"/white-start.svg"}
        alt="star"
        width={100}
        height={240}
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 hidden lg:block z-0 left-2 sm:left-4 md:left-14 w-8 sm:w-12 md:w-20 lg:w-auto"
      />

      {/* Title */}
      <h1 className="text-[28px] md:text-2xl pt-[30px] md:pt-0 lg:text-3xl xl:text-5xl pb-6 sm:pb-8 md:pb-16 lg:pb-28 text-white leading-tight text-center mx-auto font-normal max-w-[750px] px-3 sm:px-4">
        Own Your Travel, With SED Tokens, NFTs, and Real Utility
      </h1>

      {/* Cards Container */}
      <div className="px-3 sm:px-4 lg:px-4 max-w-[1240px] mx-auto space-y-6 sm:space-y-8 md:space-y-12 relative z-20">
        {cardData.map((card, index) => (
          <div key={index} className="flex justify-center m-0 h-fit relative">
            {/* Card Container */}
            <div className="relative w-full max-w-[1046px] min-h-[300px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[461px] overflow-hidden">
              {/* Background SVG - Rotated for second card */}
              <div
                className={`${
                  index === 1 ? "rotate-180" : ""
                } absolute inset-0 w-full h-full`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1046 461"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 69.66C0 44.7658 0 32.3187 4.99808 22.879C9.03148 15.2612 15.2612 9.03148 22.879 4.99808C32.3187 0 44.7658 0 69.66 0L976.34 0C1001.23 0 1013.68 0 1023.12 4.99808C1030.74 9.03148 1036.97 15.2612 1041 22.879C1046 32.3187 1046 44.7658 1046 69.66V391.34C1046 416.234 1046 428.681 1041 438.121C1036.97 445.739 1030.74 451.969 1023.12 456.002C1013.68 461 1001.23 461 976.34 461H689.416C676.503 461 670.047 461 664.127 459.265C659.309 457.854 654.775 455.609 650.732 452.634C645.762 448.977 641.848 443.843 634.019 433.575L621.909 417.691C614.081 407.423 610.166 402.288 605.197 398.632C601.154 395.656 596.62 393.412 591.802 392C585.881 390.266 579.425 390.266 566.513 390.266H69.66C44.7658 390.266 32.3187 390.266 22.879 385.267C15.2612 381.234 9.03148 375.004 4.99808 367.386C0 357.947 0 345.5 0 320.605L0 69.66Z"
                    fill="rgba(26, 27, 35, 0.37)"
                    stroke="rgba(211, 211, 211, 0.34)"
                    strokeWidth="1px"
                  />
                </svg>
              </div>
              {/* Content */}
              <div className="relative z-10 h-full flex items-center w-full overflow-hidden">
                <CardContent {...card} cardIndex={index} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Reusable CardContent Component
const CardContent: React.FC<CardContentProps & { cardIndex?: number }> = ({
  title,
  subtitle,
  prelaunch,
  postlaunch,
  points = [],
  image,
  buttons = [],
  cardIndex = 0,
}) => {
  // First card layout (index 0) - Image on right, text on left
  if (cardIndex === 0) {
    return (
      <div className="relative w-full h-full py-3 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center lg:items-start h-fit max-w-full">
          {/* Text content - left side on desktop, top on mobile */}
          <div className="order-1 lg:order-1 pt-[30px] md:pt-0 space-y-2 sm:space-y-3 lg:space-y-4 max-w-full overflow-hidden">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#00A8C5] font-medium leading-tight break-words">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed break-words">
              {subtitle}
            </p>

            {prelaunch && (
              <p className="text-xs sm:text-sm md:text-base text-white break-words">
                <span className="font-medium">Prelaunch</span>{" "}
                <span className="text-[#3EB9CF]">→ </span>
                {prelaunch}
              </p>
            )}

            {postlaunch && (
              <p className="text-xs sm:text-sm md:text-base text-white break-words">
                <span className="font-medium">Post Launch</span>{" "}
                <span className="text-[#3EB9CF]">→ </span>
                {postlaunch}
              </p>
            )}

            {points.length > 0 && (
              <ul className="text-xs sm:text-sm md:text-base text-white space-y-1 list-disc list-inside">
                {points.map((point, i) => (
                  <li key={i} className="break-words">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-2 md:gap-3 mt-3 sm:mt-4 lg:mt-6">
                {buttons.map((btn, i) => (
                  <button
                    key={i}
                    className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white rounded-full transition whitespace-nowrap flex-shrink-0 ${
                      btn.primary
                        ? "bg-[#3EB9CF] font-semibold hover:opacity-90"
                        : "bg-[#1A1B23] border border-white/30 hover:opacity-90"
                    }`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Image - right side on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2 hidden lg:block flex justify-center lg:justify-end items-center">
            {image && (
              <Image
                src={image}
                alt="card image"
                width={400}
                height={320}
                className="w-32 sm:w-40 md:w-52 lg:w-72 xl:w-96 h-auto max-w-full flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Second card layout (index 1) - Image on left, text on right
  return (
    <div className="relative w-full h-full py-3 sm:py-4 md:py-6 lg:pb-14 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center lg:items-end h-full max-w-full">
        {/* Image - left side on desktop, top on mobile */}
        <div className="order-1 lg:order-1 hidden lg:block flex justify-center lg:justify-start items-center">
          {image && (
            <Image
              src={image}
              alt="card image"
              width={400}
              height={320}
              className="w-32 sm:w-40 md:w-52 lg:w-72 xl:w-96 h-auto max-w-full flex-shrink-0"
            />
          )}
        </div>

        {/* Text content - right side on desktop, bottom on mobile */}
        <div className="order-2 pt-[40px] md:pt-0 lg:order-2 space-y-2 sm:space-y-3 lg:space-y-4 max-w-full overflow-hidden">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#00A8C5] font-medium leading-tight break-words">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed break-words">
            {subtitle}
          </p>

          {prelaunch && (
            <p className="text-xs sm:text-sm md:text-base text-white break-words">
              <span className="font-medium">Prelaunch</span>{" "}
              <span className="text-[#3EB9CF]">→ </span>
              {prelaunch}
            </p>
          )}

          {postlaunch && (
            <p className="text-xs sm:text-sm md:text-base text-white break-words">
              <span className="font-medium">Post Launch</span>{" "}
              <span className="text-[#3EB9CF]">→ </span>
              {postlaunch}
            </p>
          )}

          {points.length > 0 && (
            <ul className="text-xs sm:text-sm md:text-base text-white space-y-1 list-disc list-inside">
              {points.map((point, i) => (
                <li key={i} className="break-words">
                  {point}
                </li>
              ))}
            </ul>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-3 mt-3 sm:mt-4 lg:mt-6">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white rounded-full transition whitespace-nowrap flex-shrink-0 ${
                    btn.primary
                      ? "bg-[#3EB9CF] font-semibold hover:opacity-90"
                      : "bg-[#1A1B23] border border-white/30 hover:opacity-90"
                  }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelTokensSection;

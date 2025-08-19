"use client";

import Image from "next/image";
import React, { useRef } from "react";

// ✅ Define props for CardContent
interface CardButton {
  text: string;
  primary: boolean;
}

interface CardContentProps {
  mobile?: boolean;
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
        "Created for Rewards, AED Pegged SED, with Built-in Moon Engine..",
      prelaunch: "Signup + referrals.",
      postlaunch: "Travel cashback.",
      points: [
        "World's widest utility → every city, every service.",
        "Imagine: Travellers Currency without borders & conversions.",
      ],
      image: "/coins.svg",
      buttons: [
        { text: "Mint NFT", primary: false },
        { text: "Get Bonus", primary: true },
      ],
    },
    {
      title: "Foundation Brick ~ Key NFTs",
      subtitle:
        "World's largest NFT collection in Paid category, RWA and Business Utility.",
      prelaunch: "Low cost with real rewards upto 10,000$",
      postlaunch: "Highest utility value ever.",
      points: ["Live Minting counter 1326 / 100,000, Layer 1"],
      image: "/second-card.svg", // 👈 replace with your actual image path
      buttons: [{ text: "Mint NFT", primary: true }],
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="web3"
      className="min-h-screen py-14 bg-black text-white relative"
    >
      {" "}
      <Image
        src={"/utility-texture.svg"}
        alt="card image"
        width={500}
        height={60}
        className="absolute z-100 w-full -top-3 lg:-top-9  "
      />
      <Image
        src={"/glow.svg"}
        alt="card image"
        width={500}
        height={340}
        className="absolute -bottom-70 z-30 w-full h-full -left-150"
      />
      <Image
        src={"/white-start.svg"}
        alt="card image"
        width={100}
        height={240}
        className="absolute bottom-8 z-40  left-14"
      />
      <h1 className="text-[30px] md:text-[48px] pb-12 md:pb-28 text-white leading-tight text-center mx-auto font-[400] max-w-[750px]">
        Own Your Travel, With SED Tokens, NFTs, and Real Utility
      </h1>
      {/* 💻 Desktop / Tablet Version - Both cards displayed in column */}
      <div className="hidden xl:block px-4 lg:px-4 max-w-[1240px] mx-auto space-y-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex items-start justify-center gap-[20px] h-fit z-30 relative"
          >
            {/* Step Number - Left Side */}
            <div className="flex-shrink-0">
              <div
                className="flex items-center justify-center text-[50px] font-medium shadow-[0_2.782px_0_0_#3EB9CF]"
                style={{
                  borderRadius: "20.43px",
                  border: "0.348px solid rgba(255, 255, 255, 0.34)",
                  background: "rgba(26, 27, 35, 0.37)",
                  backdropFilter: "blur(19.471263885498047px)",
                  width: "121px",
                  height: "86.925px",
                  flexShrink: 0,
                }}
              >
                0{index + 1}
              </div>
            </div>

            {/* Card - Right Side */}
            <div className="relative w-[1046px] h-[560px] z-10 bg-[url('/new-blur.png')] bg-cover bg-no-repeat">
              <CardContent {...card} />
            </div>
          </div>
        ))}
      </div>
      {/* 📱 Mobile Version (no animation, natural flow) */}
      <div className="flex flex-col gap-8 px-6 xl:hidden">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full rounded-2xl bg-[#1A1B23]/60 p-6 backdrop-blur-md border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-sm">SafariQ</span>
            </div>
            <CardContent {...card} mobile />
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Reusable CardContent Component
const CardContent: React.FC<CardContentProps> = ({
  mobile = false,
  title,
  subtitle,
  prelaunch,
  postlaunch,
  points = [],
  image,
  buttons = [],
}) => (
  <div className="py-4 md:py-8 px-4 md:px-6 z-10 ">
    <h3 className="text-[18px] md:text-[36px] text-[#00A8C5] font-medium mb-3">
      {title}
    </h3>
    <p className="max-w-[500px] text-[16px] md:text-[24px] text-white">
      {subtitle}
    </p>
    {prelaunch && (
      <p className="text-[14px] md:text-[20px] text-white">
        Prelaunch <span className="text-[#3EB9CF]">→ </span>
        {prelaunch}
      </p>
    )}
    {postlaunch && (
      <p className="text-[14px] md:text-[20px] text-white">
        Post Launch <span className="text-[#3EB9CF]">→ </span>
        {postlaunch}
      </p>
    )}

    {points.length > 0 && (
      <ul className="text-[13px] md:text-[18px] text-white mt-4 space-y-2 list-disc list-inside">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}

    {/* Buttons */}
    {buttons.length > 0 && (
      <div
        className={`flex gap-3 text-white w-full max-w-[340px] mx-auto mt-6 ${
          mobile ? "justify-start" : "absolute bottom-10 right-6 md:right-8"
        }`}
      >
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={`px-4 md:px-6 w-full py-2 md:py-3 text-white rounded-full transition ${
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

    {!mobile && image && (
      <Image
        src={image}
        alt="card image"
        width={500}
        height={340}
        className="absolute top-10 -right-0"
      />
    )}
  </div>
);

export default TravelTokensSection;

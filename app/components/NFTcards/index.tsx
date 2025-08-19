"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NFTCard {
  id: number;
  name: string;
  price: string;
  description: string;
  reward: string;
  image: string;
  type: "GENESIS" | "NEON" | "META" | "CYBER" | "QUANTUM";
}

const NFTCardsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(400);
  const [gap, setGap] = useState(24);

  const cards: NFTCard[] = [
    {
      id: 1,
      name: "Genesis Brick",
      price: "Standard Price 5$",
      description: "Only 10 Grails will be minted randomly for Lucky Minters.",
      reward:
        "$10,000 Exclusive Buy-Back offer + SafariQ Metaverse + Standard utility.",
      image: "/green.svg",
      type: "GENESIS",
    },
    {
      id: 2,
      name: "Neon Brick",
      price: "Standard Price 5$",
      description: "Limited Supply, will be minted randomly for Lucky Minters.",
      reward: "$550 SafariQ Travel voucher + Standard utility.",
      image: "/yellow.svg",
      type: "NEON",
    },
    {
      id: 3,
      name: "Meta Brick",
      price: "Standard Price 5$",
      description: "Limited Supply, will be minted randomly.",
      reward: "$55 Travel voucher + Standard utility.",
      image: "/blue.svg",
      type: "META",
    },
    {
      id: 4,
      name: "Cyber Brick",
      price: "Standard Price 5$",
      description: "Only 10 Grails will be minted randomly for Lucky Minters.",
      reward:
        "$10,000 Exclusive Buy-Back offer + SafariQ Metaverse + Standard utility..",
      image: "/green.svg",
      type: "CYBER",
    },
    {
      id: 5,
      name: "Quantum Brick",
      price: "Standard Price 5$",
      description: "Limited Supply, will be minted randomly for Lucky Minters.",
      reward: "$550 SafariQ Travel voucher + Standard utility.",
      image: "/yellow.svg",
      type: "QUANTUM",
    },
    {
      id: 6,
      name: "Quantum Brick",
      price: "Standard Price 5$",
      description: "Limited Supply, will be minted randomly.",
      reward: "$55 Travel voucher + Standard utility.",
      image: "/blue.svg",
      type: "QUANTUM",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
        setCardWidth(window.innerWidth - 48);
        setGap(16);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
        setCardWidth((window.innerWidth - 72) / 2);
        setGap(24);
      } else {
        setSlidesPerView(3);
        setCardWidth((window.innerWidth - 96) / 3);
        setGap(24);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const maxSlide = Math.max(0, cards.length - slidesPerView);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length, slidesPerView]);

  return (
    <div className="w-full bg-black mx-auto py-8 relative overflow-hidden px-6">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 lg:w-72 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 lg:w-72 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none" />

      <div className="relative">
        {/* Cards Container */}
        <div className="overflow-visible">
          <div
            className="flex transition-transform duration-1000 ease-in-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${currentSlide * (cardWidth + gap)}px)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 flex justify-center items-center relative"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="relative p-3 sm:p-4 rounded-2xl sm:rounded-3xl border backdrop-blur-sm h-full flex flex-col bg-[#1A1B235E] border-[#D3D3D357] shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full">
                  <div className="relative mb-6 sm:mb-8 flex justify-center flex-1">
                    <div className="relative mx-auto w-full max-w-[230px] md:max-w-[430px]">
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: "18px",
                      background: "rgba(0, 0, 0, 0.3)",
                      backdropFilter: "blur(6px)",
                    }}
                    className=" h-auto min-h-[140px] md:min-h-[180px] lg:min-h-[160px] right-2 left-2 sm:right-3 sm:left-3 lg:right-4 lg:left-4 border border-white/20 backdrop-blur-sm bottom-3 sm:bottom-4 lg:bottom-6"
                  >
                    <div className="p-3 sm:p-4 lg:p-5">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white truncate">
                          {card.name}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base font-bold ml-2 flex-shrink-0 text-white">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
                        {card.description}
                      </p>
                      <div className="border-t border-white/20 pt-2">
                        <p className="text-xs font-semibold text-white mb-1">
                          Reward:
                        </p>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {card.reward}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardsSlider;

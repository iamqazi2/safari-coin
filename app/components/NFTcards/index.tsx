"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NFTCard {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  type: "GENESIS" | "NEON" | "META" | "CYBER" | "QUANTUM";
}

const NFTCardsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(400);

  const cards: NFTCard[] = [
    {
      id: 1,
      name: "Genesis Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/green.svg",
      type: "GENESIS",
    },
    {
      id: 2,
      name: "Neon Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/yellow.svg",
      type: "NEON",
    },
    {
      id: 3,
      name: "Meta Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/blue.svg",
      type: "META",
    },
    {
      id: 4,
      name: "Cyber Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/green.svg",
      type: "CYBER",
    },
    {
      id: 5,
      name: "Quantum Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/yellow.svg",
      type: "QUANTUM",
    },
    {
      id: 6,
      name: "Quantum Brick",
      price: "0.1249 ETH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna. Lorem ipsum dolor sit amet consectetur. Morbi amet eu in pulvinar venenatis justo ac urna.",
      image: "/blue.svg",
      type: "QUANTUM",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
        setCardWidth(window.innerWidth - 48); // Account for padding
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
        setCardWidth((window.innerWidth - 72) / 2); // Account for gap and padding
      } else {
        setSlidesPerView(3);
        setCardWidth((window.innerWidth - 96) / 3); // Account for gap and padding
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality - modified to respect slidesPerView
  useEffect(() => {
    const maxSlide = Math.max(0, cards.length - slidesPerView);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length, slidesPerView]);


  return (
    <div className="w-full bg-black mx-auto py-8 relative overflow-hidden px-6">
      {/* Left gradient overlay - responsive */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 lg:w-72 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Right gradient overlay - responsive */}
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 lg:w-72 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none" />

      <div className="relative">
        {/* Cards Container */}
        <div className="overflow-visible">
          <div
            className="flex transition-transform duration-1000 ease-in-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${
                currentSlide * (cardWidth + (window.innerWidth < 640 ? 16 : 24))
              }px)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 flex justify-center  items-center h-[400px] md:h-[500px] lg:h-[550px] relative"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="relative p-3 sm:p-4 rounded-2xl sm:rounded-3xl border backdrop-blur-sm h-full flex flex-col bg-[#1A1B235E] border-[#D3D3D357] shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full">
                  {/* 3D Brick Image Container */}
                  <div className="relative mb-6 sm:mb-8 flex justify-center flex-1">
                    <div className="relative mx-auto w-full max-w-[230px]  md:max-w-[320px]">
                      {/* Main brick image */}
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Card Content with blur effect */}
                  <div
                    style={{
                      borderRadius: "18px",
                      background: "rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(6px)",
                    }}
                    className="absolute h-[100px] md:h-[160px] lg:h-[170px] right-2 left-2 sm:right-3 sm:left-3 lg:right-4 lg:left-4 border border-white/20 backdrop-blur-sm bg-black/10 bottom-3 sm:bottom-4 lg:bottom-6"
                  >
                    {/* Content */}
                    <div className="p-2 sm:p-3 lg:p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base sm:text-lg lg:text-[22px] font-bold text-white truncate">
                          {card.name}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-[22px] font-bold ml-2 flex-shrink-0">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-[14px] text-gray-300 line-clamp-3 md:!line-clamp-5 ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NFTCardsSlider;

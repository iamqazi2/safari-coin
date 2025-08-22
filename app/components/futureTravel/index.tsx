"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCard {
  id: number;
  title: string;
  image: string;
}

const SafariQTravelSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const cardsLeftRef = useRef<HTMLDivElement>(null);
  const cardsRightRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Integration partners data
  const integrationPartners = [
    { name: "int1", image: "/int1.svg", color: "text-gray-500" },
    { name: "int2", image: "/int2.svg", color: "text-gray-500" },
    { name: "int3", image: "/int3.svg", color: "text-gray-500" },
    { name: "int4", image: "/int4.svg", color: "text-gray-500" },
    { name: "int5", image: "/int5.svg", color: "text-gray-500" },
    { name: "int6", image: "/int6.svg", color: "text-gray-500" },
    { name: "int7", image: "/int7.svg", color: "text-gray-500" },
    { name: "int8", image: "/int8.svg", color: "text-gray-500" },
    { name: "int9", image: "/int9.svg", color: "text-gray-500" },
    { name: "int10", image: "/int10.svg", color: "text-gray-500" },
    { name: "int11", image: "/int11.svg", color: "text-gray-500" },
    { name: "int12", image: "/int12.svg", color: "text-gray-500" },
    { name: "int13", image: "/int13.svg", color: "text-gray-500" },
    { name: "int14", image: "/int14.svg", color: "text-gray-500" },
  ];

  // 20 service cards data sorted to match the screenshot order
  const serviceCards: ServiceCard[] = [
    { id: 1, title: "Next-GEN Journey Planner", image: "/gen.svg" },
    { id: 2, title: "Visa Assistance", image: "/visa.svg" },
    { id: 3, title: "Travel Vault", image: "/travel.svg" },
    { id: 4, title: "All in One Wallet", image: "/wallet.svg" },
    { id: 5, title: "Real-time Advisory", image: "/real-time.svg" },
    {
      id: 6,
      title: "AI-powered Personalised Suggestions",
      image: "/suggestion.svg",
    },
    { id: 7, title: "Smart AI Assistant", image: "/ai-assistant.svg" },
    {
      id: 8,
      title: "Personalized Travel Alerts",
      image: "/travel-alerts.svg",
    },
    { id: 9, title: "Emergency Assistance", image: "/emergency.svg" },
    { id: 10, title: "Earn as you Go..!", image: "/earn.svg" },
    { id: 11, title: "All-in-One Bookings", image: "/bookings.svg" },
    { id: 12, title: "FX Currency Exchange", image: "/currency-exchange.svg" },
    { id: 13, title: "Duty Free Shops", image: "/duty.svg" },
    { id: 14, title: "Travel Marketplace", image: "/suggestion.svg" },
    { id: 15, title: "SME Portal", image: "/SME.svg" },
    { id: 16, title: "Unique Reseller Program", image: "/unique.svg" },
    { id: 17, title: "Global connectivity with Free eSIMs", image: "/sim.svg" },
    { id: 18, title: "SafariQ Metaverse", image: "/meta.svg" },
    { id: 19, title: "NFT Souvenirs", image: "/NFT.svg" },
    { id: 20, title: "AR Story Routes", image: "/ar-story.svg" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !bannerRef.current) return;

    // Calculate total width of banners (14 banners + 14 duplicated banners)
    const bannerCount = integrationPartners.length; // 14
    const totalBanners = bannerCount * 2; // 28 (including duplicated set)
    const bannerWidth = 260; // Fixed width of each banner (as defined in w-[260px])
    const gap = 24; // Approximate gap (space-x-6 is ~24px in Tailwind)
    const totalWidth = totalBanners * (bannerWidth + gap) - gap; // Total width of all banners

    // Banner sliding animation
    const bannerAnimation = gsap.to(bannerRef.current, {
      x: -totalWidth / 2, // Move by half the total width to show all banners
      duration: 50,
      ease: "none",
      repeat: -1, // Infinite loop
      onStart: () => {
        // Ensure the banner starts at the beginning
        gsap.set(bannerRef.current, { x: 0 });
      },
    });

    // Animate scroll indicator
    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: 10,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (!isMobile) {
      // Desktop: Pinning and card scroll animations - FASTER AND SHORTER
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%", // Reduced from 300% to 150% for much less scroll
        pin: true,
        scrub: 0.1, // Reduced from 0.3 to 0.1 for much faster animation
        onUpdate: (self) => {
          const progress = self.progress;
          const cardIndex = Math.floor(progress * 20); // Updated to 20 for 20 cards
          setCurrentCardIndex(cardIndex);
        },
      });

      // Initialize to show first cards - changed from 1 to 0 to ensure first cards are visible
      setCurrentCardIndex(0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      bannerAnimation.kill();
    };
  }, [isMobile, integrationPartners.length]); // Add integrationPartners.length to the dependency array

  const leftCards = serviceCards.slice(0, 10);
  const rightCards = serviceCards.slice(10, 20);

  return (
    <div
      ref={sectionRef}
      id="ecosystem"
      className="relative  min-h-screen bg-white overflow-visible"
    >
      <div className="flex justify-center items-center mt-[50px] md:mt-[30px] w-full">
        <Image
          src={"/sec-icons.svg"}
          height={137}
          width={137}
          alt="section icons"
        />
      </div>
      {/* Main Content */}
      <div className="max-w-[1240px] relative py-8 mx-auto px-4">
        <Image
          src={"/black-stars.svg"}
          height={137}
          width={95}
          alt="section icons"
          className="absolute left-0 hidden md:block"
        />
        {/* Heading */}
        <div className="text-center mb-[40px]">
          <h1 className="text-[30px] md:text-[48px] leading-normal mb-2 font-normal text-black">
            The Future of Travel is Here
          </h1>
          <p className="text-[16px] md:text-[28px] text-black font-normal leading-normal mb-2">
            POWERED BY PATENT-READY AI + WEB3
          </p>
          <p className="text-[14px] md:text-[24px] text-black font-normal leading-normal max-w-3xl mx-auto">
            SafariQ aims to bridge all major travel services into one
            intelligent, reward-based platform.
          </p>
        </div>

        {/* Integration Partners Banner */}
        <div className="mb-[40px] overflow-hidden">
          <div className="relative overflow-hidden">
            <div
              ref={bannerRef}
              className="flex items-center space-x-6"
              style={{
                width: `${integrationPartners.length * 2 * (260 + 24) - 24}px`,
              }}
            >
              {[...integrationPartners, ...integrationPartners].map(
                (partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 bg-[url('/box.svg')] bg-contain bg-no-repeat bg-center rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 w-[260px] h-[135px] relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-xs text-black bg-[#B8E2ED80] py-1 sm:py-2 rounded-full px-2 sm:px-3 font-medium z-10">
                      Expected Integration
                    </div>
                    <div className="relative flex justify-center pt-4 items-center h-full z-10">
                      <Image
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        width={150}
                        height={150}
                        className="object-contain max-w-[70%] max-h-[70%] sm:max-w-[80%] sm:max-h-[80%] md:max-w-[90%] md:max-h-[90%]"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        {isMobile ? (
          <div className="relative">
            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center items-center mb-4 relative">
              <div
                className="flex items-center space-x-2 px-4 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(93, 231, 255, 0.3) 0%, rgba(0, 168, 197, 0.3) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(93, 231, 255, 0.2)",
                }}
              >
                <span className="text-sm text-gray-700 font-medium">
                  Swipe to explore
                </span>
                <div ref={indicatorRef} className="flex items-center space-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-400 opacity-70"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-300 opacity-50"
                  >
                    <path
                      d="M8 4L16 12L8 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Progress Indicator */}
            <div className="flex justify-center mb-6">
              <div
                className="flex items-center space-x-2 px-4 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(93, 231, 255, 0.2) 0%, rgba(0, 168, 197, 0.2) 100%)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(93, 231, 255, 0.15)",
                }}
              >
                {serviceCards.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCardIndex % serviceCards.length
                        ? "bg-blue-500 scale-125"
                        : "bg-gray-300"
                    }`}
                    style={{
                      background:
                        index === currentCardIndex % serviceCards.length
                          ? "linear-gradient(135deg, #5DE7FF 0%, #00A8C5 100%)"
                          : "#d1d5db",
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              ref={mobileSliderRef}
              className="flex overflow-x-auto scrollbar-hide pb-4 px-6 snap-x snap-mandatory"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const cardWidth = 320; // Approximate width including margins
                const newIndex = Math.round(scrollLeft / cardWidth);
                setCurrentCardIndex(newIndex);
              }}
            >
              {serviceCards.map((card) => (
                <div key={card.id} className="flex-shrink-0 mx-2">
                  {/* Layered Card Design */}
                  <div className="relative w-[300px] min-w-[200px] h-32 mx-auto my-5">
                    {/* Back layer - furthest back - 40px smaller (20px on each side) */}
                    <div
                      className="absolute top-6 w-[calc(100%-40px)] h-[calc(100%-2px)]"
                      style={{
                        left: "20px",
                        borderRadius: "43px",
                        border: "1px solid rgba(98, 98, 98, 0.34)",
                        opacity: 0.5,
                        background:
                          "linear-gradient(180deg, rgba(93, 231, 255, 0.50) 0%, rgba(0, 168, 197, 0.50) 100%)",
                        backdropFilter: "blur(28px)",
                      }}
                    />
                    {/* Middle layer - 20px smaller (10px on each side) */}
                    <div
                      className="absolute top-5 w-[calc(100%-20px)] h-[calc(100%-7px)]"
                      style={{
                        left: "10px",
                        borderRadius: "43px",
                        border: "1px solid rgba(98, 98, 98, 0.34)",
                        opacity: 0.5,
                        background:
                          "linear-gradient(180deg, #5DE7FF 0%, #00A8C5 100%)",
                        backdropFilter: "blur(28px)",
                      }}
                    />
                    {/* Front layer - main content - full size */}
                    <div
                      className="relative w-full h-full flex items-center px-6 py-4"
                      style={{
                        borderRadius: "43px",
                        border: "1px solid rgba(98, 98, 98, 0.34)",
                        background: "#FFF",
                        backdropFilter: "blur(28px)",
                      }}
                    >
                      {/* Icon Container */}
                      <div className="flex-shrink-0 mr-5">
                        <div className="relative flex justify-center items-center w-14 h-14">
                          {/* Main circle background */}
                          {/* Card Icon */}
                          <Image
                            src={card.image}
                            alt="icons"
                            height={32}
                            width={32}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                      {/* Text content */}
                      <div className="flex-1">
                        <div className="text-gray-900 font-medium text-lg leading-snug">
                          {card.title.split(" ").length > 2 ? (
                            <>
                              <div>
                                {card.title
                                  .split(" ")
                                  .slice(
                                    0,
                                    Math.ceil(card.title.split(" ").length / 2)
                                  )
                                  .join(" ")}
                              </div>
                              <div>
                                {card.title
                                  .split(" ")
                                  .slice(
                                    Math.ceil(card.title.split(" ").length / 2)
                                  )
                                  .join(" ")}
                              </div>
                            </>
                          ) : (
                            <div>{card.title}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div
              ref={cardsLeftRef}
              className="relative min-h-[300px] overflow-hidden"
            >
              {leftCards.map((card, index) => {
                // Modified animation logic to show first card initially
                const scrollProgress = Math.min(
                  1,
                  Math.max(0, currentCardIndex / 20) // Updated to 20 for 20 cards
                );
                const pairIndex = Math.floor(index); // Which pair this card belongs to (0,1,2,3...)
                const cardTrigger = pairIndex * 0.05; // Adjusted for 20 cards (0.05 per card)

                // Modified to ensure first card (index 0) is always visible
                let cardProgress;
                if (index === 0) {
                  // First card starts visible and can be animated out
                  cardProgress =
                    scrollProgress === 0
                      ? 1
                      : Math.max(
                          0,
                          Math.min(1, (scrollProgress - cardTrigger) * 20)
                        );
                } else {
                  // Other cards animate in as before
                  cardProgress = Math.max(
                    0,
                    Math.min(1, (scrollProgress - cardTrigger) * 20)
                  );
                }

                // Stacking animation
                const basePosition = 420; // Increased from 350 to 420 for better spacing
                const stackOffset = index * 8; // Tighter stacking - 8px per card
                const finalPosition = stackOffset; // Stack upward from base

                // Modified translateY calculation for first card
                let translateY;
                if (index === 0) {
                  // First card starts at final position
                  translateY =
                    scrollProgress === 0
                      ? finalPosition
                      : basePosition -
                        cardProgress * (basePosition - finalPosition);
                } else {
                  translateY =
                    basePosition -
                    cardProgress * (basePosition - finalPosition);
                }

                // Enhanced visual effects
                const zIndex = 50 + index; // Higher base z-index

                // Modified opacity calculation for first card
                let opacity;
                if (index === 0) {
                  // First card is always visible initially
                  opacity =
                    scrollProgress === 0 ? 1 : Math.min(1, cardProgress * 3);
                } else {
                  opacity = Math.min(1, cardProgress * 3); // Faster fade in
                }

                const scale = 0.95 + cardProgress * 0.05; // Subtle scale effect

                return (
                  <div
                    key={card.id}
                    className="service-card absolute top-0 left-0 w-full bg-gradient-to-r from-white to-gray-50 border border-gray-200  rounded-[28px] backdrop-blur-sm"
                    style={{
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: "1px solid rgba(148, 163, 184, 0.3)",
                    }}
                  >
                    <div className="flex items-center justify-center h-full px-6 py-8">
                      <div className="flex items-center space-x-4 w-full">
                        {/* Icon Container with enhanced styling */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                            <Image
                              src={card.image}
                              alt="service icon"
                              height={32}
                              width={32}
                              className="w-18 h-18 object-contain "
                            />
                          </div>
                        </div>

                        {/* Text content with better typography */}
                        <div className="flex-1">
                          <h3 className="text-[18px] md:text-[22px] lg:text-[28px] font-[500] text-gray-800 leading-tight">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              ref={cardsRightRef}
              className="relative min-h-[300px] overflow-hidden"
            >
              {rightCards.map((card, index) => {
                // Modified identical synchronized animation logic for right side
                const scrollProgress = Math.min(
                  1,
                  Math.max(0, currentCardIndex / 20) // Updated to 20 for 20 cards
                );
                const pairIndex = Math.floor(index); // Which pair this card belongs to (0,1,2,3...)
                const cardTrigger = pairIndex * 0.05; // Adjusted for 20 cards (0.05 per card)

                // Modified to ensure first card (index 0) is always visible
                let cardProgress;
                if (index === 0) {
                  // First card starts visible and can be animated out
                  cardProgress =
                    scrollProgress === 0
                      ? 1
                      : Math.max(
                          0,
                          Math.min(1, (scrollProgress - cardTrigger) * 20)
                        );
                } else {
                  // Other cards animate in as before
                  cardProgress = Math.max(
                    0,
                    Math.min(1, (scrollProgress - cardTrigger) * 20)
                  );
                }

                // Stacking animation
                const basePosition = 420; // Increased from 350 to 420 for better spacing
                const stackOffset = index * 8; // Tighter stacking - 8px per card
                const finalPosition = stackOffset; // Stack upward from base

                // Modified translateY calculation for first card
                let translateY;
                if (index === 0) {
                  // First card starts at final position
                  translateY =
                    scrollProgress === 0
                      ? finalPosition
                      : basePosition -
                        cardProgress * (basePosition - finalPosition);
                } else {
                  translateY =
                    basePosition -
                    cardProgress * (basePosition - finalPosition);
                }

                // Enhanced visual effects
                const zIndex = 50 + index; // Higher base z-index

                // Modified opacity calculation for first card
                let opacity;
                if (index === 0) {
                  // First card is always visible initially
                  opacity =
                    scrollProgress === 0 ? 1 : Math.min(1, cardProgress * 3);
                } else {
                  opacity = Math.min(1, cardProgress * 3); // Faster fade in
                }

                const scale = 0.95 + cardProgress * 0.05; // Subtle scale effect

                return (
                  <div
                    key={card.id}
                    className="service-card absolute top-0 left-0 w-full bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-[28px] backdrop-blur-sm"
                    style={{
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      border: "1px solid rgba(148, 163, 184, 0.3)",
                    }}
                  >
                    <div className="flex items-center justify-center h-full px-6 py-8">
                      <div className="flex items-center space-x-4 w-full">
                        {/* Icon Container with enhanced styling */}
                        <div className="flex-shrink-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                            <Image
                              src={card.image}
                              alt="service icon"
                              height={32}
                              width={32}
                              className="w-18 h-18 object-contain "
                            />
                          </div>
                        </div>

                        {/* Text content with better typography */}
                        <div className="flex-1">
                          <h3 className="text-[18px] md:text-[22px] lg:text-[28px] font-[500] text-gray-800 leading-tight">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafariQTravelSection;

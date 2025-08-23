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
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

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

    if (cardsGridRef.current) {
      // Grid card reveal animations for both desktop and mobile
      const cards = cardsGridRef.current.querySelectorAll(".service-card");

      cards.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          y: 50,
          scale: 0.9,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 95%",
          end: "bottom 5%",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.2)",
              delay: isMobile ? (index % 2) * 0.1 : (index % 3) * 0.1, // Stagger animation for cards in the same row
            });
          },
          onLeave: () => {
            gsap.to(card, {
              opacity: 0.3,
              scale: 0.95,
              duration: 0.3,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      bannerAnimation.kill();
    };
  }, [isMobile, integrationPartners.length]);

  return (
    <div
      ref={sectionRef}
      id="ecosystem"
      className="relative min-h-screen bg-white overflow-visible py-[100px]"
    >
      {/* Background Images */}
      <Image
        src={"/utility-texture.svg"}
        alt="texture"
        width={500}
        height={60}
        className="absolute z-50 w-full bottom-0 md:-bottom-3 lg:-bottom-6"
        style={{ zIndex: 100 }}
      />
      <div className="flex justify-center items-center  w-full">
        <Image
          src={"/sec-icons.svg"}
          height={137}
          width={137}
          alt="section icons"
        />
      </div>
      {/* Main Content */}
      <div className=" relative py-8 mx-auto px-4 lg:px-0">
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

        {/* Service Cards Section - Now shows desktop cards on both desktop and mobile */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto"
        >
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="service-card group cursor-pointer transform transition-all rounded-[18px] md:rounded-[28px] duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="relative rounded-[18px] md:rounded-[28px] backdrop-blur-sm p-3 md:p-6 h-full group-hover:bg-transparent shadow-[0_3px_0_0_#5DE7FF] md:shadow-[0_6px_0_0_#5DE7FF] group-hover:border-1 group-hover:border-[#4CD9ED] group-hover:shadow-[0_3px_0_0_#5DE7FF] md:group-hover:shadow-[0_6px_0_0_#5DE7FF]"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: "1px solid rgba(148, 163, 184, 0.3)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="relative flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 h-full text-center md:text-left">
                  {/* Icon Container with enhanced styling - NO color changes on hover */}
                  <div className="flex-shrink-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl group-hover:border-[#4CD9ED] group-hover:border-1 flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={card.image}
                        alt="service icon"
                        height={40}
                        width={40}
                        className="w-6 h-6 md:w-10 md:h-10 object-contain transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Text content with NO color changes on hover */}
                  <div className="flex-1">
                    <h3 className="text-[12px] md:text-[16px] lg:text-[20px] font-[500] text-black leading-tight transition-all duration-300">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafariQTravelSection;

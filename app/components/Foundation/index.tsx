import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FoundationBrickSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !counterRef.current) return;

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();

    // Create a proxy object to animate
    const counterObj = { count: 0 };

    // Create the counter animation
    const counterAnimation = gsap.fromTo(
      counterObj, // Target object
      { count: 0 }, // fromVars
      {
        count: 13101,
        duration: 3,
        ease: "power2.out",
        onUpdate: () => {
          setCurrentCount(Math.round(counterObj.count));
        },
      }
    );

    // Pause the animation initially
    counterAnimation.pause();

    // Create ScrollTrigger with mobile-optimized settings
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 85%", // More generous trigger point for mobile
      end: "bottom 20%",
      refreshPriority: -1, // Lower priority for refresh calculations
      invalidateOnRefresh: true, // Recalculate on window resize
      onEnter: () => {
        counterAnimation.restart();
      },
      onLeave: () => {
        // Optional: pause when leaving view from bottom
      },
      onEnterBack: () => {
        counterAnimation.restart();
      },
      onLeaveBack: () => {
        counterAnimation.pause();
        setCurrentCount(0);
      },
      // Add markers for debugging (remove in production)
      // markers: true,
    });

    // Handle window resize to refresh ScrollTrigger
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      counterAnimation.kill();
    };
  }, []);

  // Alternative: Use Intersection Observer as fallback for mobile
  useEffect(() => {
    if (!sectionRef.current || !counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fallback counter animation if GSAP fails
            const counterObj = { count: 0 };
            gsap.to(counterObj, {
              count: 13101,
              duration: 3,
              ease: "power2.out",
              onUpdate: () => {
                setCurrentCount(Math.round(counterObj.count));
              },
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: "0px 0px -20% 0px", // Adjust viewport
      }
    );

    // Only use intersection observer on mobile as fallback
    const isMobile = window.innerWidth < 768;
    if (isMobile && sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    >
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
          <div className="bg-black border border-white/20 p-8 shadow-[0_6px_0_0_#5DE7FF] rounded-[16px] relative">
            {/* Live Minting Counter Card */}
            <div
              ref={counterRef}
              className="absolute bottom-20 right-10 
            text-white
             py-4 px-8 rounded-[16px] w-[250px]
              z-10
             border border-[rgba(255,255,255,0.13)]
             bg-[rgba(0,0,0,0.50)] backdrop-blur-[3.4px]
             transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-center">
                <p className="text-white font-semibold text-[12px] md:text-[14px] mb-1">
                  Live Minting Counter
                </p>
                <div className="text-white font-bold text-[18px] md:text-[24px] leading-tight">
                  {currentCount.toLocaleString()} / 100000
                </div>
                <p className="text-white font-medium text-[10px] md:text-[12px] mt-1">
                  Layer 1
                </p>
              </div>
            </div>

            <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-white mb-6 mt-8 sm:mt-12 md:mt-16">
              Your Reseller Key & Beyond
            </h2>

            <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed mb-4">
              World&apos;s largest NTF collection in Paid, RWA and Business
              Utility categories. Each Foundation Brick KEY NFT is a functional
              certificate, your entry pass to the SafariQ reseller economy and
              future Metaverse.
            </p>

            <Image
              src={"/nfts.svg"}
              height={100}
              width={300}
              className="w-full h-[150px] md:h-[210px]"
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
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
                  Acts as a SafariQ Reseller Certificate (just like becoming an
                  Amazon reseller).
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
                  Unlocks reseller dashboards, bulk deals & commission earnings.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
                  Doubled referral rewards & access to beta features.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
                  Instant minting surprises, NFTs holds random rewards worth up
                  to $10,000.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
                  Ultra Rare, Grail NFTs grant extraordinary privileges.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white/80 text-[16px] md:text-[20px] leading-relaxed">
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

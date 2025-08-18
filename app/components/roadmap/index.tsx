import Image from "next/image";
import React from "react";

interface RoadmapItem {
  id: string;
  title: string;
  completed: boolean;
  position: {
    top: string;
    left: string;
  };
  mobilePosition?: {
    top: string;
    left: string;
  };
}

const TravelRoadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      id: "prototype",
      title: "Prototype Build",
      completed: true,
      position: { top: "20%", left: "15%" },
      mobilePosition: { top: "15%", left: "5%" },
    },
    {
      id: "prelaunch",
      title: "Prelaunch Airdrop\nGame Activation",
      completed: true,
      position: { top: "70%", left: "27%" },
      mobilePosition: { top: "25%", left: "5%" },
    },
    {
      id: "nft-campaign",
      title: "NFT Campaign Launch",
      completed: true,
      position: { top: "15%", left: "30%" },
      mobilePosition: { top: "35%", left: "5%" },
    },
    {
      id: "mvp-start",
      title: "MVP\nDevelopment\nStart",
      completed: true,
      position: { top: "95%", left: "45%" },
      mobilePosition: { top: "45%", left: "5%" },
    },
    {
      id: "sed-token",
      title: "SED token\ncreation on BSC",
      completed: false,
      position: { top: "40%", left: "54%" },
      mobilePosition: { top: "55%", left: "5%" },
    },
    {
      id: "global-launch",
      title: "Global Launch\nPreparation",
      completed: false,
      position: { top: "75%", left: "75%" },
      mobilePosition: { top: "65%", left: "5%" },
    },
    {
      id: "fundraising",
      title: "Fundraising Rounds",
      completed: false,
      position: { top: "50%", left: "65%" },
      mobilePosition: { top: "75%", left: "5%" },
    },
    {
      id: "team-expansion",
      title: "Team Expansion &\nHiring",
      completed: false,
      position: { top: "68%", left: "86%" },
      mobilePosition: { top: "85%", left: "5%" },
    },
  ];

  return (
    <div id="roadmap" className="w-full  bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[400] text-black text-center mb-16 md:mb-20">
          Building the New Era of Travel
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full h-96">
          <Image
            src={"/roadmap.svg"}
            alt="roadmap"
            width={100}
            height={100}
            className="w-full h-full max-w-[1100px] mx-auto"
          />
        </div>

        {/* Mobile Layout */}
        <div className=" md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#4CD9ED]"></div>

            {roadmapItems.map((item) => (
              <div
                key={item.id}
                className="relative flex gap-x-2 items-center mb-8 last:mb-0 w-full"
              >
                {/* Marker */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center  ${
                    item.completed ? "" : ""
                  }  z-10 flex-shrink-0`}
                >
                  {item.completed ? (
                    <Image
                      src={"/complete.svg"}
                      alt="complete"
                      width={44}
                      height={44}
                    />
                  ) : (
                    <Image
                      src={"/incomplete.svg"}
                      alt="complete"
                      width={44}
                      height={44}
                    />
                  )}
                </div>

                {/* Label */}
                <div
                  className={`px-4 py-2 rounded-full text-sm w-full font-medium whitespace-pre-line text-center  ${
                    item.completed
                      ? "text-black"
                      : "bg-white text-gray-700 border-2 border-gray-200"
                  } shadow-md`}
                  style={
                    item.completed
                      ? {
                          borderRadius: "15px",
                          border: "1px solid rgba(136, 136, 136, 0.34)",
                          background: "rgba(255, 255, 255, 0.47)",
                          boxShadow: "0 4px 0 0 #3EB9CF",
                          backdropFilter: "blur(28px)",
                        }
                      : {
                          borderRadius: "15px",
                          border: "1px solid rgba(136, 136, 136, 0.34)",
                          background: "rgba(255, 255, 255, 0.47);",
                          boxShadow: "0 4px 0 0 #BFBFBF",
                          backdropFilter: "blur(28px)",
                        }
                  }
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelRoadmap;

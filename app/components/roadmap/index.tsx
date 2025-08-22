import Image from "next/image";
import React from "react";

const TravelRoadmap: React.FC = () => {
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
          <Image
            src={"/roadmap-mob.svg"}
            alt="roadmap"
            width={100}
            height={100}
            className="w-full h-full max-w-[768] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelRoadmap;

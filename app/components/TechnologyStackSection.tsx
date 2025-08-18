import React from "react";
import dummyData from "@/utils/dummyData";
import TechnologyCard from "./TechnologyCard";
import {
  blackBackground,
  containerBlack,
  graidentBackground,
} from "@/utils/assets";
import Icon from "@/component/icon";

const TechnologyStackSection = () => {
  return (
    <div>
      <div className="w-full h-12">
        <Icon src={containerBlack} className={`bg-cover w-full h-12`} />
      </div>
      <section className="relative h-auto min-h-[400px] md:min-h-[500px] lg:h-[639px] py-12 md:py-16 lg:py-20 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-center bg-black bg-no-repeat w-full h-full"
          style={{ backgroundImage: `url(${blackBackground})` }}
        />
        <div
          className="absolute z-10 top-0 left-0 inset-0 bg-center bg-black bg-no-repeat w-full max-sm:hidden md:w-[600px] lg:w-[828px] h-full"
          style={{ backgroundImage: `url(${graidentBackground})` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-[28px] md:text-[36px] lg:text-4xl xl:text-5xl font-normal text-white mb-4 md:mb-5 lg:mb-6">
              Our Technology Stack
            </h2>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {dummyData.technologyCardData.map((technology, index) => (
              <TechnologyCard
                key={index}
                src={technology.src}
                title={technology.title}
                description={technology.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStackSection;

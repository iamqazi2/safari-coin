import dummyData from "@/utils/dummyData";
import React from "react";
import ServiceCard from "./serviceCard";
import Icon from "./icon";
import { stars } from "@/utils/assets";

const ServiceSection: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center relative">
        <div className="py-4 px-4 md:px-6 flex flex-col gap-2 max-w-[1038px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-black max-w-[868px] font-normal text-[28px] md:text-[36px] lg:text-5xl leading-[150%] text-center">
              {`Helping the Everyday Traveler In every city, All-in-One Travel Solution`}
            </h2>
          </div>
          <p className="text-black font-normal text-[16px] md:text-[20px] lg:text-2xl leading-[150%] text-center">
            {`SafariQ is crafted with the belief that travel should be smarter, seamless, and more rewarding. SafariQ serves as a complete travel hub offering:`}
          </p>
        </div>

        <div className="rounded-full absolute left-[53px] hidden lg:block">
          <div className="w-[95px] h-[145px] flex items-center justify-center">
            <Icon src={stars} className={`bg-contain w-[95px] h-[145px]`} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dummyData.serviceCardData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

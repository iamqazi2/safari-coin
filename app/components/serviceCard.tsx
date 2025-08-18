import { ServiceCardProps } from "@/utils/models";
import React from "react";
import Icon from "./icon";

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <div
      className={`flex flex-col items-center max-lg:justify-center gap-2 w-full max-w-[403px] h-auto min-h-[280px] md:h-[320px] lg:h-[376px] p-4 md:p-5 lg:p-6 rounded-[15px]`}
      style={{
        background: "#ffffff",
        border: "1px solid #62626257",
        boxShadow: "0px 4px 0px 0px #00a8c5",
        backdropFilter: "blur(56px)",
      }}
    >
      <div className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[130px] lg:w-[130px]">
        <div className="bg-[#4CD9ED] rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[130px] lg:w-[130px] flex items-center justify-center">
          <Icon
            src={props.icon}
            className={`bg-contain w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[69px] lg:h-[69px]`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-black font-medium text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-center">
          {props.title}
        </p>
        <p className="text-black font-normal text-[16px] md:text-[20px] lg:text-xl xl:text-2xl text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

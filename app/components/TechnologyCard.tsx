import Image from "next/image";
import React from "react";

// Define the props interface for TechnologyCard
interface TechnologyCardProps {
  src: string;
  title: string;
  description: string;
}

// Use React.FC with the props interface
const TechnologyCard: React.FC<TechnologyCardProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div
      className="backdrop-blur-xl h-[280px] md:h-[330px] lg:h-[380px] w-full max-w-[295px] mx-auto relative bg-black/30 rounded-[20px] md:rounded-[23px] lg:rounded-[26px] transition-all duration-300 p-2"
      style={{
        borderRight: "0.66px solid #D3D3D357",
        borderTop: "0.66px solid #D3D3D357",
        borderLeft: "0.66px solid #D3D3D357",
        borderBottom: "0.66px solid #D3D3D357",
      }}
    >
      <div className="bg-[#11111699] relative h-full rounded-[20px] md:rounded-[23px] lg:rounded-[26px] transition-all duration-300">
        <div className="relative h-[230px] md:h-[270px] lg:h-[330px] w-full">
          <Image
            fill
            src={src}
            alt={title}
            className="w-full h-full object-contain mx-auto"
          />
        </div>

        <div
          className="absolute bottom-2 bg-black/10 rounded-[12px] md:rounded-[13px] lg:rounded-[15px] h-[66px] md:h-[76px] lg:h-[86px] w-[calc(100%-16px)] md:w-[calc(100%-20px)] lg:w-[calc(100%-24px)] text-left p-2 md:p-2 lg:p-2 mx-2 md:mx-2.5 lg:mx-3 backdrop-blur-sm"
          style={{
            border: "0.66px solid #D3D3D357",
          }}
        >
          <h3 className="text-[12px] md:text-[13px] lg:text-[15px] font-bold text-white mb-1">
            {title}
          </h3>
          <p className="text-white/90 text-[8px] md:text-[9px] lg:text-[10px] font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;

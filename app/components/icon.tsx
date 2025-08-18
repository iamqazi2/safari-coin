import { IconProps } from "@/utils/models";
import React from "react";

const Icon: React.FC<IconProps> = (props) => {
  return (
    <div
      className={`bg-center bg-no-repeat ${props.className}`}
      style={{ backgroundImage: `url(${props.src})` }}
    />
  );
};

export default Icon;

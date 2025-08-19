"use client";
import React, { useEffect, useState } from "react";
import HeroSectionBackground from "../components/HeroSectionBackground";
import SafariQVisionSection from "../components/SafariQVisionSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import WhatMakesDifferentSection from "../components/WhatMakesDifferentSection";
import UAEWeb3Section from "../components/UAEWeb3Section";
import TechnologyStackSection from "../components/TechnologyStackSection";
import EcosystemValuesSection from "../components/EcosystemValuesSection";
import JoinMovementSection from "../components/JoinMovementSection";
import LoadingScreen from "../components/loader";

const EcoSystemPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col ">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeroSectionBackground />
          <SafariQVisionSection />
          <WhoWeAreSection />
          <WhatWeDoSection />
          <WhatMakesDifferentSection />
          <UAEWeb3Section />
          <TechnologyStackSection />
          <EcosystemValuesSection />
          <JoinMovementSection />
        </>
      )}
    </div>
  );
};

export default EcoSystemPage;

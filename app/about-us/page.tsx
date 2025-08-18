"use client";
import { useEffect, useState } from "react";
import AIWeb3Section from "../components/AIWeb3Section";
import EarnSection from "../components/EarnSection";
import FeaturesSection from "../components/FeaturesSection";
import GlobalVisionSection from "../components/GlobalVisionSection";
import HeroSections from "../components/HeroSection";
import NFTCollectionSection from "../components/NFTCollectionSection";
import ReadyToBeginSection from "../components/ReadyToBeginSection";
import ServiceSection from "../components/ServiceSection";
import LoadingScreen from "../components/loader";

const AboutUsPage = () => {
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
          {" "}
          <HeroSections />
          <ServiceSection />
          <AIWeb3Section />
          <NFTCollectionSection />
          <EarnSection />
          <GlobalVisionSection />
          <FeaturesSection />
          <ReadyToBeginSection />
        </>
      )}
    </div>
  );
};

export default AboutUsPage;

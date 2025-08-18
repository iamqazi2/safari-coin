import React from "react";
import HeroSections from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AIWeb3Section from "../components/AIWeb3Section";
import NFTCollectionSection from "../components/NFTCollectionSection";
import EarnSection from "../components/EarnSection";
import GlobalVisionSection from "../components/GlobalVisionSection";
import FeaturesSection from "../components/FeaturesSection";
import ReadyToBeginSection from "../components/ReadyToBeginSection";
import Footer from "../components/footer"

const AboutUsPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroSections />
      <ServiceSection />
      <AIWeb3Section />
      <NFTCollectionSection />
      <EarnSection />
      <GlobalVisionSection />
      <FeaturesSection />
      <ReadyToBeginSection />
      <Footer />
    </div>
  );
};

export default AboutUsPage;

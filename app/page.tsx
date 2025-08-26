"use client";
import { useState, useEffect } from "react";
import TravelSignupSection from "./components/contact";
import SafariQTravelSection from "./components/futureTravel";
import { HeroSectionMain } from "./components/herosectionmain";
import Newsletter from "./components/newsletter";
import NFTCardsSlider from "./components/NFTcards";
import TravelRoadmap from "./components/roadmap";
import TravelTokensSection from "./components/utility";
import DualVideoSection from "./components/videosection";
import LoadingScreen from "./components/loader";
import FoundationBrickSection from "./components/Foundation";
import SEDNFTsSection from "./components/Power";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeroSectionMain />
          <SafariQTravelSection />
          <TravelTokensSection />
          <FoundationBrickSection />
          <NFTCardsSlider />
          <SEDNFTsSection />
          <TravelSignupSection />
          <TravelRoadmap />
          <DualVideoSection />
          <Newsletter />
        </>
      )}
    </div>
  );
};

export default App;

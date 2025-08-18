import AIWeb3Section from "../components/AIWeb3Section";
import EarnSection from "../components/EarnSection";
import FeaturesSection from "../components/FeaturesSection";
import GlobalVisionSection from "../components/GlobalVisionSection";
import HeroSections from "../components/HeroSection";
import NFTCollectionSection from "../components/NFTCollectionSection";
import ReadyToBeginSection from "../components/ReadyToBeginSection";
import ServiceSection from "../components/ServiceSection";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col ">
      <HeroSections />
      <ServiceSection />
      <AIWeb3Section />
      <NFTCollectionSection />
      <EarnSection />
      <GlobalVisionSection />
      <FeaturesSection />
      <ReadyToBeginSection />
    </div>
  );
};

export default AboutUsPage;

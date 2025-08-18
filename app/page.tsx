import TravelSignupSection from "./components/contact";
import Footer from "./components/footer";
import SafariQTravelSection from "./components/futureTravel";
import { HeroSectionMain } from "./components/herosectionmain";
import Newsletter from "./components/newsletter";
import NFTCardsSlider from "./components/NFTcards";
// import TravelRoadmap from "./components/roadmap";
// import TravelTokensSection from "./components/utility";
import DualVideoSection from "./components/videosection";

const App = () => {
  return (
    <div className="">
      <HeroSectionMain />
      <SafariQTravelSection />
      {/* <TravelTokensSection /> */}
      <NFTCardsSlider />
      <TravelSignupSection />
      {/* <TravelRoadmap /> */}
      <DualVideoSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;

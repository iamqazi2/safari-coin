import TravelSignupSection from "./components/contact";
import SafariQTravelSection from "./components/futureTravel";
import { HeroSectionMain } from "./components/herosectionmain";
import Newsletter from "./components/newsletter";
import NFTCardsSlider from "./components/NFTcards";
import DualVideoSection from "./components/videosection";

const App = () => {
  return (
    <div className="">
      <HeroSectionMain />
      <SafariQTravelSection />
      <NFTCardsSlider />
      <TravelSignupSection />
      <DualVideoSection />
      <Newsletter />
    </div>
  );
};

export default App;

import {
  transportationAssistance,
  hotalStayManagement,
  smartItineraries,
  journeyTrackSafetyTools,
  visaAssistance,
  communityDiscovery,
  aiEngine,
  web3Backbone,
  defiReadyWallet,
  secureDecentralized,
} from "./assets";
import { DummyData } from "./models";

export const dummyData: DummyData = {
  serviceCardData: [
    {
      icon: transportationAssistance,
      title: "Transportation Assistance",
      description:
        "Access the most extensive inventory with competitive pricing.",
    },
    {
      icon: hotalStayManagement,
      title: "Hotel & Stay Management",
      description: "Compare, book, and manage stays worldwide.",
    },
    {
      icon: smartItineraries,
      title: "Smart Itineraries",
      description:
        "AI-generated, dynamic itineraries based on your preferences.",
    },
    {
      icon: journeyTrackSafetyTools,
      title: "Journey Track & Safety Tools",
      description:
        "Stay organized and safe with real-time tracking, reminders, and emergency tools.",
    },
    {
      icon: visaAssistance,
      title: "Visa Assistance & Travel Insurance",
      description: "Integrated support where it matters.",
    },
    {
      icon: communityDiscovery,
      title: "Community Discovery",
      description: "Find, share, and connect with like-minded travelers.",
    },
  ],
  technologyCardData: [
    {
      src: aiEngine,
      title: "AI Engine:",
      description:
        'we are working on 3 Innovative, "Patent-ready technologies" for personalized travel planning, industry connectivity and real-time assistance',
    },
    {
      src: web3Backbone,
      title: "Web3 Backbone:",
      description:
        "Polygon blockchain, NFT smart contracts, and SED token integration",
    },
    {
      src: defiReadyWallet,
      title: "DeFi-Ready Wallet:",
      description: "Store, earn, and redeem rewards within SafariQ",
    },
    {
      src: secureDecentralized,
      title: "Secure & Decentralized:",
      description: "User-owned travel data with full encryption",
    },
  ],
};

export default dummyData;

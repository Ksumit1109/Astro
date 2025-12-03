"use client";

import { motion } from "framer-motion";
import { TabPanel } from "./components/tab-panel";
import { RashifalForm } from "./components/Forms/RashifalForm";
import { KundliForm } from "./components/Forms/KundliForm";
import { MatchMakingForm } from "./components/Forms/MatchMakingForm";
import { NumerologyForm } from "./components/Forms/NumerologyForm";
import { PanchangForm } from "./components/Forms/PanchangForm";

const Icons = {
  Dashboard: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Sections: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  ),
  Assets: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
};

const tabsData = [
  {
    id: "rashifal",
    icon: <Icons.Assets />,
    title: "Rashifal",
    subtitle: "Daily Horoscope Predictions",
    content: <RashifalForm />,
  },
  {
    id: "kundli",
    icon: <Icons.Dashboard />,
    title: "Kundli",
    subtitle: "Detailed Birth Chart Analysis",
    content: <KundliForm />,
  },
  {
    id: "matchmaking",
    icon: <Icons.Sections />,
    title: "Match Making",
    subtitle: "Horoscope Compatibility Check",
    content: <MatchMakingForm />,
  },
  {
    id: "numerology",
    icon: <Icons.Assets />,
    title: "Numerology",
    subtitle: "Power of Numbers",
    content: <NumerologyForm />,
  },
  {
    id: "panchang",
    icon: <Icons.Sections />,
    title: "Panchang",
    subtitle: "Daily Astrological Calendar",
    content: <PanchangForm />,
  },
];

export default function ProductTabs() {
  const tabs = tabsData;
  return (
    <motion.main
      id="services"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className=" bg-background"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <TabPanel tabs={tabs} defaultTab="rashifal" />
      </div>
    </motion.main>
  );
}

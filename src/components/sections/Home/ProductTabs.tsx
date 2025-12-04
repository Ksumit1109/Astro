"use client";

import { motion } from "framer-motion";
import { Sparkles, ScrollText, Heart, Hash, Calendar } from "lucide-react";
import { TabPanel } from "./components/tab-panel";
import { RashifalForm } from "./components/Forms/RashifalForm";
import { KundliForm } from "./components/Forms/KundliForm";
import { MatchMakingForm } from "./components/Forms/MatchMakingForm";
import { NumerologyForm } from "./components/Forms/NumerologyForm";
import CalendarPage from "./components/Calendar/calendar-page";

const tabsData = [
  {
    id: "rashifal",
    icon: <Sparkles size={20} />,
    title: "Rashifal",
    subtitle: "Daily Horoscope Predictions",
    content: <RashifalForm />,
  },
  {
    id: "kundli",
    icon: <ScrollText size={20} />,
    title: "Kundli",
    subtitle: "Detailed Birth Chart Analysis",
    content: <KundliForm />,
  },
  {
    id: "matchmaking",
    icon: <Heart size={20} />,
    title: "Match Making",
    subtitle: "Horoscope Compatibility Check",
    content: <MatchMakingForm />,
  },
  {
    id: "numerology",
    icon: <Hash size={20} />,
    title: "Numerology",
    subtitle: "Power of Numbers",
    content: <NumerologyForm />,
  },
  {
    id: "calendar",
    icon: <Calendar size={20} />,
    title: "Desi Calendar",
    subtitle: "Hindu Calendar & Festivals",
    content: <CalendarPage />,
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
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10 ">
        <TabPanel tabs={tabs} defaultTab="rashifal" />
      </div>
    </motion.main>
  );
}

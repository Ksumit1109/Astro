// demo.tsx

import Component from "./components/stacking-card";

const projects = [
  {
    title: "Kundli Generation",
    description:
      "Generate detailed Kundli charts based on your birth date, time, and place. Discover your planetary positions and astrological insights.",
    link: "/kundli",
  },
  {
    title: "Match Making",
    description:
      "Find your perfect match with our comprehensive horoscope matching service. Analyze compatibility based on Vedic astrology principles.",
    link: "/match-making",
  },
  {
    title: "Numerology",
    description:
      "Unlock the power of numbers. Get personalized numerology reports based on your name and birth date to guide your life path.",
    link: "/numerology",
  },
  {
    title: "Daily Rashifal",
    description:
      "Start your day with accurate daily horoscope predictions for your zodiac sign. Get insights into career, health, and relationships.",
    link: "/rashifal",
  },
  {
    title: "Panchang",
    description:
      "Access daily Panchang details including Tithi, Nakshatra, Yoga, and Karana. Plan your auspicious activities with precision.",
    link: "/panchang",
  },
];

export default function WhatWeDo() {
  return <Component projects={projects} />;
}

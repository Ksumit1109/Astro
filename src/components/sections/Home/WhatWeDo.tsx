// demo.tsx

import Component from "./components/stacking-card";

const projects = [
  {
    title: "Kundli Generation",
    description:
      "Generate detailed Kundli charts based on your birth date, time, and place. Discover your planetary positions and astrological insights.",
    link: "/kundli",
    image:
      "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=800&h=600&fit=crop",
  },
  {
    title: "Match Making",
    description:
      "Find your perfect match with our comprehensive horoscope matching service. Analyze compatibility based on Vedic astrology principles.",
    link: "/match-making",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop",
  },
  {
    title: "Numerology",
    description:
      "Unlock the power of numbers. Get personalized numerology reports based on your name and birth date to guide your life path.",
    link: "/numerology",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
  },
  {
    title: "Daily Rashifal",
    description:
      "Start your day with accurate daily horoscope predictions for your zodiac sign. Get insights into career, health, and relationships.",
    link: "/rashifal",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    title: "Panchang",
    description:
      "Access daily Panchang details including Tithi, Nakshatra, Yoga, and Karana. Plan your auspicious activities with precision.",
    link: "/panchang",
    image:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=600&fit=crop",
  },
];

export default function WhatWeDo() {
  return <Component projects={projects} />;
}

export interface AstroSign {
  hindi: string;
  english: string;
  symbol: string;
  element: "Agni" | "Prithvi" | "Jal" | "Vayu";
  elementIcon: string;
  rulingPlanet: string;
  keywords: string[];
}

export interface AstroReading {
  dailyForecast: string;
  luckyNumber: number;
  luckyColor: string;
  compatibility: string;
  mood: string;
  advice: string;
}

export const astroData: AstroSign[] = [
  {
    hindi: "मेष",
    english: "Mesh (Aries)",
    symbol: "♈",
    element: "Agni",
    elementIcon: "🔥",
    rulingPlanet: "Mangal (Mars)",
    keywords: ["Courageous", "Energetic", "Leader", "Passionate"],
  },
  {
    hindi: "वृषभ",
    english: "Vrishabh (Taurus)",
    symbol: "♉",
    element: "Prithvi",
    elementIcon: "🌍",
    rulingPlanet: "Shukra (Venus)",
    keywords: ["Stable", "Loyal", "Sensual", "Patient"],
  },
  {
    hindi: "मिथुन",
    english: "Mithun (Gemini)",
    symbol: "♊",
    element: "Vayu",
    elementIcon: "💨",
    rulingPlanet: "Budh (Mercury)",
    keywords: ["Curious", "Adaptable", "Witty", "Communicative"],
  },
  {
    hindi: "कर्क",
    english: "Kark (Cancer)",
    symbol: "♋",
    element: "Jal",
    elementIcon: "💧",
    rulingPlanet: "Chandra (Moon)",
    keywords: ["Nurturing", "Intuitive", "Protective", "Emotional"],
  },
  {
    hindi: "सिंह",
    english: "Singh (Leo)",
    symbol: "♌",
    element: "Agni",
    elementIcon: "🔥",
    rulingPlanet: "Surya (Sun)",
    keywords: ["Confident", "Creative", "Generous", "Charismatic"],
  },
  {
    hindi: "कन्या",
    english: "Kanya (Virgo)",
    symbol: "♍",
    element: "Prithvi",
    elementIcon: "🌍",
    rulingPlanet: "Budh (Mercury)",
    keywords: ["Analytical", "Practical", "Methodical", "Perfectionist"],
  },
  {
    hindi: "तुला",
    english: "Tula (Libra)",
    symbol: "♎",
    element: "Vayu",
    elementIcon: "💨",
    rulingPlanet: "Shukra (Venus)",
    keywords: ["Balanced", "Diplomatic", "Artistic", "Charming"],
  },
  {
    hindi: "वृश्चिक",
    english: "Vrishchik (Scorpio)",
    symbol: "♏",
    element: "Jal",
    elementIcon: "💧",
    rulingPlanet: "Mangal (Mars)",
    keywords: ["Mysterious", "Intense", "Transformative", "Magnetic"],
  },
  {
    hindi: "धनु",
    english: "Dhanu (Sagittarius)",
    symbol: "♐",
    element: "Agni",
    elementIcon: "🔥",
    rulingPlanet: "Brihaspati (Jupiter)",
    keywords: ["Adventurous", "Optimistic", "Visionary", "Philosophical"],
  },
  {
    hindi: "मकर",
    english: "Makar (Capricorn)",
    symbol: "♑",
    element: "Prithvi",
    elementIcon: "🌍",
    rulingPlanet: "Shani (Saturn)",
    keywords: ["Ambitious", "Disciplined", "Responsible", "Traditional"],
  },
  {
    hindi: "कुंभ",
    english: "Kumbh (Aquarius)",
    symbol: "♒",
    element: "Vayu",
    elementIcon: "💨",
    rulingPlanet: "Shani (Saturn)",
    keywords: ["Progressive", "Visionary", "Humanitarian", "Unique"],
  },
  {
    hindi: "मीन",
    english: "Meen (Pisces)",
    symbol: "♓",
    element: "Jal",
    elementIcon: "💧",
    rulingPlanet: "Brihaspati (Jupiter)",
    keywords: ["Imaginative", "Compassionate", "Mystical", "Intuitive"],
  },
];

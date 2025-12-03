"use client";

import { useState } from "react";
import { api, RashifalRequest } from "@/services/api";
import { astroData, AstroSign, AstroReading } from "@/lib/astro-data";
import InteractiveCard from "../Cards/interactive-card";

// Mapping from astro-data English names to API rashi names
const signToRashiMap: Record<string, string> = {
  "Mesh (Aries)": "Aries",
  "Vrishabh (Taurus)": "Taurus",
  "Mithun (Gemini)": "Gemini",
  "Kark (Cancer)": "Cancer",
  "Singh (Leo)": "Leo",
  "Kanya (Virgo)": "Virgo",
  "Tula (Libra)": "Libra",
  "Vrishchik (Scorpio)": "Scorpio",
  "Dhanu (Sagittarius)": "Sagittarius",
  "Makar (Capricorn)": "Capricorn",
  "Kumbh (Aquarius)": "Aquarius",
  "Meen (Pisces)": "Pisces",
};

export function RashifalForm() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const handleCardClick = async (
    sign: AstroSign
  ): Promise<AstroReading | null> => {
    const rashiName = signToRashiMap[sign.english];

    setLoadingStates((prev) => ({ ...prev, [sign.english]: true }));

    try {
      const formData: RashifalRequest = {
        rashi: rashiName,
        date: new Date().toISOString().split("T")[0],
      };

      const data = await api.getRashifal(formData);
      console.log("Rashifal Result:", data);

      // Transform API response to AstroReading format
      // Adjust this based on your actual API response structure
      const reading: AstroReading = {
        dailyForecast: typeof data === "string" ? data : JSON.stringify(data),
        luckyNumber: Math.floor(Math.random() * 99) + 1,
        luckyColor: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"][
          Math.floor(Math.random() * 6)
        ],
        compatibility: rashiName,
        mood: "Blessed",
        advice: "Trust the cosmic energies today.",
      };

      return reading;
    } catch (error) {
      console.error(error);
      alert("Failed to get rashifal");
      return null;
    } finally {
      setLoadingStates((prev) => ({ ...prev, [sign.english]: false }));
    }
  };

  return (
    <div className="w-full mx-auto px-4">
      {/* Grid: 6 columns on xl, 4 on lg, 3 on md, 2 on sm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {astroData.map((sign, index) => (
          <div key={index} className="flex justify-center">
            <InteractiveCard
              sign={sign}
              theme="dark"
              onCardClick={handleCardClick}
              isLoadingExternal={loadingStates[sign.english] || false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

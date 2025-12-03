"use client";

import { useState } from "react";
import CardReading from "./card-reading";
import AstroCard from "./Astrocard";
import { AstroReading, AstroSign } from "@/lib/astro-data";

interface InteractiveCardProps {
  sign: AstroSign;
  theme: "dark" | "light";
  onCardClick?: (sign: AstroSign) => Promise<AstroReading | null>;
  isLoadingExternal?: boolean;
}

export default function InteractiveCard({
  sign,
  theme,
  onCardClick,
  isLoadingExternal = false,
}: InteractiveCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<AstroReading | null>(null);

  const handleCardClick = async () => {
    if (isFlipped) {
      setIsFlipped(false);
      setReading(null);
      return;
    }

    setIsLoading(true);

    // Use external API call if provided, otherwise use mock data
    if (onCardClick) {
      const result = await onCardClick(sign);
      setReading(result);
    } else {
      // Simulate API call/calculation (fallback to mock)
      await new Promise((resolve) => setTimeout(resolve, 1800));

      const mockReading: AstroReading = {
        dailyForecast: `${
          sign.english
        } natives are blessed with ${sign.keywords[0].toLowerCase()} energy today. Focus on your goals and embrace the cosmic opportunities coming your way.`,
        luckyNumber: Math.floor(Math.random() * 99) + 1,
        luckyColor: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"][
          Math.floor(Math.random() * 6)
        ],
        compatibility: [
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn",
          "Aquarius",
          "Pisces",
        ][Math.floor(Math.random() * 12)],
        mood: [
          "Confident",
          "Creative",
          "Peaceful",
          "Energetic",
          "Reflective",
          "Inspired",
        ][Math.floor(Math.random() * 6)],
        advice:
          "Trust your intuition and embrace the cosmic flow. Today brings new possibilities.",
      };

      setReading(mockReading);
    }

    setIsLoading(false);
    setIsFlipped(true);
  };

  return (
    <div className="w-full max-w-sm">
      {/* Card Container with Flip Animation */}
      <div
        className="cursor-pointer perspective"
        onClick={handleCardClick}
        style={{
          perspective: "1000px",
          height: isFlipped ? "auto" : "auto",
        }}
      >
        <div
          className="relative w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Card */}
          <div
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className="relative">
              {/* Loading State Overlay */}
              {(isLoading || isLoadingExternal) && (
                <div
                  className={`absolute inset-0 rounded-2xl z-10 flex flex-col items-center justify-center backdrop-blur-sm bg-background/50`}
                >
                  {/* Spinning Loader */}
                  <div className="relative w-16 h-16 mb-4">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"
                      style={{
                        animation: "spin 2s linear infinite",
                      }}
                    />
                    <div
                      className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary/50 animate-spin"
                      style={{
                        animation: "spin 3s linear infinite reverse",
                      }}
                    />
                  </div>
                  <p className="text-primary text-sm font-semibold animate-pulse">
                    Reading Your Destiny...
                  </p>
                </div>
              )}

              <AstroCard sign={sign} theme={theme} />
            </div>
          </div>

          {/* Back - Flipped State */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            className="rounded-2xl overflow-hidden"
          >
            {reading ? (
              <div className="h-full w-full overflow-y-auto bg-card rounded-2xl">
                <CardReading reading={reading} sign={sign} theme={theme} />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-card rounded-2xl border border-border">
                <p className="text-muted-foreground">No reading available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click Hint */}
      {!isFlipped && !isLoading && (
        <p className="text-center text-muted-foreground text-[10px] sm:text-xs mt-3 sm:mt-4 animate-pulse">
          Click card for reading
        </p>
      )}

      {/* Close Hint */}
      {isFlipped && !isLoading && (
        <p className="text-center text-muted-foreground text-[10px] sm:text-xs mt-3 sm:mt-4 animate-pulse">
          Click card to close
        </p>
      )}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

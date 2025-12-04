"use client";

import { useState, useEffect } from "react";
import CardReading from "./card-reading";
import AstroCard from "./Astrocard";
import { AstroReading, AstroSign } from "@/lib/astro-data";
import { Minimize2 } from "lucide-react";

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
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    setIsMaximized(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMaximized]);

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
                  </div>
                  <p className="md:block hidden text-primary text-sm font-semibold animate-pulse">
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
                <CardReading
                  reading={reading}
                  sign={sign}
                  theme={theme}
                  onMaximize={handleMaximize}
                />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-card rounded-2xl border border-border">
                <p className="text-muted-foreground">No reading available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Maximized Modal */}
      {isMaximized && reading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleMinimize}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimize Button */}
            <button
              onClick={handleMinimize}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 z-10"
              aria-label="Minimize card"
            >
              <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </button>

            {/* Card Content without maximize button */}
            <CardReading reading={reading} sign={sign} theme={theme} />
          </div>
        </div>
      )}

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

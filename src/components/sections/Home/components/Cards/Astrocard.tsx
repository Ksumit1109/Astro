"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { AstroSign } from "@/lib/astro-data";

interface AstroCardProps {
  sign: AstroSign;
  theme: "dark" | "light";
}

export default function AstroCard({ sign, theme }: AstroCardProps) {
  // Simplified element colors using primary/secondary/accent/muted
  const elementBg = {
    Agni: "bg-chart-1/10",
    Prithvi: "bg-chart-2/10",
    Jal: "bg-primary/10",
    Vayu: "bg-chart-5/10",
  };

  const isMobile = useIsMobile();
  return (
    <div className="w-full h-full perspective">
      {/* Card Container */}
      <div
        className={`relative w-full aspect-[2.5/3.5] rounded-2xl overflow-hidden shadow-lg border border-border bg-card transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 cursor-pointer group`}
      >
        {/* Element Background Wash */}
        <div className={`absolute inset-0 ${elementBg[sign.element]}`} />

        {/* Mystical Pattern Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] text-foreground"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="mystical"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <path
                d="M10 5 L15 10 L10 15 L5 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#mystical)" />
        </svg>

        {/* Inner Border */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-primary/10 pointer-events-none`}
        />

        {/* Content Container */}
        <div className="relative h-full w-full flex flex-col items-center justify-between p-4 sm:p-6 text-center">
          {/* Top Section - Element & Planet */}
          <div className="flex items-center gap-2 sm:gap-3 w-full justify-center">
            <div className={`md:block hidden text-lg sm:text-xl`}>
              {sign.elementIcon}
            </div>
            <p
              className={`text-muted-foreground text-[10px] sm:text-xs font-semibold tracking-widest`}
            >
              {isMobile ? sign.elementIcon : sign.element} {!isMobile && "•"}{" "}
              {sign.rulingPlanet}
            </p>
          </div>

          {/* Center - Main Symbol */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            {/* Zodiac Symbol */}
            <div className="relative">
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-full opacity-20 bg-primary blur-xl -z-10 scale-125`}
              />

              {/* Symbol Container */}
              <div
                className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-primary/50 flex items-center justify-center text-4xl sm:text-6xl relative bg-card/50`}
              >
                {sign.symbol}
              </div>
            </div>

            {/* Zodiac Names */}
            <div>
              <h3
                className={`text-card-foreground text-xl sm:text-2xl font-bold tracking-wide`}
              >
                {sign.hindi}
              </h3>
              <p
                className={`text-muted-foreground text-xs sm:text-sm font-semibold mt-1`}
              >
                {sign.english}
              </p>
            </div>
          </div>

          {/* Keywords - Hidden on mobile, visible on sm+ */}
          <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {sign.keywords.slice(0, 3).map((keyword, idx) => (
              <span
                key={idx}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold border border-primary/20 bg-primary/5 text-primary`}
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Bottom - Decorative Line */}
          <div className={`w-8 sm:w-12 h-px bg-border`} />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />
      </div>
    </div>
  );
}

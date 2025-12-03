"use client";

import { AstroReading, AstroSign } from "@/lib/astro-data";

interface CardReadingProps {
  reading: AstroReading;
  sign: AstroSign;
  theme: "dark" | "light";
}

export default function CardReading({
  reading,
  sign,
  theme,
}: CardReadingProps) {
  // Using global variables for background and text
  const bgClass = "bg-card border-border";
  const textClass = "text-card-foreground";
  const mutedClass = "text-muted-foreground";

  return (
    <div
      className={`rounded-xl border p-4 sm:p-6 shadow-lg space-y-3 sm:space-y-4 ${bgClass}`}
    >
      {/* Header */}
      <div className="border-b border-primary/20 pb-3 sm:pb-4">
        <h3
          className={`${textClass} font-bold text-base sm:text-lg mb-0.5 sm:mb-1`}
        >
          Your Daily Reading
        </h3>
        <p className="text-primary text-xs sm:text-sm font-semibold">
          {sign.english}
        </p>
      </div>

      <div>
        <p
          className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2`}
        >
          Daily Forecast
        </p>
        <p className={`${textClass} text-xs sm:text-sm leading-relaxed`}>
          {reading.dailyForecast}
        </p>
      </div>

      {/* Grid of Details */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4">
        {/* Lucky Number */}
        <div className="bg-primary/5 rounded-lg p-2 sm:p-3 border border-primary/20 flex flex-col justify-center">
          <p
            className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1`}
          >
            Lucky Number
          </p>
          <p className="text-primary text-xl sm:text-2xl font-bold">
            {reading.luckyNumber}
          </p>
        </div>

        {/* Lucky Color */}
        <div className="bg-primary/5 rounded-lg p-2 sm:p-3 border border-primary/20 flex flex-col justify-center">
          <p
            className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1`}
          >
            Lucky Color
          </p>
          <p className={`${textClass} text-xs sm:text-sm font-bold truncate`}>
            {reading.luckyColor}
          </p>
        </div>

        {/* Compatibility */}
        <div className="bg-primary/5 rounded-lg p-2 sm:p-3 border border-primary/20 flex flex-col justify-center">
          <p
            className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1`}
          >
            Best Match
          </p>
          <p className={`${textClass} text-xs sm:text-sm font-bold truncate`}>
            {reading.compatibility}
          </p>
        </div>

        {/* Mood */}
        <div className="bg-primary/5 rounded-lg p-2 sm:p-3 border border-primary/20 flex flex-col justify-center">
          <p
            className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1`}
          >
            Today&apos;s Mood
          </p>
          <p className={`${textClass} text-xs sm:text-sm font-bold truncate`}>
            {reading.mood}
          </p>
        </div>
      </div>

      {/* Advice Section */}
      <div className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/20">
        <p
          className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2`}
        >
          Cosmic Advice
        </p>
        <p className={`${textClass} text-xs sm:text-sm italic`}>
          &quot;{reading.advice}&quot;
        </p>
      </div>
    </div>
  );
}

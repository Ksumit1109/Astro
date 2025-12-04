"use client";

import { AstroReading, AstroSign } from "@/lib/astro-data";
import ReactMarkdown from "react-markdown";
import { Maximize2 } from "lucide-react";

interface CardReadingProps {
  reading: AstroReading;
  sign: AstroSign;
  theme: "dark" | "light";
  onMaximize?: () => void;
}

export default function CardReading({
  reading,
  sign,
  theme,
  onMaximize,
}: CardReadingProps) {
  // Using global variables for background and text
  const bgClass = "bg-card border-border";
  const textClass = "text-card-foreground";
  const mutedClass = "text-muted-foreground";

  return (
    <div
      className={`rounded-xl border p-2.5 md:p-6 shadow-lg space-y-3 sm:space-y-4 ${bgClass} relative`}
    >
      {/* Maximize Icon */}
      {onMaximize && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMaximize();
          }}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-lg bg-transparent border hover:bg-hoverground transition-colors duration-200 z-10"
          aria-label="Maximize card"
        >
          <Maximize2 className="w-3 h-3 md:w-4 md:h-4 " />
        </button>
      )}

      {/* Header */}
      <div className="border-b  pb-3 sm:pb-4">
        <h3
          className={`${textClass} font-bold text-base md:text-lg mb-0.5 sm:mb-1`}
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
        <div
          className={`${textClass} text-xs sm:text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none`}
        >
          <ReactMarkdown>{reading.dailyForecast}</ReactMarkdown>
        </div>
      </div>

      {/* Grid of Details */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4">
        {/* Lucky Number */}
        <div className="bg-transparent rounded-lg p-2 sm:p-3 border flex flex-col justify-center">
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
        <div className="transparent rounded-lg p-2 sm:p-3 border  flex flex-col justify-center">
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
        <div className="transparent rounded-lg p-2 sm:p-3 border  flex flex-col justify-center">
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
        <div className="transparent rounded-lg p-2 sm:p-3 border  flex flex-col justify-center">
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
      <div className="transparent rounded-lg p-3 sm:p-4 border ">
        <p
          className={`${mutedClass} text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1 sm:mb-2`}
        >
          Cosmic Advice
        </p>
        <div
          className={`${textClass} text-xs sm:text-sm italic prose prose-sm dark:prose-invert max-w-none`}
        >
          <ReactMarkdown>{`"${reading.advice}"`}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

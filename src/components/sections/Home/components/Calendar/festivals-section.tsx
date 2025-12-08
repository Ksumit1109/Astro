"use client";

import {
  Festival,
  NationalHoliday,
  FestivalsSectionProps,
} from "@/types/types";
import { Star, Flame, Flag } from "lucide-react";

export default function FestivalsSection({
  festivals,
  nationalHolidays,
}: FestivalsSectionProps) {
  const majorFestivals = festivals.filter((f) => f.type === "major");
  const minorFestivals = festivals.filter((f) => f.type === "minor");

  const FestivalCard = ({ festival }: { festival: Festival }) => (
    <div
      className={`p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border transition-all hover:shadow-lg hover:scale-105 ${
        festival.type === "major"
          ? "bg-gradient-to-br from-chart-4/10 to-primary/5 border-primary/30 hover:border-primary/50"
          : "bg-gradient-to-br from-secondary to-muted border-border hover:border-muted-foreground/50"
      }`}
    >
      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div
          className={`p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg ${
            festival.type === "major" ? "bg-primary/20" : "bg-muted"
          }`}
        >
          {festival.type === "major" ? (
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-chart-4" />
          ) : (
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-xs sm:text-sm truncate">
            {festival.name}
          </h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 truncate">
            {festival.date}
          </p>
        </div>
      </div>
      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {festival.significance}
      </p>
    </div>
  );

  const HolidayCard = ({ holiday }: { holiday: NationalHoliday }) => (
    <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5 transition-all hover:shadow-lg hover:scale-105 hover:border-green-500/50">
      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg bg-green-500/20">
          <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-xs sm:text-sm truncate">
            {holiday.name}
          </h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 truncate">
            {holiday.date}
          </p>
        </div>
      </div>
      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {holiday.description}
      </p>
      {holiday.is_bank_holiday && (
        <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
          Bank Holiday
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {majorFestivals.length > 0 && (
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg bg-chart-4/20">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-chart-4" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground font-heading">
              🪷 प्रमुख त्योहार
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {majorFestivals.map((festival, idx) => (
              <FestivalCard key={idx} festival={festival} />
            ))}
          </div>
        </div>
      )}

      {nationalHolidays?.length > 0 && (
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg bg-green-500/20">
              <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground font-heading">
              🇮🇳 National Holidays
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {nationalHolidays.map((holiday, idx) => (
              <HolidayCard key={idx} holiday={holiday} />
            ))}
          </div>
        </div>
      )}

      {minorFestivals.length > 0 && (
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg bg-secondary">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground font-heading">
              ✦ अन्य त्योहार
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {minorFestivals.map((festival, idx) => (
              <FestivalCard key={idx} festival={festival} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

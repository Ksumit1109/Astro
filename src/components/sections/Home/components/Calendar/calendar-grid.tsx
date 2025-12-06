"use client";

const weekDays = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];

import {
  getSymbolForTithi,
  getSymbolForNakshatra,
  getColorForTithi,
} from "@/lib/calendar-symbols";
import { CalendarGridProps } from "@/types/types";

export default function CalendarGrid({ data }: CalendarGridProps) {
  const firstDay = new Date(data.year, data.month - 1, 1).getDay();
  const daysInMonth = new Date(data.year, data.month, 0).getDate();

  const getDayPanchang = (day: number) => {
    return data.daily_panchang.find((p) =>
      p.date.endsWith(`-${String(day).padStart(2, "0")}`)
    );
  };

  const getTithiColor = (tithi: string) => {
    const colorName = getColorForTithi(tithi);
    const colorMap: Record<string, string> = {
      "chart-1": "bg-chart-1/20 text-chart-1 border-chart-1/30",
      "chart-2": "bg-chart-2/20 text-chart-2 border-chart-2/30",
      "chart-3": "bg-chart-3/20 text-chart-3 border-chart-3/30",
      "chart-4": "bg-chart-4/20 text-chart-4 border-chart-4/30",
      "chart-5": "bg-chart-5/20 text-chart-5 border-chart-5/30",
      muted: "bg-muted text-muted-foreground border-border",
      primary: "bg-primary/10 text-primary border-primary/20",
    };
    return colorMap[colorName] || colorMap.primary;
  };

  return (
    <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-lg">
      {/* Weekday Headers - Hidden on Mobile */}
      <div className="hidden md:grid grid-cols-7 gap-0 bg-gradient-to-r from-primary to-chart-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-2 md:p-4 text-center text-primary-foreground font-semibold text-xs md:text-sm"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid/List */}
      <div className="flex flex-col gap-3 md:grid md:grid-cols-7 md:gap-0">
        {/* Empty slots - Hidden on Mobile */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="hidden md:block p-1.5 md:p-3 bg-secondary/30 min-h-20 md:min-h-36 border-r border-b border-border"
          />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const panchang = getDayPanchang(day);

          return (
            <div
              key={day}
              className={`group relative transition-all duration-200
                /* Mobile Styles */
                w-full bg-card rounded-xl border border-border/50 shadow-sm p-4 hover:shadow-md hover:border-primary/30
                /* Desktop Styles */
                md:w-auto md:bg-transparent md:rounded-none md:shadow-none md:p-3 md:min-h-36 md:border-r md:border-b md:border-border md:hover:bg-card/80 md:hover:shadow-lg md:hover:z-10 md:hover:scale-[1.02]
                ${
                  panchang?.is_special
                    ? "md:bg-primary/5 md:hover:bg-primary/10"
                    : ""
                }
              `}
            >
              <div className="h-full flex flex-col gap-3 md:gap-2">
                {/* Header: Date & Indicators */}
                <div className="flex items-center justify-between md:items-start">
                  <div className="flex items-center gap-3 md:block">
                    <span className="inline-flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-xl md:rounded-lg bg-gradient-to-br from-primary to-chart-2 text-primary-foreground font-bold text-lg md:text-sm shadow-sm">
                      {day}
                    </span>
                    {/* Mobile Only: Weekday Name */}
                    <span className="md:hidden text-lg font-semibold text-foreground">
                      {new Date(
                        data.year,
                        data.month - 1,
                        day
                      ).toLocaleDateString("hi-IN", { weekday: "long" })}
                    </span>
                  </div>

                  {panchang?.is_special && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 md:px-2 md:py-0.5 rounded-full bg-chart-4/10 text-chart-4 text-xs md:text-[10px] font-bold border border-chart-4/20 whitespace-nowrap">
                      <span className="md:hidden">✨ शुभ दिन</span>
                      <span className="hidden md:inline">✦</span>
                    </span>
                  )}
                </div>

                {/* Panchang Details */}
                {panchang && (
                  <div className="flex-1 w-full space-y-3 md:space-y-2 text-xs">
                    {/* Tithi */}
                    <div
                      className={`${getTithiColor(
                        panchang.tithi
                      )} rounded-lg md:rounded px-3 py-1.5 md:px-1.5 md:py-1 text-center font-medium border flex items-center justify-between md:justify-center gap-2 w-full`}
                      title={panchang.tithi}
                    >
                      <span className="text-sm md:text-xs font-bold">
                        {getSymbolForTithi(panchang.tithi)}
                      </span>
                      <span className="truncate text-sm md:text-[10px] md:font-medium">
                        {panchang.tithi}
                      </span>
                    </div>

                    {/* Details Grid (Mobile: 2 cols, Desktop: Stack) */}
                    <div className="grid grid-cols-2 md:block gap-3 md:gap-1">
                      {/* Nakshatra */}
                      <div className="flex items-center gap-2 md:gap-1.5 bg-secondary/30 md:bg-transparent rounded-lg md:rounded-none p-2 md:p-0">
                        <span className="text-base md:text-xs text-muted-foreground">
                          {getSymbolForNakshatra(panchang.nakshatra)}
                        </span>
                        <div className="flex flex-col md:flex-row md:items-center md:gap-1 overflow-hidden">
                          <span className="text-[10px] text-muted-foreground md:hidden">
                            नक्षत्र
                          </span>
                          <span
                            className="truncate font-medium md:font-normal text-sm md:text-[10px] text-muted-foreground"
                            title={panchang.nakshatra}
                          >
                            {panchang.nakshatra}
                          </span>
                        </div>
                      </div>

                      {/* Paksha */}
                      <div className="flex items-center gap-2 md:gap-1.5 bg-secondary/30 md:bg-transparent rounded-lg md:rounded-none p-2 md:p-0">
                        <span className="text-base md:text-xs text-muted-foreground">
                          {panchang.paksha === "शुक्ल पक्ष" ? "🌕" : "🌑"}
                        </span>
                        <div className="flex flex-col md:flex-row md:items-center md:gap-1 overflow-hidden">
                          <span className="text-[10px] text-muted-foreground md:hidden">
                            पक्ष
                          </span>
                          <span
                            className="truncate font-medium md:font-normal text-sm md:text-[10px] text-muted-foreground"
                            title={panchang.paksha}
                          >
                            {panchang.paksha}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

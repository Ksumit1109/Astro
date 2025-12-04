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
    <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-0 bg-gradient-to-r from-primary to-chart-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-4 text-center text-primary-foreground font-semibold text-sm"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="p-3 bg-secondary/30 min-h-36 border-r border-b border-border"
          />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const panchang = getDayPanchang(day);

          return (
            <div
              key={day}
              className={`p-3 min-h-36 border-r border-b border-border transition-all ${
                panchang?.is_special
                  ? "bg-primary/5 hover:bg-primary/10"
                  : "bg-card hover:bg-secondary/50"
              }`}
            >
              <div className="h-full flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-chart-2 text-primary-foreground font-bold text-sm">
                    {day}
                  </span>
                  {panchang?.is_special && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-chart-4/20 text-chart-4 text-xs font-bold border border-chart-4/30">
                      ✦
                    </span>
                  )}
                </div>

                {panchang && (
                  <div className="space-y-1.5 flex-1 text-xs">
                    <div
                      className={`${getTithiColor(
                        panchang.tithi
                      )} rounded-md px-2 py-1 text-center font-bold border flex items-center justify-center gap-1`}
                    >
                      <span>{getSymbolForTithi(panchang.tithi)}</span>
                      <span className="truncate">{panchang.tithi}</span>
                    </div>
                    <div className="text-foreground space-y-0.5">
                      <p className="truncate flex items-center gap-1">
                        <span className="text-muted-foreground text-xs">
                          🌟
                        </span>
                        <span className="text-muted-foreground">नक्षत्र:</span>
                        <span>{getSymbolForNakshatra(panchang.nakshatra)}</span>
                        <span className="truncate">{panchang.nakshatra}</span>
                      </p>
                      <p className="truncate text-muted-foreground text-xs">
                        {panchang.paksha === "शुक्ल पक्ष" ? "🌕" : "🌑"}{" "}
                        {panchang.paksha}
                      </p>
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

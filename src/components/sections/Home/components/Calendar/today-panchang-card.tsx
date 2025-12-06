"use client";

import { useEffect, useState } from "react";
import { Calendar, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getSymbolForTithi,
  getSymbolForNakshatra,
} from "@/lib/calendar-symbols";
import { DailyPanchang } from "@/types/types";
import { fetchTodayPanchang } from "@/services/api";

export default function TodayPanchang() {
  const [panchang, setPanchang] = useState<DailyPanchang | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPanchang = async () => {
      try {
        const data = await fetchTodayPanchang();
        setPanchang(data);
      } catch (error) {
        console.error("Failed to load today's panchang:", error);
        setError("Could not load today's panchang");
      } finally {
        setLoading(false);
      }
    };

    loadPanchang();
  }, []);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-secondary border-primary/20">
        <CardHeader>
          <div className="h-6 bg-muted rounded animate-pulse w-1/3" />
        </CardHeader>
      </Card>
    );
  }

  if (error || !panchang) return null;

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-secondary border-primary/20 overflow-hidden py-4">
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base">आज का पंचांग</span>
          </CardTitle>
          {panchang.is_special && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-chart-4 text-foreground text-[10px] sm:text-xs font-bold">
              ✦ शुभ दिन
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              तारीख
            </p>
            <p className="font-semibold text-xs sm:text-sm text-foreground truncate">
              {panchang.date}
            </p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> तिथि
            </p>
            <p className="font-semibold text-xs sm:text-sm flex items-center gap-1">
              <span className="text-sm sm:text-base">
                {getSymbolForTithi(panchang.tithi)}
              </span>
              <span className="truncate text-[10px] sm:text-xs">
                {panchang.tithi}
              </span>
            </p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              नक्षत्र
            </p>
            <p className="font-semibold text-xs sm:text-sm flex items-center gap-1">
              <span className="text-sm sm:text-base">
                {getSymbolForNakshatra(panchang.nakshatra)}
              </span>
              <span className="truncate text-[10px] sm:text-xs">
                {panchang.nakshatra}
              </span>
            </p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground">पक्ष</p>
            <p className="font-semibold text-xs sm:text-sm text-foreground truncate">
              {panchang.paksha}
            </p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground">दिन</p>
            <p className="font-semibold text-xs sm:text-sm text-foreground truncate">
              {panchang.weekday}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

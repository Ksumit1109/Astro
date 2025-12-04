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
    <Card className="bg-gradient-to-br from-primary/10 to-secondary border-primary/20 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            आज का पंचांग
          </CardTitle>
          {panchang.is_special && (
            <span className="px-2 py-1 rounded-full bg-chart-4 text-foreground text-xs font-bold">
              ✦ शुभ दिन
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">तारीख</p>
            <p className="font-semibold text-sm text-foreground">
              {panchang.date}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Star className="w-3 h-3" /> तिथि
            </p>
            <p className="font-semibold text-sm flex items-center gap-1">
              <span>{getSymbolForTithi(panchang.tithi)}</span>
              <span className="truncate">{panchang.tithi}</span>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">नक्षत्र</p>
            <p className="font-semibold text-sm flex items-center gap-1">
              <span>{getSymbolForNakshatra(panchang.nakshatra)}</span>
              <span className="truncate">{panchang.nakshatra}</span>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">पक्ष</p>
            <p className="font-semibold text-sm text-foreground">
              {panchang.paksha}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">दिन</p>
            <p className="font-semibold text-sm text-foreground">
              {panchang.weekday}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

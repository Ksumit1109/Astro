"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import CalendarGrid from "./calendar-grid";
import FestivalsSection from "./festivals-section";
import SpecialDaysSection from "./special-days-section";
import AuspiciousDaysSection from "./auspicious-days-section";
import TodayPanchang from "./today-panchang-card";
import { fetchMonthlyCalendar } from "@/services/api";
import { CalendarData } from "@/types/types";

export default function CalendarPage() {
  const [loading, setLoading] = useState(true);
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [activeTab, setActiveTab] = useState<
    "calendar" | "festivals" | "auspicious"
  >("calendar");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCalendarData();
  }, [currentMonth, currentYear]);

  const fetchCalendarData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMonthlyCalendar(currentYear, currentMonth);
      setCalendarData(data);
    } catch (error) {
      console.error("Error fetching calendar data:", error);
      setError("Calendar data could not be loaded.");
      setCalendarData(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground font-heading">
                  🕉️ देसी कैलेंडर
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Hindu Calendar & Panchang
                </p>
              </div>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevMonth}
                className="border-border bg-background hover:bg-secondary/50 h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="px-3 sm:px-6 py-2 text-center flex-1 sm:min-w-44 bg-background rounded-lg border border-border shadow-sm">
                <p className="font-semibold text-foreground text-sm sm:text-base">
                  {calendarData?.month_name} {currentYear}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {calendarData?.hindu_month}
                </p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextMonth}
                className="border-border bg-background hover:bg-secondary/50 h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 p-1 bg-secondary/30 rounded-lg border border-border/50">
            {(["calendar", "festivals", "auspicious"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-2 sm:px-4 py-2 sm:py-2.5 font-medium text-xs sm:text-sm rounded-md transition-all touch-manipulation ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="">
                  {tab === "calendar" && "📅 कैलेंडर"}
                  {tab === "festivals" && "🎉 त्योहार"}
                  {tab === "auspicious" && "🕉️ मुहूर्त"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Today's Panchang Widget */}
        <div className="mb-4 sm:mb-8">
          <TodayPanchang />
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6 border-destructive/30 bg-destructive/5">
            <AlertDescription className="text-destructive text-sm">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-secondary border-t-primary animate-spin" />
          </div>
        ) : calendarData ? (
          <>
            {activeTab === "calendar" && (
              <div className="space-y-8">
                <CalendarGrid data={calendarData} />
                <SpecialDaysSection specialDays={calendarData.special_days} />
              </div>
            )}
            {activeTab === "festivals" && (
              <FestivalsSection
                festivals={calendarData.festivals}
                nationalHolidays={calendarData.national_holidays}
              />
            )}
            {activeTab === "auspicious" && (
              <AuspiciousDaysSection
                auspiciousDays={calendarData.auspicious_days}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              Unable to load calendar data
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Please check your API configuration
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

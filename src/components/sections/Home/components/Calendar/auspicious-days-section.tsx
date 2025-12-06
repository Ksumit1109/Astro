"use client";

import { Clock, Heart, Home, Baby, Sparkles } from "lucide-react";

interface AuspiciousDay {
  date: string;
  muhurat: string;
  purpose: string;
}

interface AuspiciousDaysSectionProps {
  auspiciousDays: AuspiciousDay[];
}

export default function AuspiciousDaysSection({
  auspiciousDays,
}: AuspiciousDaysSectionProps) {
  const getPurposeStyle = (purpose: string) => {
    if (purpose.includes("विवाह"))
      return {
        bg: "bg-gradient-to-br from-chart-3/10 to-chart-3/5",
        border: "border-chart-3/30",
        icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-chart-3" />,
        symbol: "💒",
      };
    if (purpose.includes("गृहप्रवेश"))
      return {
        bg: "bg-gradient-to-br from-chart-2/10 to-chart-2/5",
        border: "border-chart-2/30",
        icon: <Home className="w-4 h-4 sm:w-5 sm:h-5 text-chart-2" />,
        symbol: "🏠",
      };
    if (purpose.includes("नामकरण"))
      return {
        bg: "bg-gradient-to-br from-chart-5/10 to-chart-5/5",
        border: "border-chart-5/30",
        icon: <Baby className="w-4 h-4 sm:w-5 sm:h-5 text-chart-5" />,
        symbol: "👶",
      };
    return {
      bg: "bg-gradient-to-br from-primary/10 to-primary/5",
      border: "border-primary/30",
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />,
      symbol: "⏰",
    };
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 font-heading">
          🕉️ शुभ मुहूर्त
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          शुभ समय और मुहूर्त के लिए महत्वपूर्ण कार्य
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {auspiciousDays.map((day, idx) => {
          const style = getPurposeStyle(day.purpose);
          return (
            <div
              key={idx}
              className={`${style.bg} ${style.border} border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg hover:scale-105 transition-all`}
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="p-2 sm:p-2.5 md:p-3 rounded-md sm:rounded-lg bg-card border border-border text-base sm:text-lg flex-shrink-0">
                  {style.symbol}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-1 truncate">
                    {day.purpose}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 truncate">
                    {day.date}
                  </p>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-card border border-border">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-medium text-foreground truncate">
                      {day.muhurat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary border border-primary/20 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 md:p-2.5 rounded-md sm:rounded-lg bg-primary/10 flex-shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
              मुहूर्त का महत्व
            </h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              मुहूर्त हिंदू परंपरा में शुभ समय को दर्शाता है। महत्वपूर्ण कार्यों
              को शुभ मुहूर्त में संपन्न करने से सफलता और आशीर्वाद मिलते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

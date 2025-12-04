"use client";

import { Festival, FestivalsSectionProps } from "@/types/types";
import { Star, Flame } from "lucide-react";

export default function FestivalsSection({ festivals }: FestivalsSectionProps) {
  const majorFestivals = festivals.filter((f) => f.type === "major");
  const minorFestivals = festivals.filter((f) => f.type === "minor");

  const FestivalCard = ({ festival }: { festival: Festival }) => (
    <div
      className={`p-5 rounded-xl border transition-all hover:shadow-lg hover:scale-105 ${
        festival.type === "major"
          ? "bg-gradient-to-br from-chart-4/10 to-primary/5 border-primary/30 hover:border-primary/50"
          : "bg-gradient-to-br from-secondary to-muted border-border hover:border-muted-foreground/50"
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`p-2.5 rounded-lg ${
            festival.type === "major" ? "bg-primary/20" : "bg-muted"
          }`}
        >
          {festival.type === "major" ? (
            <Flame className="w-5 h-5 text-chart-4" />
          ) : (
            <Star className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-sm">
            {festival.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {festival.date}
          </p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {festival.significance}
      </p>
    </div>
  );

  return (
    <div className="space-y-8">
      {majorFestivals.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-chart-4/20">
              <Flame className="w-5 h-5 text-chart-4" />
            </div>
            <h2 className="text-2xl font-bold text-foreground font-heading">
              🪷 प्रमुख त्योहार
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {majorFestivals.map((festival, idx) => (
              <FestivalCard key={idx} festival={festival} />
            ))}
          </div>
        </div>
      )}

      {minorFestivals.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-secondary">
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground font-heading">
              ✦ अन्य त्योहार
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {minorFestivals.map((festival, idx) => (
              <FestivalCard key={idx} festival={festival} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

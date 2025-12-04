"use client"

import { Moon, Sun, Circle } from "lucide-react"

interface SpecialDay {
  date: string
  name: string
  description: string
}

interface SpecialDaysSectionProps {
  specialDays: SpecialDay[]
}

export default function SpecialDaysSection({ specialDays }: SpecialDaysSectionProps) {
  const getSpecialDayStyle = (name: string) => {
    if (name.includes("पूर्णिमा"))
      return {
        bg: "bg-gradient-to-br from-chart-5/10 to-chart-4/5",
        border: "border-chart-4/30",
        icon: <Sun className="w-5 h-5 text-chart-4" />,
        symbol: "🌕",
      }
    if (name.includes("अमावस्या"))
      return {
        bg: "bg-gradient-to-br from-muted to-secondary",
        border: "border-border",
        icon: <Moon className="w-5 h-5 text-muted-foreground" />,
        symbol: "🌑",
      }
    return {
      bg: "bg-gradient-to-br from-primary/10 to-chart-2/5",
      border: "border-primary/30",
      icon: <Circle className="w-5 h-5 text-primary" />,
      symbol: "✦",
    }
  }

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary">
        <h2 className="text-2xl font-bold text-foreground font-heading">📅 विशेष दिन</h2>
        <p className="text-muted-foreground text-sm mt-1">महत्वपूर्ण तिथियां और उनका महत्व</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 p-6">
        {specialDays.map((day, idx) => {
          const style = getSpecialDayStyle(day.name)
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${style.border} ${style.bg} hover:shadow-lg hover:scale-105 transition-all group`}
            >
              <div className="w-12 h-12 rounded-lg bg-card border border-border mb-3 flex items-center justify-center group-hover:border-primary/50 transition-colors text-lg">
                {style.symbol}
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{day.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{day.date}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{day.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

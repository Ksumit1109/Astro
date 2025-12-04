"use client"

import { Clock, Heart, Home, Baby, Sparkles } from "lucide-react"

interface AuspiciousDay {
  date: string
  muhurat: string
  purpose: string
}

interface AuspiciousDaysSectionProps {
  auspiciousDays: AuspiciousDay[]
}

export default function AuspiciousDaysSection({ auspiciousDays }: AuspiciousDaysSectionProps) {
  const getPurposeStyle = (purpose: string) => {
    if (purpose.includes("विवाह"))
      return {
        bg: "bg-gradient-to-br from-chart-3/10 to-chart-3/5",
        border: "border-chart-3/30",
        icon: <Heart className="w-5 h-5 text-chart-3" />,
        symbol: "💒",
      }
    if (purpose.includes("गृहप्रवेश"))
      return {
        bg: "bg-gradient-to-br from-chart-2/10 to-chart-2/5",
        border: "border-chart-2/30",
        icon: <Home className="w-5 h-5 text-chart-2" />,
        symbol: "🏠",
      }
    if (purpose.includes("नामकरण"))
      return {
        bg: "bg-gradient-to-br from-chart-5/10 to-chart-5/5",
        border: "border-chart-5/30",
        icon: <Baby className="w-5 h-5 text-chart-5" />,
        symbol: "👶",
      }
    return {
      bg: "bg-gradient-to-br from-primary/10 to-primary/5",
      border: "border-primary/30",
      icon: <Clock className="w-5 h-5 text-primary" />,
      symbol: "⏰",
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">🕉️ शुभ मुहूर्त</h2>
        <p className="text-muted-foreground text-sm">शुभ समय और मुहूर्त के लिए महत्वपूर्ण कार्य</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {auspiciousDays.map((day, idx) => {
          const style = getPurposeStyle(day.purpose)
          return (
            <div
              key={idx}
              className={`${style.bg} ${style.border} border rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-card border border-border text-lg">{style.symbol}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-1">{day.purpose}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{day.date}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-foreground">{day.muhurat}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary border border-primary/20 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">मुहूर्त का महत्व</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              मुहूर्त हिंदू परंपरा में शुभ समय को दर्शाता है। महत्वपूर्ण कार्यों को शुभ मुहूर्त में संपन्न करने से सफलता और आशीर्वाद मिलते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

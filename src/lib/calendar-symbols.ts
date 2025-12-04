export const HinduSymbols = {
  om: "ॐ",
  tilak: "🕉️",
  moon: "☽",
  sun: "☀",
  star: "★",
  lotus: "🪷",
}

export const TITHI_INFO = {
  प्रतिपदा: { symbol: "①", color: "chart-1" },
  द्वितीया: { symbol: "②", color: "chart-2" },
  तृतीया: { symbol: "③", color: "chart-3" },
  चतुर्थी: { symbol: "④", color: "chart-4" },
  पंचमी: { symbol: "⑤", color: "chart-5" },
  षष्ठी: { symbol: "⑥", color: "chart-1" },
  सप्तमी: { symbol: "⑦", color: "chart-2" },
  अष्टमी: { symbol: "⑧", color: "chart-3" },
  नवमी: { symbol: "⑨", color: "chart-4" },
  दशमी: { symbol: "⑩", color: "chart-5" },
  एकादशी: { symbol: "🕉️", color: "chart-4" },
  द्वादशी: { symbol: "⑫", color: "chart-1" },
  त्रयोदशी: { symbol: "⑬", color: "chart-2" },
  चतुर्दशी: { symbol: "⑭", color: "chart-3" },
  पूर्णिमा: { symbol: "🌕", color: "chart-5" },
  अमावस्या: { symbol: "🌑", color: "muted" },
}

export const NAKSHATRA_SYMBOLS: Record<string, string> = {
  अश्विनी: "♈",
  भरणी: "♉",
  कृत्तिका: "♊",
  रोहिणी: "♋",
  मृगशिरा: "♌",
  आर्द्रा: "♍",
  पुनर्वसु: "♎",
  पुष्य: "♏",
  आश्लेषा: "♐",
  मघा: "♑",
  पूर्वा_फाल्गुनी: "♒",
  उत्तरा_फाल्गुनी: "♓",
  हस्त: "♈",
  चित्रा: "♉",
  स्वाति: "♊",
  विशाखा: "♋",
  अनुराधा: "♌",
  ज्येष्ठा: "♍",
  मूल: "♎",
  पूर्वाषाढ़ा: "♏",
  उत्तराषाढ़ा: "♐",
  श्रवण: "♑",
  धनिष्ठा: "♒",
  शतभिषा: "♓",
  पूर्वा_भाद्रपद: "♈",
  उत्तरा_भाद्रपद: "♉",
  रेवती: "♊",
}

export function getSymbolForTithi(tithi: string): string {
  const info = TITHI_INFO[tithi as keyof typeof TITHI_INFO]
  return info?.symbol || "•"
}

export function getColorForTithi(tithi: string): string {
  const info = TITHI_INFO[tithi as keyof typeof TITHI_INFO]
  return info?.color || "primary"
}

export function getSymbolForNakshatra(nakshatra: string): string {
  return NAKSHATRA_SYMBOLS[nakshatra] || "✦"
}

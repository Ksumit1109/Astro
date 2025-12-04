export interface User {
  id: string;
  name: string;
  gender: string;
  email: string;
  birthYear: number;
}

export interface KundliRequest {
  name: string;
  birth_date: string; // YYYY-MM-DD
  birth_time: string; // HH:MM
  birth_place: string;
}

export interface KundliResponse {
  id: string;
  kundli: Record<string, unknown>; // JSON object
}

export interface RashifalRequest {
  rashi: string;
  date: string; // YYYY-MM-DD
}

export interface MatchMakingRequest {
  boy_name: string;
  boy_dob: string;
  boy_time: string;
  boy_place: string;
  girl_name: string;
  girl_dob: string;
  girl_time: string;
  girl_place: string;
}

export interface NumerologyRequest {
  name: string;
  birth_date: string;
}

export interface DailyPanchang {
  date: string;
  weekday: string;
  tithi: string;
  paksha: string;
  nakshatra: string;
  is_special: boolean;
  special_name: string | null;
}

export interface Festival {
  date: string;
  name: string;
  significance: string;
  type: "major" | "minor";
}

export interface SpecialDay {
  date: string;
  name: string;
  description: string;
}

export interface AuspiciousDay {
  date: string;
  muhurat: string;
  purpose: string;
}

export interface CalendarData {
  year: number;
  month: number;
  month_name: string;
  hindu_month: string;
  daily_panchang: DailyPanchang[];
  festivals: Festival[];
  special_days: SpecialDay[];
  auspicious_days: AuspiciousDay[];
  total_days: number;
}

export interface DailyPanchang {
  date: string;
  weekday: string;
  tithi: string;
  paksha: string;
  nakshatra: string;
  is_special: boolean;
  special_name: string | null;
}

export interface CalendarGridProps {
  data: {
    daily_panchang: DailyPanchang[];
    month: number;
    year: number;
  };
}

export interface FestivalsSectionProps {
  festivals: Festival[];
}

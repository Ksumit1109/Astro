const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

import { KundliRequest, User } from "@/types/types";
import { DailyPanchang } from "@/types/types";
import { Festival } from "@/types/types";
import { CalendarData } from "@/types/types";
import { KundliResponse } from "@/types/types";
import { RashifalRequest } from "@/types/types";
import { MatchMakingRequest } from "@/types/types";
import { NumerologyRequest } from "@/types/types";

export const api = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch(`${API_BASE_URL}/users/`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  createKundli: async (data: KundliRequest): Promise<KundliResponse> => {
    const response = await fetch(`${API_BASE_URL}/kundli`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create kundli");
    return response.json();
  },

  getPanchang: async (place: string = "Delhi") => {
    const response = await fetch(`${API_BASE_URL}/panchang?place=${place}`);
    if (!response.ok) throw new Error("Failed to fetch panchang");
    return response.json();
  },

  getRashifal: async (data: RashifalRequest) => {
    const response = await fetch(`${API_BASE_URL}/rashifal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to fetch rashifal");
    return response.json();
  },

  matchMaking: async (data: MatchMakingRequest) => {
    const response = await fetch(`${API_BASE_URL}/match-making`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to fetch match making report");
    return response.json();
  },

  numerology: async (data: NumerologyRequest) => {
    const response = await fetch(`${API_BASE_URL}/numerology`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to fetch numerology report");
    return response.json();
  },
};

// Fetch calendar for specific month
export const fetchMonthlyCalendar = async (
  year: number,
  month: number
): Promise<CalendarData> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/desi-calendar/${year}/${month}`
    );
    if (!response.ok) throw new Error("Failed to fetch calendar");
    return await response.json();
  } catch (error) {
    console.error("Error fetching monthly calendar:", error);
    throw error;
  }
};

// Fetch today's panchang
export const fetchTodayPanchang = async (): Promise<DailyPanchang> => {
  try {
    const response = await fetch(`${API_BASE_URL}/desi-calendar/today`);
    if (!response.ok) throw new Error("Failed to fetch today's panchang");
    return await response.json();
  } catch (error) {
    console.error("Error fetching today's panchang:", error);
    throw error;
  }
};

// Fetch specific day panchang
export const fetchDayPanchang = async (
  date: string
): Promise<DailyPanchang> => {
  try {
    const response = await fetch(`${API_BASE_URL}/desi-calendar/day/${date}`);
    if (!response.ok) throw new Error("Failed to fetch day panchang");
    return await response.json();
  } catch (error) {
    console.error("Error fetching day panchang:", error);
    throw error;
  }
};

// Fetch all festivals for a year
export const fetchYearlyFestivals = async (
  year: number
): Promise<Festival[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/desi-calendar/festivals/${year}`
    );
    if (!response.ok) throw new Error("Failed to fetch yearly festivals");
    const data = await response.json();
    return data.festivals || [];
  } catch (error) {
    console.error("Error fetching yearly festivals:", error);
    throw error;
  }
};

// Format date for display
export const formatDateForDisplay = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

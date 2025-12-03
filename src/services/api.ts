const API_BASE_URL = "https://jyotish-dusky.vercel.app";

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

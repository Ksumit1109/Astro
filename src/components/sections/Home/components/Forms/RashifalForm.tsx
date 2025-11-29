"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api, RashifalRequest } from "@/services/api";

const rashis = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export function RashifalForm() {
  const [formData, setFormData] = useState<RashifalRequest>({
    rashi: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.getRashifal(formData);
      setResult(data as Record<string, unknown>);
      console.log("Rashifal Result:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to get rashifal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Daily Rashifal</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Select Rashi</label>
          <select
            name="rashi"
            value={formData.rashi}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="" disabled>
              Select your sign
            </option>
            {rashis.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Fetching..." : "Get Horoscope"}
        </Button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
          <p className="text-sm font-medium text-green-600">
            Horoscope Fetched!
          </p>
          <pre className="text-xs mt-2 overflow-auto max-h-40">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

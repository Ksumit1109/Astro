"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";

export function PanchangForm() {
  const [place, setPlace] = useState("Delhi");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.getPanchang(place);
      setResult(data as Record<string, unknown>);
      console.log("Panchang Result:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to get panchang");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Daily Panchang</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Place</label>
          <Input
            name="place"
            placeholder="Enter city"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Get Panchang"}
        </Button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
          <p className="text-sm font-medium text-green-600">Panchang Loaded!</p>
          <pre className="text-xs mt-2 overflow-auto max-h-40">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";
import { ResponseDisplay } from "./ResponseDisplay";

export function PanchangForm() {
  const [place, setPlace] = useState("Delhi");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.getPanchang(place);
      setResult(data);
      console.log("Panchang Result:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to get panchang");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm">
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
      </div>
      {result ? <ResponseDisplay data={result} /> : null}
    </div>
  );
}

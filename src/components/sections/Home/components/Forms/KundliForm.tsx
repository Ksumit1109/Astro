"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResponseDisplay } from "./ResponseDisplay";
import { KundliRequest, KundliResponse } from "@/types/types";
import { api } from "@/services/api";

export function KundliForm() {
  const [formData, setFormData] = useState<KundliRequest>({
    name: "",
    birth_date: "",
    birth_time: "",
    birth_place: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<KundliResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.createKundli(formData);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate Kundli");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Generate Your Kundli</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Date of Birth
              </label>
              <Input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Time of Birth
              </label>
              <Input
                type="time"
                name="birth_time"
                value={formData.birth_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Place of Birth
            </label>
            <Input
              name="birth_place"
              placeholder="City, Country"
              value={formData.birth_place}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Generating..." : "Generate Kundli"}
          </Button>
        </form>
      </div>
      {result ? <ResponseDisplay data={result} /> : null}
    </div>
  );
}

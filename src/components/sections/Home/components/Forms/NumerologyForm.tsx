"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api, NumerologyRequest } from "@/services/api";
import { ResponseDisplay } from "./ResponseDisplay";

export function NumerologyForm() {
  const [formData, setFormData] = useState<NumerologyRequest>({
    name: "",
    birth_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.numerology(formData);
      setResult(data);
      console.log("Numerology Result:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to get numerology report");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Numerology Report</h3>
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Calculating..." : "Get Report"}
          </Button>
        </form>
      </div>
      {result ? <ResponseDisplay data={result} /> : null}
    </div>
  );
}

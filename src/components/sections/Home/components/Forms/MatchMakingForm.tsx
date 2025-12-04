"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";
import { ResponseDisplay } from "./ResponseDisplay";
import { MatchMakingRequest } from "@/types/types";

export function MatchMakingForm() {
  const [formData, setFormData] = useState<MatchMakingRequest>({
    boy_name: "",
    boy_dob: "",
    boy_time: "",
    boy_place: "",
    girl_name: "",
    girl_dob: "",
    girl_time: "",
    girl_place: "",
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
      const data = await api.matchMaking(formData);
      setResult(data);
      console.log("Match Result:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to match");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-6 bg-background rounded-xl border border-border/50 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Horoscope Matching</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Boy's Details */}
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Boy&apos;s Details</h4>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  name="boy_name"
                  value={formData.boy_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">DOB</label>
                  <Input
                    type="date"
                    name="boy_dob"
                    value={formData.boy_dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <Input
                    type="time"
                    name="boy_time"
                    value={formData.boy_time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Place</label>
                <Input
                  name="boy_place"
                  value={formData.boy_place}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Girl's Details */}
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Girl&apos;s Details</h4>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  name="girl_name"
                  value={formData.girl_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">DOB</label>
                  <Input
                    type="date"
                    name="girl_dob"
                    value={formData.girl_dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <Input
                    type="time"
                    name="girl_time"
                    value={formData.girl_time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Place</label>
                <Input
                  name="girl_place"
                  value={formData.girl_place}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Matching..." : "Check Compatibility"}
          </Button>
        </form>
      </div>
      {result ? <ResponseDisplay data={result} /> : null}
    </div>
  );
}

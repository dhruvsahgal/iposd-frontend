"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Building2, ChevronLeft, Clock, Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const providers: Record<string, {
  name: string;
  tagline: string;
  tier: string;
  expert: { name: string; title: string };
}> = {
  "drew-napier": {
    name: "Drew & Napier LLC",
    tagline: "IP strategy specialists with deep life sciences expertise",
    tier: "Startup Friendly",
    expert: { name: "Dr. Lim Wei Ming", title: "Director, IP Practice" },
  },
  "bird-bird": {
    name: "Bird & Bird ATMD",
    tagline: "International IP & Technology Law with global reach",
    tier: "Enterprise",
    expert: { name: "Alban Kang", title: "Partner" },
  },
  "exy-ip": {
    name: "Exy IP Pte Ltd",
    tagline: "Specialized IP experts in electronics and software",
    tier: "Mid-Market",
    expert: { name: "Dr. James Wong", title: "Managing Director" },
  },
};

const availableDates = ["Jan 10", "Jan 13", "Jan 14", "Jan 15", "Jan 16", "Jan 17"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
const consultationTypes = [
  "Patent Filing Assessment",
  "IP Strategy & Planning",
  "Trademark & Brand Protection",
  "Freedom to Operate Analysis",
];

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const providerId = params.id as string;
  const provider = providers[providerId] || providers["drew-napier"];

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState(consultationTypes[0]);

  const handleConfirm = () => {
    const queryParams = new URLSearchParams({
      provider: provider.name,
      date: selectedDate || "",
      time: selectedTime || "",
      type: consultationType,
      expert: provider.expert.name,
    });
    router.push(`/confirmation?${queryParams.toString()}`);
  };

  const tierColors: Record<string, string> = {
    "Startup Friendly": "bg-emerald-100 text-emerald-700",
    "Mid-Market": "bg-blue-100 text-blue-700",
    "Enterprise": "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/providers"
          className="inline-flex items-center gap-1 text-[var(--neutral-600)] hover:text-[var(--neutral-900)] mb-6 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Providers
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Provider Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-5">
              <div className="w-14 h-14 bg-[var(--neutral-100)] rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-[var(--neutral-500)]" />
              </div>

              <h2 className="font-bold text-[var(--neutral-900)] mb-1">{provider.name}</h2>
              <p className="text-sm text-[var(--neutral-600)] mb-3">{provider.tagline}</p>

              <span className={cn("text-xs px-2 py-1 rounded-full", tierColors[provider.tier])}>
                {provider.tier}
              </span>

              <div className="border-t border-[var(--neutral-200)] mt-4 pt-4">
                <div className="text-xs text-[var(--neutral-500)] mb-1">Expert</div>
                <div className="font-medium text-[var(--neutral-900)]">{provider.expert.name}</div>
                <div className="text-sm text-[var(--neutral-600)]">{provider.expert.title}</div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-3 mt-4">
                <div className="text-sm font-medium text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Free 45-min Consultation
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <Card className="p-6">
              <h2 className="text-xl font-bold text-[var(--neutral-900)] mb-6">
                Select Date & Time
              </h2>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--neutral-700)] mb-3">
                  Available Dates
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                        selectedDate === date
                          ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                          : "border-[var(--neutral-300)] text-[var(--neutral-700)] hover:border-[var(--primary)]"
                      )}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-6"
                >
                  <label className="block text-sm font-medium text-[var(--neutral-700)] mb-3">
                    Available Times (SGT)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                          selectedTime === time
                            ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                            : "border-[var(--neutral-300)] text-[var(--neutral-700)] hover:border-[var(--primary)]"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Consultation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--neutral-700)] mb-3">
                  Consultation Type
                </label>
                <select
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  className="w-full h-11 px-4 border border-[var(--neutral-300)] rounded-lg bg-white text-[var(--neutral-700)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)]/20 focus:border-[var(--primary-light)]"
                >
                  {consultationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[var(--neutral-50)] rounded-xl p-4 mb-6"
                >
                  <div className="text-sm font-medium text-[var(--neutral-700)] mb-2">
                    Booking Summary
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Date</span>
                      <span className="text-[var(--neutral-900)] font-medium">
                        {selectedDate}, 2026
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Time</span>
                      <span className="text-[var(--neutral-900)] font-medium">{selectedTime} SGT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Type</span>
                      <span className="text-[var(--neutral-900)] font-medium">{consultationType}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Confirm Button */}
              <Button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className="w-full"
                size="lg"
              >
                Confirm Booking
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

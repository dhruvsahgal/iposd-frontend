"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Circle } from "lucide-react";

const steps = [
  { id: 1, label: "Extracting key concepts", threshold: 20 },
  { id: 2, label: "Searching patent databases", threshold: 45 },
  { id: 3, label: "Analyzing similarity", threshold: 70 },
  { id: 4, label: "Generating results", threshold: 90 },
];

export default function AnalyzingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        router.push("/results");
      }, 500);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15 + 5;
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [progress, router]);

  const getStepStatus = (threshold: number) => {
    if (progress >= threshold) return "complete";
    if (progress >= threshold - 25) return "active";
    return "pending";
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md w-full"
      >
        {/* Animated Icon */}
        <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-10 h-10 text-[var(--primary)] animate-spin" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[var(--neutral-900)] mb-2">
          Analyzing Your Innovation
        </h1>
        <p className="text-[var(--neutral-600)] mb-8">
          Searching patent databases worldwide...
        </p>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[var(--neutral-200)] p-6">
          {/* Steps */}
          <div className="space-y-4 mb-6">
            {steps.map((step) => {
              const status = getStepStatus(step.threshold);
              return (
                <div key={step.id} className="flex items-center gap-3">
                  {status === "complete" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : status === "active" ? (
                    <Loader2 className="w-5 h-5 text-[var(--primary)] animate-spin" />
                  ) : (
                    <Circle className="w-5 h-5 text-[var(--neutral-300)]" />
                  )}
                  <span
                    className={
                      status === "complete"
                        ? "text-[var(--neutral-900)] font-medium"
                        : status === "active"
                        ? "text-[var(--neutral-700)]"
                        : "text-[var(--neutral-400)]"
                    }
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-[var(--neutral-200)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-3 text-sm text-[var(--neutral-600)]">
            {Math.round(progress)}% complete
          </div>
        </div>

        {/* Info */}
        <p className="mt-6 text-sm text-[var(--neutral-500)]">
          This usually takes 10-30 seconds
        </p>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Shield, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary-light)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--accent-purple)]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--primary)]">
                AI-Powered IP Protection
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] leading-tight">
              Protect Your{" "}
              <span className="text-gradient">Innovation</span>{" "}
              with Confidence
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--neutral-600)] max-w-xl leading-relaxed">
              AI-powered IP analysis and expert matching to help you navigate your
              intellectual property journey. From idea to protection in days, not months.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/assessment">
                <Button size="lg" className="group">
                  Start Your IP Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/providers">
                <Button variant="outline" size="lg">
                  Browse Experts
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[var(--neutral-900)]">175+</div>
                <div className="text-sm text-[var(--neutral-500)]">Verified Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--neutral-900)]">48hrs</div>
                <div className="text-sm text-[var(--neutral-500)]">Avg. Match Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--neutral-900)]">4.8/5</div>
                <div className="text-sm text-[var(--neutral-500)]">User Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[var(--neutral-200)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--neutral-900)]">IP Analysis Complete</div>
                    <div className="text-sm text-[var(--neutral-500)]">Patent Assessment</div>
                  </div>
                </div>

                {/* Novelty score */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--neutral-700)]">Novelty Score</span>
                    <span className="text-sm font-semibold text-[var(--primary)]">78%</span>
                  </div>
                  <div className="h-2 bg-[var(--neutral-100)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>

                {/* Similar patents */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-[var(--neutral-700)]">Similar Patents Found: 3</div>
                  {[
                    { id: "US11734097B1", similarity: 45 },
                    { id: "EP3847604A1", similarity: 32 },
                    { id: "WO2021156789", similarity: 28 },
                  ].map((patent) => (
                    <div
                      key={patent.id}
                      className="flex items-center justify-between p-3 bg-[var(--neutral-50)] rounded-xl"
                    >
                      <span className="text-sm font-mono text-[var(--neutral-600)]">{patent.id}</span>
                      <span className="text-xs font-medium text-[var(--neutral-500)]">
                        {patent.similarity}% match
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-[var(--neutral-200)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--neutral-900)]">3 Experts Matched</div>
                    <div className="text-xs text-emerald-600">Ready to connect</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

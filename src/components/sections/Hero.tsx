"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Shield, Users } from "lucide-react";
import { Spotlight } from "@/components/aceternity/spotlight";
import { FlipWords } from "@/components/aceternity/flip-words";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";

export function Hero() {
  const words = ["Patents", "Trademarks", "Designs", "Ideas", "Innovations"];
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#03727d"
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-sm font-medium text-teal-300">
                AI-Powered IP Protection
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Protect Your{" "}
              <FlipWords words={words} className="text-teal-400" />
              <br />
              with Confidence
            </h1>

            <div className="mt-6 max-w-xl">
              <TextGenerateEffect
                words="AI-powered IP analysis and expert matching to help you navigate your intellectual property journey. From idea to protection in days, not months."
                className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/assessment">
                <Button size="lg" className="group bg-teal-500 hover:bg-teal-600 text-white border-0">
                  Start Your IP Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/providers">
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Browse Experts
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "175+", label: "Verified Providers" },
                { value: "48hrs", label: "Avg. Match Time" },
                { value: "4.8/5", label: "User Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-3xl font-bold text-white group-hover:text-teal-400 transition-colors">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card with glow effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur opacity-25"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">IP Analysis Complete</div>
                      <div className="text-sm text-slate-400">Patent Assessment</div>
                    </div>
                  </div>

                  {/* Novelty score */}
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">Novelty Score</span>
                      <span className="text-sm font-semibold text-teal-400">78%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Similar patents */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-slate-300">Similar Patents Found: 3</div>
                    {[
                      { id: "US11734097B1", similarity: 45 },
                      { id: "EP3847604A1", similarity: 32 },
                      { id: "WO2021156789", similarity: 28 },
                    ].map((patent, idx) => (
                      <motion.div
                        key={patent.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-colors"
                      >
                        <span className="text-sm font-mono text-slate-400">{patent.id}</span>
                        <span className="text-xs font-medium text-slate-500">
                          {patent.similarity}% match
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-6 -left-6"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-slate-900 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">3 Experts Matched</div>
                        <div className="text-xs text-emerald-400">Ready to connect</div>
                      </div>
                    </div>
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

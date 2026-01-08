"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--neutral-900)] to-[var(--neutral-800)] p-8 md:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-purple)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--primary-light)]" />
              <span className="text-sm font-medium text-white">
                Free IP Business Clinic Available
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Innovation?
            </h2>

            <p className="text-lg text-[var(--neutral-400)] mb-8 max-w-2xl mx-auto">
              Join thousands of Singapore businesses who have secured their intellectual property
              through IP Grow. Start your journey today with a free assessment.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[var(--neutral-900)] hover:bg-[var(--neutral-100)] group"
              >
                Start Free Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border border-white/20 hover:bg-white/10"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

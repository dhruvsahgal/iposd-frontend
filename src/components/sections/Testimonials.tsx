"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "IP Grow helped us secure patent protection across 5 ASEAN countries in record time. The AI analysis gave us confidence in our filing strategy.",
    name: "Sarah Chen",
    title: "CEO, HealthTech Startup",
  },
  {
    quote:
      "The matching algorithm found us the perfect patent attorney who understood our deep tech space. Saved us weeks of research.",
    name: "Michael Wong",
    title: "CTO, AI Solutions Pte Ltd",
  },
  {
    quote:
      "As a first-time founder, I had no idea where to start with IP. The free consultation through IP Grow was incredibly valuable.",
    name: "Jennifer Lim",
    title: "Founder, GreenBites",
  },
  {
    quote:
      "The platform streamlined our entire IP portfolio management. What used to take weeks now takes days.",
    name: "David Tan",
    title: "Legal Director, TechVentures",
  },
  {
    quote:
      "Outstanding service and expert matching. Our trademark registration was completed smoothly with their recommended provider.",
    name: "Rachel Lee",
    title: "Brand Manager, FashionCo",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
              Success Stories
            </span>
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by Singapore&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Innovators
            </span>
          </h3>
        </motion.div>

        {/* Infinite moving testimonials */}
        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "12,000+", label: "Users Served" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "175+", label: "Service Providers" },
            { value: "4.8/5", label: "Average Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

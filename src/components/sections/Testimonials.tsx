"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "IP Grow helped us secure patent protection across 5 ASEAN countries in record time. The AI analysis gave us confidence in our filing strategy.",
    author: "Sarah Chen",
    role: "CEO, HealthTech Startup",
    rating: 5,
  },
  {
    quote:
      "The matching algorithm found us the perfect patent attorney who understood our deep tech space. Saved us weeks of research.",
    author: "Michael Wong",
    role: "CTO, AI Solutions Pte Ltd",
    rating: 5,
  },
  {
    quote:
      "As a first-time founder, I had no idea where to start with IP. The free consultation through IP Grow was incredibly valuable.",
    author: "Jennifer Lim",
    role: "Founder, GreenBites",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--neutral-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-4">
            Success Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)]">
            Trusted by Singapore&apos;s Innovators
          </h3>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[var(--primary)]/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[var(--neutral-700)] mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="font-semibold text-[var(--neutral-900)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--neutral-500)]">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Search, Users, Calendar, BarChart3, FileCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Prior Art Analysis",
    description:
      "Upload your invention disclosure and get instant AI-powered analysis of similar existing patents.",
    color: "var(--primary)",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Users,
    title: "Smart Expert Matching",
    description:
      "Find the right service provider based on your industry, budget, and specific IP needs.",
    color: "var(--accent-purple)",
    bgColor: "bg-purple-50",
  },
  {
    icon: Calendar,
    title: "Free Consultations",
    description:
      "Book complimentary 45-minute consultations with qualified IP professionals.",
    color: "var(--accent-success)",
    bgColor: "bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Track Your Journey",
    description:
      "Monitor your IP matters from analysis to filing in one unified dashboard.",
    color: "var(--accent-warning)",
    bgColor: "bg-orange-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-4">
              What is GoBusiness IP Grow?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)] mb-6">
              An Online Marketplace for Intellectual Property Services
            </h3>
            <p className="text-lg text-[var(--neutral-600)]">
              We help you understand your IP needs and connect with the right experts for your
              business. Everything you need to protect your innovation, in one place.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card hover className="h-full">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5`}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h4 className="text-lg font-semibold text-[var(--neutral-900)] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[var(--neutral-600)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] p-8 md:p-12"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">
                IP Business Clinic
              </h4>
              <p className="text-white/80 max-w-lg">
                Get expert guidance for your IP journey. Book a complimentary 45-minute
                consultation with our qualified IP professionals.
              </p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 bg-white text-[var(--primary)] font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105">
              Make an Appointment
            </button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}

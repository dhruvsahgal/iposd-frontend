"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { Search, Users, Calendar, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-teal-500" />,
    title: "Prior Art Analysis",
    description:
      "Upload your invention disclosure and get instant AI-powered analysis of similar existing patents.",
    link: "/assessment",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Smart Expert Matching",
    description:
      "Find the right service provider based on your industry, budget, and specific IP needs.",
    link: "/providers",
  },
  {
    icon: <Calendar className="w-8 h-8 text-emerald-500" />,
    title: "Free Consultations",
    description:
      "Book complimentary 45-minute consultations with qualified IP professionals.",
    link: "/booking/1",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Track Your Journey",
    description:
      "Monitor your IP matters from analysis to filing in one unified dashboard.",
    link: "/dashboard",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                What is GoBusiness IP Grow?
              </span>
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              An Online Marketplace for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Intellectual Property
              </span>{" "}
              Services
            </h3>
            <p className="text-lg text-slate-600">
              We help you understand your IP needs and connect with the right experts for your
              business. Everything you need to protect your innovation, in one place.
            </p>
          </motion.div>
        </div>

        {/* Features with hover effect */}
        <HoverEffect items={features} />

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">
                IP Business Clinic
              </h4>
              <p className="text-white/80 max-w-lg">
                Get expert guidance for your IP journey. Book a complimentary 45-minute
                consultation with our qualified IP professionals.
              </p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 hover:bg-slate-50">
              Make an Appointment
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}

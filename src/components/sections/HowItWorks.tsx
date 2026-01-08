"use client";

import { motion } from "framer-motion";
import { FileText, Brain, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Tell Us About Your Innovation",
    description:
      "Complete a quick assessment or upload your invention disclosure to help us understand your IP needs.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Analysis & Prior Art Search",
    description:
      "Our AI analyzes your innovation, searches for similar patents, and assesses novelty in seconds.",
  },
  {
    icon: Users,
    number: "03",
    title: "Get Matched with Experts",
    description:
      "We match you with the best service providers based on your industry, budget, and requirements.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Book Your Free Consultation",
    description:
      "Schedule a complimentary 45-minute consultation and start your IP protection journey.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[var(--neutral-900)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-[var(--primary-light)] uppercase tracking-wide mb-4">
            How It Works
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            From Idea to Protection in 4 Simple Steps
          </h3>
          <p className="text-lg text-[var(--neutral-400)]">
            Our streamlined process makes IP protection accessible and straightforward for
            businesses of all sizes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-[var(--primary)]">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold mb-3 text-center lg:text-left">
                  {step.title}
                </h4>
                <p className="text-[var(--neutral-400)] text-center lg:text-left">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

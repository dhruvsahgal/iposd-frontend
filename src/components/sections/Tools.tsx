"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Settings, MessageCircleQuestion, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Settings,
    title: "Discover Your IP Needs",
    description:
      "Get recommendations on the IP services your business might need based on your industry and goals.",
    link: "/assessment",
    linkText: "Use the e-Adviser tool",
    gradient: "from-amber-400 to-orange-500",
    iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
  },
  {
    icon: MessageCircleQuestion,
    title: "Have an IP Question?",
    description:
      "Get free, on-demand answers from our experts on GoBusiness IP Grow. No appointment needed.",
    link: "/ask",
    linkText: "Ask a pro",
    gradient: "from-cyan-400 to-teal-500",
    iconBg: "bg-gradient-to-br from-cyan-100 to-teal-100",
  },
  {
    icon: Building2,
    title: "Find the Right Experts",
    description:
      "Explore a directory of IP service providers to support your business growth and IP protection.",
    link: "/providers",
    linkText: "Browse directory",
    gradient: "from-blue-400 to-indigo-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
];

export function Tools() {
  return (
    <section className="py-24 bg-[var(--neutral-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--neutral-900)]">
            Get Started with our Tools
          </h2>
        </motion.div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div
                  className={`w-16 h-16 ${tool.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <tool.icon className="w-8 h-8 text-[var(--primary)]" />
                </div>

                <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-3">
                  {tool.title}
                </h3>

                <p className="text-[var(--neutral-600)] mb-6 flex-grow">
                  {tool.description}
                </p>

                <Link
                  href={tool.link}
                  className="inline-flex items-center text-[var(--primary)] font-medium hover:gap-3 gap-2 transition-all group"
                >
                  {tool.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

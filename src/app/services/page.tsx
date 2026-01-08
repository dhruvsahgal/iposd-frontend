"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Lightbulb,
  Tag,
  Palette,
  Scale,
  Search,
  FileCheck,
  Globe,
  Shield,
  TrendingUp,
  FileText,
  Eye,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    id: "patent",
    title: "Patent Services",
    description: "Protect your inventions and technical innovations with comprehensive patent services.",
    icon: Lightbulb,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    services: [
      { name: "Patent Filing", desc: "File patents in Singapore and internationally", icon: FileText },
      { name: "Patent Search", desc: "Prior art and patentability searches", icon: Search },
      { name: "Freedom to Operate", desc: "Assess infringement risks before launch", icon: Shield },
      { name: "PCT Applications", desc: "International patent protection via PCT route", icon: Globe },
    ],
  },
  {
    id: "trademark",
    title: "Trademark Services",
    description: "Safeguard your brand identity with trademark registration and protection.",
    icon: Tag,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    services: [
      { name: "Trademark Registration", desc: "Register your brand in Singapore & ASEAN", icon: FileCheck },
      { name: "Trademark Search", desc: "Check availability before filing", icon: Search },
      { name: "Trademark Watch", desc: "Monitor for potential infringements", icon: Eye },
      { name: "Trademark Renewal", desc: "Maintain your trademark protection", icon: RefreshCw },
    ],
  },
  {
    id: "design",
    title: "Design Services",
    description: "Protect the unique visual appearance of your products.",
    icon: Palette,
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    services: [
      { name: "Design Registration", desc: "Protect product aesthetics and shapes", icon: FileText },
      { name: "Design Portfolio", desc: "Manage multiple design registrations", icon: FileCheck },
      { name: "Design Search", desc: "Search existing registered designs", icon: Search },
      { name: "International Design", desc: "Hague system filings", icon: Globe },
    ],
  },
  {
    id: "strategy",
    title: "IP Strategy & Advisory",
    description: "Strategic guidance to maximize the value of your intellectual property.",
    icon: Scale,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    services: [
      { name: "IP Audit", desc: "Comprehensive review of your IP assets", icon: Search },
      { name: "IP Valuation", desc: "Determine the worth of your IP portfolio", icon: TrendingUp },
      { name: "Licensing", desc: "Monetize your IP through licensing deals", icon: FileCheck },
      { name: "Due Diligence", desc: "IP assessment for M&A transactions", icon: Shield },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)] mb-4">
            IP Services Directory
          </h1>
          <p className="text-lg text-[var(--neutral-600)]">
            Explore 20+ legal and non-legal IP service areas. Find the right protection for your
            innovation, brand, or creative work.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-12">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center`}
                >
                  <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--neutral-900)]">{category.title}</h2>
                  <p className="text-[var(--neutral-600)]">{category.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.services.map((service) => (
                  <Card key={service.name} hover className="p-5">
                    <service.icon className="w-6 h-6 text-[var(--primary)] mb-3" />
                    <h3 className="font-semibold text-[var(--neutral-900)] mb-1">{service.name}</h3>
                    <p className="text-sm text-[var(--neutral-600)] mb-4">{service.desc}</p>
                    <Link
                      href="/providers"
                      className="text-sm text-[var(--primary)] font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Find Providers <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Not sure what you need?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Take our quick assessment to get personalized recommendations based on your innovation
              and business goals.
            </p>
            <Link href="/assessment">
              <Button className="bg-white text-[var(--primary)] hover:bg-white/90">
                Start IP Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

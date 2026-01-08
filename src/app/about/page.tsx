"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Building2, Award, TrendingUp, Globe, Shield, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "175+", label: "Verified Providers", icon: Building2 },
  { value: "12,000+", label: "Users Served", icon: Users },
  { value: "4.8/5", label: "User Rating", icon: Award },
  { value: "2,400+", label: "IP Filings Facilitated", icon: TrendingUp },
];

const partners = [
  { name: "IPOS", fullName: "Intellectual Property Office of Singapore", role: "IP Registry & Policy" },
  { name: "GoBusiness", fullName: "GoBusiness Singapore", role: "Business Services Portal" },
  { name: "MTI", fullName: "Ministry of Trade and Industry", role: "Government Oversight" },
  { name: "Enterprise SG", fullName: "Enterprise Singapore", role: "SME Development" },
];

const timeline = [
  { year: "2020", event: "IP Grow launched as part of GoBusiness platform" },
  { year: "2022", event: "Expanded to 100+ service providers" },
  { year: "2023", event: "Introduced AI-powered IP analysis" },
  { year: "2024", event: "Launched smart provider matching" },
  { year: "2026", event: "Next-gen platform with full journey tracking" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--neutral-900)] to-[var(--neutral-800)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Empowering Singapore&apos;s Innovators
            </h1>
            <p className="text-xl text-[var(--neutral-300)] leading-relaxed">
              IP Grow is Singapore&apos;s national platform for intellectual property services,
              connecting businesses with expert guidance to protect and commercialize their innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--neutral-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6">
                  <stat.icon className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[var(--neutral-900)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--neutral-600)]">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--neutral-900)] mb-6">Our Mission</h2>
              <p className="text-lg text-[var(--neutral-600)] mb-6 leading-relaxed">
                We believe every Singapore business deserves access to world-class IP protection.
                Our mission is to demystify intellectual property and connect innovators with the
                right experts at the right time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--neutral-900)]">Protect Innovation</h4>
                    <p className="text-[var(--neutral-600)]">Help businesses secure their competitive advantage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--neutral-900)]">Connect Expertise</h4>
                    <p className="text-[var(--neutral-600)]">Match businesses with qualified IP professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[var(--neutral-900)]">Enable Growth</h4>
                    <p className="text-[var(--neutral-600)]">Support Singapore&apos;s innovation ecosystem</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--neutral-50)] rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-6">Our Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="text-sm font-bold text-[var(--primary)] w-12">{item.year}</div>
                    <div className="flex-1 pb-4 border-l-2 border-[var(--neutral-200)] pl-4">
                      <p className="text-[var(--neutral-700)]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[var(--neutral-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--neutral-900)] mb-4">Our Partners</h2>
            <p className="text-[var(--neutral-600)]">
              IP Grow is a collaboration between Singapore&apos;s leading government agencies
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-[var(--primary)]">{partner.name}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--neutral-900)] mb-1">{partner.fullName}</h3>
                  <p className="text-sm text-[var(--neutral-600)]">{partner.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--neutral-900)] mb-6">Get in Touch</h2>
              <p className="text-[var(--neutral-600)] mb-8">
                Have questions about IP Grow? Our team is here to help you navigate your IP journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <a href="mailto:support@ipgrow.gov.sg" className="text-[var(--neutral-700)] hover:text-[var(--primary)]">
                    support@ipgrow.gov.sg
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-[var(--neutral-700)]">+65 6339 8616</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-[var(--neutral-700)]">
                    51 Bras Basah Road, Singapore 189554
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8">
                <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-4">Join as a Provider</h3>
                <p className="text-[var(--neutral-600)] mb-6">
                  Are you an IP service provider? Join our network and connect with businesses
                  seeking your expertise.
                </p>
                <Link href="/providers">
                  <Button>
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

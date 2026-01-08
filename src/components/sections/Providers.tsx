"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, MapPin, Clock, ArrowRight, Building } from "lucide-react";

const providers = [
  {
    id: "drew-napier",
    name: "Drew & Napier LLC",
    tagline: "IP strategy specialists with deep life sciences expertise",
    rating: 4.9,
    reviews: 47,
    specializations: ["Medtech", "AI/ML Patents", "Biotech"],
    location: "Singapore",
    responseTime: "<12 hrs",
    tier: "Startup Friendly",
  },
  {
    id: "bird-bird",
    name: "Bird & Bird ATMD",
    tagline: "International IP & Technology Law with global reach",
    rating: 4.8,
    reviews: 23,
    specializations: ["Cross-border Filing", "IP Disputes", "Tech M&A"],
    location: "Singapore + Global",
    responseTime: "<24 hrs",
    tier: "Enterprise",
  },
  {
    id: "exy-ip",
    name: "Exy IP Pte Ltd",
    tagline: "Specialized IP experts in electronics and software",
    rating: 4.7,
    reviews: 31,
    specializations: ["Electronics Patents", "IoT", "Software"],
    location: "Singapore",
    responseTime: "<18 hrs",
    tier: "Mid-Market",
  },
];

export function Providers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[var(--neutral-900)] mb-2">
              Featured Service Providers
            </h2>
            <p className="text-[var(--neutral-600)]">
              Connect with verified IP experts who understand your industry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="outline">
              View All 175+ Providers
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Providers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[var(--neutral-100)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-7 h-7 text-[var(--neutral-400)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[var(--neutral-900)] truncate">
                      {provider.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium text-[var(--neutral-900)]">
                          {provider.rating}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--neutral-500)]">
                        ({provider.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[var(--neutral-600)] mb-4 line-clamp-2">
                  {provider.tagline}
                </p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.specializations.slice(0, 3).map((spec) => (
                    <Badge key={spec} variant="info">
                      {spec}
                    </Badge>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-[var(--neutral-500)] mb-6 mt-auto">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {provider.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {provider.responseTime}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1">
                    Book Consult
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

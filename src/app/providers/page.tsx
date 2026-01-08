"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  Building,
  ChevronDown,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const providers = [
  {
    id: "drew-napier",
    name: "Drew & Napier LLC",
    tagline: "IP strategy specialists with deep life sciences expertise and competitive rates for startups",
    rating: 4.9,
    reviews: 47,
    specializations: ["Medtech", "AI/ML Patents", "Biotech", "Pharmaceutical"],
    services: ["Patent Filing", "Trademark Filing", "IP Strategy", "Licensing"],
    industries: ["Healthcare", "Life Sciences", "Technology"],
    location: "Singapore, Malaysia",
    responseTime: "<12 hrs",
    tier: "startup_friendly",
    connections: "41-50",
    founded: 1889,
  },
  {
    id: "bird-bird",
    name: "Bird & Bird ATMD LLP",
    tagline: "International IP & Technology Law with global reach and deep sector expertise",
    rating: 4.8,
    reviews: 23,
    specializations: ["Cross-border Filing", "IP Disputes", "Tech M&A", "SEP Licensing"],
    services: ["Patent Filing", "Trademark Filing", "IP Litigation", "IP Due Diligence"],
    industries: ["Technology", "Healthcare", "Financial Services"],
    location: "Singapore + Global",
    responseTime: "<24 hrs",
    tier: "enterprise",
    connections: "11-20",
    founded: 1846,
  },
  {
    id: "exy-ip",
    name: "Exy IP Pte Ltd",
    tagline: "Specialized IP experts with deep technical expertise in electronics and software",
    rating: 4.7,
    reviews: 31,
    specializations: ["Electronics Patents", "IoT", "Software Patents", "Standard Essential Patents"],
    services: ["Patent Filing", "Patent Search", "Freedom to Operate", "IP Valuation"],
    industries: ["Electronics", "Software", "Hardware", "IoT"],
    location: "Singapore",
    responseTime: "<18 hrs",
    tier: "mid_market",
    connections: "21-30",
    founded: 2010,
  },
  {
    id: "questel",
    name: "Questel Singapore Pte Ltd",
    tagline: "End-to-end IP solutions powered by leading patent databases and analytics",
    rating: 4.6,
    reviews: 18,
    specializations: ["Patent Analytics", "IP Databases", "Portfolio Management"],
    services: ["Patent Search", "IP Database", "IP Portfolio Management", "IP Valuation"],
    industries: ["Technology", "Healthcare", "Manufacturing"],
    location: "Singapore, US, EU",
    responseTime: "<24 hrs",
    tier: "mid_market",
    connections: "1-10",
    founded: 1978,
  },
  {
    id: "marks-clerk",
    name: "Marks & Clerk Singapore LLP",
    tagline: "Global IP specialists with 130+ years of patent and trademark expertise",
    rating: 4.8,
    reviews: 22,
    specializations: ["Mechanical Patents", "Chemical Patents", "Designs", "International Filing"],
    services: ["Patent Filing", "Trademark Filing", "Design Registration", "Patent Search"],
    industries: ["Manufacturing", "Chemicals", "Healthcare", "Consumer Goods"],
    location: "Singapore, UK, EU",
    responseTime: "<24 hrs",
    tier: "mid_market",
    connections: "11-20",
    founded: 1887,
  },
  {
    id: "donaldson-burkinshaw",
    name: "Donaldson & Burkinshaw LLP",
    tagline: "Boutique IP firm with personalized attention and startup focus",
    rating: 4.9,
    reviews: 42,
    specializations: ["Startup IP", "F&B Trademarks", "Consumer Brands", "ASEAN Filing"],
    services: ["Patent Filing", "Trademark Filing", "Design Registration", "IP Strategy"],
    industries: ["Consumer Goods", "Food & Beverage", "Retail"],
    location: "Singapore",
    responseTime: "<8 hrs",
    tier: "startup_friendly",
    connections: "31-40",
    founded: 1974,
  },
];

const serviceFilters = [
  "Patent Filing",
  "Trademark Filing",
  "IP Strategy",
  "IP Litigation",
  "Patent Search",
  "Licensing",
  "IP Valuation",
];

const industryFilters = [
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Financial Services",
  "Consumer Goods",
  "Electronics",
];

const tierLabels: Record<string, { label: string; color: string }> = {
  startup_friendly: { label: "Startup Friendly", color: "bg-emerald-50 text-emerald-700" },
  mid_market: { label: "Mid-Market", color: "bg-blue-50 text-blue-700" },
  enterprise: { label: "Enterprise", color: "bg-purple-50 text-purple-700" },
};

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("rating");

  const filteredProviders = providers
    .filter((provider) => {
      const matchesSearch =
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesServices =
        selectedServices.length === 0 ||
        selectedServices.some((s) => provider.services.includes(s));
      const matchesIndustries =
        selectedIndustries.length === 0 ||
        selectedIndustries.some((i) => provider.industries.includes(i));
      return matchesSearch && matchesServices && matchesIndustries;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const toggleFilter = (filter: string, list: string[], setList: (v: string[]) => void) => {
    if (list.includes(filter)) {
      setList(list.filter((f) => f !== filter));
    } else {
      setList([...list, filter]);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)] mb-3">
            Find a Service Provider
          </h1>
          <p className="text-lg text-[var(--neutral-600)]">
            Find and connect with experts in 20 legal and non-legal IP service areas
          </p>
        </motion.div>

        {/* Search and filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-[var(--neutral-200)] p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <Input
                icon="search"
                placeholder="Search by service provider name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={cn(showFilters && "bg-[var(--neutral-100)]")}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {(selectedServices.length > 0 || selectedIndustries.length > 0) && (
                  <span className="ml-2 w-5 h-5 bg-[var(--primary)] text-white text-xs rounded-full flex items-center justify-center">
                    {selectedServices.length + selectedIndustries.length}
                  </span>
                )}
              </Button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-12 px-4 pr-10 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-xl appearance-none text-sm font-medium text-[var(--neutral-700)]"
                >
                  <option value="rating">Sort by: Rating</option>
                  <option value="reviews">Sort by: Reviews</option>
                  <option value="name">Sort by: A to Z</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--neutral-400)] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filter panels */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-[var(--neutral-200)]"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-[var(--neutral-700)] mb-3">
                    IA/IP Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceFilters.map((service) => (
                      <button
                        key={service}
                        onClick={() => toggleFilter(service, selectedServices, setSelectedServices)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                          selectedServices.includes(service)
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--neutral-100)] text-[var(--neutral-600)] hover:bg-[var(--neutral-200)]"
                        )}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[var(--neutral-700)] mb-3">Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {industryFilters.map((industry) => (
                      <button
                        key={industry}
                        onClick={() =>
                          toggleFilter(industry, selectedIndustries, setSelectedIndustries)
                        }
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                          selectedIndustries.includes(industry)
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--neutral-100)] text-[var(--neutral-600)] hover:bg-[var(--neutral-200)]"
                        )}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {(selectedServices.length > 0 || selectedIndustries.length > 0) && (
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedServices([]);
                      setSelectedIndustries([]);
                    }}
                    className="text-sm text-[var(--primary)] hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[var(--neutral-600)]">
            <span className="font-semibold text-[var(--primary)]">{filteredProviders.length}</span>{" "}
            results
          </p>
        </div>

        {/* Providers list */}
        <div className="space-y-4">
          {filteredProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card hover className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo */}
                  <div className="w-16 h-16 bg-[var(--neutral-100)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-[var(--neutral-400)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-semibold text-[var(--neutral-900)]">
                            {provider.name}
                          </h3>
                          <span
                            className={cn(
                              "px-2.5 py-0.5 rounded-full text-xs font-medium",
                              tierLabels[provider.tier].color
                            )}
                          >
                            {tierLabels[provider.tier].label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[var(--neutral-500)]">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-medium text-[var(--neutral-900)]">
                              {provider.rating}
                            </span>
                            <span>({provider.reviews} reviews)</span>
                          </div>
                          <span>Est. {provider.founded}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm">
                          View Profile
                        </Button>
                        <Link href={`/booking/${provider.id}`}>
                          <Button size="sm">Book Consult</Button>
                        </Link>
                      </div>
                    </div>

                    <p className="text-[var(--neutral-600)] mb-4">{provider.tagline}</p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {provider.services.map((service) => (
                        <Badge key={service} variant="default">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--neutral-500)]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {provider.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        Response: {provider.responseTime}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[var(--neutral-400)]">Connections:</span>
                        {provider.connections}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

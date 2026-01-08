"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Star,
  MapPin,
  Clock,
  Building,
  CheckCircle,
  Info,
  Calendar,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const analysisResults = {
  noveltyScore: 78,
  similarPatentsCount: 3,
  riskLevel: "medium" as const,
  recommendation:
    "Your innovation shows good novelty potential. We recommend consulting with a patent expert to refine your claims strategy and differentiate from existing patents.",
  keyConcepts: ["machine learning", "predictive analytics", "healthcare outcomes", "personalized medicine"],
  similarPatents: [
    {
      id: "US11734097B1",
      title: "Machine learning-based patient outcome prediction system",
      assignee: "Mayo Clinic",
      similarity: 45,
      overlap: ["machine learning", "patient outcome"],
    },
    {
      id: "EP3847604A1",
      title: "Healthcare outcome prediction using neural networks",
      assignee: "Philips Healthcare",
      similarity: 32,
      overlap: ["neural network", "outcome prediction"],
    },
    {
      id: "WO2021156789A1",
      title: "Predictive analytics for patient recovery monitoring",
      assignee: "Siemens Healthineers",
      similarity: 28,
      overlap: ["predictive analytics", "recovery"],
    },
  ],
};

const matchedProviders = [
  {
    id: "drew-napier",
    name: "Drew & Napier LLC",
    tagline: "IP strategy specialists with deep life sciences expertise",
    matchScore: 94,
    matchReasons: [
      "Healthtech specialist with 12 patents filed in 2024",
      "Singapore + ASEAN coverage matches your target markets",
      "Startup-friendly pricing tier",
      "Strong AI/ML patent expertise",
    ],
    rating: 4.9,
    reviews: 47,
    responseTime: "<12 hrs",
    tier: "startup_friendly",
    isBestMatch: true,
  },
  {
    id: "exy-ip",
    name: "Exy IP Pte Ltd",
    tagline: "Specialized IP experts in electronics and software",
    matchScore: 87,
    matchReasons: [
      "Software & AI patent specialist",
      "Strong technical expertise",
      "Mid-market pricing aligns with your budget",
    ],
    rating: 4.7,
    reviews: 31,
    responseTime: "<18 hrs",
    tier: "mid_market",
    isBestMatch: false,
  },
  {
    id: "bird-bird",
    name: "Bird & Bird ATMD",
    tagline: "International IP & Technology Law with global reach",
    matchScore: 82,
    matchReasons: [
      "Strong healthcare sector experience",
      "Global filing capabilities",
      "Enterprise pricing tier (may exceed budget)",
    ],
    rating: 4.8,
    reviews: 23,
    responseTime: "<24 hrs",
    tier: "enterprise",
    isBestMatch: false,
  },
];

const tierLabels: Record<string, { label: string; color: string }> = {
  startup_friendly: { label: "Startup Friendly", color: "bg-emerald-50 text-emerald-700" },
  mid_market: { label: "Mid-Market", color: "bg-blue-50 text-blue-700" },
  enterprise: { label: "Enterprise", color: "bg-purple-50 text-purple-700" },
};

export default function ResultsPage() {
  const [expandedProvider, setExpandedProvider] = useState<string | null>("drew-napier");

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-emerald-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 70) return "from-emerald-500 to-emerald-400";
    if (score >= 50) return "from-amber-500 to-amber-400";
    return "from-red-500 to-red-400";
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Analysis Complete</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)] mb-3">
            Your IP Analysis Results
          </h1>
          <p className="text-lg text-[var(--neutral-600)]">
            We&apos;ve analyzed your innovation and found the best experts to help you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Analysis Results */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-[var(--neutral-900)] mb-4">
                  Novelty Assessment
                </h2>

                {/* Score circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-[var(--neutral-200)]"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#scoreGradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${(analysisResults.noveltyScore / 100) * 352} 352`}
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={cn("text-3xl font-bold", getScoreColor(analysisResults.noveltyScore))}>
                        {analysisResults.noveltyScore}%
                      </span>
                      <span className="text-xs text-[var(--neutral-500)]">Unique</span>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="p-4 bg-[var(--neutral-50)] rounded-xl mb-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--neutral-700)]">
                      {analysisResults.recommendation}
                    </p>
                  </div>
                </div>

                {/* Key concepts */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[var(--neutral-700)] mb-2">
                    Key Concepts Identified
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysisResults.keyConcepts.map((concept) => (
                      <Badge key={concept} variant="info">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Similar patents */}
                <div>
                  <h4 className="text-sm font-medium text-[var(--neutral-700)] mb-3">
                    Similar Patents Found: {analysisResults.similarPatentsCount}
                  </h4>
                  <div className="space-y-2">
                    {analysisResults.similarPatents.map((patent) => (
                      <a
                        key={patent.id}
                        href={`https://patents.google.com/patent/${patent.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-white border border-[var(--neutral-200)] rounded-xl hover:border-[var(--primary-light)] transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-sm font-mono text-[var(--neutral-600)]">
                            {patent.id}
                          </span>
                          <ExternalLink className="w-4 h-4 text-[var(--neutral-400)] group-hover:text-[var(--primary)]" />
                        </div>
                        <p className="text-sm text-[var(--neutral-700)] line-clamp-2 mb-2">
                          {patent.title}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[var(--neutral-500)]">{patent.assignee}</span>
                          <span className="text-xs font-medium text-amber-600">
                            {patent.similarity}% overlap
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Matched Providers */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between mb-2"
            >
              <h2 className="text-xl font-semibold text-[var(--neutral-900)]">
                Your Top Matches
              </h2>
              <span className="text-sm text-[var(--neutral-500)]">
                Showing 3 of 47 providers
              </span>
            </motion.div>

            {matchedProviders.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card
                  className={cn(
                    "overflow-hidden",
                    provider.isBestMatch && "ring-2 ring-[var(--primary)]"
                  )}
                >
                  {provider.isBestMatch && (
                    <div className="bg-[var(--primary)] text-white text-xs font-semibold px-4 py-1.5 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      BEST MATCH
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Logo */}
                      <div className="w-14 h-14 bg-[var(--neutral-100)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-7 h-7 text-[var(--neutral-400)]" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-semibold text-[var(--neutral-900)]">
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
                            <p className="text-sm text-[var(--neutral-600)]">{provider.tagline}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right">
                              <div className="text-2xl font-bold text-[var(--primary)]">
                                {provider.matchScore}%
                              </div>
                              <div className="text-xs text-[var(--neutral-500)]">Match Score</div>
                            </div>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--neutral-500)] mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-medium text-[var(--neutral-900)]">
                              {provider.rating}
                            </span>
                            <span>({provider.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {provider.responseTime}
                          </div>
                        </div>

                        {/* Match reasons */}
                        <button
                          onClick={() =>
                            setExpandedProvider(
                              expandedProvider === provider.id ? null : provider.id
                            )
                          }
                          className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1 mb-4"
                        >
                          Why this match?
                          {expandedProvider === provider.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {expandedProvider === provider.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4 p-4 bg-[var(--neutral-50)] rounded-xl"
                          >
                            <ul className="space-y-2">
                              {provider.matchReasons.map((reason, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-[var(--neutral-700)]">{reason}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3">
                          <Button variant="secondary" size="sm">
                            View Full Profile
                          </Button>
                          <Link href={`/booking/${provider.id}`}>
                            <Button size="sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Free Consultation
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center pt-4"
            >
              <Link href="/providers">
                <Button variant="outline">
                  Show More Matches
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

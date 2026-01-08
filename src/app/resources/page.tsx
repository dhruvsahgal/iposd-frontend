"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Play,
  Zap,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Clock,
  ArrowRight,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Guides", "Videos", "Tools", "Articles", "Webinars"];

const resources = [
  {
    id: 1,
    title: "Patent Filing Guide Singapore",
    description: "Step-by-step guide to filing a patent application in Singapore, including timelines, costs, and requirements.",
    type: "guide",
    format: "PDF",
    duration: "15 min read",
    icon: FileText,
    featured: true,
    topics: ["Patent", "Singapore", "Filing"],
  },
  {
    id: 2,
    title: "Common IP Mistakes for Startups",
    description: "Learn from the most common intellectual property pitfalls that startups encounter and how to avoid them.",
    type: "video",
    format: "Video",
    duration: "12 min",
    icon: Play,
    featured: true,
    topics: ["Startup", "Strategy", "Best Practices"],
  },
  {
    id: 3,
    title: "WIPO IP Diagnostic Tool",
    description: "Interactive self-assessment tool to help identify your IP needs based on your business model.",
    type: "tool",
    format: "Interactive",
    duration: "20 min",
    icon: Zap,
    featured: true,
    topics: ["Assessment", "Strategy"],
    external: true,
  },
  {
    id: 4,
    title: "Trademark Classes Explained",
    description: "Understanding the Nice Classification system for trademarks - which classes you need and why.",
    type: "article",
    format: "Article",
    duration: "8 min read",
    icon: BookOpen,
    topics: ["Trademark", "Classification"],
  },
  {
    id: 5,
    title: "IP Due Diligence Checklist",
    description: "Essential checklist for IP due diligence in M&A transactions, investments, and partnerships.",
    type: "guide",
    format: "PDF",
    duration: "10 min read",
    icon: FileText,
    topics: ["Due Diligence", "M&A", "Checklist"],
  },
  {
    id: 6,
    title: "PCT International Filing Webinar",
    description: "Recorded webinar on using the Patent Cooperation Treaty for international patent protection.",
    type: "webinar",
    format: "Webinar",
    duration: "45 min",
    icon: Video,
    topics: ["Patent", "International", "PCT"],
  },
  {
    id: 7,
    title: "Trade Secret Protection Guide",
    description: "How to identify, protect, and manage trade secrets in your organization.",
    type: "guide",
    format: "PDF",
    duration: "12 min read",
    icon: FileText,
    topics: ["Trade Secret", "Protection"],
  },
  {
    id: 8,
    title: "IP Valuation Methods",
    description: "Overview of different methodologies for valuing intellectual property assets.",
    type: "article",
    format: "Article",
    duration: "15 min read",
    icon: BookOpen,
    topics: ["Valuation", "Finance"],
  },
  {
    id: 9,
    title: "Freedom to Operate Analysis",
    description: "Step-by-step video guide on conducting FTO analysis before product launch.",
    type: "video",
    format: "Video",
    duration: "18 min",
    icon: Play,
    topics: ["Patent", "FTO", "Risk"],
  },
  {
    id: 10,
    title: "Design Registration Calculator",
    description: "Estimate costs and timelines for design registration in Singapore and ASEAN.",
    type: "tool",
    format: "Interactive",
    duration: "5 min",
    icon: Zap,
    topics: ["Design", "Cost", "Calculator"],
  },
  {
    id: 11,
    title: "IP Strategy for SMEs",
    description: "Practical guide to building an IP strategy for small and medium enterprises.",
    type: "guide",
    format: "PDF",
    duration: "20 min read",
    icon: FileText,
    topics: ["Strategy", "SME", "Planning"],
  },
  {
    id: 12,
    title: "ASEAN Trademark Filing",
    description: "Webinar covering trademark registration across ASEAN member states.",
    type: "webinar",
    format: "Webinar",
    duration: "50 min",
    icon: Video,
    topics: ["Trademark", "ASEAN", "International"],
  },
];

const typeColors: Record<string, string> = {
  guide: "bg-blue-50 text-blue-700",
  video: "bg-red-50 text-red-700",
  tool: "bg-purple-50 text-purple-700",
  article: "bg-green-50 text-green-700",
  webinar: "bg-amber-50 text-amber-700",
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" ||
      resource.type.toLowerCase() === activeCategory.toLowerCase().slice(0, -1);
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter((r) => r.featured);

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--neutral-900)] mb-4">
            Knowledge Hub
          </h1>
          <p className="text-lg text-[var(--neutral-600)]">
            Guides, videos, and tools to help you understand and protect your intellectual property.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-[var(--neutral-900)] mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} hover className="p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      resource.type === "guide"
                        ? "bg-blue-100"
                        : resource.type === "video"
                        ? "bg-red-100"
                        : "bg-purple-100"
                    )}
                  >
                    <resource.icon
                      className={cn(
                        "w-6 h-6",
                        resource.type === "guide"
                          ? "text-blue-600"
                          : resource.type === "video"
                          ? "text-red-600"
                          : "text-purple-600"
                      )}
                    />
                  </div>
                  <Badge className={typeColors[resource.type]}>{resource.format}</Badge>
                </div>
                <h3 className="font-semibold text-[var(--neutral-900)] mb-2">{resource.title}</h3>
                <p className="text-sm text-[var(--neutral-600)] mb-4 flex-grow">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--neutral-500)] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {resource.duration}
                  </span>
                  <button className="text-[var(--primary)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {resource.external ? "Open" : resource.type === "video" ? "Watch" : "Read"}
                    {resource.external ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-[var(--neutral-200)] p-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)]/20 focus:border-[var(--primary-light)]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                    activeCategory === category
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--neutral-100)] text-[var(--neutral-600)] hover:bg-[var(--neutral-200)]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--neutral-900)]">All Resources</h2>
            <span className="text-sm text-[var(--neutral-500)]">
              {filteredResources.length} resources
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Card hover className="p-5 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <resource.icon className="w-5 h-5 text-[var(--neutral-500)]" />
                    <Badge className={typeColors[resource.type]}>{resource.format}</Badge>
                  </div>
                  <h3 className="font-semibold text-[var(--neutral-900)] mb-2">{resource.title}</h3>
                  <p className="text-sm text-[var(--neutral-600)] mb-3 flex-grow line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs bg-[var(--neutral-100)] text-[var(--neutral-600)] px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--neutral-100)]">
                    <span className="text-xs text-[var(--neutral-500)] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {resource.duration}
                    </span>
                    <button className="text-[var(--primary)] text-sm font-medium flex items-center gap-1">
                      {resource.type === "guide" ? (
                        <>
                          <Download className="w-4 h-4" /> Download
                        </>
                      ) : resource.external ? (
                        <>
                          <ExternalLink className="w-4 h-4" /> Open
                        </>
                      ) : (
                        <>
                          <ArrowRight className="w-4 h-4" /> View
                        </>
                      )}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

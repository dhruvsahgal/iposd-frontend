"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Zap,
  Lightbulb,
  Tag,
  Check,
  FileText,
  Play,
  ChevronRight,
  Calendar,
  Building2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const journeySteps = [
  { id: "assessment", label: "Assessment", complete: true },
  { id: "analysis", label: "Analysis", complete: true },
  { id: "consultation", label: "Consultation", complete: true, current: true },
  { id: "filing", label: "Filing", complete: false },
  { id: "granted", label: "Granted", complete: false },
];

const ipMatters = [
  {
    id: "matter-001",
    title: "Patient Outcome Prediction Algorithm",
    type: "patent",
    icon: Lightbulb,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    status: "Consultation Scheduled",
    statusColor: "bg-amber-100 text-amber-700",
    provider: "Drew & Napier",
    nextAction: "Jan 10, 2:00 PM",
    hasAnalysis: true,
  },
  {
    id: "matter-002",
    title: "HealthPredict™ Brand",
    type: "trademark",
    icon: Tag,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    status: "Analysis Complete",
    statusColor: "bg-green-100 text-green-700",
    similarFound: 3,
    risk: "Low",
    hasAnalysis: true,
  },
];

const savedResources = [
  { id: 1, title: "Patent Filing Guide Singapore", type: "Guide", icon: FileText },
  { id: 2, title: "Common IP Mistakes for Startups", type: "Video", icon: Play },
  { id: 3, title: "WIPO IP Diagnostic Tool", type: "Tool", icon: Zap },
];

export default function DashboardPage() {
  const completedSteps = journeySteps.filter((s) => s.complete).length;
  const progressPercentage = (completedSteps / journeySteps.length) * 100;

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-2xl font-bold text-[var(--neutral-900)]">My IP Journey</h1>
            <p className="text-[var(--neutral-600)]">Welcome back, Sarah</p>
          </div>
          <Link href="/assessment">
            <Button>
              <Zap className="w-4 h-4 mr-2" />
              New Assessment
            </Button>
          </Link>
        </motion.div>

        {/* Journey Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              {journeySteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all",
                      step.complete
                        ? "bg-[var(--primary)] text-white"
                        : "bg-[var(--neutral-200)] text-[var(--neutral-500)]"
                    )}
                  >
                    {step.complete ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs text-center",
                      step.complete
                        ? "text-[var(--primary)] font-medium"
                        : "text-[var(--neutral-500)]"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-[var(--neutral-200)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--primary)] rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </Card>
        </motion.div>

        {/* Active IP Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-[var(--neutral-900)] mb-4">
            Active IP Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ipMatters.map((matter) => (
              <Card key={matter.id} className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      matter.iconBg
                    )}
                  >
                    <matter.icon className={cn("w-5 h-5", matter.iconColor)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--neutral-900)] truncate">
                      {matter.title}
                    </h3>
                    <span className={cn("text-xs px-2 py-0.5 rounded", matter.statusColor)}>
                      {matter.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--neutral-500)]">Type</span>
                    <span className="text-[var(--neutral-900)] capitalize">{matter.type}</span>
                  </div>
                  {matter.provider && (
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Provider</span>
                      <span className="text-[var(--neutral-900)]">{matter.provider}</span>
                    </div>
                  )}
                  {matter.nextAction && (
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Next</span>
                      <span className="text-[var(--primary)] font-medium">{matter.nextAction}</span>
                    </div>
                  )}
                  {matter.similarFound !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Similar Marks</span>
                      <span className="text-[var(--neutral-900)]">{matter.similarFound} found</span>
                    </div>
                  )}
                  {matter.risk && (
                    <div className="flex justify-between">
                      <span className="text-[var(--neutral-500)]">Risk</span>
                      <span className="text-emerald-600 font-medium">{matter.risk}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  {matter.hasAnalysis && (
                    <Link href="/results" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Analysis
                      </Button>
                    </Link>
                  )}
                  {matter.provider ? (
                    <Button size="sm" className="flex-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Join
                    </Button>
                  ) : (
                    <Link href="/providers" className="flex-1">
                      <Button size="sm" className="w-full">
                        Find Provider
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Saved Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[var(--neutral-900)]">Saved Resources</h2>
              <Link
                href="/resources"
                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1"
              >
                View All <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              {savedResources.map((resource) => (
                <Link
                  key={resource.id}
                  href="/resources"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--neutral-50)] transition-colors group"
                >
                  <div className="w-9 h-9 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center">
                    <resource.icon className="w-4 h-4 text-[var(--neutral-600)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[var(--neutral-900)] text-sm truncate">
                      {resource.title}
                    </div>
                    <div className="text-xs text-[var(--neutral-500)]">{resource.type}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--neutral-400)] group-hover:text-[var(--primary)]" />
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 grid sm:grid-cols-3 gap-4"
        >
          <Link href="/providers">
            <Card hover className="p-4 text-center">
              <Building2 className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
              <div className="font-medium text-[var(--neutral-900)] text-sm">Browse Providers</div>
            </Card>
          </Link>
          <Link href="/resources">
            <Card hover className="p-4 text-center">
              <FileText className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
              <div className="font-medium text-[var(--neutral-900)] text-sm">IP Resources</div>
            </Card>
          </Link>
          <Link href="/services">
            <Card hover className="p-4 text-center">
              <Lightbulb className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
              <div className="font-medium text-[var(--neutral-900)] text-sm">Explore Services</div>
            </Card>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

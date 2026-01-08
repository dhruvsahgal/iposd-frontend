"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3,
  Phone,
  Users,
  Target,
  LogOut,
  AlertCircle,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "followup", label: "Follow-ups", icon: Phone },
  { id: "providers", label: "Providers", icon: Users },
  { id: "outcomes", label: "Outcomes", icon: Target },
];

const metrics = [
  { label: "Active Users Today", value: "847", change: "+12%" },
  { label: "Analyses This Week", value: "234", change: "+28%" },
  { label: "Consultations Scheduled", value: "47", change: "+15%" },
  { label: "Matches This Month", value: "312", change: "+8%" },
];

const funnelData = [
  { stage: "Visitors", count: 12450, percentage: 100 },
  { stage: "Assessment", count: 6847, percentage: 55 },
  { stage: "Analysis", count: 3421, percentage: 27 },
  { stage: "Matched", count: 1892, percentage: 15 },
  { stage: "Booked", count: 847, percentage: 7 },
];

const followUpQueue = [
  { id: 1, name: "Sarah Tan", company: "HealthPredict Pte Ltd", provider: "Drew & Napier", type: "Patent", due: "Jan 24", priority: "high", days: 14 },
  { id: 2, name: "Michael Lim", company: "PrecisionTech Engineering", provider: "Bird & Bird", type: "Trademark", due: "Jan 25", priority: "medium", days: 11 },
  { id: 3, name: "David Ng", company: "SmartHome Solutions", provider: "Exy IP", type: "Patent", due: "Jan 12", priority: "high", days: 24 },
  { id: 4, name: "Lisa Chen", company: "EcoPackaging Pte Ltd", provider: "Spruson & Ferguson", type: "Patent", due: "Jan 7", priority: "high", days: 29 },
  { id: 5, name: "Ahmad Rahman", company: "FinEdge Technologies", provider: "Allen & Gledhill", type: "Patent", due: "Jan 17", priority: "medium", days: 19 },
];

const providerRankings = [
  { rank: 1, name: "Drew & Napier", matches: 47, filings: 12, conversion: 32 },
  { rank: 2, name: "Donaldson & Burkinshaw", matches: 42, filings: 9, conversion: 26 },
  { rank: 3, name: "Exy IP", matches: 31, filings: 7, conversion: 29 },
  { rank: 4, name: "Bird & Bird", matches: 23, filings: 5, conversion: 26 },
  { rank: 5, name: "Marks & Clerk", matches: 22, filings: 4, conversion: 24 },
];

const filingsByType = [
  { type: "Trademark", count: 42, percentage: 47 },
  { type: "Patent", count: 34, percentage: 38 },
  { type: "Design", count: 8, percentage: 9 },
  { type: "Other", count: 5, percentage: 6 },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl text-white">
              <span className="text-2xl">IP</span> Grow
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">
              Operations
            </span>
          </div>
          <Link
            href="/"
            className="text-slate-400 hover:text-white text-sm flex items-center gap-1"
          >
            <LogOut className="w-4 h-4" /> Exit Admin
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-slate-800 min-h-[calc(100vh-57px)] p-3">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left text-sm transition-all",
                  activeTab === tab.id
                    ? "bg-teal-600 text-white"
                    : "text-slate-400 hover:bg-slate-700 hover:text-white"
                )}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Operations Dashboard</h1>
                <p className="text-slate-400 text-sm">Last updated 2 minutes ago</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-slate-800 rounded-xl p-4">
                    <div className="text-slate-400 text-xs mb-1">{metric.label}</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">{metric.value}</span>
                      <span className="text-emerald-400 text-xs mb-1">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Funnel */}
              <div className="bg-slate-800 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-white mb-4">
                  Conversion Funnel (Last 30 Days)
                </h2>
                <div className="space-y-3">
                  {funnelData.map((item) => (
                    <div key={item.stage} className="flex items-center gap-3">
                      <div className="w-20 text-xs text-slate-300">{item.stage}</div>
                      <div className="flex-1 h-6 bg-slate-700 rounded overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded flex items-center px-2"
                          style={{ width: `${item.percentage}%` }}
                        >
                          {item.percentage > 15 && (
                            <span className="text-xs text-white font-medium">
                              {item.count.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-12 text-right text-xs text-slate-400">
                        {item.percentage}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Insight */}
                <div className="mt-4 p-3 bg-amber-900/30 border border-amber-700/50 rounded-lg flex gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-amber-200 text-xs font-medium">High drop-off detected</div>
                    <div className="text-amber-300/70 text-xs">
                      55% drop at Provider Match stage. Consider adding auto-suggestions.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Follow-ups Tab */}
          {activeTab === "followup" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Follow-up Queue</h1>
                <p className="text-slate-400 text-sm">{followUpQueue.length} items pending</p>
              </div>

              <div className="space-y-3">
                {followUpQueue.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-800 rounded-xl p-4 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full mt-2",
                          item.priority === "high" ? "bg-red-500" : "bg-amber-500"
                        )}
                      />
                      <div>
                        <div className="text-white font-medium">{item.name}</div>
                        <div className="text-slate-400 text-sm">{item.company}</div>
                        <div className="flex gap-3 mt-1 text-xs text-slate-500">
                          <span>{item.provider}</span>
                          <span>{item.type}</span>
                          <span>{item.days} days since consultation</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs mb-2">Due: {item.due}</div>
                      <div className="flex gap-2">
                        <button className="text-xs px-3 py-1.5 bg-slate-700 text-slate-300 rounded hover:bg-slate-600">
                          Call
                        </button>
                        <button className="text-xs px-3 py-1.5 bg-teal-600 text-white rounded hover:bg-teal-500">
                          Survey
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Providers Tab */}
          {activeTab === "providers" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Provider Performance</h1>
                <p className="text-slate-400 text-sm">January 2026</p>
              </div>

              <div className="bg-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="text-left text-slate-300 font-medium px-4 py-3">#</th>
                      <th className="text-left text-slate-300 font-medium px-4 py-3">Provider</th>
                      <th className="text-right text-slate-300 font-medium px-4 py-3">Matches</th>
                      <th className="text-right text-slate-300 font-medium px-4 py-3">Filings</th>
                      <th className="text-right text-slate-300 font-medium px-4 py-3">Conv %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providerRankings.map((provider) => (
                      <tr key={provider.rank} className="border-t border-slate-700">
                        <td className="px-4 py-3 text-slate-400">{provider.rank}</td>
                        <td className="px-4 py-3 text-white font-medium">{provider.name}</td>
                        <td className="px-4 py-3 text-right text-slate-300">{provider.matches}</td>
                        <td className="px-4 py-3 text-right text-slate-300">{provider.filings}</td>
                        <td className="px-4 py-3 text-right text-emerald-400 font-medium">
                          {provider.conversion}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium text-sm mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Top Performer: Drew & Napier (32% conversion)
                </h3>
                <p className="text-slate-400 text-sm">
                  47 matches → 38 consultations → 12 filings confirmed this month
                </p>
              </div>
            </motion.div>
          )}

          {/* Outcomes Tab */}
          {activeTab === "outcomes" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Outcome Tracking</h1>
                <p className="text-slate-400 text-sm">Q4 2025 + January 2026</p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Total Consultations</div>
                  <div className="text-2xl font-bold text-white">312</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Filings Confirmed</div>
                  <div className="text-2xl font-bold text-emerald-400">89</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Satisfaction Score</div>
                  <div className="text-2xl font-bold text-amber-400">4.3/5</div>
                </div>
              </div>

              {/* Filings by Type */}
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium text-sm mb-4">Filings by IP Type</h3>
                <div className="space-y-3">
                  {filingsByType.map((item) => (
                    <div key={item.type} className="flex items-center gap-3">
                      <div className="w-20 text-sm text-slate-300">{item.type}</div>
                      <div className="flex-1 h-5 bg-slate-700 rounded overflow-hidden">
                        <div
                          className="h-full bg-teal-600 rounded"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <div className="w-10 text-right text-sm text-slate-400">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Satisfaction Distribution */}
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-medium text-sm mb-4">
                  Satisfaction Distribution (142 responses)
                </h3>
                <div className="flex items-end gap-2 h-24">
                  {[
                    { stars: 5, count: 68 },
                    { stars: 4, count: 45 },
                    { stars: 3, count: 20 },
                    { stars: 2, count: 7 },
                    { stars: 1, count: 2 },
                  ].map((item) => (
                    <div key={item.stars} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-teal-600 rounded-t"
                        style={{ height: `${(item.count / 68) * 100}%` }}
                      />
                      <span className="text-xs text-slate-400">{item.stars}★</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

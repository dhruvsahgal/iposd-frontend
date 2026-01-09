"use client";

import { useState } from "react";
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  Building2,
  Star,
  Timer,
  Activity,
  BarChart3,
} from "lucide-react";

// Mock data for the dashboard
const overviewStats = [
  {
    title: "Pending Requests",
    value: 47,
    change: +12,
    trend: "up",
    icon: FileText,
    color: "var(--ip-orange)",
  },
  {
    title: "Avg. Match Time",
    value: "4.2h",
    change: -18,
    trend: "down",
    icon: Clock,
    color: "var(--ip-teal)",
  },
  {
    title: "Provider Response",
    value: "94%",
    change: +3,
    trend: "up",
    icon: CheckCircle,
    color: "var(--ip-light-cyan)",
  },
  {
    title: "Satisfaction Score",
    value: "4.8",
    change: +0.2,
    trend: "up",
    icon: Star,
    color: "var(--ip-yellow)",
  },
];

const pipelineData = [
  { stage: "New Requests", count: 23, color: "var(--ip-orange)" },
  { stage: "Matching", count: 15, color: "var(--ip-yellow)" },
  { stage: "In Progress", count: 42, color: "var(--ip-teal)" },
  { stage: "Completed", count: 156, color: "var(--ip-light-cyan)" },
];

const recentRequests = [
  {
    id: "REQ-2024-001",
    type: "Patent Search",
    company: "TechStart Pte Ltd",
    provider: "IP Solutions SG",
    status: "In Progress",
    sla: "On Track",
    timeElapsed: "2.5h",
  },
  {
    id: "REQ-2024-002",
    type: "Trademark Filing",
    company: "GreenBites Co",
    provider: "Pending Match",
    status: "Matching",
    sla: "Warning",
    timeElapsed: "5.2h",
  },
  {
    id: "REQ-2024-003",
    type: "Patent Filing",
    company: "AI Dynamics",
    provider: "PatentPro Asia",
    status: "Completed",
    sla: "Met",
    timeElapsed: "18h",
  },
  {
    id: "REQ-2024-004",
    type: "Design Registration",
    company: "Fashion Forward",
    provider: "Pending Match",
    status: "New",
    sla: "On Track",
    timeElapsed: "0.5h",
  },
  {
    id: "REQ-2024-005",
    type: "IP Strategy",
    company: "MedTech SG",
    provider: "KPMG IP Advisory",
    status: "In Progress",
    sla: "At Risk",
    timeElapsed: "24h",
  },
];

const topProviders = [
  {
    name: "IP Solutions SG",
    rating: 4.9,
    responseTime: "2.1h",
    completionRate: "98%",
    activeJobs: 12,
  },
  {
    name: "PatentPro Asia",
    rating: 4.8,
    responseTime: "3.2h",
    completionRate: "96%",
    activeJobs: 8,
  },
  {
    name: "KPMG IP Advisory",
    rating: 4.7,
    responseTime: "4.5h",
    completionRate: "99%",
    activeJobs: 5,
  },
  {
    name: "Drew & Napier",
    rating: 4.9,
    responseTime: "2.8h",
    completionRate: "97%",
    activeJobs: 15,
  },
];

const alerts = [
  { type: "warning", message: "3 requests approaching SLA breach", time: "5 min ago" },
  { type: "info", message: "New provider onboarded: LegalTech Partners", time: "1 hour ago" },
  { type: "error", message: "Provider 'Quick IP' response rate dropped to 75%", time: "2 hours ago" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10 bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold gradient-text">IP Grow Admin</h1>
              <p className="text-sm text-foreground/60">Operations Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Live Data</p>
                <p className="text-xs text-foreground/50">Last updated: Just now</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["overview", "pipeline", "providers", "alerts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[var(--ip-teal)] text-white shadow-lg shadow-[var(--ip-teal)]/30"
                  : "glass text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-foreground/10 hover:border-[var(--ip-teal)]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `color-mix(in srgb, ${stat.color} 20%, transparent)` }}
                    >
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        stat.trend === "up" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {Math.abs(stat.change)}%
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-[var(--ip-teal)] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">{stat.title}</div>
                </div>
              ))}
            </div>

            {/* Pipeline Funnel */}
            <div className="glass rounded-2xl p-6 border border-foreground/10">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[var(--ip-teal)]" />
                Request Pipeline
              </h3>
              <div className="flex items-end justify-between gap-4 h-48">
                {pipelineData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{
                        backgroundColor: item.color,
                        height: `${(item.count / 160) * 100}%`,
                        minHeight: "20px",
                      }}
                    />
                    <div className="text-2xl font-bold text-foreground">{item.count}</div>
                    <div className="text-xs text-foreground/60 text-center">{item.stage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Requests Table */}
            <div className="glass rounded-2xl border border-foreground/10 overflow-hidden">
              <div className="p-6 border-b border-foreground/10">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--ip-teal)]" />
                  Recent Requests
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-foreground/5">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">ID</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Type</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Company</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Provider</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Status</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">SLA</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRequests.map((request, index) => (
                      <tr
                        key={index}
                        className="border-t border-foreground/5 hover:bg-foreground/5 transition-colors"
                      >
                        <td className="p-4 text-sm font-mono text-[var(--ip-teal)]">{request.id}</td>
                        <td className="p-4 text-sm text-foreground">{request.type}</td>
                        <td className="p-4 text-sm text-foreground">{request.company}</td>
                        <td className="p-4 text-sm text-foreground/70">{request.provider}</td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              request.status === "Completed"
                                ? "bg-green-500/20 text-green-400"
                                : request.status === "In Progress"
                                ? "bg-[var(--ip-teal)]/20 text-[var(--ip-teal)]"
                                : request.status === "Matching"
                                ? "bg-[var(--ip-yellow)]/20 text-[var(--ip-yellow)]"
                                : "bg-[var(--ip-orange)]/20 text-[var(--ip-orange)]"
                            }`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              request.sla === "Met" || request.sla === "On Track"
                                ? "bg-green-500/20 text-green-400"
                                : request.sla === "Warning"
                                ? "bg-[var(--ip-yellow)]/20 text-[var(--ip-yellow)]"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {request.sla}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-foreground/60">{request.timeElapsed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Pipeline Tab */}
        {activeTab === "pipeline" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {pipelineData.map((stage, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-foreground/10 hover:border-[var(--ip-teal)]/30 transition-all"
                >
                  <div
                    className="w-full h-2 rounded-full mb-4"
                    style={{ backgroundColor: stage.color }}
                  />
                  <div className="text-4xl font-bold text-foreground mb-2">{stage.count}</div>
                  <div className="text-sm text-foreground/60">{stage.stage}</div>
                </div>
              ))}
            </div>
            <div className="glass rounded-2xl p-6 border border-foreground/10">
              <h3 className="text-lg font-bold text-foreground mb-4">Turnaround Time by IP Type</h3>
              <div className="space-y-4">
                {[
                  { type: "Patent Search", avg: "6.2h", target: "8h", status: "good" },
                  { type: "Trademark Filing", avg: "12.5h", target: "12h", status: "warning" },
                  { type: "Patent Filing", avg: "24h", target: "48h", status: "good" },
                  { type: "Design Registration", avg: "8h", target: "8h", status: "good" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-foreground/5">
                    <span className="text-foreground">{item.type}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-foreground/60">Avg: {item.avg}</span>
                      <span className="text-foreground/60">Target: {item.target}</span>
                      <span
                        className={`w-3 h-3 rounded-full ${
                          item.status === "good" ? "bg-green-500" : "bg-[var(--ip-yellow)]"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Providers Tab */}
        {activeTab === "providers" && (
          <div className="space-y-8">
            <div className="glass rounded-2xl border border-foreground/10 overflow-hidden">
              <div className="p-6 border-b border-foreground/10">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[var(--ip-teal)]" />
                  Provider Performance
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-foreground/5">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Provider</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Rating</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Response Time</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Completion Rate</th>
                      <th className="text-left p-4 text-sm font-semibold text-foreground/70">Active Jobs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProviders.map((provider, index) => (
                      <tr
                        key={index}
                        className="border-t border-foreground/5 hover:bg-foreground/5 transition-colors"
                      >
                        <td className="p-4 text-sm font-medium text-foreground">{provider.name}</td>
                        <td className="p-4">
                          <span className="flex items-center gap-1 text-[var(--ip-yellow)]">
                            <Star className="w-4 h-4 fill-current" />
                            {provider.rating}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-foreground">{provider.responseTime}</td>
                        <td className="p-4 text-sm text-foreground">{provider.completionRate}</td>
                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--ip-teal)]/20 text-[var(--ip-teal)]">
                            {provider.activeJobs}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === "alerts" && (
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-4 border flex items-start gap-4 ${
                  alert.type === "error"
                    ? "border-red-500/30 bg-red-500/5"
                    : alert.type === "warning"
                    ? "border-[var(--ip-yellow)]/30 bg-[var(--ip-yellow)]/5"
                    : "border-[var(--ip-teal)]/30 bg-[var(--ip-teal)]/5"
                }`}
              >
                <AlertTriangle
                  className={`w-5 h-5 mt-0.5 ${
                    alert.type === "error"
                      ? "text-red-400"
                      : alert.type === "warning"
                      ? "text-[var(--ip-yellow)]"
                      : "text-[var(--ip-teal)]"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-foreground">{alert.message}</p>
                  <p className="text-sm text-foreground/50 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

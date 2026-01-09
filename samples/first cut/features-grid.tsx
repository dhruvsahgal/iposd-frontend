"use client"

import { Sparkles, Users, Calendar, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description: "Get instant insights on your innovation with our advanced AI technology.",
    color: "var(--ip-yellow)",
  },
  {
    icon: Users,
    title: "175+ Verified Providers",
    description: "Connect with qualified IP professionals across all industries.",
    color: "var(--ip-teal)",
  },
  {
    icon: Calendar,
    title: "Free Consultations",
    description: "Book complimentary 45-minute sessions with IP experts.",
    color: "var(--ip-orange)",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Monitor your IP journey from initial assessment to final filing.",
    color: "var(--ip-light-cyan)",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="p-10 glass border border-foreground/10 hover:border-[var(--ip-teal)]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--ip-teal)]/20 group">
        <div className="space-y-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative"
            style={{ backgroundColor: `color-mix(in srgb, ${feature.color} 20%, transparent)` }}
          >
            <Icon className="w-8 h-8 relative z-10" style={{ color: feature.color }} />
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
              style={{ backgroundColor: feature.color }}
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
          <p className="text-foreground/60 leading-relaxed text-lg">{feature.description}</p>
        </div>
      </Card>
    </div>
  )
}

export function FeaturesGrid() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--ip-orange)]/20 rounded-full blur-[150px] animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--ip-light-cyan)]/20 rounded-full blur-[150px] animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center space-y-6 mb-20 scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text block">Everything you need.</span>
            <span className="text-foreground/50 block mt-2">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Powerful features designed to simplify your IP protection journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

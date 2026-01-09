"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounterAnimation } from "@/hooks/use-counter-animation"

const stats = [
  { value: 12000, suffix: "+", label: "Users Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 175, suffix: "+", label: "Service Providers" },
  { value: 48, suffix: "hrs", label: "Avg. Match Time" },
]

function StatItem({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 })
  const count = useCounterAnimation(stat.value, 2000, isVisible)

  return (
    <div
      ref={ref}
      className={`text-center space-y-4 scroll-animate ${isVisible ? "animate-scale-in" : ""} group`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative inline-block">
        <div className="text-5xl md:text-7xl font-bold tracking-tight gradient-text transition-all duration-500 group-hover:scale-110">
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[var(--ip-teal)]" />
      </div>
      <div className="text-base md:text-lg text-foreground/60 font-medium">{stat.label}</div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--ip-teal) 1px, transparent 1px), linear-gradient(90deg, var(--ip-teal) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`text-center space-y-6 mb-20 scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            Trusted by thousands across Singapore
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

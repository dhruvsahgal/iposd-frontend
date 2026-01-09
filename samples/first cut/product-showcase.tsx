"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

function ShowcaseItem({
  badge,
  badgeColor,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  delay = 0,
}: {
  badge: string
  badgeColor: string
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const screenCenter = window.innerHeight / 2
        setScrollY(elementCenter - screenCenter)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className="mb-40">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div
          className={`space-y-8 scroll-animate ${reverse ? "lg:order-2" : ""} ${
            isVisible ? "animate-fade-in-left" : ""
          }`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Badge variant="secondary" className={`${badgeColor} px-4 py-2 text-sm font-semibold`}>
            {badge}
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance gradient-text">{title}</h2>

          <p className="text-xl text-foreground/70 leading-relaxed">{description}</p>

          <div className="flex items-center gap-6 pt-6">
            <Button className="rounded-full bg-[var(--ip-teal)] hover:bg-[var(--ip-light-cyan)] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[var(--ip-teal)]/40 px-8 h-12 text-base font-semibold">
              Try analysis
            </Button>
            <Button
              variant="link"
              className="text-[var(--ip-teal)] hover:text-[var(--ip-light-cyan)] group text-base font-semibold"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div
          className={`relative aspect-[4/3] rounded-3xl overflow-hidden glass scroll-animate ${
            reverse ? "lg:order-1" : ""
          } ${isVisible ? "animate-scale-in" : ""} parallax border border-[var(--ip-teal)]/20`}
          style={{
            animationDelay: `${delay + 0.2}s`,
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ip-teal)]/20 to-transparent z-10" />
          <img
            src={image || "/placeholder.svg?height=600&width=800"}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 animate-glow opacity-50" />
        </div>
      </div>
    </div>
  )
}

export function ProductShowcase() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--ip-teal)] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <ShowcaseItem
          badge="Prior Art Analysis"
          badgeColor="glass border border-[var(--ip-light-cyan)]/40 text-[var(--ip-light-cyan)]"
          title="Know your innovation is truly novel."
          description="Upload your invention disclosure and get instant AI-powered analysis of similar existing patents. Get a novelty score in seconds, not weeks."
          image="/modern-patent-analysis-dashboard-with-graphs.jpg"
          imageAlt="Patent Analysis Dashboard"
          delay={0}
        />

        <ShowcaseItem
          badge="Smart Matching"
          badgeColor="glass border border-[var(--ip-orange)]/40 text-[var(--ip-orange)]"
          title="Find the perfect expert for your IP."
          description="Our intelligent matching algorithm connects you with verified IP professionals based on your industry, budget, and specific needs."
          image="/professional-expert-profiles-network-interface.jpg"
          imageAlt="Expert Matching"
          reverse={true}
          delay={0}
        />

        <ShowcaseItem
          badge="IP Journey"
          badgeColor="glass border border-[var(--ip-yellow)]/40 text-[var(--ip-yellow)]"
          title="Track everything in one place."
          description="Monitor your IP matters from analysis to filing in one unified dashboard. Stay informed at every step of your protection journey."
          image="/project-dashboard-timeline-tracking-interface.jpg"
          imageAlt="IP Journey Dashboard"
          delay={0}
        />
      </div>
    </section>
  )
}

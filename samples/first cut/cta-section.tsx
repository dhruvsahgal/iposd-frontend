"use client"

import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-80" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--ip-teal)]/30 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[var(--ip-orange)]/20 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--ip-light-cyan)]/25 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-10">
          <div
            className={`inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-[var(--ip-teal)]/30 scroll-animate ${isVisible ? "animate-fade-in-down" : ""}`}
          >
            <Sparkles className="w-5 h-5 text-[var(--ip-teal)]" />
            <span className="text-sm font-semibold text-[var(--ip-teal)]">Join the IP Revolution</span>
          </div>

          <h2
            className={`text-5xl md:text-7xl font-bold tracking-tight text-balance scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gradient-text block">Ready to protect</span>
            <span className="text-foreground block mt-2">your innovation?</span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto text-balance leading-relaxed scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of Singapore businesses who have secured their intellectual property through IP Grow.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg font-bold bg-[var(--ip-teal)] hover:bg-[var(--ip-light-cyan)] text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--ip-teal)]/50 group"
            >
              Start free assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-12 h-16 text-lg font-bold glass border-[var(--ip-teal)]/40 text-foreground hover:bg-[var(--ip-teal)]/10 hover:border-[var(--ip-teal)] transition-all duration-300 hover:scale-110 bg-transparent"
            >
              Browse experts
            </Button>
          </div>

          <p
            className={`text-base text-foreground/50 pt-6 scroll-animate ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            No credit card required · Free 45-min consultation · Government-supported program
          </p>
        </div>
      </div>
    </section>
  )
}

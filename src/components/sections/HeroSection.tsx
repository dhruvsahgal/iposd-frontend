"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient pt-14">
      {/* Mouse-tracking parallax orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--ip-teal)]/20 rounded-full blur-[120px] animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--ip-orange)]/15 rounded-full blur-[120px] animate-float"
          style={{
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-[var(--ip-light-cyan)]/20 rounded-full blur-[100px] animate-float"
          style={{
            animationDelay: "4s",
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(var(--ip-teal) 1px, transparent 1px), linear-gradient(90deg, var(--ip-teal) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass animate-fade-in-down border border-[var(--ip-teal)]/30">
            <Sparkles className="w-4 h-4 text-[var(--ip-teal)]" />
            <span className="text-sm font-medium text-[var(--ip-teal)]">AI-Powered IP Analysis</span>
            <ArrowRight className="w-4 h-4 text-[var(--ip-teal)]" />
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-fade-in-up [animation-delay:0.2s] opacity-0">
            <span className="gradient-text block">Protect your innovation.</span>
            <span className="text-foreground/60 block mt-2">Simply brilliant.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in-up [animation-delay:0.4s] opacity-0">
            AI-powered IP analysis and expert matching to help you navigate your intellectual property journey.
            <span className="text-[var(--ip-teal)]"> From idea to protection.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 animate-fade-in-up [animation-delay:0.6s] opacity-0">
            <Link
              href="/assessment"
              className="rounded-full px-10 h-14 text-lg font-semibold bg-[var(--ip-teal)] hover:bg-[var(--ip-light-cyan)] text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[var(--ip-teal)]/50 flex items-center justify-center"
            >
              Start free assessment
            </Link>
            <Link
              href="/providers"
              className="rounded-full px-10 h-14 text-lg font-semibold glass border-[var(--ip-teal)]/40 text-foreground hover:bg-[var(--ip-teal)]/10 hover:border-[var(--ip-teal)] transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              Browse experts
            </Link>
          </div>

          {/* Trust text */}
          <p className="text-sm text-foreground/50 pt-4 animate-fade-in-up [animation-delay:0.8s] opacity-0">
            Free 45-minute consultation included · No credit card required
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-7 h-12 rounded-full border-2 border-[var(--ip-teal)]/40 flex items-start justify-center p-2 glass">
          <div className="w-1.5 h-3 bg-[var(--ip-teal)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

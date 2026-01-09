"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        setScrollY(elementCenter - screenCenter);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="mb-40">
      <div ref={itemRef} className="grid lg:grid-cols-2 gap-16 items-center">
        <div
          className={`space-y-8 scroll-animate ${reverse ? "lg:order-2" : ""} ${
            isVisible ? "animate-fade-in-left" : ""
          }`}
          style={{ animationDelay: `${delay}s` }}
        >
          <span className={`inline-block ${badgeColor} px-4 py-2 text-sm font-semibold rounded-full`}>
            {badge}
          </span>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance gradient-text">
            {title}
          </h2>

          <p className="text-xl text-foreground/70 leading-relaxed">{description}</p>

          <div className="flex items-center gap-6 pt-6">
            <Link
              href="/assessment"
              className="rounded-full bg-[var(--ip-teal)] hover:bg-[var(--ip-light-cyan)] text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[var(--ip-teal)]/40 px-8 h-12 text-base font-semibold flex items-center justify-center"
            >
              Try analysis
            </Link>
            <Link
              href="/about"
              className="text-[var(--ip-teal)] hover:text-[var(--ip-light-cyan)] group text-base font-semibold flex items-center"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--ip-dark-teal)]">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--ip-teal)]/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-[var(--ip-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-foreground/60 text-sm">{imageAlt}</p>
            </div>
          </div>
          <div className="absolute inset-0 animate-glow opacity-30" />
        </div>
      </div>
    </div>
  );
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
          image="/patent-analysis.jpg"
          imageAlt="Patent Analysis Dashboard"
          delay={0}
        />

        <ShowcaseItem
          badge="Smart Matching"
          badgeColor="glass border border-[var(--ip-orange)]/40 text-[var(--ip-orange)]"
          title="Find the perfect expert for your IP."
          description="Our intelligent matching algorithm connects you with verified IP professionals based on your industry, budget, and specific needs."
          image="/expert-matching.jpg"
          imageAlt="Expert Matching Interface"
          reverse={true}
          delay={0}
        />

        <ShowcaseItem
          badge="IP Journey"
          badgeColor="glass border border-[var(--ip-yellow)]/40 text-[var(--ip-yellow)]"
          title="Track everything in one place."
          description="Monitor your IP matters from analysis to filing in one unified dashboard. Stay informed at every step of your protection journey."
          image="/ip-dashboard.jpg"
          imageAlt="IP Journey Dashboard"
          delay={0}
        />
      </div>
    </section>
  );
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--ip-dark-teal)]/80 backdrop-blur-2xl border-b border-[var(--ip-teal)]/20 shadow-lg shadow-[var(--ip-teal)]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-2xl font-bold gradient-text">
            IP Grow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/assessment"
              className="text-sm text-foreground/70 hover:text-[var(--ip-teal)] transition-all duration-300 hover:scale-105"
            >
              Assessment
            </Link>
            <Link
              href="/providers"
              className="text-sm text-foreground/70 hover:text-[var(--ip-teal)] transition-all duration-300 hover:scale-105"
            >
              Providers
            </Link>
            <Link
              href="/services"
              className="text-sm text-foreground/70 hover:text-[var(--ip-teal)] transition-all duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="/support"
              className="text-sm text-foreground/70 hover:text-[var(--ip-teal)] transition-all duration-300 hover:scale-105"
            >
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="rounded-full bg-[var(--ip-teal)] hover:bg-[var(--ip-light-cyan)] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--ip-teal)]/50"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--ip-dark-teal)] border-t border-[var(--ip-teal)]/20">
          <div className="px-6 py-4 space-y-3">
            <Link href="/assessment" className="block text-sm text-white/80 hover:text-white">
              Assessment
            </Link>
            <Link href="/providers" className="block text-sm text-white/80 hover:text-white">
              Providers
            </Link>
            <Link href="/services" className="block text-sm text-white/80 hover:text-white">
              Services
            </Link>
            <Link href="/support" className="block text-sm text-white/80 hover:text-white">
              Support
            </Link>
            <Button variant="default" size="sm" className="w-full mt-4">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown, User, Settings } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Find Experts", href: "/providers" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide header on admin page
  if (pathname === "/admin") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[var(--neutral-200)]"
          : "bg-transparent"
      )}
    >
      {/* Government banner */}
      <div className="bg-[var(--neutral-800)] text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <span className="opacity-80">A Singapore Government Agency Website</span>
          <span className="text-[var(--primary-light)]">How to identify</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-[var(--primary)]">IP Grow</span>
            </div>
            <span className="text-xs text-[var(--neutral-500)] hidden sm:block">
              In collaboration with <span className="font-medium text-[var(--primary)]">IPOS</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-[var(--neutral-600)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--neutral-50)]",
                  "flex items-center gap-1"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/admin" className="text-sm text-[var(--neutral-500)] hover:text-[var(--neutral-700)]">
              <Settings className="w-4 h-4" />
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-1" />
                Dashboard
              </Button>
            </Link>
            <Link href="/assessment">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--neutral-100)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--neutral-700)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--neutral-700)]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--neutral-200)]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-[var(--neutral-700)] hover:bg-[var(--neutral-50)] rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--neutral-200)] flex flex-col gap-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

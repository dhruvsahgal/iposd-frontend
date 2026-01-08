"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, User, Settings } from "lucide-react";

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

  // Check if we're on the home page (dark hero)
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled
    ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
    : isHomePage
    ? "bg-transparent"
    : "bg-white border-b border-slate-200";

  const textColor = isScrolled || !isHomePage
    ? "text-slate-600 hover:text-teal-600"
    : "text-slate-300 hover:text-white";

  const logoColor = isScrolled || !isHomePage
    ? "text-teal-600"
    : "text-white";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", headerBg)}>
      {/* Government banner */}
      <div className={cn(
        "text-xs py-1.5 transition-colors duration-300",
        isScrolled || !isHomePage ? "bg-slate-900 text-white" : "bg-white/5 text-slate-300"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <span className="opacity-80">A Singapore Government Agency Website</span>
          <span className="text-teal-400 hover:text-teal-300 cursor-pointer">How to identify</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm transition-all",
                "bg-gradient-to-br from-teal-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-teal-500/25"
              )}>
                IP
              </div>
              <span className={cn("text-xl font-semibold transition-colors", logoColor)}>
                Grow
              </span>
            </div>
            <span className={cn(
              "text-xs hidden sm:block transition-colors",
              isScrolled || !isHomePage ? "text-slate-500" : "text-slate-400"
            )}>
              In collaboration with <span className="font-medium text-teal-500">IPOS</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all rounded-lg",
                  textColor,
                  isScrolled || !isHomePage 
                    ? "hover:bg-slate-100" 
                    : "hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/admin" 
              className={cn(
                "p-2 rounded-lg transition-all",
                isScrolled || !isHomePage
                  ? "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              )}
            >
              <Settings className="w-4 h-4" />
            </Link>
            <Link href="/dashboard">
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  isScrolled || !isHomePage
                    ? ""
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                <User className="w-4 h-4 mr-1" />
                Dashboard
              </Button>
            </Link>
            <Link href="/assessment">
              <Button 
                size="sm"
                className="bg-teal-500 hover:bg-teal-600 text-white border-0 shadow-lg shadow-teal-500/25"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled || !isHomePage
                ? "hover:bg-slate-100 text-slate-700"
                : "hover:bg-white/10 text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-4 border-t",
            isScrolled || !isHomePage
              ? "bg-white border-slate-200"
              : "bg-slate-900/95 backdrop-blur-xl border-slate-700"
          )}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg transition-colors",
                  isScrolled || !isHomePage
                    ? "text-slate-700 hover:bg-slate-50"
                    : "text-slate-300 hover:bg-white/10"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className={cn(
              "mt-4 pt-4 border-t flex flex-col gap-2",
              isScrolled || !isHomePage ? "border-slate-200" : "border-slate-700"
            )}>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Dashboard
                </Button>
              </Link>
              <Link href="/assessment" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

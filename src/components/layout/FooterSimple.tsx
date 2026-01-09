"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  Services: [
    { label: "Prior Art Analysis", href: "/assessment" },
    { label: "Expert Matching", href: "/providers" },
    { label: "IP Consultations", href: "/booking/1" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources" },
    { label: "Support", href: "/about" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Admin", href: "/admin" },
  ],
};

export function FooterSimple() {
  const pathname = usePathname();
  
  // Hide on admin page
  if (pathname === "/admin") {
    return null;
  }

  return (
    <footer className="glass border-t border-foreground/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--ip-dark-teal)]/40" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              IP Grow
            </Link>
            <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
              A Singapore Government Agency Website
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-[var(--ip-teal)] transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">© 2026 IP Grow. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm text-foreground/50 hover:text-[var(--ip-teal)] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-sm text-foreground/50 hover:text-[var(--ip-teal)] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

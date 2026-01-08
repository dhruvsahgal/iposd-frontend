"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Patent Filing", href: "/services/patent" },
    { name: "Trademark Registration", href: "/services/trademark" },
    { name: "Design Protection", href: "/services/design" },
    { name: "IP Strategy", href: "/services/strategy" },
  ],
  resources: [
    { name: "Knowledge Hub", href: "/resources" },
    { name: "IP Guides", href: "/resources/guides" },
    { name: "FAQs", href: "/faqs" },
    { name: "Events", href: "/events" },
  ],
  company: [
    { name: "About IP Grow", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Join as Provider", href: "/join" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  const pathname = usePathname();

  // Hide footer on admin and certain flow pages
  if (pathname === "/admin" || pathname === "/analyzing" || pathname === "/confirmation") {
    return null;
  }

  return (
    <footer className="bg-[var(--neutral-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold text-white">
              IP Grow
            </Link>
            <p className="mt-4 text-sm text-[var(--neutral-400)] leading-relaxed">
              An initiative by GoBusiness in collaboration with IPOS International to help
              businesses protect and grow their intellectual property.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/company/ipos-singapore"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/IPOSSingapore"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/iikipos"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-400)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--neutral-500)]">
            © {new Date().getFullYear()} IP Grow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 lg:hidden">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-[var(--neutral-500)] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

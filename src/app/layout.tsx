import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSimple } from "@/components/layout/FooterSimple";
import { FlowProvider } from "@/context/FlowContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "IP Grow | Protect Your Innovation",
  description:
    "AI-powered IP analysis and expert matching to help you navigate your intellectual property journey. From idea to protection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <FlowProvider>
          <Navigation />
          <main>{children}</main>
          <FooterSimple />
        </FlowProvider>
      </body>
    </html>
  );
}

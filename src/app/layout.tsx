import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlowProvider } from "@/context/FlowContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IP Grow | Protect Your Innovation with Confidence",
  description:
    "AI-powered IP analysis and expert matching to help you navigate your intellectual property journey. From idea to protection in days, not months.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlowProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FlowProvider>
      </body>
    </html>
  );
}

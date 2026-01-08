"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Calendar, Clock, User, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ConfirmationContent() {
  const searchParams = useSearchParams();

  const provider = searchParams.get("provider") || "Drew & Napier LLC";
  const date = searchParams.get("date") || "Jan 10";
  const time = searchParams.get("time") || "2:00 PM";
  const type = searchParams.get("type") || "Patent Filing Assessment";
  const expert = searchParams.get("expert") || "Dr. Lim Wei Ming";

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[var(--neutral-900)] mb-2">
          Consultation Booked!
        </h1>
        <p className="text-[var(--neutral-600)] mb-8">
          You&apos;ll receive a confirmation email with meeting details shortly.
        </p>

        {/* Booking Details Card */}
        <Card className="p-6 text-left mb-6">
          <h3 className="font-semibold text-[var(--neutral-900)] mb-4">Booking Details</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[var(--neutral-400)] mt-0.5" />
              <div>
                <div className="text-sm text-[var(--neutral-500)]">Provider</div>
                <div className="font-medium text-[var(--neutral-900)]">{provider}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[var(--neutral-400)] mt-0.5" />
              <div>
                <div className="text-sm text-[var(--neutral-500)]">Expert</div>
                <div className="font-medium text-[var(--neutral-900)]">{expert}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[var(--neutral-400)] mt-0.5" />
              <div>
                <div className="text-sm text-[var(--neutral-500)]">Date</div>
                <div className="font-medium text-[var(--neutral-900)]">{date}, 2026</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--neutral-400)] mt-0.5" />
              <div>
                <div className="text-sm text-[var(--neutral-500)]">Time</div>
                <div className="font-medium text-[var(--neutral-900)]">{time} SGT</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[var(--neutral-200)]">
            <div className="text-sm text-[var(--neutral-500)]">Consultation Type</div>
            <div className="font-medium text-[var(--neutral-900)]">{type}</div>
          </div>

          <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
            <div className="text-sm font-medium text-emerald-800">
              Free 45-minute consultation
            </div>
            <div className="text-xs text-emerald-600 mt-1">
              A calendar invite will be sent to your email
            </div>
          </div>
        </Card>

        {/* What's Next */}
        <Card className="p-6 text-left mb-6">
          <h3 className="font-semibold text-[var(--neutral-900)] mb-3">What&apos;s Next?</h3>
          <ul className="space-y-2 text-sm text-[var(--neutral-600)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary)] font-bold">1.</span>
              Check your email for the calendar invite
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary)] font-bold">2.</span>
              Prepare any documents you&apos;d like to discuss
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary)] font-bold">3.</span>
              Join the video call at the scheduled time
            </li>
          </ul>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/dashboard" className="block">
            <Button className="w-full" size="lg">
              Go to Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <Link href="/" className="block">
            <Button variant="ghost" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--neutral-50)] flex items-center justify-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}

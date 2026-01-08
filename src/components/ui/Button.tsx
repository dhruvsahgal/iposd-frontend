"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-ring",
          {
            "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] active:scale-[0.98]":
              variant === "primary",
            "bg-white text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--neutral-50)]":
              variant === "secondary",
            "bg-transparent text-[var(--primary)] hover:bg-[var(--neutral-100)]":
              variant === "ghost",
            "bg-transparent text-[var(--neutral-700)] border border-[var(--neutral-300)] hover:border-[var(--primary)] hover:text-[var(--primary)]":
              variant === "outline",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

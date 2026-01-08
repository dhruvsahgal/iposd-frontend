"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: "search" | "none";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon = "none", ...props }, ref) => {
    return (
      <div className="relative">
        {icon === "search" && (
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--neutral-400)]" />
        )}
        <input
          ref={ref}
          className={cn(
            "w-full h-12 px-4 bg-[var(--neutral-50)] border border-[var(--neutral-200)] rounded-xl",
            "text-[var(--neutral-800)] placeholder:text-[var(--neutral-400)]",
            "focus:outline-none focus:border-[var(--primary-light)] focus:ring-2 focus:ring-[var(--primary-light)]/20",
            "transition-all duration-200",
            icon === "search" && "pl-12",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

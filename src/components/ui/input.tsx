import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-[var(--border)] bg-white px-3 text-sm outline-none solid-motion placeholder:text-slate-400 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[rgba(75,46,131,0.12)]",
        className
      )}
      {...props}
    />
  );
}

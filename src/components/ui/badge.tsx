import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "green" | "yellow" | "red" | "blue" | "purple" | "neutral" | "gold";

const tones: Record<BadgeTone, string> = {
  green: "border-[var(--status-green)] text-[var(--status-green)]",
  yellow: "border-[var(--status-yellow)] text-[var(--status-yellow)]",
  red: "border-[var(--status-red)] text-[var(--status-red)]",
  blue: "border-[var(--status-blue)] text-[var(--status-blue)]",
  purple: "border-[var(--brand-primary)] text-[var(--brand-primary)]",
  neutral: "border-[var(--border)] text-[var(--steel)]",
  gold: "border-[#8f7d4f] text-[#6b5a31]"
};

export function Badge({
  className,
  tone = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "green" | "yellow" | "red" | "blue" | "purple" | "neutral" | "gold";

const tones: Record<BadgeTone, string> = {
  green: "border-[rgba(30,142,90,0.25)] bg-[rgba(30,142,90,0.10)] text-[var(--status-green)]",
  yellow: "border-[rgba(199,125,17,0.28)] bg-[rgba(199,125,17,0.10)] text-[var(--status-yellow)]",
  red: "border-[rgba(192,57,43,0.28)] bg-[rgba(192,57,43,0.10)] text-[var(--status-red)]",
  blue: "border-[rgba(45,108,223,0.22)] bg-[rgba(45,108,223,0.10)] text-[var(--status-blue)]",
  purple: "border-[rgba(75,46,131,0.24)] bg-[rgba(75,46,131,0.10)] text-[var(--brand-primary)]",
  neutral: "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--steel)]",
  gold: "border-[rgba(183,165,122,0.35)] bg-[rgba(183,165,122,0.18)] text-[#6b5a31]"
};

export function Badge({
  className,
  tone = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}

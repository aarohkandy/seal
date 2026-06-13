import * as ProgressPrimitive from "@radix-ui/react-progress";

export function Progress({ value }: { value: number }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <ProgressPrimitive.Root className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
      <ProgressPrimitive.Indicator
        className="solid-motion h-full rounded-full bg-[var(--brand-primary)]"
        style={{ transform: `translateX(-${100 - safe}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

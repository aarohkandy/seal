import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Requirement } from "@/lib/types";

export function NextObjectiveCard({
  objective,
  progress
}: {
  objective: Requirement | null;
  progress: { satisfied: number; total: number; percent: number };
}) {
  return (
    <Card className="border-[rgba(75,46,131,0.22)] bg-white">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md bg-[var(--brand-primary)] text-white">
            <Target className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              Next Objective
            </p>
            <CardTitle>{objective?.label ?? "All objectives are clear"}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="min-h-12 text-sm leading-6 text-slate-600">
          {objective?.why ?? "Your current phase is complete. Keep the rhythm with reports, tasks, and availability."}
        </p>
        <div className="mt-5 space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Phase progress</span>
            <span>{progress.satisfied}/{progress.total}</span>
          </div>
          <Progress value={progress.percent} />
        </div>
        {objective ? (
          <Button asChild className="mt-6">
            <Link href={objective.ctaHref}>
              {objective.ctaLabel} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

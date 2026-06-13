import Link from "next/link";
import { ArrowRight, ClipboardCheck, ScrollText } from "lucide-react";
import { NextObjectiveCard } from "@/components/app/next-objective-card";
import { ScoreCard } from "@/components/app/score-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState, getCurrentProfile } from "@/lib/demo-data";
import { getNextObjective, getProgress, getRequirements } from "@/lib/requirements";
import { getScoreBreakdown } from "@/lib/score";

export default function AppDashboardPage() {
  const profile = getCurrentProfile();
  const objective = getNextObjective(profile, demoState);
  const progress = getProgress(profile, demoState);
  const score = getScoreBreakdown(profile, demoState);
  const requirements = getRequirements(profile, demoState);
  const activeTasks = demoState.tasks.filter((task) => task.assignedTo === profile.id && task.status !== "done");
  const memberQuests = demoState.questMembers
    .filter((membership) => membership.profileId === profile.id)
    .map((membership) => demoState.quests.find((quest) => quest.id === membership.questId))
    .filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge tone="purple">Home workspace</Badge>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">
            Welcome back, {profile.handle}.
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            This is the auto-built dashboard that replaces copied dashboard sheets and the old
            diagnostic column.
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/app/admin">
            Admin console <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <NextObjectiveCard objective={objective} progress={progress} />
        <ScoreCard score={score} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your active tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-md border border-[var(--border)] p-3">
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-slate-600">{task.status.replaceAll("_", " ")} · {task.priority}</p>
                </div>
                <ClipboardCheck className="size-5 text-[var(--teal)]" aria-hidden="true" />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your quests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {memberQuests.map((quest) => (
              <div key={quest!.id} className="rounded-md bg-[var(--surface-muted)] p-3">
                <p className="font-medium">{quest!.title}</p>
                <p className="text-sm text-slate-600">{quest!.isSandbox ? "Sandbox" : "Active quest"}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is blocking you?</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {requirements
            .filter((requirement) => requirement.blocking && !requirement.satisfied)
            .map((requirement) => (
              <Link
                key={requirement.id}
                href={requirement.ctaHref}
                className="solid-motion flex items-start gap-3 rounded-md border border-[var(--border)] p-3 hover:border-[var(--brand-primary)]"
              >
                <ScrollText className="mt-0.5 size-5 text-[var(--status-yellow)]" aria-hidden="true" />
                <span>
                  <span className="block font-medium">{requirement.label}</span>
                  <span className="text-sm text-slate-600">{requirement.why}</span>
                </span>
              </Link>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}

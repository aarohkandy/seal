import { CheckCircle2, CircleDashed } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { demoState, getCurrentProfile } from "@/lib/demo-data";
import { getProgress, getRequirements } from "@/lib/requirements";

const screens = [
  ["account", "Create account", "Unique handle, profile shell, and email sign-in."],
  ["profile", "Intake profile", "Interests, skills, time, goals, and profile links."],
  ["availability", "Availability", "Repeatable meeting-ready and Discord-voice slots."],
  ["training", "Training", "Required modules marked studied or mastered."],
  ["path", "Choose your path", "Team selection, quests, and first task discovery."],
  ["go-live", "First report and go live", "Weekly report, Discord connection, and integration checks."]
];

export default function OnboardingPage() {
  const profile = getCurrentProfile();
  const requirements = getRequirements(profile, demoState);
  const progress = getProgress(profile, demoState);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <Card className="h-fit">
        <CardHeader>
          <Badge tone="purple">Guided flow</Badge>
          <CardTitle>Onboarding progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progress.percent} />
          <p className="text-sm text-slate-600">
            {progress.satisfied} of {progress.total} current-phase objectives complete.
          </p>
          <div className="space-y-2">
            {requirements
              .filter((requirement) => requirement.category === "onboarding")
              .map((requirement) => (
                <div key={requirement.id} className="flex gap-2 text-sm">
                  {requirement.satisfied ? (
                    <CheckCircle2 className="size-5 text-[var(--status-green)]" />
                  ) : (
                    <CircleDashed className="size-5 text-[var(--status-yellow)]" />
                  )}
                  <span>{requirement.label}</span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4">
        {screens.map(([id, title, copy], index) => (
          <Card id={id} key={id}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md bg-[rgba(75,46,131,0.10)] font-semibold text-[var(--brand-primary)]">
                  {index + 1}
                </span>
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-600">
              {copy} In production this card becomes the validated form for the step.
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

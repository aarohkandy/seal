import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CircuitBoard,
  Clock3,
  DatabaseZap,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";

const priorities = [
  ["Fewer steps", "Six guided screens replace row claiming, copied handles, dashboard URLs, and bot waiting."],
  ["Next Objective", "Every member sees the one action that moves them forward right now."],
  ["Progress you can trust", "Status, score, tasks, and blockers are derived from database state."],
  ["Mistakes blocked early", "Validation and permissions make invalid states hard to create."]
];

const researchAreas = [
  { title: "Sensors", copy: "Embedded boards, weak-signal detection, field instrumentation.", Icon: CircuitBoard },
  { title: "Energy", copy: "Assessment workflows, sustainability recommendations, facility data.", Icon: FlaskConical },
  { title: "Automation", copy: "Dashboards, task boards, reporting, and reliable lab operations.", Icon: DatabaseZap },
  { title: "Student growth", copy: "Quests, mentoring, weekly reports, and portfolio-quality work.", Icon: GraduationCap }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#161321] text-white">
          <Image
            src="/images/seal-lab-hero.png"
            alt="Modern university lab equipment for sensors, energy, and automation work"
            fill
            priority
            className="object-cover opacity-58"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161321] via-[#161321]/82 to-[#161321]/20" />
          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge tone="gold" className="border-white/18 bg-white/10 text-white">
                SEAL onboarding and lab operations
              </Badge>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                One solid platform for quests, teams, reports, and momentum.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                A modern replacement for spreadsheet-based onboarding that preserves the lab's RPG
                flavor while making the next action obvious, validated, and fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="gold">
                  <Link href="/app">
                    Open demo app <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border-white/20 bg-white/12 text-white hover:bg-white/18">
                  <Link href="/join">See onboarding</Link>
                </Button>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                {[
                  ["6", "screens"],
                  [demoState.teams.length.toString(), "teams"],
                  [demoState.quests.filter((quest) => quest.status === "active").length.toString(), "active quests"],
                  ["0", "copy-paste IDs"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-white/14 bg-white/10 p-4">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-1 text-white/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Badge tone="purple">The thesis</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                Keep the game skin. Remove the plumbing.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-650">
                Quests, battlestations, levels, and XP can be motivating. The old pain came from
                fragile cross-references, exact-match formulas, and diagnostics buried in sheets.
                This app turns that mess into a clear, validated workflow.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {priorities.map(([title, copy], index) => (
                <Card key={title} className="min-h-44">
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-md bg-[rgba(75,46,131,0.10)] text-[var(--brand-primary)]">
                      {index === 0 ? <Clock3 className="size-5" /> : null}
                      {index === 1 ? <Sparkles className="size-5" /> : null}
                      {index === 2 ? <BadgeCheck className="size-5" /> : null}
                      {index === 3 ? <ShieldCheck className="size-5" /> : null}
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-slate-600">{copy}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge tone="gold">Lab-ready scope</Badge>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Built for research operations, not a brochure.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {researchAreas.map(({ title, copy, Icon }) => (
                <Card key={title}>
                  <CardHeader>
                    <Icon className="size-6 text-[var(--teal)]" aria-hidden="true" />
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-slate-600">{copy}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const screens = [
  "Create account",
  "Intake profile",
  "Availability",
  "Training",
  "Choose your path",
  "First report and go live"
];

export default function JoinPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <Badge tone="purple">Join SEAL</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Six screens. No spreadsheet scavenger hunt.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            New members should know what to do next, why it matters, and what unlocks after they
            finish. The platform collapses setup into one guided path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/app/onboarding">
                Try onboarding <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
        <ol className="grid gap-3">
          {screens.map((screen, index) => (
            <li key={screen} className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
              <span className="grid size-10 place-items-center rounded-md bg-[rgba(75,46,131,0.10)] font-semibold text-[var(--brand-primary)]">
                {index + 1}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-[var(--ink)]">{screen}</p>
                <p className="text-sm text-slate-600">Validated, saved, and reflected in your next objective.</p>
              </div>
              <CheckCircle2 className="size-5 text-[var(--status-green)]" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </>
  );
}

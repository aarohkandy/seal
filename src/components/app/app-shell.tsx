import Link from "next/link";
import { BarChart3, BookOpen, CalendarDays, ClipboardList, Compass, LayoutDashboard, Shield, Users } from "lucide-react";
import { getCurrentProfile } from "@/lib/demo-data";
import { Badge } from "@/components/ui/badge";

const nav = [
  { label: "Dashboard", href: "/app", Icon: LayoutDashboard },
  { label: "Onboarding", href: "/app/onboarding", Icon: Compass },
  { label: "Quests", href: "/app/quests", Icon: ClipboardList },
  { label: "Teams", href: "/app/teams", Icon: Shield },
  { label: "Roster", href: "/app/roster", Icon: Users },
  { label: "Reports", href: "/app/reports", Icon: BarChart3 },
  { label: "Schedule", href: "/app/schedule", Icon: CalendarDays },
  { label: "Help", href: "/app/help", Icon: BookOpen }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const profile = getCurrentProfile();

  return (
    <div className="min-h-screen bg-[var(--surface-muted)]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-[var(--border)] bg-white p-4 lg:block">
        <Link href="/" className="block rounded-lg bg-[var(--brand-primary)] p-4 text-white">
          <p className="text-sm font-semibold">SEAL Command</p>
          <p className="mt-1 text-xs text-white/72">Operations platform demo</p>
        </Link>
        <nav className="mt-6 space-y-1">
          {nav.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="solid-motion flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[var(--surface-muted)] hover:text-[var(--brand-primary)]"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                Demo persona
              </p>
              <h1 className="text-base font-semibold text-[var(--ink)]">{profile.fullName}</h1>
            </div>
            <Badge tone={profile.status === "associate_integrated" ? "green" : "yellow"}>
              {profile.status.replaceAll("_", " ")}
            </Badge>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

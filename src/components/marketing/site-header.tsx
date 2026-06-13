import Link from "next/link";
import { ArrowRight, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Join", "/join"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/88 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--brand-primary)]">
          <span className="grid size-9 place-items-center rounded-md bg-[var(--brand-primary)] text-white">
            <CircuitBoard className="size-5" aria-hidden="true" />
          </span>
          <span>SEAL Platform</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="solid-motion hover:text-[var(--brand-primary)]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/app">
              Demo app <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

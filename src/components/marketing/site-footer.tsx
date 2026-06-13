import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-[var(--ink)]">SEAL Platform</p>
          <p className="mt-2 max-w-2xl">
            A production-oriented replacement for spreadsheet onboarding, lab operations, quests,
            weekly reporting, and team coordination.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/join">Join</Link>
          <Link href="/app">Demo app</Link>
        </div>
      </div>
    </footer>
  );
}

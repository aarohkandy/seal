# SEAL Platform

Production-oriented Next.js demo for a SEAL onboarding and lab operations platform. It replaces the old spreadsheet/Discord workflow with a real app: public showcase pages, a guided onboarding flow, quests, battlestations, roster, reports, schedule, help, admin surfaces, and a code-driven Next Objective engine.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn-style Radix primitives
- Supabase Auth/Postgres/Storage
- Prisma ORM
- zod + react-hook-form-ready validation
- Vitest for domain tests
- Vercel-ready API routes and cron endpoint

## Local Setup

On this Windows machine, use `npm.cmd` and `npx.cmd` from PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

For Prisma once Supabase/Postgres credentials exist:

```powershell
npx.cmd prisma generate
npx.cmd prisma migrate dev
npx.cmd prisma db seed
```

## Environment

Copy `.env.example` into `.env.local` and fill the hosted Supabase values when ready.

Required for production:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL`
- `DIRECT_URL`

Optional/feature-flagged:

- `RESEND_API_KEY`
- `CRON_SECRET`
- `NEXT_PUBLIC_ENABLE_DISCORD=false`
- `NEXT_PUBLIC_ENABLE_HELP_AI=false`

## Scripts

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run test
npm.cmd run build
```

## Old Flow to New Flow

| New screen | Replaces |
| --- | --- |
| Create account | Row claiming, handle retyping, dashboard URL copying, appscript authorization |
| Intake profile | Red-cell profile fields across sheets |
| Availability | Weekly Schedule tabs and manual meeting readiness |
| Training | Companion sheet, dropdown state, and manual 100% tracking |
| Choose your path | Group/team selection, battlestation hunt, quest joining, first task delta |
| First report and go live | GPS validator setup, report submission, Discord role reactions, hourly bot waiting |

## Data Safety

Source PDFs are stored locally in `docs/source-pdfs/` and intentionally ignored by Git because exports may contain private applicant/member data. Extracted text is generated locally in `docs/extracted/` and is also ignored by Git. Seeded app data is fictional and safe.

## Planning Docs

- `docs/website-outline.md`
- `docs/source-inventory.md`

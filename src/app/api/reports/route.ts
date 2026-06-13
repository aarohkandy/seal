import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const reportSchema = z.object({
  profileId: z.string().min(1),
  weekStart: z.string().min(1),
  answers: z.record(z.string(), z.string().min(1))
});

export async function POST(request: NextRequest) {
  const parsed = reportSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid report payload." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    status: "under_review",
    report: parsed.data
  });
}

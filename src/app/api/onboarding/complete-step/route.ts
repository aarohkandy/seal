import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  stepId: z.string().min(1),
  profileId: z.string().min(1)
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid onboarding payload." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    completedStep: parsed.data.stepId,
    next: "Requirements are recomputed from persisted data in production."
  });
}

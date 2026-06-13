import { NextRequest, NextResponse } from "next/server";
import { demoState } from "@/lib/demo-data";
import { getScoreBreakdown } from "@/lib/score";

export async function POST(request: NextRequest) {
  const expected = process.env.CRON_SECRET;
  if (expected) {
    const actual = request.headers.get("authorization")?.replace("Bearer ", "");
    if (actual !== expected) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }
  }

  const scores = demoState.profiles.map((profile) => ({
    profileId: profile.id,
    handle: profile.handle,
    score: getScoreBreakdown(profile, demoState).overall
  }));

  return NextResponse.json({
    ok: true,
    mode: "demo",
    recomputed: scores.length,
    scores
  });
}

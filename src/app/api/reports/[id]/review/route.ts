import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const reviewSchema = z.object({
  status: z.enum(["approved", "draft", "under_review", "missed"]),
  reviewerId: z.string().min(1)
});

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const parsed = reviewSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid review payload." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    reportId: id,
    status: parsed.data.status
  });
}

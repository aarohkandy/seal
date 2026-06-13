import { NextRequest, NextResponse } from "next/server";
import { demoState } from "@/lib/demo-data";
import { normalizeHandle, validateHandle } from "@/lib/handle";

export function GET(request: NextRequest) {
  const input = request.nextUrl.searchParams.get("handle") ?? "";
  const normalized = normalizeHandle(input);
  const validation = validateHandle(normalized);
  if (!validation.success) {
    return NextResponse.json({
      available: false,
      normalized,
      reason: validation.error.issues[0]?.message ?? "Invalid handle."
    });
  }

  const taken = demoState.profiles.some((profile) => profile.handle === normalized);
  return NextResponse.json({
    available: !taken,
    normalized,
    reason: taken ? "Handle is already reserved." : "Handle is available."
  });
}

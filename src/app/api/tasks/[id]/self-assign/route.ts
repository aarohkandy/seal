import { NextRequest, NextResponse } from "next/server";
import { demoState, currentDemoProfileId } from "@/lib/demo-data";

export async function POST(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const task = demoState.tasks.find((item) => item.id === id);
  if (!task) {
    return NextResponse.json({ ok: false, error: "Task not found." }, { status: 404 });
  }
  if (task.assignedTo) {
    return NextResponse.json({ ok: false, error: "Task is already assigned." }, { status: 409 });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    taskId: id,
    assignedTo: currentDemoProfileId,
    next: "Production write requires quest membership and server-side permission checks."
  });
}

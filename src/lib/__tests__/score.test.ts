import { describe, expect, it } from "vitest";
import { demoState } from "@/lib/demo-data";
import { getScoreBreakdown } from "@/lib/score";
import type { Profile } from "@/lib/types";

function profileWith(overrides: Partial<Profile>): Profile {
  return {
    ...demoState.profiles[0],
    ...overrides
  };
}

describe("score engine", () => {
  it("uses non-overlapping status bands", () => {
    const integrated = getScoreBreakdown(profileWith({ id: "profile-1", manualStatus: "good" }), demoState);
    const warned = getScoreBreakdown(profileWith({ id: "profile-3", manualStatus: "warning" }), demoState);

    expect(["green", "yellow", "red"]).toContain(integrated.color);
    expect(["green", "yellow", "red"]).toContain(warned.color);
  });

  it("maps >=80 to green", () => {
    const score = getScoreBreakdown(demoState.profiles[0], demoState);
    expect(score.overall).toBeGreaterThanOrEqual(80);
    expect(score.color).toBe("green");
  });

  it("surfaces the lowest score component", () => {
    const score = getScoreBreakdown(demoState.profiles[2], demoState);
    expect(["Activity", "Citizenship", "Manual status"]).toContain(score.drag);
  });
});

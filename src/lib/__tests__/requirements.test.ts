import { describe, expect, it } from "vitest";
import { demoState } from "@/lib/demo-data";
import { deriveMemberStatus, getNextObjective, getProgress, getRequirements } from "@/lib/requirements";

describe("requirements engine", () => {
  it("returns one actionable next objective for an applicant", () => {
    const profile = demoState.profiles.find((item) => item.status === "applicant")!;
    const objective = getNextObjective(profile, demoState);

    expect(objective).toBeTruthy();
    expect(objective?.category).toBe("onboarding");
    expect(objective?.ctaHref).toMatch(/^\/app/);
  });

  it("keeps progress derived from live state", () => {
    const profile = demoState.profiles.find((item) => item.handle === "atlas")!;
    const progress = getProgress(profile, demoState);

    expect(progress.total).toBeGreaterThan(0);
    expect(progress.satisfied).toBeLessThanOrEqual(progress.total);
  });

  it("derives status from blocking requirements", () => {
    const profile = demoState.profiles.find((item) => item.handle === "atlas")!;
    expect(deriveMemberStatus(profile, demoState)).toBe("associate_unintegrated");
  });

  it("marks blocking requirements explicitly", () => {
    const profile = demoState.profiles.find((item) => item.handle === "atlas")!;
    const blockers = getRequirements(profile, demoState).filter(
      (requirement) => requirement.blocking && !requirement.satisfied
    );

    expect(blockers.length).toBeGreaterThan(0);
  });
});

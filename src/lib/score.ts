import type { DemoState, Profile, ScoreBreakdown } from "@/lib/types";

function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function activityScore(profile: Profile, state: DemoState) {
  const questCount = state.questMembers.filter((item) => item.profileId === profile.id).length;
  const hasTwoQuests = questCount >= 2 ? 40 : questCount * 20;
  const activeTask = state.tasks.some(
    (task) => task.assignedTo === profile.id && !["done", "blocked"].includes(task.status)
  )
    ? 35
    : 0;
  const doneTasks = state.tasks.filter((task) => task.assignedTo === profile.id && task.status === "done")
    .length;
  return clamp(hasTwoQuests + activeTask + Math.min(25, doneTasks * 12));
}

function citizenshipScore(profile: Profile, state: DemoState) {
  const avatar = profile.avatarUrl ? 20 : 0;
  const availability = state.availability.filter((item) => item.profileId === profile.id).length >= 2 ? 20 : 0;
  const requiredTraining = state.trainingModules.filter((module) => module.isRequired);
  const trainingComplete =
    requiredTraining.length > 0 &&
    requiredTraining.every((module) => {
      const progress = state.trainingProgress.find(
        (item) => item.profileId === profile.id && item.moduleId === module.id
      );
      return progress?.status === "studied" || progress?.status === "mastered";
    });
  const training = trainingComplete ? 30 : 0;
  const report = state.weeklyReports.some(
    (item) => item.profileId === profile.id && ["under_review", "approved"].includes(item.status)
  )
    ? 30
    : 0;
  return clamp(avatar + availability + training + report);
}

function manualScore(profile: Profile) {
  if (profile.manualStatus === "alert") return 20;
  if (profile.manualStatus === "warning") return 60;
  return 100;
}

function colorFor(overall: number): ScoreBreakdown["color"] {
  if (overall >= 80) return "green";
  if (overall >= 60) return "yellow";
  return "red";
}

function levelFor(overall: number) {
  if (overall >= 90) return "Level 5 - Inspire";
  if (overall >= 80) return "Level 4 - On Track";
  if (overall >= 60) return "Level 3 - Stabilize";
  if (overall >= 40) return "Level 2 - Wake Up";
  return "Level 1 - Action Required";
}

export function getScoreBreakdown(profile: Profile, state: DemoState): ScoreBreakdown {
  const activity = activityScore(profile, state);
  const citizenship = citizenshipScore(profile, state);
  const manual = manualScore(profile);
  const overall = clamp(activity * 0.4 + citizenship * 0.4 + manual * 0.2);
  const lowest = [
    ["Activity", activity],
    ["Citizenship", citizenship],
    ["Manual status", manual]
  ].sort((a, b) => Number(a[1]) - Number(b[1]))[0][0] as string;

  return {
    activity,
    citizenship,
    manual,
    overall,
    color: colorFor(overall),
    level: levelFor(overall),
    drag: lowest
  };
}

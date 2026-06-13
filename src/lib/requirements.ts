import type { DemoState, Profile, Requirement, RequirementCategory } from "@/lib/types";

function phaseFor(profile: Profile): RequirementCategory {
  if (profile.status === "applicant") return "onboarding";
  if (profile.status === "associate_unintegrated") return "integration";
  return "ongoing";
}

function requiredTrainingComplete(profile: Profile, state: DemoState) {
  const required = state.trainingModules.filter((module) => module.isRequired);
  if (required.length === 0) return true;
  return required.every((module) => {
    const progress = state.trainingProgress.find(
      (item) => item.profileId === profile.id && item.moduleId === module.id
    );
    return progress?.status === "studied" || progress?.status === "mastered";
  });
}

function availabilitySlots(profile: Profile, state: DemoState) {
  return state.availability.filter((slot) => slot.profileId === profile.id);
}

function questMembershipCount(profile: Profile, state: DemoState) {
  return state.questMembers.filter((membership) => membership.profileId === profile.id).length;
}

function hasActiveTask(profile: Profile, state: DemoState) {
  return state.tasks.some(
    (task) => task.assignedTo === profile.id && !["done", "blocked"].includes(task.status)
  );
}

function firstReportSubmitted(profile: Profile, state: DemoState) {
  return state.weeklyReports.some(
    (report) =>
      report.profileId === profile.id && ["under_review", "approved"].includes(report.status)
  );
}

function joinedTeam(profile: Profile, state: DemoState) {
  return state.teamMembers.some((membership) => membership.profileId === profile.id);
}

function currentWeekReportOk(profile: Profile, state: DemoState) {
  return state.weeklyReports.some(
    (report) => report.profileId === profile.id && ["under_review", "approved"].includes(report.status)
  );
}

export function getRequirements(profile: Profile, state: DemoState): Requirement[] {
  const onboarding: Requirement[] = [
    {
      id: "account-created",
      label: "Create your account and reserve a unique handle",
      category: "onboarding",
      satisfied: Boolean(profile.handle && profile.email),
      ctaLabel: "Review account",
      ctaHref: "/app/onboarding#account",
      why: "One account replaces row claiming, dashboard copying, and handle retyping.",
      blocking: true
    },
    {
      id: "avatar-uploaded",
      label: "Upload a clear avatar",
      category: "onboarding",
      satisfied: Boolean(profile.avatarUrl),
      ctaLabel: "Add avatar",
      ctaHref: "/app/onboarding#profile",
      why: "Members need a recognizable profile before joining active work.",
      blocking: true
    },
    {
      id: "intake-profile",
      label: "Complete your intake profile",
      category: "onboarding",
      satisfied:
        profile.interests.length >= 2 &&
        profile.skills.length >= 2 &&
        Boolean(profile.commitmentHours) &&
        Boolean(profile.goal),
      ctaLabel: "Finish intake",
      ctaHref: "/app/onboarding#intake",
      why: "Your interests, skills, time, and goals power project matching.",
      blocking: true
    },
    {
      id: "availability-filled",
      label: "Add at least two meeting-ready times",
      category: "onboarding",
      satisfied: availabilitySlots(profile, state).length >= 2,
      ctaLabel: "Set availability",
      ctaHref: "/app/onboarding#availability",
      why: "Scheduling should be automatic, not a spreadsheet scavenger hunt.",
      blocking: true
    },
    {
      id: "training-complete",
      label: "Study every required training module",
      category: "onboarding",
      satisfied: requiredTrainingComplete(profile, state),
      ctaLabel: "Open training",
      ctaHref: "/app/onboarding#training",
      why: "Training unlocks safe lab participation.",
      blocking: true
    },
    {
      id: "team-joined",
      label: "Join your first team",
      category: "onboarding",
      satisfied: joinedTeam(profile, state),
      ctaLabel: "Choose a team",
      ctaHref: "/app/onboarding#path",
      why: "Your team determines your battlestation, lead, and first project path.",
      blocking: true
    }
  ];

  const integration: Requirement[] = [
    {
      id: "two-quests",
      label: "Join your second quest",
      category: "integration",
      satisfied: questMembershipCount(profile, state) >= 2,
      ctaLabel: "Browse quests",
      ctaHref: "/app/quests",
      why: "Two quests gives you enough surface area to find real momentum.",
      blocking: true
    },
    {
      id: "active-task",
      label: "Self-assign one active task",
      category: "integration",
      satisfied: hasActiveTask(profile, state),
      ctaLabel: "Find a task",
      ctaHref: "/app/quests",
      why: "This replaces the old delta signal with a real assigned task.",
      blocking: true
    },
    {
      id: "first-report",
      label: "Submit your first weekly report",
      category: "integration",
      satisfied: firstReportSubmitted(profile, state),
      ctaLabel: "Write report",
      ctaHref: "/app/reports",
      why: "A short report gives your lead enough context to support you.",
      blocking: true
    },
    {
      id: "discord-connected",
      label: "Connect Discord",
      category: "integration",
      satisfied: profile.discordConnected,
      ctaLabel: "Connect Discord",
      ctaHref: "/app/onboarding#go-live",
      why: "Role assignment should become automatic once integrations are enabled.",
      blocking: true
    },
    {
      id: "help-question",
      label: "Read one Help Center answer",
      category: "integration",
      satisfied: profile.status === "associate_integrated",
      ctaLabel: "Open help",
      ctaHref: "/app/help",
      why: "This optional culture step teaches members where to self-serve answers.",
      blocking: false
    }
  ];

  const ongoing: Requirement[] = [
    {
      id: "weekly-report-current",
      label: "Keep this week's report current",
      category: "ongoing",
      satisfied: currentWeekReportOk(profile, state),
      ctaLabel: "Update report",
      ctaHref: "/app/reports",
      why: "Weekly reports keep leaders from chasing status by hand.",
      blocking: true
    },
    {
      id: "ongoing-active-task",
      label: "Keep one active task moving",
      category: "ongoing",
      satisfied: hasActiveTask(profile, state),
      ctaLabel: "Open task board",
      ctaHref: "/app/quests",
      why: "Active work is the clearest signal that membership is real.",
      blocking: true
    },
    {
      id: "availability-current",
      label: "Refresh your availability",
      category: "ongoing",
      satisfied: availabilitySlots(profile, state).length >= 2,
      ctaLabel: "Edit schedule",
      ctaHref: "/app/schedule",
      why: "The scheduler can only help if your times are current.",
      blocking: false
    }
  ];

  return [...onboarding, ...integration, ...ongoing];
}

export function getCurrentPhaseRequirements(profile: Profile, state: DemoState) {
  const phase = phaseFor(profile);
  return getRequirements(profile, state).filter((requirement) => requirement.category === phase);
}

export function getNextObjective(profile: Profile, state: DemoState) {
  const phaseRequirements = getCurrentPhaseRequirements(profile, state);
  return (
    phaseRequirements.find((requirement) => !requirement.satisfied) ??
    getRequirements(profile, state).find((requirement) => !requirement.satisfied) ??
    null
  );
}

export function getProgress(profile: Profile, state: DemoState) {
  const phaseRequirements = getCurrentPhaseRequirements(profile, state);
  const satisfied = phaseRequirements.filter((requirement) => requirement.satisfied).length;
  const total = phaseRequirements.length || 1;
  return {
    satisfied,
    total,
    percent: Math.round((satisfied / total) * 100)
  };
}

export function deriveMemberStatus(profile: Profile, state: DemoState) {
  const onboardingDone = getRequirements(profile, state)
    .filter((requirement) => requirement.category === "onboarding" && requirement.blocking)
    .every((requirement) => requirement.satisfied);
  const integrationDone = getRequirements(profile, state)
    .filter((requirement) => requirement.category === "integration" && requirement.blocking)
    .every((requirement) => requirement.satisfied);

  if (!onboardingDone) return "applicant";
  if (!integrationDone) return "associate_unintegrated";
  return "associate_integrated";
}

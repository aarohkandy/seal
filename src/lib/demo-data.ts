import type { DemoState } from "@/lib/types";

export const demoState: DemoState = {
  profiles: [
    {
      id: "profile-1",
      handle: "nova",
      fullName: "Nova Patel",
      email: "nova.demo@example.com",
      avatarUrl: "/images/avatar-nova.svg",
      status: "associate_integrated",
      systemRole: "lead",
      bio: "Embedded systems lead focused on low-power sensing and calm, useful tools.",
      interests: ["embedded systems", "signal processing", "field sensors"],
      skills: ["PCB design", "Python", "Arduino", "technical writing"],
      commitmentHours: 12,
      creditsRequested: 2,
      goal: "Ship field-ready sensing prototypes and mentor new builders.",
      manualStatus: "good",
      discordConnected: true,
      joinedAt: "2026-04-08",
      onboardingCompletedAt: "2026-04-10",
      lastCheckInAt: "2026-06-11"
    },
    {
      id: "profile-2",
      handle: "atlas",
      fullName: "Atlas Morgan",
      email: "atlas.demo@example.com",
      avatarUrl: "/images/avatar-atlas.svg",
      status: "associate_unintegrated",
      systemRole: "member",
      bio: "Energy systems student building a portfolio through applied sustainability work.",
      interests: ["energy efficiency", "manufacturing", "data visualization"],
      skills: ["Excel modeling", "Python", "site assessment"],
      commitmentHours: 10,
      goal: "Join two active quests and contribute to an energy assessment report.",
      manualStatus: "good",
      discordConnected: false,
      joinedAt: "2026-06-08",
      onboardingCompletedAt: "2026-06-11",
      lastCheckInAt: "2026-06-11"
    },
    {
      id: "profile-3",
      handle: "sol",
      fullName: "Sol Rivera",
      email: "sol.demo@example.com",
      status: "applicant",
      systemRole: "member",
      interests: ["software", "design systems"],
      skills: ["React", "Figma"],
      commitmentHours: 8,
      goal: "Find a first software quest that helps the lab run better.",
      manualStatus: "warning",
      discordConnected: false,
      joinedAt: "2026-06-12"
    },
    {
      id: "profile-4",
      handle: "mira",
      fullName: "Mira Chen",
      email: "mira.demo@example.com",
      avatarUrl: "/images/avatar-mira.svg",
      status: "associate_integrated",
      systemRole: "director",
      bio: "Director view demo account.",
      interests: ["automation", "research commercialization"],
      skills: ["mentorship", "grant strategy", "systems design"],
      commitmentHours: 15,
      manualStatus: "good",
      discordConnected: true,
      joinedAt: "2026-01-10",
      onboardingCompletedAt: "2026-01-12",
      lastCheckInAt: "2026-06-12"
    }
  ],
  teams: [
    {
      id: "team-itac",
      slug: "itac",
      name: "ITAC",
      description:
        "Industrial Training and Assessment Center work for energy efficiency, sustainability, and practical manufacturing recommendations.",
      hasCustomOnboarding: false,
      isActive: true,
      leadId: "profile-2"
    },
    {
      id: "team-plasma",
      slug: "plasma",
      name: "Plasma",
      description:
        "High-voltage plasma technology for medical devices, filters, avionics, satellites, and advanced instrumentation.",
      hasCustomOnboarding: false,
      isActive: true,
      leadId: "profile-1"
    },
    {
      id: "team-biztech",
      slug: "biztech",
      name: "Biz/Tech",
      description:
        "Spin-off planning, proposal writing, scholarship coordination, marketing, and cross-lab strategy.",
      hasCustomOnboarding: false,
      isActive: true,
      leadId: "profile-4"
    },
    {
      id: "team-embedded",
      slug: "embedded",
      name: "Embedded",
      description:
        "Embedded instrumentation, sensor systems, weak-signal detection, and signal processing for real environments.",
      hasCustomOnboarding: true,
      isActive: true,
      leadId: "profile-1"
    },
    {
      id: "team-sudoku",
      slug: "sudoku",
      name: "Sudoku",
      description: "DevOps for the lab: web apps, scripts, dashboards, automations, media, and internal tooling.",
      hasCustomOnboarding: false,
      isActive: true,
      leadId: "profile-3"
    },
    {
      id: "team-teaching",
      slug: "teaching",
      name: "Teaching",
      description: "Teaching tools and techniques used in UW courses and shared learning workflows.",
      hasCustomOnboarding: false,
      isActive: true,
      leadId: "profile-4"
    }
  ],
  teamMembers: [
    { teamId: "team-embedded", profileId: "profile-1", role: "lead" },
    { teamId: "team-itac", profileId: "profile-2", role: "member" },
    { teamId: "team-sudoku", profileId: "profile-3", role: "member" },
    { teamId: "team-biztech", profileId: "profile-4", role: "lead" }
  ],
  quests: [
    {
      id: "quest-sensor-grid",
      slug: "sensor-grid",
      title: "Field Sensor Grid",
      description: "Build a low-power sensor grid that can be deployed, logged, reviewed, and repaired by students.",
      teamId: "team-embedded",
      status: "active",
      leadId: "profile-1",
      reviewerId: "profile-1",
      slackChannelUrl: "https://example.com/slack/sensor-grid",
      isSandbox: false,
      outputs: ["prototype", "technical report"]
    },
    {
      id: "quest-energy-map",
      slug: "energy-map",
      title: "Energy Assessment Map",
      description: "Turn facility assessment notes into a visual map of practical energy-saving opportunities.",
      teamId: "team-itac",
      status: "active",
      leadId: "profile-2",
      reviewerId: "profile-4",
      slackChannelUrl: "https://example.com/slack/energy-map",
      isSandbox: false,
      outputs: ["dashboard", "partner report"]
    },
    {
      id: "quest-lab-ops",
      slug: "lab-ops-starter",
      title: "Lab Ops Starter Sandbox",
      description: "Starter tasks for new members: docs cleanup, simple UI polish, and small automation fixes.",
      teamId: "team-sudoku",
      status: "active",
      leadId: "profile-3",
      reviewerId: "profile-4",
      slackChannelUrl: "https://example.com/slack/lab-ops",
      isSandbox: true,
      outputs: ["internal tool", "documentation"]
    },
    {
      id: "quest-plasma-archive",
      slug: "plasma-archive",
      title: "Plasma Device Archive",
      description: "A paused archive of earlier plasma device research notes and components.",
      teamId: "team-plasma",
      status: "frozen",
      isSandbox: false,
      outputs: ["archive"]
    }
  ],
  questMembers: [
    { questId: "quest-sensor-grid", profileId: "profile-1", role: "lead" },
    { questId: "quest-energy-map", profileId: "profile-2", role: "member" },
    { questId: "quest-lab-ops", profileId: "profile-2", role: "member" },
    { questId: "quest-lab-ops", profileId: "profile-3", role: "member" }
  ],
  tasks: [
    {
      id: "task-1",
      questId: "quest-sensor-grid",
      title: "Calibrate sensor logging board",
      description: "Confirm timestamp accuracy and record a short calibration note.",
      status: "in_progress",
      priority: "high",
      assignedTo: "profile-1",
      assignedBy: "profile-1",
      orderIndex: 1
    },
    {
      id: "task-2",
      questId: "quest-energy-map",
      title: "Draft site assessment summary",
      status: "todo",
      priority: "high",
      assignedTo: "profile-2",
      assignedBy: "profile-4",
      orderIndex: 1
    },
    {
      id: "task-3",
      questId: "quest-lab-ops",
      title: "Rewrite onboarding FAQ intro",
      status: "todo",
      priority: "normal",
      orderIndex: 1
    },
    {
      id: "task-4",
      questId: "quest-lab-ops",
      title: "Check empty-state copy on dashboard",
      status: "todo",
      priority: "low",
      orderIndex: 2
    }
  ],
  trainingModules: [
    {
      id: "training-1",
      slug: "lab-basics",
      title: "Lab basics",
      description: "How SEAL teams, quests, and reports fit together.",
      orderIndex: 1,
      isRequired: true
    },
    {
      id: "training-2",
      slug: "safety-ethics",
      title: "Safety and research ethics",
      description: "The minimum standard for responsible research work.",
      orderIndex: 2,
      isRequired: true
    },
    {
      id: "training-3",
      slug: "research-tools",
      title: "Research tool fluency",
      description: "How to use modern tools without hiding uncertainty or copying private data.",
      orderIndex: 3,
      isRequired: true
    },
    {
      id: "training-4",
      slug: "technical-writing",
      title: "Technical writing",
      description: "Document progress so another student can continue the work.",
      orderIndex: 4,
      isRequired: false
    }
  ],
  trainingProgress: [
    { profileId: "profile-1", moduleId: "training-1", status: "mastered" },
    { profileId: "profile-1", moduleId: "training-2", status: "studied" },
    { profileId: "profile-1", moduleId: "training-3", status: "studied" },
    { profileId: "profile-2", moduleId: "training-1", status: "studied" },
    { profileId: "profile-2", moduleId: "training-2", status: "studied" },
    { profileId: "profile-2", moduleId: "training-3", status: "studied" },
    { profileId: "profile-3", moduleId: "training-1", status: "studied" }
  ],
  availability: [
    { profileId: "profile-1", dayOfWeek: 1, slotStart: "15:00", type: "meeting_ready" },
    { profileId: "profile-1", dayOfWeek: 3, slotStart: "16:00", type: "discord_voice" },
    { profileId: "profile-2", dayOfWeek: 2, slotStart: "14:00", type: "meeting_ready" },
    { profileId: "profile-2", dayOfWeek: 4, slotStart: "10:00", type: "discord_voice" },
    { profileId: "profile-4", dayOfWeek: 2, slotStart: "14:00", type: "meeting_ready" }
  ],
  weeklyReports: [
    {
      id: "report-1",
      profileId: "profile-1",
      weekStart: "2026-06-08",
      status: "approved",
      validatorId: "profile-4",
      submittedAt: "2026-06-10",
      reviewedAt: "2026-06-11",
      answers: {
        progress: "Finished calibration draft and mentored two new members.",
        blockers: "Need final enclosure dimensions.",
        next: "Run field test on the prototype."
      }
    },
    {
      id: "report-2",
      profileId: "profile-2",
      weekStart: "2026-06-08",
      status: "under_review",
      validatorId: "profile-4",
      submittedAt: "2026-06-11",
      answers: {
        progress: "Joined energy map and lab ops starter quests.",
        blockers: "Need first review on assessment summary.",
        next: "Complete first assigned task."
      }
    }
  ],
  helpArticles: [
    {
      id: "help-1",
      slug: "what-is-a-quest",
      title: "What is a quest?",
      category: "Getting started",
      body: "A quest is a project with a clear owner, task board, and output. Join two to become integrated."
    },
    {
      id: "help-2",
      slug: "weekly-report",
      title: "How weekly reports work",
      category: "Reporting",
      body: "A weekly report is a short reflection that keeps your team lead aligned without a meeting pileup."
    },
    {
      id: "help-3",
      slug: "active-task",
      title: "Why you need an active task",
      category: "Tasks",
      body: "An active task proves your quest membership has turned into real work."
    }
  ]
};

export const currentDemoProfileId = "profile-2";

export function getCurrentProfile() {
  return demoState.profiles.find((profile) => profile.id === currentDemoProfileId) ?? demoState.profiles[0];
}

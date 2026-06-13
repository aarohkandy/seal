export type MemberStatus =
  | "applicant"
  | "associate_unintegrated"
  | "associate_integrated"
  | "inactive";

export type SystemRole = "member" | "lead" | "director";
export type ManualStatus = "good" | "warning" | "alert";
export type QuestStatus = "active" | "frozen" | "archived";
export type TaskStatus = "todo" | "in_progress" | "blocked" | "in_review" | "done";
export type TaskPriority = "low" | "normal" | "high";
export type TrainingStatus = "not_started" | "studied" | "mastered";
export type ReportStatus = "draft" | "under_review" | "approved" | "missed";

export type Profile = {
  id: string;
  handle: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  status: MemberStatus;
  systemRole: SystemRole;
  bio?: string;
  interests: string[];
  skills: string[];
  commitmentHours?: number;
  creditsRequested?: number;
  goal?: string;
  manualStatus: ManualStatus;
  discordConnected: boolean;
  joinedAt?: string;
  onboardingCompletedAt?: string;
  lastCheckInAt?: string;
};

export type Team = {
  id: string;
  slug: string;
  name: string;
  description: string;
  hasCustomOnboarding: boolean;
  isActive: boolean;
  leadId?: string;
};

export type TeamMember = {
  teamId: string;
  profileId: string;
  role: "member" | "lead";
};

export type Quest = {
  id: string;
  slug: string;
  title: string;
  description: string;
  teamId: string;
  status: QuestStatus;
  leadId?: string;
  reviewerId?: string;
  slackChannelUrl?: string;
  isSandbox: boolean;
  outputs: string[];
};

export type QuestMember = {
  questId: string;
  profileId: string;
  role: "member" | "lead" | "reviewer";
};

export type Task = {
  id: string;
  questId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo?: string;
  assignedBy?: string;
  orderIndex: number;
  completedAt?: string;
};

export type TrainingModule = {
  id: string;
  slug: string;
  title: string;
  description: string;
  orderIndex: number;
  isRequired: boolean;
};

export type TrainingProgress = {
  profileId: string;
  moduleId: string;
  status: TrainingStatus;
};

export type Availability = {
  profileId: string;
  dayOfWeek: number;
  slotStart: string;
  type: "discord_voice" | "meeting_ready";
};

export type WeeklyReport = {
  id: string;
  profileId: string;
  weekStart: string;
  status: ReportStatus;
  answers: Record<string, string>;
  validatorId?: string;
  submittedAt?: string;
  reviewedAt?: string;
};

export type HelpArticle = {
  id: string;
  slug: string;
  title: string;
  body: string;
  category: string;
};

export type DemoState = {
  profiles: Profile[];
  teams: Team[];
  teamMembers: TeamMember[];
  quests: Quest[];
  questMembers: QuestMember[];
  tasks: Task[];
  trainingModules: TrainingModule[];
  trainingProgress: TrainingProgress[];
  availability: Availability[];
  weeklyReports: WeeklyReport[];
  helpArticles: HelpArticle[];
};

export type RequirementCategory = "onboarding" | "integration" | "ongoing";

export type Requirement = {
  id: string;
  label: string;
  category: RequirementCategory;
  satisfied: boolean;
  ctaLabel: string;
  ctaHref: string;
  why?: string;
  blocking: boolean;
};

export type ScoreBreakdown = {
  activity: number;
  citizenship: number;
  manual: number;
  overall: number;
  color: "green" | "yellow" | "red" | "blue";
  level: string;
  drag: string;
};

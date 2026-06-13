import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const teams = [
    ["itac", "ITAC", "Industrial Training and Assessment Center work for energy efficiency and sustainability.", false],
    ["plasma", "Plasma", "High-voltage plasma technology for medical devices, filters, avionics, and satellites.", false],
    ["biztech", "Biz/Tech", "Spin-offs, proposal writing, scholarships, marketing, and cross-lab strategy.", false],
    ["embedded", "Embedded", "Embedded instrumentation, sensor systems, weak-signal detection, and signal processing.", true],
    ["sudoku", "Sudoku", "DevOps for web apps, scripts, dashboards, automations, media, and internal tooling.", false],
    ["teaching", "Teaching", "Teaching tools and techniques used in UW courses and shared learning workflows.", false]
  ] as const;

  for (const [slug, name, description, hasCustomOnboarding] of teams) {
    await prisma.team.upsert({
      where: { slug },
      update: { name, description, hasCustomOnboarding },
      create: { slug, name, description, hasCustomOnboarding }
    });
  }

  const modules = [
    ["lab-basics", "Lab basics", "How teams, quests, and reports fit together.", 1, true],
    ["safety-ethics", "Safety and research ethics", "The minimum standard for responsible research work.", 2, true],
    ["ai-tools", "AI tool fluency", "Use AI assistants without hiding uncertainty or copying private data.", 3, true],
    ["technical-writing", "Technical writing", "Document progress so another student can continue the work.", 4, false]
  ] as const;

  for (const [slug, title, description, orderIndex, isRequired] of modules) {
    await prisma.trainingModule.upsert({
      where: { slug },
      update: { title, description, orderIndex, isRequired },
      create: { slug, title, description, orderIndex, isRequired }
    });
  }

  const helpArticles = [
    ["what-is-a-quest", "What is a quest?", "Getting started", "A quest is a project with a clear owner, task board, and output."],
    ["weekly-report", "How weekly reports work", "Reporting", "A weekly report is a short reflection that keeps your team lead aligned."],
    ["active-task", "Why you need an active task", "Tasks", "An active task proves your quest membership has turned into real work."]
  ] as const;

  for (const [slug, title, category, body] of helpArticles) {
    await prisma.helpArticle.upsert({
      where: { slug },
      update: { title, category, body },
      create: { slug, title, category, body }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

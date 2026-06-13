import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";

export default function ProjectsPage() {
  const active = demoState.quests.filter((quest) => quest.status !== "frozen");
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge tone="gold">Project catalog</Badge>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Quests that look like real work.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              This public view is intentionally sanitized. The real app keeps member status, private
              links, and task ownership behind permissions.
            </p>
          </div>
          <Button asChild>
            <Link href="/app/quests">
              Open quest board <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {active.map((quest) => {
            const team = demoState.teams.find((item) => item.id === quest.teamId);
            return (
              <Card key={quest.id}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone={quest.isSandbox ? "blue" : "purple"}>
                      {quest.isSandbox ? "Sandbox" : team?.name}
                    </Badge>
                    {quest.outputs.map((output) => (
                      <Badge key={output} tone="neutral">
                        {output}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{quest.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-slate-600">
                  {quest.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

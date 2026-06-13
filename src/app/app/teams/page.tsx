import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Badge tone="gold">Battlestations</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Teams</h2>
        <p className="mt-2 text-slate-600">Each team owns quests, members, meetings, and default weekly-report validation.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {demoState.teams.map((team) => {
          const questCount = demoState.quests.filter((quest) => quest.teamId === team.id && quest.status === "active").length;
          const members = demoState.teamMembers.filter((item) => item.teamId === team.id).length;
          return (
            <Card key={team.id}>
              <CardHeader>
                <div className="flex gap-2">
                  <Badge tone="purple">{questCount} quests</Badge>
                  <Badge tone={team.hasCustomOnboarding ? "blue" : "neutral"}>
                    {team.hasCustomOnboarding ? "custom onboarding" : `${members} members`}
                  </Badge>
                </div>
                <CardTitle>{team.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-600">{team.description}</CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

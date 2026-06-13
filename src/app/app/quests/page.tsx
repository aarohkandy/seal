import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState, getCurrentProfile } from "@/lib/demo-data";

export default function QuestsPage() {
  const profile = getCurrentProfile();
  const memberships = new Set(
    demoState.questMembers.filter((item) => item.profileId === profile.id).map((item) => item.questId)
  );
  const quests = demoState.quests.filter((quest) => quest.status !== "frozen");

  return (
    <div className="space-y-6">
      <div>
        <Badge tone="purple">Quest board</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Active quests</h2>
        <p className="mt-2 text-slate-600">Frozen quests stay hidden from join lists. Sandbox quests are beginner-friendly.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {quests.map((quest) => {
          const team = demoState.teams.find((item) => item.id === quest.teamId);
          const tasks = demoState.tasks.filter((task) => task.questId === quest.id);
          return (
            <Card key={quest.id}>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge tone={quest.isSandbox ? "blue" : "purple"}>{quest.isSandbox ? "Sandbox" : team?.name}</Badge>
                  <Badge tone={memberships.has(quest.id) ? "green" : "neutral"}>
                    {memberships.has(quest.id) ? "Joined" : "Open"}
                  </Badge>
                </div>
                <CardTitle>{quest.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-slate-600">{quest.description}</p>
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between rounded-md bg-[var(--surface-muted)] p-3 text-sm">
                      <span>{task.title}</span>
                      <Badge tone={task.assignedTo ? "green" : "yellow"}>{task.assignedTo ? "assigned" : "open"}</Badge>
                    </div>
                  ))}
                </div>
                <Button variant={memberships.has(quest.id) ? "secondary" : "primary"}>
                  {memberships.has(quest.id) ? "Open battlestation" : "Join quest"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

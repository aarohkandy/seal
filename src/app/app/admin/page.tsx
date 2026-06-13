import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  ["Teams", "Create teams, set leads, mark custom onboarding."],
  ["Quests", "Create quests, freeze inactive work, manage task boards."],
  ["Members", "Set manual status and review blocked members."],
  ["Reports", "Approve weekly reports and route validators."],
  ["Config", "Tune score weights, templates, and feature flags."]
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <Badge tone="red">Lead console</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Admin and lead tools</h2>
        <p className="mt-2 text-slate-600">Server-side permissions will enforce these scopes in production.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, copy]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-600">{copy}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState, getCurrentProfile } from "@/lib/demo-data";

export default function ReportsPage() {
  const profile = getCurrentProfile();
  const reports = demoState.weeklyReports.filter((report) => report.profileId === profile.id);
  return (
    <div className="space-y-6">
      <div>
        <Badge tone="gold">Weekly report</Badge>
        <h2 className="mt-3 text-3xl font-semibold">GPS reports, without the GPS sheet</h2>
        <p className="mt-2 text-slate-600">Reports are template-driven and route to the right validator automatically.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current template</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {["What moved forward?", "What is blocked?", "What is next?"].map((question) => (
            <div key={question} className="rounded-md bg-[var(--surface-muted)] p-3 text-sm font-medium">
              {question}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <Badge tone={report.status === "approved" ? "green" : "yellow"}>{report.status.replaceAll("_", " ")}</Badge>
              <CardTitle>Week of {report.weekStart}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              {Object.entries(report.answers).map(([key, value]) => (
                <p key={key}><span className="font-semibold text-[var(--ink)]">{key}:</span> {value}</p>
              ))}
              <Button variant="secondary">Review details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

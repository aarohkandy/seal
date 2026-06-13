import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";
import { getScoreBreakdown } from "@/lib/score";

export default function RosterPage() {
  return (
    <div className="space-y-6">
      <div>
        <Badge tone="purple">Roster</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Member status without private rows</h2>
        <p className="mt-2 text-slate-600">Public-safe member view: handles, roles, status, and score only.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Demo members</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="border-b border-[var(--border)] text-slate-600">
              <tr>
                <th className="py-3">Handle</th>
                <th>Status</th>
                <th>Role</th>
                <th>Score</th>
                <th>Manual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {demoState.profiles.map((profile) => {
                const score = getScoreBreakdown(profile, demoState);
                return (
                  <tr key={profile.id}>
                    <td className="py-3 font-semibold">{profile.handle}</td>
                    <td>{profile.status.replaceAll("_", " ")}</td>
                    <td>{profile.systemRole}</td>
                    <td><Badge tone={score.color}>{score.overall}%</Badge></td>
                    <td>{profile.manualStatus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ScoreBreakdown } from "@/lib/types";

export function ScoreCard({ score }: { score: ScoreBreakdown }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Score and level</CardTitle>
          <Badge tone={score.color}>{score.overall}%</Badge>
        </div>
        <p className="text-sm text-slate-600">{score.level}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          ["Activity", score.activity],
          ["Citizenship", score.citizenship],
          ["Manual status", score.manual]
        ].map(([label, value]) => (
          <div key={label as string} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{label}</span>
              <span className="font-semibold">{value}%</span>
            </div>
            <Progress value={value as number} />
          </div>
        ))}
        <p className="rounded-md bg-[var(--surface-muted)] p-3 text-sm text-slate-600">
          Biggest drag: <span className="font-semibold text-[var(--ink)]">{score.drag}</span>.
        </p>
      </CardContent>
    </Card>
  );
}

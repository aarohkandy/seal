import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <Badge tone="gold">Help center</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Universal How-To, rewritten as articles</h2>
        <p className="mt-2 text-slate-600">Searchable markdown articles first. Guided Q&A stays feature-flagged for later.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {demoState.helpArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <Badge tone="neutral">{article.category}</Badge>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-600">{article.body}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

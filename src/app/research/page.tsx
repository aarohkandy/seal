import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  ["Energy and sustainability", "Industrial assessment, energy efficiency, facility data, and practical recommendations."],
  ["Embedded sensing", "PCB design, microcontrollers, signal processing, and field instrumentation."],
  ["Automation and software", "Dashboards, data pipelines, task systems, AI-supported workflows, and lab tooling."],
  ["Plasma and aerospace", "High-voltage systems, propulsion concepts, aviation design, and advanced sensing."],
  ["Health and environment", "PPG, water, air quality, safety, and biomedical or environmental instrumentation."],
  ["Commercialization", "Grants, business plans, patents, papers, partner discovery, and public communication."]
];

export default function ResearchPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge tone="purple">Research</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Research areas students can understand and act on.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          The public site explains SEAL by work area. The internal app maps those areas into teams,
          quests, tasks, reports, and the next objective for each member.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(([title, copy]) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-600">{copy}</CardContent>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

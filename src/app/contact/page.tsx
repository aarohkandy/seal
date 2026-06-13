import { Mail, MapPin, MessageSquare } from "lucide-react";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contacts = [
  { title: "Student applications", copy: "Request a project match and start onboarding.", Icon: MessageSquare },
  { title: "Partner inquiries", copy: "Discuss research, assessment, or sponsorship work.", Icon: Mail },
  { title: "Lab affiliation", copy: "University research lab operations, meetings, and facilities.", Icon: MapPin }
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Badge tone="gold">Contact</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Clear paths for students, collaborators, and sponsors.
        </h1>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contacts.map(({ title, copy, Icon }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-6 text-[var(--brand-primary)]" aria-hidden="true" />
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

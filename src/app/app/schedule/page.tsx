import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { demoState } from "@/lib/demo-data";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function SchedulePage() {
  const grouped = days.map((day, index) => ({
    day,
    slots: demoState.availability.filter((slot) => slot.dayOfWeek === index)
  }));

  return (
    <div className="space-y-6">
      <div>
        <Badge tone="purple">Schedule</Badge>
        <h2 className="mt-3 text-3xl font-semibold">Availability grid</h2>
        <p className="mt-2 text-slate-600">A repeatable When2Meet-style model powered by saved slots.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-7">
        {grouped.map(({ day, slots }) => (
          <Card key={day}>
            <CardHeader>
              <CardTitle className="text-base">{day}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {slots.length ? (
                slots.map((slot) => (
                  <Badge key={`${slot.profileId}-${slot.slotStart}-${slot.type}`} tone={slot.type === "meeting_ready" ? "green" : "blue"}>
                    {slot.slotStart}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-slate-500">No slots</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Suggested overlap</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          Tuesday at 14:00 has the strongest demo overlap across the ITAC and director personas.
        </CardContent>
      </Card>
    </div>
  );
}

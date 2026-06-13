-- Initial RLS policy notes for the SEAL platform.
-- Apply and tighten these in Supabase after the first migration is created.

alter table profiles enable row level security;
alter table teams enable row level security;
alter table team_members enable row level security;
alter table quests enable row level security;
alter table quest_members enable row level security;
alter table tasks enable row level security;
alter table training_modules enable row level security;
alter table training_progress enable row level security;
alter table availability enable row level security;
alter table weekly_reports enable row level security;
alter table help_articles enable row level security;

create policy "members read own profile"
on profiles for select
using (auth.uid() = id);

create policy "members update own profile"
on profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "members read active teams"
on teams for select
using (is_active = true);

create policy "members read active quests"
on quests for select
using (status = 'active');

create policy "members manage own training"
on training_progress for all
using (auth.uid() = profile_id)
with check (auth.uid() = profile_id);

create policy "members manage own availability"
on availability for all
using (auth.uid() = profile_id)
with check (auth.uid() = profile_id);

create policy "members manage own reports"
on weekly_reports for all
using (auth.uid() = profile_id)
with check (auth.uid() = profile_id);

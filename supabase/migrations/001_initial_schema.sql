-- ============================================================
-- Wohlu: Initial Schema
-- ============================================================
-- Run via: supabase db push  (or paste into Supabase SQL editor)
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- waitlist
-- Anonymous inserts allowed; only service role can read.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  reason     text,
  source     text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Anyone (including anonymous) may insert their own email
create policy "waitlist: allow anonymous insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- ─────────────────────────────────────────────────────────────
-- profiles
-- Extends auth.users 1-to-1. Created on sign-up via trigger.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id                   uuid primary key references auth.users (id) on delete cascade,
  display_name         text,
  onboarding_completed boolean not null default false,
  created_at           timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles: owner can read"
  on public.profiles
  for select
  using (id = auth.uid());

create policy "profiles: owner can insert"
  on public.profiles
  for insert
  with check (id = auth.uid());

create policy "profiles: owner can update"
  on public.profiles
  for update
  using (id = auth.uid());

-- Auto-create profile row when a new user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────────────────────────
-- lesson_progress
-- One row per user per lesson, upserted on completion.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.lesson_progress (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  lesson_id    text not null,
  completed_at timestamptz not null default now(),
  created_at   timestamptz not null default now(),
  unique (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

create policy "lesson_progress: owner access"
  on public.lesson_progress
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ─────────────────────────────────────────────────────────────
-- phrase_progress
-- SM-2 spaced-repetition state per user per phrase.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.phrase_progress (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  phrase_id        text not null,
  easiness_factor  real not null default 2.5,
  interval_days    integer not null default 1,
  repetitions      integer not null default 0,
  next_review      timestamptz not null default now(),
  last_reviewed    timestamptz,
  created_at       timestamptz not null default now(),
  unique (user_id, phrase_id)
);

alter table public.phrase_progress enable row level security;

create policy "phrase_progress: owner access"
  on public.phrase_progress
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ─────────────────────────────────────────────────────────────
-- streaks
-- One row per user, upserted daily.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.streaks (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null unique references auth.users (id) on delete cascade,
  current_streak     integer not null default 0,
  longest_streak     integer not null default 0,
  last_activity_date date,
  created_at         timestamptz not null default now()
);

alter table public.streaks enable row level security;

create policy "streaks: owner access"
  on public.streaks
  for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

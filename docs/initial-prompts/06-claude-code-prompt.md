# Wohlu — Claude Code Initialization Prompt

**Purpose:** Copy and paste this prompt into Claude Code to initialize the Wohlu project with full context, multi-agent team configuration, and skills from an existing project.

---

## The Prompt

```
I'm building Wohlu — a Progressive Web App that teaches Fuuta Jallon Pular (a West African language) to children of Guinean-American families. Parents guide their kids through 10-minute audio-first lessons with cultural context.

## Project Context

All product discovery documents are in `docs/product/`. Read these files FIRST before writing any code:

1. `docs/product/01-product-vision.md` — North star: who we're building for, why, and how we're different
2. `docs/product/02-user-persona-parent-child.md` — Dual persona: Ibrahima (parent/buyer) and Aissatou (child/learner), their goals, behaviors, and the parent-child co-learning model
3. `docs/product/03-user-story-map.md` — Complete build blueprint: every feature scoped with MVP/V1.1/Later priorities, user stories with acceptance criteria, content structure, and technical decisions
4. `docs/product/04-mvp-scope-metrics.md` — What's in/out for MVP, tech stack (React + TypeScript + Tailwind + Supabase PWA), data model, JSON content structure, build sequence, validation plan, and success metrics

There's also a Peace Corps Pular language guide PDF in `docs/reference/` — this is the linguistic reference for Fuuta Jallon Pular content. Use it to understand the language structure but don't modify it.

## Scan Existing Project for Skills

Before starting the build, scan the following project directory for reusable skills, patterns, configurations, and conventions:

```
C:\workspace\sources\restaurant-order-visualizer-006-2026\.claude
```

Look for:
- CLAUDE.md or any project instructions file
- MCP server configurations
- Custom commands or workflows  
- Code style conventions, linting rules, or formatting preferences
- Any reusable patterns for React components, Supabase integration, PWA setup, or Tailwind configuration
- Testing patterns or CI/CD configurations

Adopt any relevant conventions and patterns from that project for Wohlu. If you find useful MCP configurations, propose which ones apply to this project.

## Multi-Agent Team Setup

I want to leverage Claude Code's multi-agent capabilities. Set up the following agent team structure using subagents for parallel work:

### Agent Roles

**Lead Agent (You — Orchestrator)**
- Owns the overall architecture and build sequence
- Delegates tasks to subagents
- Reviews and integrates subagent outputs
- Makes architectural decisions
- Maintains consistency across the codebase

**Subagent 1: Frontend Builder**
- Task scope: React components, pages, layouts, Tailwind styling
- Builds: Lesson viewer, practice exercises, progress displays, navigation, onboarding flow
- Follows the component structure defined in the story map
- Uses design tokens from the design system (warm earth tones, rounded elements, large touch targets)

**Subagent 2: Backend & Data**
- Task scope: Supabase setup, auth flow, database schema, API calls, data persistence
- Builds: User authentication (email + password), progress tracking tables, streak logic, spaced repetition state sync
- Implements Row Level Security policies
- Handles offline sync strategy

**Subagent 3: Content & PWA**
- Task scope: Content JSON structure, audio integration, service worker, offline caching
- Builds: Lesson content loader, audio player component, SM-2 spaced repetition algorithm (client-side), PWA manifest, service worker with Workbox
- Creates content template JSONs that I'll fill with real Pular phrases and audio

### Orchestration Rules
- Start with the Lead Agent reading all docs and creating the project scaffold
- Then delegate to subagents in parallel where possible
- Frontend Builder and Backend Agent can work simultaneously on their domains
- Content & PWA agent starts after the base scaffold exists
- All agents follow the same code conventions discovered from the scanned project
- Lead Agent does final integration and resolves any conflicts

## Tech Stack (Confirmed in docs)

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS (warm earth tone design system)
- **Backend:** Supabase (Auth, PostgreSQL, Storage)
- **Build tool:** Vite
- **PWA:** Workbox for service worker
- **Hosting:** Vercel (frontend) + Supabase (backend)
- **Analytics:** Plausible (privacy-respecting)
- **Package manager:** pnpm preferred

## Build Sequence (from docs/product/04-mvp-scope-metrics.md)

Follow this order:

### Phase 1: Foundation
1. Project scaffold — React + TypeScript + Tailwind + Vite + Supabase client setup
2. Design system — Tailwind config with Wohlu color palette, typography, component classes
3. Folder structure:
   ```
   src/
   ├── components/        # Reusable UI components
   │   ├── ui/            # Buttons, cards, inputs, audio player
   │   ├── lesson/        # Lesson viewer, phrase card, situation card
   │   ├── practice/      # Exercise components (matching, feedback)
   │   ├── progress/      # Stars, streaks, progress bars, dashboard
   │   └── layout/        # Navigation, page layouts
   ├── pages/             # Route-level pages
   │   ├── Landing.tsx
   │   ├── Onboarding.tsx
   │   ├── Home.tsx
   │   ├── Module.tsx
   │   ├── Lesson.tsx
   │   ├── Review.tsx
   │   └── Dashboard.tsx
   ├── content/           # JSON lesson files and audio references
   │   ├── modules/
   │   │   ├── greetings/
   │   │   └── family/
   │   └── schema.ts      # TypeScript types for content
   ├── lib/               # Utilities
   │   ├── supabase.ts    # Supabase client
   │   ├── auth.ts        # Auth helpers
   │   ├── srs.ts         # Spaced repetition (SM-2)
   │   └── progress.ts    # Progress tracking logic
   ├── hooks/             # Custom React hooks
   ├── context/           # React context providers (auth, progress)
   └── types/             # Shared TypeScript types
   docs/
   ├── product/           # Product discovery docs (read-only reference)
   └── reference/         # Peace Corps Pular guide (read-only reference)
   public/
   ├── audio/             # MP3 audio files (placeholder structure)
   ├── illustrations/     # Lesson illustrations
   └── manifest.json      # PWA manifest
   ```

### Phase 2: Landing Page (Deploy Immediately)
4. Build the landing page — see docs for exact content and layout
5. Waitlist email capture — can use Supabase table or simple form endpoint
6. Deploy to Vercel — this goes live while we build the rest

### Phase 3: Core Product
7. Auth flow — parent signup/login with email + password, privacy commitment screen
8. Content structure — TypeScript types and JSON schema for modules, lessons, phrases; create template content with placeholder Pular text I'll replace
9. Lesson viewer — situation card → phrase cards with audio player → cultural context
10. Practice exercises — multiple-choice matching with warm feedback
11. Spaced repetition — SM-2 algorithm, client-side, synced to Supabase

### Phase 4: Progress & Polish
12. Progress tracking — stars on completion, streak counter, parent dashboard
13. Onboarding flow — 3-screen welcome experience
14. Session continuity — resume, gap detection, welcoming return
15. PWA setup — service worker, offline caching of lessons/audio, install prompt

## Critical Product Requirements

These are NON-NEGOTIABLE (from the persona and privacy docs):

- **NO camera permission requests** — never, in any feature
- **NO microphone requirement** — all learning is listen-and-tap
- **NO child data collection** — parent account only
- **NO ads or third-party trackers** — privacy-respecting analytics only
- **NO social features** — no chat, forums, or UGC
- **NO external links** — nothing navigates outside the app
- **Large touch targets** — minimum 48px, children ages 5-12 will use this
- **Audio-first** — every phrase has a play button; audio feedback on interactions
- **Offline capable** — lessons and audio must work without internet
- **Warm, encouraging tone** — incorrect answers are NEVER punishing

## Content Template

Create template JSON files for Module 1 (Greetings & Respect) and Module 2 (Family & Home) with this structure. Use placeholder content that I'll replace with real Pular phrases and audio:

```json
{
  "module_id": "greetings",
  "module_title": "Greetings & Respect",
  "module_description": "Learn the greetings that connect you to your family and show respect to elders.",
  "lessons": [
    {
      "lesson_id": "greetings-01",
      "title": "Basic Greetings",
      "situation_description": "You arrive at a family gathering. How do you greet people?",
      "illustration": "greetings-01.png",
      "phrases": [
        {
          "id": "gr-001",
          "pular": "A jaraama",
          "english": "I greet you",
          "audio": "gr-001.mp3",
          "cultural_note": "Used with peers and younger people. For elders, use 'On jaraama' — the respectful plural form."
        }
      ],
      "exercises": [
        {
          "type": "match_phrase_to_meaning",
          "phrase_ids": ["gr-001", "gr-002", "gr-003", "gr-004"],
          "instruction": "Match the Pular greeting to its English meaning"
        },
        {
          "type": "match_audio_to_illustration",
          "phrase_ids": ["gr-001", "gr-002"],
          "instruction": "Listen and tap the matching picture"
        }
      ],
      "tindol": null
    }
  ]
}
```

## Supabase Schema

Create these tables (from docs/product/04-mvp-scope-metrics.md):

```sql
-- Users (handled by Supabase Auth, extended with profile)
create table profiles (
  id uuid references auth.users primary key,
  email text,
  created_at timestamptz default now()
);

-- Lesson progress
create table progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  lesson_id text not null,
  completed boolean default false,
  completed_at timestamptz,
  unique(user_id, lesson_id)
);

-- Phrase-level spaced repetition
create table phrase_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  phrase_id text not null,
  ease_factor real default 2.5,
  interval_days integer default 0,
  next_review date default current_date,
  repetitions integer default 0,
  last_reviewed timestamptz,
  unique(user_id, phrase_id)
);

-- Streaks
create table streaks (
  user_id uuid references profiles(id) on delete cascade primary key,
  current_streak integer default 0,
  longest_streak integer default 0,
  last_activity_date date
);

-- Waitlist (for landing page)
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  reason text,
  source text,
  created_at timestamptz default now()
);

-- Enable RLS on all tables
alter table profiles enable row level security;
alter table progress enable row level security;
alter table phrase_progress enable row level security;
alter table streaks enable row level security;

-- RLS policies: users can only access their own data
create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can read own progress" on progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on progress for update using (auth.uid() = user_id);
-- (similar policies for phrase_progress and streaks)
```

## First Action

1. Read ALL documents in `docs/product/` thoroughly
2. Scan the project at `C:\workspace\sources\restaurant-order-visualizer-006-2026\.claude` for reusable patterns
3. Present your understanding of the project and proposed architecture
4. Set up the multi-agent team structure
5. Create the project scaffold
6. Build and deploy the landing page FIRST (this needs to go live immediately for waitlist validation)

Let's build Wohlu. Jaraama!
```

---

## Notes for Ablo

### Before running this prompt:

1. **Create the folder structure** for your docs:
   ```
   your-project/
   ├── docs/
   │   ├── product/
   │   │   ├── 01-product-vision.md
   │   │   ├── 02-user-persona-parent-child.md
   │   │   ├── 03-user-story-map.md
   │   │   └── 04-mvp-scope-metrics.md
   │   └── reference/
   │       └── peace-corps-pulaar-manuel-2015.pdf
   ```

2. **Copy all 4 product docs** from this chat into the `docs/product/` folder

3. **Copy the Peace Corps PDF** into `docs/reference/`

4. **Make sure the restaurant-order-visualizer project exists** at the specified path — Claude Code will scan it for conventions

### About Multi-Agent Teams in Claude Code:

- Claude Code's multi-agent capability uses `/agents` or subagent spawning to parallelize work
- The prompt asks Claude Code to set up the team structure — it will determine the best way to implement this based on current capabilities
- If multi-agent isn't available in your version, Claude Code will execute the same work sequentially — the prompt degrades gracefully
- The key benefit is parallel frontend/backend development and clear separation of concerns

### After Claude Code starts building:

1. **Week 1 priority:** Get the landing page deployed and start distributing
2. **Week 1-2 parallel:** Create your phrase spreadsheets and start recording audio
3. **Week 3:** Drop real content into the template JSONs Claude Code creates
4. **Week 4-5:** Integration, testing, soft launch to waitlist

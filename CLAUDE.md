# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Wohlu** is a PWA that teaches conversational Fouta Jallon Pular to children (ages 5–12) of Guinean-American families through parent-guided, 10-minute audio-first lessons with cultural context.

## Commands

- `pnpm dev` — Start dev server (Vite)
- `pnpm build` — Production build
- `pnpm typecheck` — TypeScript validation (`tsc --noEmit`)
- `pnpm lint` — ESLint
- `pnpm test` — Run tests (`vitest run`)
- `pnpm test:watch` — Watch mode (`vitest`)

## Tech Stack

- React 18+ / TypeScript (strict) / Tailwind CSS / Vite
- Supabase (Auth + PostgreSQL + Storage for audio files)
- Workbox (service worker / offline caching)
- Plausible Analytics (privacy-respecting, no cookies)
- Vercel (hosting)

## Architecture

```
Supabase Auth → App shell → Lesson content (JSON) → Audio player
                                                        ↓
                              Practice exercises ← Phrase cards
                                     ↓
                              SM-2 spaced repetition (client-side)
                                     ↓
                              Progress sync → Supabase PostgreSQL

Offline: Service worker caches app shell + lesson JSON + audio MP3s
```

**Lesson flow**: Situation card (1–2 min) → Listen & learn (3–4 min) → Practice exercises (3–4 min) → Cultural moment / tindol (1–2 min) → Progress indicator

## Design System

- **Primary**: `#ec5b13` (warm orange)
- **Background light**: `#f8f6f6`
- **Background dark**: `#221610`
- **Font**: Public Sans
- **Style**: Warm earth tones, rounded elements (`rounded-2xl`), soft shadows
- **Touch targets**: 48px minimum
- **Tone**: Warm, encouraging, never punishing — celebrate effort over correctness

Design mockups live in `design-ux/` (HTML + PNG for each screen).

## Non-Negotiable Product Constraints

These rules must never be violated in any feature or code change:

1. **No camera access** — never request camera permissions
2. **No microphone requirement** — speech recognition is a future feature, never a blocker
3. **No child data collection** — parent is sole account holder; no child PII stored
4. **No ads or tracking** — Plausible is the only analytics (cookieless, privacy-first)
5. **No social features** — no chat, comments, leaderboards, or user-to-user interaction
6. **No external links** in child-facing screens
7. **Offline-capable** — core lesson flow must work without network
8. **Warm encouraging tone** — never use negative feedback, scores, grades, or time pressure

## Content Structure

```
Module → Lesson → Phrases → Exercises
```

- Content lives in `src/content/modules/` as JSON files
- TypeScript types in `src/content/schema.ts`
- Each phrase: Pular text, English translation, audio file ref, cultural note
- Each lesson ends with a *tindol* (Pular proverb) for cultural context
- Spaced repetition: simplified SM-2 algorithm, client-side state synced to Supabase
- MVP scope: 2 modules ("Greetings & Respect", "Family & Home"), ~80 phrases total

## Project Conventions

### TypeScript

- Strict mode, no `any` (use `unknown`); `interface` for object shapes, `type` for unions
- Components < 150 lines; extract sub-components or hooks when they grow
- One hook = one concern; clean up timers/subscriptions in useEffect cleanup
- Guard clauses with early returns; max 3 params per function
- No barrel exports; direct imports from specific modules

### Constants

- `lib/constants.ts` — shared constants
- `lib/constants-client.ts` — client-safe values (Supabase anon key, Plausible domain)
- `lib/constants-server.ts` — server-only values (Supabase service role key)

### Branching & Commits

- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`
- Branch strategy: `main` (auto-deploy) → feature branches

### Content Authorship

- All Pular content must use Fouta Djallon dialect with authentic pronunciation
- Follow Peace Corps Pular guide orthography conventions
- AI assists with workflow, never with core linguistic content

## Key Files

Product docs: `docs/product/` | Design: `design-ux/` | Schema (once scaffolded): `src/content/schema.ts` | Auth: `src/lib/supabase.ts` | Content: `src/content/modules/` | Constants: `src/lib/constants.ts`

Use `Glob` / `Grep` to discover files dynamically rather than memorizing paths.

## Context Compaction

When `/compact` runs or context is compressed, **preserve**:
- Commands, Architecture diagram, Tech Stack, Design System tokens
- Non-Negotiable Product Constraints (full list)
- Content Structure and Project Conventions

**Discard** (re-discoverable via Glob/Grep or docs/):
- Individual file paths beyond Key Files
- Detailed persona descriptions and validation metrics
- Build order steps (see `docs/product/mvp-scope.md`)

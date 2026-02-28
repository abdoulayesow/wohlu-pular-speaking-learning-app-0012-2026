# Wohlu — MVP Scope & Success Metrics

**Document Version:** 1.0
**Date:** February 25, 2026
**Author:** Ablo (Product Owner)
**Status:** Draft — Pending Founder Review
**Predecessors:** 01 — Product Vision, 02 — User Persona (Parent + Child), 03 — User Story Map

---

## Purpose

This document defines what is in the MVP, what is out, the technical decisions required to build, the validation plan, and the metrics that tell us whether Wohlu is working. This is the final document before we transition to Claude Code.

---

## MVP Definition

### What "MVP" Means for Wohlu

The MVP is not a prototype or a demo. It is the **smallest complete product that delivers real value to a parent-child pair trying to learn Pular together.** After using the MVP, Aissatou should be able to greet her grandmother properly on a phone call, and Ibrahima should feel that something finally works.

### The MVP Promise

> *"In 12 lessons across two modules, your child will learn the essential Pular greetings, family vocabulary, and mealtime phrases — with correct Fuuta Jallon pronunciation and the cultural context that makes it meaningful. You'll learn together in 10-minute sessions."*

---

## Scope: What's In

### Core Product

| Component | Description | Details |
|---|---|---|
| **Landing page** | Waitlist capture targeting Guinean parents in the US | Email signup, "why interested?" field, WhatsApp share, privacy commitment, founder credibility section |
| **Parent account** | Email + password registration | Parent is sole account holder; privacy statement during signup; no child data collected |
| **Onboarding** | Welcome experience for parent and child | Co-learning guide (3 screens), child welcome with Pular greeting audio, warm illustration |
| **Module 1: Greetings & Respect** | 6 lessons, ~40 phrases | Core greetings (A jaraama, Tanna alaa?, time-of-day greetings), elder respect, goodbyes, polite words, cultural review with tindol |
| **Module 2: Family & Home** | 6 lessons, ~40 phrases | Family members, extended family, asking about family, mealtime phrases, numbers 1-10, cultural review with tindol |
| **Lesson experience** | Situation card → Listen → Practice → Cultural moment | Illustrated scene card, native audio (tap to play/replay), English meaning, Pular in Latin script, cultural context note |
| **Practice exercises** | In-lesson active recall | Multiple-choice matching (phrase to meaning), audio-to-illustration matching, encouraging feedback for correct/incorrect |
| **Spaced repetition** | Daily review of learned phrases | SM-2 algorithm (simplified); review session pulling from all completed lessons; 5-10 phrases per review |
| **Progress tracking (child)** | Visual accomplishment indicators | Stars on lesson completion, module progress bar, streak counter |
| **Progress tracking (parent)** | Simple dashboard | Total lessons completed, current streak, last session date, module completion status |
| **Session continuity** | Resume and return | "Continue" button on home screen, auto-save mid-lesson, welcoming return screen after 7+ day gap, quick review option |

### Privacy & Security (Non-Negotiable)

| Requirement | Implementation |
|---|---|
| No camera access | App never requests camera permission; no photo/video/AR features |
| No microphone required | No mic-dependent features in MVP; all learning is listen-and-tap |
| No child data collection | Parent account only; no child name, age, or personal info stored |
| No ads | Zero advertising in the product |
| No social features | No chat, forums, UGC, or contact with other users |
| No external links | No links that navigate outside the app |
| No third-party trackers | Privacy-respecting analytics only (Plausible or equivalent) |
| Offline capability | Lessons and audio downloadable for offline use |

### Content Requirements

| Content Type | Quantity | Format | Status |
|---|---|---|---|
| Pular phrases with English translation | ~80 phrases | Structured JSON | To be created by founder from Peace Corps guide + native knowledge |
| Native audio recordings | ~80 audio files | MP3, clear quality, quiet environment | To be recorded by founder + wife |
| Cultural context notes | ~80 short texts | 1-2 sentences each, English | To be written by founder |
| Tindol (proverbs) | 2 (one per module review lesson) | Text + audio + English meaning | To be selected and recorded by founder |
| Situation illustrations | 12 (one per lesson) | PNG/SVG | AI-generated placeholders for MVP; custom art later |
| Pronunciation guide | 1 reference page | In-app screen | Adapted from Peace Corps guide's pronunciation section |

---

## Scope: What's Out

| Feature | Why It's Out | When It Comes In |
|---|---|---|
| Speech recognition / pronunciation scoring | Requires microphone; adds complexity; privacy concern | V1.1 — optional, parent-enabled |
| Adlam script module | Different audience need; adds learning barrier for MVP target | Phase 2 |
| Multi-child profiles | Adds account complexity; single-child flow validates first | V1.1 |
| Push notifications / reminders | Not essential for validation; adds mobile permission friction | V1.1 |
| Google/Apple sign-in | Email + password sufficient for MVP; OAuth adds integration work | V1.1 |
| Drag-and-drop exercises | Multiple-choice validates the learning mechanic first | V1.1 |
| Card matching games | Gamification depth deferred; basic stars/streaks sufficient | V1.1 |
| Cultural badges with names | Simple stars first; named badges add content/design work | V1.1 |
| Additional modules (Food, Ceremonies, Daily Activities) | 2 modules validates the model; more content after validation | V1.2 |
| Reconnector mode (self-directed adult) | Parent + Child is primary segment; adult mode layers on same content | Phase 2 |
| Community features | Forums, practice partners add moderation burden | Phase 3 |
| Live tutoring marketplace | Requires tutor recruitment, scheduling, payments | Phase 3 |
| Additional languages (Susu, Mandinka, Wolof) | Validate Pular depth-first before expanding | Phase 3+ |
| Native app store listing (iOS/Android) | PWA validates without App Store approval process | Post-validation |

---

## Technical Decisions

### Architecture

| Decision | Choice | Rationale |
|---|---|---|
| **Platform** | Progressive Web App (PWA) | Fastest to build and deploy; no App Store approval needed; works on all devices via browser; "Add to Home Screen" gives app-like experience; can wrap with Capacitor for native stores later |
| **Frontend framework** | React + TypeScript | Strong ecosystem; component-based architecture maps to lesson structure; Claude Code works well with React; Tailwind CSS for styling |
| **Backend / Auth** | Supabase | Provides auth (email + password), PostgreSQL database, and file storage in one platform; generous free tier covers MVP traffic; Row Level Security for data protection |
| **Audio hosting** | Supabase Storage or bundled with PWA | Audio files are small (~80 files × ~30KB each ≈ 2.4MB total); can bundle with app for offline; CDN fallback for streaming |
| **Spaced repetition** | Client-side SM-2 (simplified) | Well-documented algorithm; runs locally; state synced to Supabase for persistence across devices |
| **Content format** | JSON files organized by module/lesson | Easy to author, version, and expand; each lesson is a JSON object with phrases, audio refs, context notes, and exercise definitions |
| **Illustrations** | AI-generated (DALL-E or Midjourney) for MVP | Placeholder quality sufficient for validation; custom Guinean artist commissioned post-validation |
| **Analytics** | Plausible Analytics (self-hosted or cloud) | Privacy-respecting; no cookies; no personal data; GDPR compliant; gives page views, session duration, and basic engagement |
| **Hosting** | Vercel (frontend) + Supabase (backend) | Both have free tiers; Vercel handles PWA deployment with automatic HTTPS; global CDN for fast loading |
| **Service worker** | Workbox | Enables offline support; caches lesson content and audio; background sync for progress data |

### Data Model (Simplified)

```
users
  - id (UUID)
  - email
  - created_at

progress
  - user_id (FK)
  - lesson_id
  - completed (boolean)
  - completed_at (timestamp)

phrase_progress
  - user_id (FK)
  - phrase_id
  - ease_factor (SM-2)
  - interval (days)
  - next_review (date)
  - repetitions (count)

streaks
  - user_id (FK)
  - current_streak (int)
  - longest_streak (int)
  - last_activity_date (date)
```

### Content JSON Structure (Per Lesson)

```json
{
  "module_id": "greetings",
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
      "cultural_note": "Used with peers and younger people. For elders, use 'On jaraama' — the respectful plural form.",
      "category": "greeting"
    }
  ],
  "exercises": [
    {
      "type": "match_phrase_to_meaning",
      "phrase_ids": ["gr-001", "gr-002", "gr-003", "gr-004"],
      "instruction": "Match the Pular greeting to its English meaning"
    }
  ],
  "tindol": null,
  "next_lesson": "greetings-02"
}
```

---

## Validation Plan

### Phase 1: Landing Page (Weeks 1-2)

**Objective:** Validate demand before writing production code.

**What we build:** A single-page landing site with waitlist capture.

**Landing page elements:**

| Element | Content |
|---|---|
| **Headline** | "Teach your children the Pular your parents taught you." |
| **Subheadline** | "Wohlu is the first app for Guinean families who want their kids to speak Fuuta Jallon Pular — with real pronunciation, cultural context, and lessons you do together." |
| **Value props** | 3 short bullets: Native Fuuta Jallon pronunciation · Built for families to learn together · No camera, no ads, no child data |
| **Founder credibility** | "Built by Ablo — native Pular speaker from Guinea, father, and product builder." |
| **Email capture** | "Join the waitlist — be the first to try Wohlu" |
| **Optional field** | "Why do you want your family to learn Pular?" (free text) |
| **Optional field** | "How did you hear about us?" (dropdown: WhatsApp, friend/family, mosque, social media, other) |
| **Privacy note** | "We will never share your email. Wohlu is built with family privacy as a core value." |

**Distribution channels:**

| Channel | Action | Owner |
|---|---|---|
| Guinean WhatsApp groups | Share landing page link with personal message | Ablo |
| Mosque communities (Houston, NYC, DMV, Atlanta) | Share with community leaders; ask them to forward | Ablo |
| Guinean-American Facebook groups | Post with personal story | Ablo |
| Personal network | Direct messages to Guinean parents Ablo knows | Ablo |
| Instagram/TikTok | Short video of Ablo speaking Pular, explaining what he's building | Ablo |
| Guinean cultural organizations | Email to leadership | Ablo |

**Success thresholds:**

| Signal | Green (Proceed) | Yellow (Investigate) | Red (Rethink) |
|---|---|---|---|
| Total signups in 21 days | 200+ | 75-199 | Under 75 |
| "Why interested?" response rate | >30% complete the field | 15-30% | Under 15% |
| Referral rate (heard from friend/WhatsApp) | >40% of signups | 20-40% | Under 20% |
| Qualitative signal | Responses mention children, family, grandparents, cultural loss | Mixed signals | Responses don't match our persona |

**What we learn:**

- Is there real demand from parents (not just polite interest)?
- Which distribution channels work best?
- What language do parents use to describe their pain? (This shapes all future marketing)
- Are signups concentrated in specific cities? (Informs where to focus community efforts)

### Phase 2: MVP Build (Weeks 2-5, parallel with validation)

**Objective:** Build the functional product while waitlist data comes in.

**Why build in parallel with validation?** The content production (recording 80 phrases) takes time regardless. Start recording immediately. If validation fails, the content is still reusable. If validation succeeds, you're not starting from zero on the build.

**Build sequence:**

| Week | Deliverable |
|---|---|
| Week 2 | Content: Complete phrase list for Module 1 (40 phrases in spreadsheet with Pular, English, context notes). Tech: Project scaffold — React + TypeScript + Supabase setup, auth flow, basic layout. Landing page live and distributing. |
| Week 3 | Content: Record Module 1 audio (40 files). Complete phrase list for Module 2. Tech: Lesson viewer component (situation card, audio player, phrase display, cultural context). Basic navigation between lessons. |
| Week 4 | Content: Record Module 2 audio. Generate placeholder illustrations. Tech: Practice exercises (multiple-choice matching). Spaced repetition engine. Progress tracking (stars, streaks, parent dashboard). |
| Week 5 | Tech: Onboarding flow. Session continuity (resume, return after gap). PWA configuration (service worker, offline). Bug fixes and polish. Content integration and QA. |

### Phase 3: Soft Launch (Week 6)

**Objective:** Get the MVP into real families' hands and observe.

**Launch to:** Waitlist signups (email with access link).

**What we observe:**

| Behavior | How We Track |
|---|---|
| Do families complete the onboarding? | Plausible: page flow completion |
| Do they finish Lesson 1? | Supabase: progress records |
| Do they come back for Lesson 2? | Supabase: session timestamps |
| How many lessons per week? | Supabase: weekly activity aggregation |
| Do they complete Module 1? | Supabase: module completion flag |
| Do they start Module 2? | Supabase: cross-module progression |
| Day 7 retention | Supabase: users active on day 7 after first session |
| Day 30 retention | Supabase: users active on day 30 |

**Qualitative feedback:**

- Email survey to active users after 7 days: "How is Wohlu working for your family? What would you change?"
- Direct WhatsApp conversations with 5-10 families (Ablo's network)
- Monitor for unsolicited sharing (families telling other families)

---

## Success Metrics

### North Star Metric

**Lessons completed per family per week.**

This is the single number that tells you if the product is working. It combines engagement (are they using it?), value (are they progressing?), and habit (are they consistent?). Target: **3+ lessons per family per week.**

### Primary Metrics

| Metric | Target | Measurement | Timeframe |
|---|---|---|---|
| **Families completing onboarding** | >80% of signups who access the app | Supabase progress data | First 30 days |
| **Lesson 1 completion rate** | >70% of onboarded families | Supabase progress data | First 30 days |
| **Module 1 completion rate** | >40% of onboarded families | Supabase progress data | First 60 days |
| **Day 7 retention** | >30% of families return after day 7 | Supabase session data | Ongoing |
| **Day 30 retention** | >15% of families still active at day 30 | Supabase session data | Ongoing |
| **Lessons per active family per week** | 3+ | Supabase aggregation | Ongoing |

### Secondary Metrics

| Metric | Target | Measurement |
|---|---|---|
| Phrases reviewed via spaced repetition per week | 10+ per active family | Client-side tracking synced to Supabase |
| Module 2 start rate (after Module 1 completion) | >60% | Supabase progress data |
| Streak length (median) | 5+ days | Supabase streak table |
| Organic referrals (new signups from existing users) | >10% of new signups | "How did you hear about us?" field |
| NPS score | >50 | Email survey at day 30 |

### Monetization Metrics (Post-MVP, tracked from launch)

| Metric | Target | Timing |
|---|---|---|
| Willingness to pay (survey) | >50% of active users say "yes" to $7.99/month | Survey at day 30 |
| Free-to-paid conversion | >5% | After paywall introduced (Phase 2) |
| Monthly churn rate | <10% | After paywall introduced |
| Revenue per user per month | $6+ (accounting for annual plan discounts) | Steady state |

---

## Key Decisions Still Open

These decisions should be resolved during the build, not before:

| Decision | Options | When to Decide | Recommended |
|---|---|---|---|
| **Illustration style** | AI-generated vs. simple icons vs. commissioned art | Week 3 (when integrating visuals) | AI-generated for MVP; commission Guinean artist after validation with revenue |
| **Audio recording format** | Phone recording app vs. USB microphone | Before recording starts (Week 2) | USB mic if available; phone in quiet room acceptable for MVP |
| **Pular orthography** | Strict UNESCO Bamako convention vs. simplified for readability | During content creation (Week 2) | Follow Peace Corps guide conventions (founder validates); add pronunciation guide screen |
| **PWA vs. React Native** | PWA first vs. go native immediately | Now (decided: PWA) | PWA. Revisit native if PWA limitations block growth |
| **Paywall placement** | After Module 1 vs. after Module 2 vs. time-limited | Post-MVP based on completion data | Recommended: Module 1 free, Module 2+ paid. Validates willingness to pay at the natural engagement cliff. |
| **Landing page headline A/B test** | "Teach your children..." vs. "Don't let Pular die with your generation" vs. "Speak Pular. Feel Fulani." | Week 1 (if traffic supports testing) | Start with parent-focused headline; test emotional variant if volume allows |

---

## Risk Watchlist

| Risk | Early Warning Signal | Response |
|---|---|---|
| Waitlist signups below threshold | <30 signups in first 7 days | Investigate channel performance; adjust messaging; test different WhatsApp group outreach |
| High onboarding drop-off | <50% complete onboarding | Simplify onboarding; reduce steps; test removing account creation requirement |
| Lesson 1 completion below 50% | Session analytics show exits mid-lesson | Lessons may be too long; split into smaller chunks; check audio quality |
| No return after Lesson 1 | Day 3 retention <20% | First lesson may not deliver enough value; consider adding more cultural "wow" moments; check notification/reminder strategy |
| Parent engagement but child disengagement | Parent accesses dashboard but lesson completion drops | Child experience may be too text-heavy or boring; add more visual/audio variety; reduce exercise difficulty |
| Audio quality complaints | Qualitative feedback mentions unclear pronunciation | Re-record with better equipment; consider recruiting a second voice for variety |
| Dialect complaints ("this isn't how we say it") | Users from Senegal, Gambia, or other regions flag differences | Expected — clarify Fuuta Jallon positioning in marketing; document as demand signal for future dialect expansion |

---

## Transition to Claude Code

### What You Need Before Starting Claude Code

| Prerequisite | Status | Owner |
|---|---|---|
| Product Vision (Document 01) | ✅ Complete (needs minor pivot update) | Ablo + Claude |
| User Persona (Document 02) | ✅ Complete | Ablo + Claude |
| User Story Map (Document 03) | ✅ Complete | Ablo + Claude |
| MVP Scope & Metrics (Document 04) | ✅ This document | Ablo + Claude |
| Phrase list for Module 1 (spreadsheet) | 🔲 To create | Ablo |
| Phrase list for Module 2 (spreadsheet) | 🔲 To create | Ablo |
| Audio recordings Module 1 | 🔲 To record | Ablo + wife |
| Audio recordings Module 2 | 🔲 To record | Ablo + wife |
| Peace Corps Pular guide (reference) | ✅ Uploaded | Ablo |

### Claude Code Build Order

1. **Project scaffold** — React + TypeScript + Tailwind + Supabase. PWA configuration. Folder structure.
2. **Landing page** — Deploy immediately for waitlist collection while building the app.
3. **Auth flow** — Parent signup/login with email + password. Privacy commitment screen.
4. **Content structure** — JSON schema for modules, lessons, phrases. Load from static files.
5. **Lesson viewer** — Core learning experience: situation card, audio player, phrase display, cultural context.
6. **Practice exercises** — Multiple-choice matching with feedback.
7. **Spaced repetition** — Review engine with SM-2 scheduling.
8. **Progress tracking** — Stars, streaks, parent dashboard.
9. **Onboarding** — Welcome flow, co-learning guide, first Pular greeting.
10. **Session continuity** — Resume, gap return, quick review.
11. **PWA polish** — Service worker, offline caching, "Add to Home Screen" prompt.
12. **Content integration** — Drop in real phrases, audio files, and illustrations.
13. **QA and soft launch** — Test with 3-5 families from Ablo's network. Fix critical issues. Email waitlist.

### What Claude Code Receives

When you start Claude Code, you hand it:

- These 4 documents (Product Vision, Persona, Story Map, MVP Scope)
- The Peace Corps Pular guide PDF (linguistic reference)
- Your phrase spreadsheets (as you create them)
- Your audio files (as you record them)

Claude Code builds the technical product. You build the content. They converge in Week 4-5.

---

## One-Page Summary

**What:** Wohlu — a PWA that teaches Fuuta Jallon Pular to children of Guinean-American families through parent-guided, audio-first, culturally immersive 10-minute lessons.

**For whom:** Guinean immigrant parents in the US who want their children (ages 5-12) to speak Pular.

**MVP scope:** 2 modules (Greetings & Respect, Family & Home), 12 lessons, ~80 phrases with native audio and cultural context. Parent account with progress dashboard. No camera, no mic, no ads, no child data.

**Tech:** React PWA + Supabase. Hosted on Vercel. Offline-capable.

**Validation:** Landing page waitlist targeting 200+ signups in 21 days via Guinean diaspora WhatsApp groups, mosques, and social media.

**Success:** 3+ lessons per family per week. Day 7 retention >30%. Day 30 retention >15%.

**Timeline:** 5 weeks to soft launch. Content production and technical build in parallel.

**Cost:** $0 in infrastructure (free tiers). Founder time + family time for content creation.

---

*This completes the Wohlu product discovery documentation. The next step is to begin content creation (phrase lists and audio recording) and technical development in Claude Code, in parallel with landing page deployment and waitlist validation.*

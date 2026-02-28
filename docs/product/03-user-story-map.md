# Wohlu — User Story Map

**Document Version:** 1.0
**Date:** February 25, 2026
**Author:** Ablo (Product Owner)
**Status:** Draft — Pending Founder Review
**Predecessors:** 01 — Product Vision, 02 — User Persona (Parent + Child)

---

## How to Read This Document

This story map is organized by **user activities** (the big things users do) broken into **user tasks** (the steps within each activity), then broken into **user stories** (the specific things to build). Stories are prioritized into three tiers:

- **MVP (Must Have)** — Ship without these and the product doesn't work
- **V1.1 (Should Have)** — Important but can follow 2-4 weeks after MVP launch
- **Later (Nice to Have)** — Validated need but deferred for future releases

Two users move through this map: **The Parent (Ibrahima)** and **The Child (Aissatou)**. Each story is tagged with who it serves.

---

## Jobs To Be Done (Embedded)

These jobs drive every story in the map:

### Parent's Jobs

| Job Type | Job Statement |
|---|---|
| **Functional** | Help me teach my child conversational Pular with a structured curriculum I can facilitate at home |
| **Functional** | Show me my child's progress so I know the effort is working |
| **Emotional** | Make me feel like I'm fulfilling my duty to pass on our language and culture |
| **Social** | Give me something I can tell other Guinean parents about — proof that a solution exists |
| **Anxiety (avoid)** | Don't put my child at risk — no camera, no data collection, no exposure to strangers |
| **Anxiety (avoid)** | Don't make this feel like another failed attempt that dies after two weeks |

### Child's Jobs

| Job Type | Job Statement |
|---|---|
| **Functional** | Help me understand and say Pular words and phrases that connect me to my family |
| **Emotional** | Make me feel proud and accomplished, not stupid or bored |
| **Social** | Give me something I can show — a Pular greeting that impresses my parents and grandparents |
| **Anxiety (avoid)** | Don't make this feel like homework or a test |
| **Anxiety (avoid)** | Don't make me feel bad for not knowing my "own" language |

---

## Story Map Overview

```
ACTIVITIES:    Discover    →    Onboard    →    Learn    →    Practice    →    Track Progress    →    Continue
               the App          & Setup        Pular        & Review        & Celebrate           & Return

PARENT:        Find &           Create         Guide         Support        View                  Maintain
               Trust            Account        Session       Review         Dashboard             Habit

CHILD:                          Meet           Listen &      Match &        See                   Come
                                Wohlu          Absorb        Respond        Rewards               Back
```

---

## Activity 1: Discover the App

**User:** Parent (Ibrahima)
**Job:** "Find a credible Pular learning solution I can trust for my child"

### Task 1.1: Find Wohlu

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a parent, I can visit a landing page that clearly explains what Wohlu is, so I can decide if it's right for my family | Landing page loads on mobile; headline speaks to parent pain point; clear value proposition in under 10 seconds |
| **MVP** | As a parent, I can join a waitlist by entering my email, so I can be notified when the app launches | Email capture form; confirmation message; email stored securely |
| **MVP** | As a parent, I can optionally tell Wohlu why I'm interested, so the team understands my needs | Optional free-text field: "Why do you want your family to learn Pular?"; responses stored for analysis |
| **V1.1** | As a parent, I can see that the app is built by native Pular speakers from Guinea, so I trust the authenticity | About/founder section on landing page with credibility signals |
| **V1.1** | As a parent, I can share the landing page link easily via WhatsApp, so I can tell other parents about it | WhatsApp share button with pre-written message; Open Graph meta tags for rich link previews |
| **Later** | As a parent, I can read testimonials from other Guinean parents, so I feel confident in my decision | Testimonial section (requires real user feedback post-launch) |

---

## Activity 2: Onboard & Setup

**Users:** Parent (primary), Child (introduced)
**Job:** "Get started quickly and safely with no friction"

### Task 2.1: Create Account

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a parent, I can create an account using my email and a password, so I can access Wohlu | Email + password registration; parent is the sole account holder; no child information collected |
| **MVP** | As a parent, I see a clear privacy statement during signup confirming no camera access, no child data collection, and no ads | Privacy commitment visible during onboarding — not buried in terms; plain language, not legalese |
| **V1.1** | As a parent, I can sign in with Google or Apple, so setup is faster | OAuth integration for Google and Apple sign-in |
| **Later** | As a parent, I can create profiles for multiple children under my account, so each child's progress is tracked separately | Multi-child profile support under single parent account |

### Task 2.2: First Experience (Child Meets Wohlu)

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I see a warm welcome screen with friendly illustration when the app opens for the first time, so I feel excited to start | Illustrated welcome screen; warm colors; culturally inspired art; no text-heavy walls |
| **MVP** | As a child, I hear a Pular greeting spoken aloud as part of the welcome, so my first interaction is audio-first | Native speaker audio plays automatically; English translation displayed; cultural warmth in tone |
| **MVP** | As a parent, I see a brief guide explaining how sessions work (sit together, 10 minutes, listen and practice), so I know my role | 2-3 screen onboarding explaining the co-learning model; skippable but shown on first launch |
| **V1.1** | As a child, I can choose a simple avatar or icon, so the experience feels personal | 6-8 pre-made culturally inspired avatar options; no photo upload; no camera |
| **Later** | As a parent, I can set a preferred learning time and receive a daily reminder, so we build a consistent habit | Push notification scheduling; configurable by parent |

---

## Activity 3: Learn Pular

**Users:** Parent (guide) and Child (learner), together
**Job (Parent):** "Guide my child through a structured lesson without needing to be a teacher"
**Job (Child):** "Listen to Pular and understand what it means in situations I recognize"

### Task 3.1: Browse Learning Modules

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a parent, I can see available learning modules organized by life situation (not grammar), so I can choose what's relevant | Module list displayed: "Greetings & Respect" and "Family & Home" available in MVP; others shown as "coming soon" |
| **MVP** | As a parent, I can see progress within each module (lessons completed / total), so I know where we are | Progress bar or fraction on each module card |
| **V1.1** | As a parent, I can see a recommended learning order, so I don't have to decide where to start | Suggested sequence with "Start Here" indicator on first module |
| **Later** | As a parent, I can unlock modules in sequence (or choose to explore freely), so there's structure but also flexibility | Sequential unlock as default; parent toggle to enable free exploration |

### Task 3.2: Complete a Lesson

This is the core product experience. Each lesson teaches 5-8 phrases within a cultural situation.

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I see a situation card with an illustration showing a Fulani family scene, so I understand the context before hearing any Pular | Illustrated scene card; culturally specific (Fulani family life); brief English description of the situation (1-2 sentences) |
| **MVP** | As a child, I hear each Pular phrase spoken clearly by a native speaker, so I learn correct pronunciation | High-quality audio recording; plays on tap; can replay unlimited times; speaker is a real person, not synthesized |
| **MVP** | As a child, I see the English meaning displayed alongside the Pular phrase, so I understand what I'm learning | English meaning shown clearly; Pular phrase in Latin script below or beside it |
| **MVP** | As a child, I see a cultural context note for key phrases, so I understand why and when to say this | 1-2 sentence context note; family-friendly language; connects to real situations (e.g., "You say this to greet elders in the morning") |
| **MVP** | As a child, I can tap a phrase to hear it again as many times as I want, so I can practice listening | Tap-to-replay on any phrase; no limit on replays |
| **MVP** | As a parent, I see enough context to add my own commentary during the lesson, so I can enrich the experience with personal stories | Cultural context notes serve as conversation prompts for the parent; space in the UI that doesn't rush past these moments |
| **V1.1** | As a child, I see the Pular phrase broken into syllables with stress indicated, so I can attempt pronunciation more easily | Syllable breakdown display; primary stress highlighted |
| **V1.1** | As a child, I can hear a slow version of each phrase, so I can catch sounds I miss at normal speed | Slow playback option (button or toggle); same speaker, slowed audio |
| **Later** | As a child, I can optionally record myself saying a phrase and compare with the native audio, so I can self-assess pronunciation | Microphone access (optional, parent-enabled); side-by-side playback; no data stored or transmitted |
| **Later** | As a child, I see an illustration or image that reinforces the meaning of each phrase, so visual learners are supported | Per-phrase illustrations or icons; consistent art style |

### Task 3.3: Module Content — Greetings & Respect (MVP Module 1)

*Content sourced from authentic Fuuta Jallon Pular. All phrases to be validated and recorded by founder (native speaker).*

| Priority | Story | Content Scope |
|---|---|---|
| **MVP** | Lesson 1: Basic Greetings | "A jaraama" (I greet you) / "On jaraama" (respectful plural); "Tanna alaa?" (Is there no evil?) / "Jam tun" (Peace only); "No wa'i?" (What's up?) / "No marsude?" (How's it going?); 6-8 phrases covering the core greeting exchange |
| **MVP** | Lesson 2: Morning & Evening Greetings | "A walli e jam?" (Did you sleep in peace?); "On ñalli e jam?" (Have you spent the day in peace?); "On hiiri e jam?" (Have you spent the evening in peace?); "Hiða e jam?" (Are you well?); Cultural note: greeting differs by time of day; 6-8 phrases |
| **MVP** | Lesson 3: Greeting Elders with Respect | "On jaraama, mawðe" (I greet you, elders); "Åeyngure nden no e jam?" (Is the family well?); "Fayðe åen no e jam?" (Are the children well?); Cultural note: plural/respectful forms, body language (looking down, both hands); 6-8 phrases |
| **MVP** | Lesson 4: Saying Goodbye | "Oo-o!" (Bye); "En jango" (See you tomorrow); "En bimbi" (See you in the morning); "En ontuma" (See you later); "Si Alla jaåi" (God willing); "Ñallen e jam" (Let's pass the day in peace); "Waalen e jam" (Let us sleep well); 6-8 phrases |
| **MVP** | Lesson 5: Polite Words & Useful Phrases | "Hii-hi" / "Eyyo" (Yes); "O'o" / "O'owooye" (No); "A jaraama" (Thank you); "Accee hakkee" (Please excuse me); "Albarka" (God bless you / Thank you); "Barka'alla" (You are welcome); 6-8 phrases |
| **MVP** | Lesson 6: Greetings Review & Cultural Story | Review all greetings; cultural story about why Fulani greetings are longer and more layered than Western greetings — asking about family, health, work, and children is expected and shows care; tindol (proverb): "Lekkun åee e ðowkal mun" (Every little tree gives its little bit of shade); 5-6 review phrases + cultural context |

### Task 3.4: Module Content — Family & Home (MVP Module 2)

*Content sourced from authentic Fuuta Jallon Pular. All phrases to be validated and recorded by founder (native speaker).*

| Priority | Story | Content Scope |
|---|---|---|
| **MVP** | Lesson 1: Core Family Members | baaba (father), neene (mother), koto (older brother), jaaja (older sister), miñan (younger sibling), soro (grandfather), pati (grandmother), åeyngu (wife), moodi (husband); Cultural note: ben/yumma as respectful terms for father/mother; 8-10 terms |
| **MVP** | Lesson 2: Extended Family & Relationships | kaawu (mother's brother/maternal uncle), bappa (father's younger brother), yaaye (father's sister), esiraawo (in-law), taanira (grandchild), biððo (child/son/daughter), njaatigi (friend), giðo (friend); Cultural note: musidal (extended family) vs. åeyngure (nuclear family); 8-10 terms |
| **MVP** | Lesson 3: Asking About Family | "Åeyngure nden no e jam?" (How's the family?); "Honno åeyngu maa waði?" (How is your wife doing?); "Himo e jam" (She/He is well); "Fayðe åen no e jam?" (Are the children well?); "Boobo on no selli?" (Is the baby healthy?); Cultural note: always ask about family members in greetings; 6-8 phrases |
| **MVP** | Lesson 4: At the Table — Food & Meals | "Ñiiri no woodi?" (Is there food?); "Bismillahi!" (Welcome / In God's name); "Ko tooli!" (Welcome / Be seated); "No weli!" (It tastes good!); "Mi haari" (I'm full); "Miðo weela" (I'm hungry); "Miðo ðonða" (I'm thirsty); "Åeydu seeða!" (Eat a little more!); Cultural note: eating from a shared bowl; 8-10 phrases |
| **MVP** | Lesson 5: Numbers & Simple Questions | Numbers 1-10 (go'o, ðiði, tati, nay, jowi, jeego, jeeðiði, jeetati, jeenay, sappo); "Ko hombo nii?" (Who is that?); "Ko honðun nii?" (What is this?); "Ko duuåi jelu maruðaa?" (How old are you?); 8-10 terms and phrases |
| **MVP** | Lesson 6: Family Review & Proverb | Review all family and home vocabulary; tindol (proverb): "Wata booboti hun hawjan gala; ko ko kun maydaa" (The calf shouldn't be in a hurry to grow horns — he'll have them until he dies); practice identifying family members and asking about them; 5-6 review phrases + cultural context |

---

## Activity 4: Practice & Review

**Users:** Parent (supports) and Child (practices)
**Job (Child):** "Remember what I learned and feel confident using it"
**Job (Parent):** "See my child retain knowledge, not just hear it once"

### Task 4.1: In-Lesson Practice

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I can match Pular phrases to their English meanings by tapping, so I actively engage with what I learned | Multiple-choice matching exercise; 4 options; audio plays for correct answer; visual feedback (correct = warm animation, incorrect = gentle encouragement, not punishment) |
| **MVP** | As a child, I can match Pular audio to the correct situation illustration, so I practice listening comprehension | Audio plays; child taps the matching illustration from 2-3 options |
| **MVP** | As a child, I see encouraging feedback when I get an answer right, so I feel motivated | Positive visual animation; encouraging text ("Jaraama!" — thank you/well done in Pular); no harsh "wrong" messaging |
| **MVP** | As a child, I see gentle correction when I get an answer wrong without feeling punished, so I stay engaged | Correct answer highlighted; phrase replays; encouraging text ("Almost! Listen again"); no score deduction or negative sounds |
| **V1.1** | As a child, I can drag Pular words to complete a phrase, so I practice construction | Drag-and-drop word ordering for simple phrases (2-4 words) |
| **Later** | As a child, I can play a matching game (flip cards) with Pular words and images, so review feels like play | Memory-style card matching game using learned vocabulary |

### Task 4.2: Spaced Repetition Review

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I see a daily review set of phrases I've learned before, so previously learned material stays fresh | Spaced repetition algorithm selects 5-10 phrases for review; based on time since last review and accuracy |
| **MVP** | As a parent, I can start a review session that mixes phrases from all completed lessons, so learning compounds | "Review" button accessible from home screen; pulls from all completed content |
| **V1.1** | As a child, I see phrases I struggle with more frequently, so I get extra practice where I need it | Adaptive difficulty — missed phrases reappear sooner in the review cycle |
| **Later** | As a parent, I can see which phrases my child struggles with, so I can provide extra help on those | "Needs Practice" section in parent dashboard |

---

## Activity 5: Track Progress & Celebrate

**Users:** Parent (views dashboard) and Child (sees rewards)
**Job (Parent):** "Know that this is working and our effort is paying off"
**Job (Child):** "Feel proud of what I've accomplished"

### Task 5.1: Child-Facing Progress

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I earn a star or badge when I complete a lesson, so I feel accomplishment | Visual reward animation on lesson completion; badge added to a visible collection |
| **MVP** | As a child, I see how many lessons I've completed in each module, so I feel progress | Progress bar or visual path showing completed vs. remaining lessons |
| **MVP** | As a child, I see a streak counter showing how many days in a row I've practiced, so I want to keep going | Streak displayed on home screen; gentle celebration at milestones (3 days, 7 days, 14 days, 30 days) |
| **V1.1** | As a child, I can see all the badges and stars I've collected in one place, so I feel proud of my journey | Achievement gallery or trophy shelf screen |
| **Later** | As a child, I earn special cultural badges (e.g., "Greeter," "Family Speaker," "Proverb Keeper"), so achievements feel meaningful and cultural | Named badges tied to module completion with cultural significance |

### Task 5.2: Parent Dashboard

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a parent, I can see total lessons completed and current streak, so I know if we're staying consistent | Simple dashboard: lessons completed count, current streak, last session date |
| **MVP** | As a parent, I can see which modules and lessons have been completed, so I know what we've covered | Module progress view: completed lessons checked, current lesson highlighted |
| **V1.1** | As a parent, I can see total phrases learned (cumulative count), so I can appreciate the volume of learning | Phrase counter on dashboard |
| **V1.1** | As a parent, I can see a weekly summary of activity, so I can assess consistency | Weekly view: days practiced, lessons completed, new phrases learned |
| **Later** | As a parent, I can receive a weekly email summary of my child's progress, so I stay informed even when I forget to check the app | Opt-in weekly email digest |

---

## Activity 6: Continue & Return

**Users:** Parent and Child
**Job (Parent):** "Don't let this die after two weeks like everything else we've tried"
**Job (Child):** "Come back without feeling like I've fallen behind"

### Task 6.1: Session Continuity

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a parent, I see a clear "Continue" button showing exactly where we left off, so restarting is frictionless | Home screen shows next lesson; one-tap to resume; no navigation required |
| **MVP** | As a child, I can pick up a lesson in the middle if we stopped partway through, so progress isn't lost | Lesson state saved automatically; resumes from last completed phrase/exercise |
| **V1.1** | As a parent, I receive a gentle push notification if we haven't practiced in 2 days, so we're nudged back | Configurable reminder; warm tone ("Aissatou's Pular adventure is waiting!"); parent can disable |
| **Later** | As a parent, I can set specific days/times for practice and receive calendar-aware reminders | Schedule configuration; integrates with notification system |

### Task 6.2: Return After a Gap

| Priority | Story | Acceptance Criteria |
|---|---|---|
| **MVP** | As a child, I see a welcoming return screen if I haven't used the app in 7+ days, so I don't feel guilty or behind | Warm welcome back message; no shame; no "you lost your streak" punishment; instead: "Welcome back! Let's do a quick review" |
| **MVP** | As a parent, I can start a review session to re-activate knowledge after a gap, so we don't feel like we're starting over | "Quick Review" option that pulls from previously completed lessons; 5-minute format |
| **V1.1** | As a child, my streak resets gently with a "new streak" framing rather than a "broken streak" framing, so returning feels positive | "Start a new streak!" rather than "You lost your 14-day streak" |

---

## MVP Cutline Summary

### In the MVP (Must Ship)

| Area | What's Included |
|---|---|
| **Landing page** | Waitlist with email capture, value proposition targeting parents, optional "why interested?" field, WhatsApp sharing |
| **Onboarding** | Parent account creation (email + password), privacy commitment screen, welcome experience for child, co-learning guide |
| **Content** | 2 modules (Greetings & Respect, Family & Home), 12 lessons total, 60-80 phrases with native audio and cultural context |
| **Learning** | Situation cards with illustrations, native audio (tap to play/replay), English meanings, cultural context notes |
| **Practice** | Multiple-choice matching (phrase to meaning), audio-to-illustration matching, encouraging feedback |
| **Review** | Basic spaced repetition, review session pulling from all completed lessons |
| **Progress** | Lesson completion stars, module progress bars, streak counter, parent dashboard (lessons completed, streak, modules covered) |
| **Continuity** | Resume from where left off, welcoming return after gap, quick review session |
| **Privacy** | No camera, no mic requirement, no child data, no ads, no social features, no external links, parent-only account |

### Not in the MVP (Deferred)

| Area | What's Deferred | When |
|---|---|---|
| Pronunciation practice | Optional microphone recording and playback | V1.1 |
| Gamification depth | Drag-and-drop, card matching games, cultural badges | V1.1 |
| Multi-child profiles | Separate progress tracking per child | V1.1 |
| Push notifications | Practice reminders and streak nudges | V1.1 |
| Social sign-in | Google/Apple OAuth | V1.1 |
| Additional modules | Food & Meals, Ceremonies, Everyday Expressions | V1.2+ |
| Reconnector mode | Self-directed adult learning experience | Phase 2 |
| Adlam script | Optional script learning module | Phase 2 |
| Community features | Parent forums, practice partners | Phase 3 |
| Live tutoring | 1-on-1 sessions with native speakers | Phase 3 |
| Additional languages | Susu, Mandinka, Wolof | Phase 3+ |

---

## Technical Implications for Claude Code

These are decisions that need to be made before or during the build:

| Decision | Recommendation | Rationale |
|---|---|---|
| **Platform** | Progressive Web App (PWA) first | Fastest to build; works on all devices; no App Store approval needed for MVP; can wrap in Capacitor for native later |
| **Framework** | React + TypeScript | Strong ecosystem; Claude Code works well with React; component-based architecture fits lesson structure |
| **Audio storage** | Static files bundled with app or hosted on CDN | Reliability matters more than fancy streaming; must work offline |
| **Data storage** | Local storage + simple backend (Supabase or Firebase) | Parent account and progress data needs persistence across devices; child data stays minimal |
| **Auth** | Email + password via Supabase Auth or Firebase Auth | Simplest to implement; OAuth in V1.1 |
| **Spaced repetition** | SM-2 algorithm (or simplified variant) | Well-documented, easy to implement; runs client-side |
| **Content format** | JSON files per lesson with audio file references | Easy to author, version, and expand; Claude Code can scaffold the structure |
| **Offline support** | Service worker caching of lessons and audio | Critical for reliability; parents may use the app where connectivity is limited |
| **Analytics** | Privacy-respecting analytics (Plausible or self-hosted) | Track usage patterns without compromising user privacy; no third-party trackers |
| **Hosting** | Vercel or Netlify for frontend; Supabase for backend | Free tier covers MVP traffic; easy deployment |

---

## Content Production Requirements

Before Claude Code can build the app, the content must exist:

| Content Type | Quantity (MVP) | Format | Producer |
|---|---|---|---|
| Pular phrases with English translation | 60-80 phrases | JSON (structured by module/lesson) | Ablo + family |
| Audio recordings (each phrase) | 60-80 audio files | MP3 or WAV, clear quality | Ablo + wife |
| Cultural context notes | 60-80 short texts | 1-2 sentences each, in English | Ablo |
| Situation illustrations | 12 (one per lesson) | PNG/SVG; culturally specific | AI-generated placeholders → custom art later |
| Lesson structure | 12 lesson definitions | JSON (phrase order, exercise types, review sets) | Ablo + Claude |

**Suggested content production workflow:**

1. Ablo creates phrase list in spreadsheet (English + Pular + context), organized by lesson
2. Claude helps structure into JSON format
3. Ablo and wife record audio in batches (use quiet room, phone recording app)
4. Audio files named by phrase ID for easy mapping
5. Claude Code scaffolds the app with placeholder content, then real content is dropped in

---

*This story map is the build spec for Wohlu's MVP. It defines what to build, in what order, and why. The next document (04 — MVP Scope & Success Metrics) will finalize technical decisions, define the validation plan, and set measurable targets.*

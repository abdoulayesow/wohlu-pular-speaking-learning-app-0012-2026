# Wohlu — Incremental Design Prompts

**Purpose:** Use these prompts sequentially with v0, Figma AI, or Stitch to design the Wohlu app screen by screen. Each prompt builds on the previous ones, maintaining visual consistency.

**How to use:** Run Prompt 0 first to establish the design system. Then run each subsequent prompt one at a time. If the tool supports referencing previous outputs, attach or reference the previous screen when generating the next.

---

## Prompt 0: Design System Foundation

```
I'm designing a mobile-first Progressive Web App called "Wohlu" (means "Speak" in Pular). It's a heritage language learning app for Guinean-American families — parents guide their children (ages 5-12) through Pular language lessons together in 10-minute sessions.

Establish a design system with these specifications:

BRAND IDENTITY:
- Name: Wohlu
- Tagline: "Speak Pular. Feel Fulani."
- Tone: Warm, culturally proud, family-centered, trustworthy
- NOT: Generic ed-tech, childish/cartoonish, clinical, corporate

COLOR PALETTE (inspired by Fouta Djallon landscape and Fulani textiles):
- Primary: Warm earth tones — rich terracotta, deep clay
- Secondary: Gold/amber (inspired by savanna light)
- Accent: Deep forest green (Fouta Djallon highlands)
- Neutrals: Warm cream, soft sand, deep brown for text
- Avoid: Bright primary colors, neon, cold blues, generic purple gradients

TYPOGRAPHY:
- Display/Headings: A warm serif or distinctive display font — something that feels cultural and grounded, not tech-startup
- Body: A clean, highly readable sans-serif — the app will display Pular text with special characters (å, ð, ñ, ý, ø) so the font MUST support extended Latin characters
- Ensure excellent readability for both English and Pular text at all sizes

DESIGN LANGUAGE:
- Rounded, warm UI elements — no sharp corners
- Generous spacing — the app should feel calm, not cramped
- Illustrations style: Warm, semi-flat illustration with African-inspired patterns and motifs — think Fulani textile patterns as subtle background elements
- Avoid stock photo aesthetic — everything should feel handcrafted and culturally specific
- Cards and containers with soft shadows, warm backgrounds
- Audio-forward: prominent play buttons, waveform indicators, visual feedback for sound

LAYOUT:
- Mobile-first (375px width primary, responsive up to tablet)
- Bottom navigation bar
- Large touch targets (minimum 48px) — children will be tapping
- Generous font sizes for readability

Generate a design system reference sheet showing: color palette swatches with hex codes, typography scale, button styles (primary, secondary, ghost), card styles, icon style direction, and spacing scale.
```

---

## Prompt 1: Landing Page (Waitlist)

```
Using the Wohlu design system established previously, design a mobile-first landing page for waitlist collection.

PURPOSE: Convince Guinean-American parents to join the waitlist for a Pular language learning app for their children.

LAYOUT (top to bottom, single scrolling page):

1. HERO SECTION
   - Wohlu logo/wordmark
   - Headline: "Teach your children the Pular your parents taught you."
   - Subheadline: "The first app for Guinean families who want their kids to speak Fuuta Jallon Pular — with real pronunciation, cultural context, and lessons you do together."
   - Illustration: A warm scene of a parent and child sitting together, looking at a device, with subtle Fulani pattern elements in the background
   - CTA button: "Join the Waitlist"

2. VALUE PROPS (3 cards or icon-blocks)
   - 🔊 "Native Fuuta Jallon pronunciation" — "Every phrase recorded by real Pular speakers. Not AI, not synthesized."
   - 👨‍👧 "Built for families to learn together" — "10-minute sessions designed for parent and child, side by side."
   - 🔒 "No camera. No ads. No child data." — "Your family's privacy is sacred. Period."

3. HOW IT WORKS (3 steps, illustrated)
   - Step 1: "Listen together" — hear native Pular phrases with cultural context
   - Step 2: "Practice together" — fun matching exercises your child will love
   - Step 3: "Grow together" — track progress and celebrate milestones as a family

4. FOUNDER SECTION
   - Small photo placeholder circle
   - "Built by Ablo — native Pular speaker from Guinea, father of three, and product builder. This app exists because I couldn't find one for my own kids."

5. WAITLIST FORM
   - Email input field
   - Optional: "Why do you want your family to learn Pular?" (textarea)
   - Optional: "How did you hear about us?" (dropdown: WhatsApp, Friend/family, Mosque community, Social media, Other)
   - Submit button: "Join the Waitlist — Be First"
   - Privacy note below: "We will never share your email. Wohlu is built with family privacy as a core value."

6. FOOTER
   - "Wohlu — Speak Pular. Feel Fulani."
   - © 2026 Improve So LLC
   - WhatsApp share button with pre-written message

DESIGN NOTES:
- Warm, inviting — this is a cultural product, not a tech product
- The parent should feel trust immediately
- Mobile-first layout; desktop is secondary
- No navigation bar — single page scroll
- WhatsApp share should be prominent — this is the primary distribution channel
```

---

## Prompt 2: Onboarding — Welcome Screen

```
Using the Wohlu design system, design the first onboarding screen that appears when a parent opens the app for the first time after creating their account.

SCREEN: Welcome to Wohlu

CONTENT:
- Warm illustration of a Fulani family scene (parent and child, warm environment, subtle cultural elements like patterns or textiles)
- Headline: "Bisimillahi! Welcome to Wohlu."
- Body text: "Wohlu means 'Speak' in Pular. You're about to give your child the gift of your family's language."
- A small audio play button next to "Bisimillahi" so the parent can hear the Pular pronunciation immediately — this sets the tone that the app is audio-first
- Bottom: "Next" button (primary style)
- Progress dots showing this is screen 1 of 3

DESIGN NOTES:
- This is the emotional hook — it should feel like a homecoming
- Illustration should be warm, not cartoonish
- Generous whitespace
- The audio play button is intentional — the very first interaction is hearing Pular
```

---

## Prompt 3: Onboarding — How It Works

```
Using the Wohlu design system, design the second onboarding screen.

SCREEN: How Wohlu Works

CONTENT:
- Headline: "Learn Pular together, one lesson at a time."
- Three visual steps stacked vertically, each with a small icon/illustration:
  
  1. Icon: Parent + child together
     "Sit together" — "Wohlu is designed for 10-minute sessions with your child. You're the guide, the app is the teacher."
  
  2. Icon: Audio waveform / speaker
     "Listen & practice" — "Every phrase has native Fuuta Jallon pronunciation. Your child listens, matches, and learns."
  
  3. Icon: Star / progress
     "Watch them grow" — "Track lessons completed, streaks, and phrases learned. Celebrate together."

- Bottom: "Next" button
- Progress dots showing screen 2 of 3

DESIGN NOTES:
- Clean, scannable — parent should understand the model in 5 seconds
- Icons should feel warm and cultural, not generic tech icons
- Emphasize "together" visually — every illustration shows two people, not one
```

---

## Prompt 4: Onboarding — Privacy Promise

```
Using the Wohlu design system, design the third and final onboarding screen.

SCREEN: Our Promise to Your Family

CONTENT:
- Headline: "Your family's safety comes first."
- Four promise items, each with a simple icon and one line:
  
  🚫📷 "No camera access — ever."
  🚫🎙️ "No microphone required."
  🚫👤 "No data collected about your child."
  🚫📢 "No ads. No tracking. No exceptions."

- A warm closing line: "Wohlu is built by a Guinean father for Guinean families. Your trust is everything."
- Bottom: "Start Learning" button (primary, prominent)
- Progress dots showing screen 3 of 3

DESIGN NOTES:
- This screen builds trust — the most important emotion for the parent buyer
- The 🚫 icons should feel protective, not alarming — use the app's warm color palette
- The CTA "Start Learning" should feel like a moment of commitment
- This is the transition from onboarding to the actual product
```

---

## Prompt 5: Home Screen

```
Using the Wohlu design system, design the main home screen that the parent and child see after onboarding (and on every subsequent app open).

SCREEN: Home

TOP SECTION:
- Greeting: "Jam waali, [family name]!" (Good morning — changes by time of day)
- Streak indicator: flame/star icon + "3-day streak" (or "Start your streak!" if new)
- Subtle, warm background pattern

MAIN CONTENT:
- "Continue Learning" card (most prominent):
  - Shows current lesson: e.g., "Lesson 3: Greeting Elders with Respect"
  - Module name: "Greetings & Respect"
  - Progress bar showing completion within the module
  - Large "Continue" button
  - If returning after a gap: card says "Welcome back! Let's do a quick review" instead

- "Review" card (secondary):
  - "Practice phrases you've learned"
  - Small count: "12 phrases ready for review"
  - "Start Review" button

MODULE SECTION:
- Two module cards stacked:
  - Module 1: "Greetings & Respect" — progress bar, lesson count (e.g., "4/6 lessons")
  - Module 2: "Family & Home" — progress bar or "Coming next" state if Module 1 incomplete
  - Future modules shown as locked/coming soon with titles visible: "Food & Meals", "Ceremonies"

BOTTOM NAVIGATION:
- Three tabs: Home (active), Lessons, Progress
- Simple icons, warm styling, large touch targets

DESIGN NOTES:
- The home screen should answer one question instantly: "What do we do next?"
- The "Continue" button is the primary action — everything else is secondary
- Streak display should be encouraging, not pressuring
- Time-of-day greeting in Pular is a small cultural delight (Jam waali = morning, On ñalli e jam = afternoon, On hiiri e jam = evening)
```

---

## Prompt 6: Module Overview Screen

```
Using the Wohlu design system, design the module overview screen showing all lessons within a module.

SCREEN: Module 1 — Greetings & Respect

TOP:
- Back arrow to Home
- Module title: "Greetings & Respect"
- Module description: "Learn the greetings that connect you to your family and show respect to elders."
- Overall progress bar: "4 of 6 lessons complete"

LESSON LIST (vertical, card-based):
Each lesson card shows:
- Lesson number and title
- Brief description (one line)
- Status indicator: ✅ completed (with star), 🔵 current/in-progress, 🔒 locked (next in sequence)

Lessons:
1. "Basic Greetings" — "A jaraama! Learn the core Pular greeting exchange." ✅
2. "Morning & Evening Greetings" — "Greet differently based on time of day." ✅
3. "Greeting Elders with Respect" — "The respectful forms that honor your family." ✅
4. "Saying Goodbye" — "En jango! Leave with warmth and grace." 🔵 current
5. "Polite Words & Useful Phrases" — "Thank you, yes, no, and excuse me." 🔒
6. "Greetings Review & Proverb" — "Put it all together with a Fulani proverb." 🔒

DESIGN NOTES:
- Visual path/journey metaphor — lessons feel like a progression, not a menu
- Completed lessons show the star earned
- Current lesson is visually highlighted — "This is where you are"
- Locked lessons are visible but dimmed — builds anticipation
- Each lesson card should feel tappable and inviting
```

---

## Prompt 7: Lesson Experience — Situation Card

```
Using the Wohlu design system, design the first screen of a lesson — the Situation Card that introduces the cultural context before any Pular is taught.

SCREEN: Lesson 3 — Greeting Elders with Respect (Situation Card)

CONTENT:
- Top: Back arrow + "Lesson 3 of 6" progress indicator
- Illustration: A warm scene of a young child greeting an elder — perhaps the child with hands extended respectfully, the elder seated, in a family compound setting. Subtle Fulani textile patterns in the background.
- Title: "Greeting Elders with Respect"
- Description: "In Fulani culture, how you greet an elder shows who you are. You use special respectful words, hold your hands a certain way, and ask about their family. Let's learn how."
- A "Begin Lesson" button at the bottom

DESIGN NOTES:
- This screen sets the emotional stage — it should feel like the beginning of a story, not a textbook chapter
- The illustration is the star — it creates the cultural context visually
- Text should be brief and warm — written for a parent to read aloud to their child
- No Pular on this screen yet — context first, language second
```

---

## Prompt 8: Lesson Experience — Phrase Learning

```
Using the Wohlu design system, design the core phrase learning screen — this is the most important screen in the entire app.

SCREEN: Phrase Card (within a lesson)

CONTENT:
- Top: Lesson title + progress through phrases (e.g., "3 of 6")
- PULAR PHRASE (large, prominent): "On jaraama, mawðe"
- ENGLISH MEANING (clear, below Pular): "I greet you, elders" (respectful)
- AUDIO PLAY BUTTON: Large, central, impossible to miss. Tap to hear native pronunciation. Waveform or ripple animation while playing.
- REPLAY BUTTON: Smaller, beside the play button — "Listen again"
- CULTURAL CONTEXT CARD: A warm-colored card below the phrase:
  "When greeting elders, always use 'On' instead of 'A' — it's the respectful plural form. Lower your eyes slightly and extend both hands."
- Navigation: "Previous" (left) and "Next" (right) arrows at bottom, or swipe gesture
- Progress dots or bar for phrases within the lesson

DESIGN NOTES:
- The Pular text must be the largest element on screen — this is what the child is learning
- The audio button should be visually delightful — children will tap it repeatedly
- Audio playback should have satisfying visual feedback (ripple, glow, waveform)
- Cultural context card should feel like a "fun fact" tooltip, not required reading
- The screen must work for a 7-year-old tapping and a 39-year-old reading alongside
- Font must render Pular special characters perfectly (å, ð, ñ, ý, ø)
```

---

## Prompt 9: Lesson Experience — Practice Exercise

```
Using the Wohlu design system, design the practice exercise screen that appears after learning phrases.

SCREEN: Practice — Match Phrase to Meaning

CONTENT:
- Top: "Practice Time!" + lesson title
- Instruction: "Match the Pular greeting to its meaning"
- Audio auto-plays a Pular phrase (with play button to repeat)
- Four answer options as tappable cards:
  - "I greet you, elders" (respectful)
  - "How's the family?"
  - "Did you sleep in peace?"
  - "Peace only."
- On correct answer: Card glows green, encouraging text appears ("Jaraama! Well done!"), warm animation (confetti, stars, or subtle celebration)
- On incorrect answer: Selected card gently shakes, correct answer highlights, encouraging text ("Almost! Listen again."), the audio replays automatically
- Progress: "2 of 4 exercises" indicator
- After all exercises: Transition to lesson complete screen

DESIGN NOTES:
- Touch targets must be very large — minimum 56px height for each option card
- Visual feedback must be immediate and warm — no ambiguity about correct/incorrect
- Incorrect feedback is NEVER punishing — the tone is always "let's try again"
- Audio should replay on incorrect to reinforce the learning
- The celebration on correct answers should be genuinely delightful for a child
- "Jaraama" (thank you/well done) as the praise word is a cultural touch
```

---

## Prompt 10: Lesson Complete Screen

```
Using the Wohlu design system, design the lesson completion celebration screen.

SCREEN: Lesson Complete!

CONTENT:
- Large celebratory illustration or animation — star earned, warm colors, cultural motifs
- Headline: "Albarka! Lesson Complete!" (Albarka = blessing/thank you)
- Summary: "You learned 6 new phrases in 'Greeting Elders with Respect'"
- Star/badge earned — visual, collectible, added to progress
- Streak update: "🔥 4-day streak! Keep it going!"
- Two CTAs:
  - Primary: "Next Lesson: Saying Goodbye" (continue momentum)
  - Secondary: "Back to Home" (for families who want to stop here)
- Optional: A tindol (proverb) displayed if this is a review lesson: "Lekkun åee e ðowkal mun — Every little tree gives its little bit of shade."

DESIGN NOTES:
- This should feel like a genuine celebration — the child earned something
- The star/badge animation should be memorable and satisfying
- Using Pular words in the celebration (Albarka, Jaraama) reinforces learning
- Always give an easy path to the next lesson — capture momentum
- The proverb (on review lessons) gives the parent something to discuss with the child
```

---

## Prompt 11: Review Session Screen

```
Using the Wohlu design system, design the spaced repetition review session screen.

SCREEN: Review Session

CONTENT:
- Top: "Daily Review" + "12 phrases to review"
- Card-based review — one phrase at a time:
  - Audio plays automatically
  - Child sees 3-4 multiple choice options (English meanings)
  - Same correct/incorrect feedback as practice exercises
- Progress bar showing review completion: "5 of 12"
- After completion: "Review complete! You remembered 10 out of 12 phrases. Jaraama!"
- Phrases the child missed are flagged for next review (shown gently: "We'll practice these again tomorrow")

DESIGN NOTES:
- Review should feel quick and low-pressure — not a test
- Same warm feedback system as practice exercises
- The "we'll practice again tomorrow" framing is forward-looking, not punitive
- Session should take 3-5 minutes — shorter than a full lesson
```

---

## Prompt 12: Parent Dashboard

```
Using the Wohlu design system, design the parent progress dashboard — accessible from the bottom nav "Progress" tab.

SCREEN: Progress Dashboard

CONTENT:
- Top: "Your Family's Pular Journey"
- STREAK CARD (prominent):
  - Current streak: "🔥 7 days"
  - Longest streak: "12 days"
  - Calendar-style week view showing active days (dots or checkmarks)

- STATS ROW:
  - Lessons completed: "8"
  - Phrases learned: "52"
  - Days active: "14"

- MODULE PROGRESS:
  - Module 1: "Greetings & Respect" — 5/6 lessons — progress bar — "Almost done!"
  - Module 2: "Family & Home" — 2/6 lessons — progress bar

- RECENT ACTIVITY:
  - Simple list: "Today: Lesson 4 completed, 8 phrases reviewed"
  - "Yesterday: 10 phrases reviewed"

- No grades, no scores, no comparisons to other users. Progress is personal and celebratory.

DESIGN NOTES:
- This is the parent's view — slightly more data-oriented than the child experience
- But still warm, not clinical — this isn't a school report card
- The streak and phrase count are the hero numbers — they validate the parent's effort
- No negative metrics ever shown — only positive progress
- Large, readable numbers — the parent should be able to glance and feel good
```

---

## Prompt 13: Return After Gap

```
Using the Wohlu design system, design the screen that appears when a family returns to the app after 7+ days of inactivity.

SCREEN: Welcome Back

CONTENT:
- Warm illustration: The same family from onboarding, welcoming pose
- Headline: "Bisimillahi! Welcome back."
- Body: "It's been a little while, and that's okay. Pular will always be here for your family. Let's do a quick review to warm up."
- Two CTAs:
  - Primary: "Quick Review" (5-minute review of previously learned phrases)
  - Secondary: "Continue Where We Left Off" (skip review, go to next lesson)
- NO mention of lost streak, missed days, or any negative framing
- Small text: "Your progress is saved — you haven't lost anything."

DESIGN NOTES:
- This is one of the most important screens in the app — it determines whether families come back or feel guilty and never return
- The tone must be ZERO guilt, ZERO pressure — only warmth and welcome
- "That's okay" is the key emotional message
- The Quick Review option makes returning feel easy — low commitment
- Streak resets silently — if asked about it, frame as "Start a new streak!"
```

---

## Usage Notes

- Run these prompts in order (0 through 13)
- After each screen, review and adjust before moving to the next
- Keep the generated design system sheet from Prompt 0 as a reference attachment for all subsequent prompts
- If the tool loses consistency between screens, re-attach the design system and the most recent screen as context
- These 14 prompts cover the complete MVP user flow — no additional screens are needed for launch

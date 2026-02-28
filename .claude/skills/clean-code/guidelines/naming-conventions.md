# Naming Conventions

Comprehensive naming rules with examples from the codebase.

## File Naming

| Pattern | Convention | Example |
|---------|-----------|---------|
| React components | PascalCase | `PhraseCard.tsx`, `LessonFlow.tsx` |
| Hooks | camelCase with `use` prefix | `useAudioPlayer.ts`, `useSpacedRepetition.ts` |
| Utilities | camelCase | `utils.ts`, `supabase.ts` |
| Constants | camelCase (file), UPPER_SNAKE (exports) | `constants.ts` |
| Types | camelCase | `types.ts`, `schema.ts` |
| Tests | source name + `.test.ts` | `App.test.tsx`, `spaced-repetition.test.ts` |
| Content | kebab-case | `greetings-respect.json` |

## Function Naming

| Pattern | Convention | Examples |
|---------|-----------|---------|
| Data fetching | `fetch` + noun | `fetchPhrases()`, `fetchModules()` |
| Mutations | verb + noun | `updateProgress()`, `syncReviewData()` |
| Getters | `get` + noun | `getNextReview()`, `getAudioUrl()` |
| Boolean checks | `is/has/can` + adjective | `isOffline()`, `hasAudio()` |
| Event handlers | `handle` + event | `handlePlay()`, `handleAnswer()` |
| Callback props | `on` + event | `onPlay`, `onComplete` |

## Variable & Constant Naming

| Pattern | Convention | Examples |
|---------|-----------|---------|
| Constants (module) | `UPPER_SNAKE_CASE` | `SM2_INITIAL_EASE`, `MAX_REVIEW_PHRASES` |
| Constant objects | `UPPER_SNAKE_CASE` | `SM2_DEFAULTS`, `DESIGN_TOKENS` |
| Local constants | `camelCase` | `borderColor`, `nextInterval` |
| State variables | `camelCase` | `phrases`, `isPlaying`, `progress` |
| Refs | `nounRef` suffix | `audioRef`, `timerRef`, `progressRef` |
| IDs | `camelCase` + `Id` | `phraseId`, `lessonId`, `moduleId` |

## Type Naming

| Pattern | Convention | Examples |
|---------|-----------|---------|
| Interfaces (shapes) | PascalCase noun | `Phrase`, `Lesson`, `Module` |
| Type aliases (unions) | PascalCase noun | `ExerciseType`, `LessonStep` |
| Props interfaces | `ComponentNameProps` | `PhraseCardProps`, `LessonFlowProps` |
| Hook return types | `UseHookNameReturn` | `UseAudioPlayerReturn` |

## Constants with JSDoc

All timing and configuration constants should have JSDoc comments explaining their purpose and unit:

```typescript
/** Default ease factor for SM-2 spaced repetition */
export const SM2_INITIAL_EASE = 2.5;

/** Minimum ease factor — never drops below this */
export const SM2_MIN_EASE = 1.3;

/** Max phrases per review session */
export const MAX_REVIEW_PHRASES = 10;
```

## Boolean Props and Variables

Always prefix booleans with `is`, `has`, `should`, or `can`:

```typescript
// Props
interface AudioPlayerProps {
  isPlaying?: boolean;
  hasAudio?: boolean;
}

// Local variables
const isOffline = !navigator.onLine;
const hasCompletedLesson = progress.every((p) => p.reviewed);
```

## CSS Class Variables

Use descriptive names that explain intent, not appearance:

```typescript
const borderColor = isActive ? "border-primary" : "border-gray-200";
const animationClass = isEntering ? "animate-slide-up" : "";
```

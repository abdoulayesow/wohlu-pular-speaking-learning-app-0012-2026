# React Components & Hooks Patterns

Codebase-grounded examples for React component and hooks patterns.

## Hook Extraction Pattern

Extract hooks when a component grows beyond 150 lines or when logic can be independently tested/reused.

**Example: Lesson page could extract hooks**

| Hook | Concern |
|------|---------|
| `useAudioPlayer` | Manages audio playback, loading, and error states |
| `useSpacedRepetition` | SM-2 algorithm state and review scheduling |
| `useLessonProgress` | Tracks position within a lesson flow |

The page component stays under 150 lines and just composes the hooks:

```typescript
export default function LessonPage() {
  const { phrases, currentPhrase } = useLessonProgress(lessonId);
  const { play, isPlaying } = useAudioPlayer();
  const { schedule, nextReview } = useSpacedRepetition(phrases);
  // ... layout and rendering only
}
```

## Optimistic Update Pattern

Update UI immediately, rollback on failure.

```typescript
const updateProgress = useCallback(async (phraseId: string, quality: number) => {
  // 1. Save previous state for rollback
  const prev = progressRef.current;

  // 2. Optimistically update UI
  setProgress((progress) =>
    progress.map((p) =>
      p.phraseId === phraseId
        ? { ...p, ease: calculateNewEase(p.ease, quality) }
        : p
    )
  );

  // 3. Call Supabase; rollback on failure
  try {
    await supabase.from("progress").upsert({ phrase_id: phraseId, ease: newEase });
  } catch {
    setProgress(prev);
  }
}, []);
```

Key elements:
- `progressRef.current` captures state at call time (not stale closure)
- Functional `setProgress(prev => ...)` avoids stale state bugs
- Empty `catch` is intentional — rollback is the only recovery action

## `useRef` Patterns

### Ref for latest state (avoid stale closures)

```typescript
const progressRef = useRef(progress);
progressRef.current = progress;  // Always in sync
```

### Ref for timer tracking

```typescript
// Collect timers in a Set for cleanup
const pendingTimersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

// In effect: add timer to set
pendingTimersRef.current.add(timer);

// In cleanup: clear all timers
useEffect(() => {
  const timers = pendingTimersRef.current;
  return () => {
    for (const timer of timers) clearTimeout(timer);
    timers.clear();
  };
}, []);
```

### Ref for deduplication

```typescript
// Track which phrases have been scheduled for review
const scheduledRef = useRef<Set<string>>(new Set());
```

## Functional State Updates

Always use the callback form when new state depends on previous state.

```typescript
// Correct — functional update
setReviewQueue((prev) => prev.filter((p) => p.id !== phraseId));
setPhrases((prev) => [...prev, newPhrase]);

// Wrong — stale closure risk
setReviewQueue(reviewQueue.filter((p) => p.id !== phraseId));
```

## Props Interface Naming

Define props with `interface ComponentNameProps` directly above the component.

```typescript
// components/PhraseCard.tsx
interface PhraseCardProps {
  phrase: Phrase;
  onPlay?: (audioRef: string) => void;
  onMarkLearned?: (phraseId: string) => Promise<void>;
}

export default function PhraseCard({ phrase, onPlay, onMarkLearned }: PhraseCardProps) {
  // ...
}
```

Conventions:
- Callback props: `on` prefix (`onPlay`, `onMarkLearned`)
- Optional callbacks: use `?` when the component can render without them
- Boolean props: `is/has` prefix (`isPlaying`, `hasAudio`)

## When to Use `useCallback` / `useMemo`

Use `useCallback` when:
- The function is passed as a prop to child components
- The function is used as a dependency of `useEffect`
- The function performs expensive operations (API calls, state rollback)

**Don't** use `useCallback`/`useMemo` for:
- Simple inline handlers that aren't passed as props
- Cheap computations
- Functions only used within the same component's render

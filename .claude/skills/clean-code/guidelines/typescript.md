# TypeScript Patterns

Codebase-grounded examples for TypeScript patterns used in this project.

## `as const` for Constant Objects

Use `as const` to get literal types from constant objects. This enables type-safe lookups and exhaustive checking.

```typescript
// lib/constants.ts — correct
export const SM2_DEFAULTS = {
  INITIAL_EASE: 2.5,
  MIN_EASE: 1.3,
  INITIAL_INTERVAL_DAYS: 1,
} as const;
```

Without `as const`, values would be typed as `number` instead of their literal types.

## `unknown` for External Data

Type external/untrusted data as `unknown`, not `any`. This forces explicit type narrowing before use.

```typescript
// Supabase query results should be typed via generated types
// For raw/untyped responses, use unknown
interface SupabaseResponse {
  data: unknown;
  error: unknown;
}
```

## `interface` vs `type`

Use `interface` for object shapes (extendable). Use `type` for unions and intersections.

```typescript
// Object shape — use interface
export interface Phrase {
  id: string;
  pular: string;
  english: string;
  audioRef: string;
  culturalNote?: string;
}

// Union — use type
export type ExerciseType = "listen-select" | "match-pairs" | "fill-blank";

// Intersection — use type
type PhraseWithProgress = Phrase & { lastReviewed: string; ease: number };
```

## Exhaustive Switch with `never`

When switching on a union type, handle all cases and use `never` to catch additions at compile time.

```typescript
function getExerciseLabel(type: ExerciseType): string {
  switch (type) {
    case "listen-select":
      return "Listen & Select";
    case "match-pairs":
      return "Match Pairs";
    case "fill-blank":
      return "Fill in the Blank";
    default: {
      const _exhaustive: never = type;
      throw new Error(`Unknown exercise type: ${_exhaustive}`);
    }
  }
}
```

If a new type is added to `ExerciseType`, TypeScript will error on the `never` assignment.

## Type Narrowing vs Assertion

Prefer runtime checks that narrow the type over `as` assertions.

```typescript
// Bad — assertion hides runtime errors
const phrase = data as Phrase;

// Good — narrowing with runtime validation
if (!data || typeof data !== "object" || !("id" in data)) {
  throw new Error("Invalid phrase data");
}
// TypeScript now knows data has an 'id' property
```

## Typed Records for State Machines

Use `Record` with explicit types for state transition maps.

```typescript
// Spaced repetition intervals
export const SM2_INTERVALS: Record<number, number> = {
  1: 1,   // 1 day
  2: 6,   // 6 days
  3: 15,  // 15 days
};
```

## `useRef` in Strict Mode

Always provide an initial value to `useRef` in TypeScript strict mode.

```typescript
// Correct — explicit initial value
const audioRef = useRef<HTMLAudioElement>(undefined);
const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
const phrasesRef = useRef<Phrase[]>([]);

// Wrong — TypeScript strict mode error
const audioRef = useRef<HTMLAudioElement>();
```

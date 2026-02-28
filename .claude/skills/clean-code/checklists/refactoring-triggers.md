# Refactoring Triggers

When to refactor and what to look for. If any of these conditions apply, consider refactoring before committing.

## Size Triggers

- [ ] **Component > 150 lines** -> Extract sub-component or custom hook
  - Example: Lesson page could extract `useAudioPlayer`, `useSpacedRepetition`, `useLessonProgress`
- [ ] **Function > 30 lines** -> Break into smaller functions with clear names
- [ ] **File > 200 lines** -> Split into focused modules

## Duplication Triggers

- [ ] **Same logic in 2+ places** -> Extract to `lib/utils.ts` or shared hook
- [ ] **Same Supabase query pattern** -> Extract to a shared function
- [ ] **Same audio playback logic** -> Extract to `useAudioPlayer` hook

## Complexity Triggers

- [ ] **Function > 3 parameters** -> Use an options object
  ```typescript
  // Before
  function scheduleReview(phraseId: string, ease: number, interval: number, quality: number) { }
  // After
  function scheduleReview(input: ScheduleReviewInput) { }
  ```
- [ ] **Boolean flag parameter** -> Split into two functions
  ```typescript
  // Before
  function updatePhrase(id: string, markComplete: boolean) { }
  // After
  function completePhrase(id: string) { }
  function resetPhrase(id: string) { }
  ```
- [ ] **Nested ternaries > 2 levels** -> Use early returns or a lookup object

## Magic Values

- [ ] **Magic number or string** -> Extract to `lib/constants.ts` with JSDoc
  - Example: `SM2_INITIAL_EASE = 2.5` should be in `constants.ts`, not local
- [ ] **Repeated timing value** -> Add to constants with `_MS` or `_DAYS` suffix

## React Anti-Patterns

- [ ] **`useEffect` for derived state** -> Compute directly in render
  ```typescript
  // Before — unnecessary effect
  const [fullName, setFullName] = useState("");
  useEffect(() => setFullName(`${first} ${last}`), [first, last]);
  // After — computed directly
  const fullName = `${first} ${last}`;
  ```
- [ ] **Inline `style={}` for static values** -> Use Tailwind class
- [ ] **Multiple `useState` for related values** -> Consider a single state object or `useReducer`
- [ ] **Missing cleanup in `useEffect`** -> Add `clearTimeout`, `clearInterval`, or `unsubscribe`

## Import Smell

- [ ] **Importing from a barrel file (`index.ts`)** -> Import directly from specific module
- [ ] **Circular imports** -> Restructure module boundaries

# Pre-Commit Code Review Checklist

Run through this checklist before committing changes.

## TypeScript

- [ ] No `any` types (use `unknown` for external data)
- [ ] Proper `interface` for object shapes, `type` for unions/intersections
- [ ] `as const` on constant objects
- [ ] All new types added to `lib/types.ts` (or colocated if component-specific)
- [ ] `useRef<T>(undefined)` with explicit initial value (strict mode)

## React Components

- [ ] Component is under 150 lines
- [ ] Props defined with `interface ComponentNameProps` above the component
- [ ] Functional state updates when depending on previous state: `setState(prev => ...)`
- [ ] No derived state stored in `useState` (compute in render instead)
- [ ] `key` prop uses stable IDs on list items (not array index when list reorders)

## Custom Hooks

- [ ] All `useEffect` side effects have cleanup (timers, subscriptions, event listeners)
- [ ] All timers collected and cleaned up (not just the first one)
- [ ] Hook return type is well-defined
- [ ] Dependencies array is correct (no missing deps, no unnecessary deps)

## Supabase Client Calls

- [ ] `.error` checked on every Supabase response before using `.data`
- [ ] Guard clauses with early returns for validation
- [ ] Upsert used for idempotent operations (progress sync)
- [ ] No service role key in client-side code
- [ ] Offline fallback considered for critical paths

## Security

- [ ] No secrets in client code (only `VITE_` prefixed values in client bundle)
- [ ] Input validated at system boundaries (user input, Supabase responses)
- [ ] No child PII collected or stored
- [ ] No camera or microphone access requested

## Naming

- [ ] Functions: verb-first (`fetchPhrases`, `updateProgress`)
- [ ] Event handlers: `handle` prefix; callback props: `on` prefix
- [ ] Booleans: `is/has/should/can` prefix
- [ ] Constants: `UPPER_SNAKE_CASE` with JSDoc comment
- [ ] Types: `ComponentNameProps`, `UseHookNameReturn`

## Constants & DRY

- [ ] No magic numbers or strings (extract to `lib/constants.ts`)
- [ ] No duplicated logic across files (extract to shared utility or hook)
- [ ] Design tokens use Tailwind theme values

## Testing

- [ ] New behavior has corresponding tests
- [ ] Tests follow AAA pattern (Arrange -> Act -> Assert)
- [ ] Mocks at module boundaries (`vi.mock()`)
- [ ] Edge cases covered (null, empty, invalid, offline)
- [ ] `beforeEach` clears mocks (`vi.clearAllMocks()`)

## Styling

- [ ] Tailwind classes for layout and spacing (not inline styles)
- [ ] Touch targets minimum 48px
- [ ] Warm, encouraging tone — no negative feedback, scores, or time pressure
- [ ] No external links in child-facing screens

## Final Verification

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

All four commands must pass before committing.

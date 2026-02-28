# Testing Patterns

Codebase-grounded examples for testing with Vitest.

## AAA Pattern

Every test follows Arrange -> Act -> Assert.

```typescript
it("calculates next review interval correctly", () => {
  // Arrange — set up test data
  const phrase = { ease: 2.5, interval: 1, repetitions: 1 };

  // Act — call the function under test
  const result = calculateNextReview(phrase, 4);

  // Assert — verify outcomes
  expect(result.interval).toBe(6);
  expect(result.ease).toBeCloseTo(2.5);
});
```

## Module Boundary Mocking

Mock at module boundaries using `vi.mock()`. Place mock declarations **before** imports.

```typescript
// 1. Mock declarations (before imports)
vi.mock("../lib/supabase", () => ({
  supabase: {
    from: vi.fn(),
    auth: { getUser: vi.fn() },
  },
}));

// 2. Imports (after mocks — Vitest hoists mocks automatically)
import { supabase } from "../lib/supabase";
```

## Environment Variable Stubbing

Use `vi.stubEnv()` for environment variables. Always clean up with `vi.unstubAllEnvs()`.

```typescript
describe("requireEnv", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_SUPABASE_URL", "https://test.supabase.co");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("throws when env var is missing", () => {
    vi.stubEnv("VITE_SUPABASE_URL", "");
    expect(() => requireEnv("VITE_SUPABASE_URL")).toThrow();
  });
});
```

## Edge Case Coverage

Test the boundaries, not just the happy path:

| Edge Case | What It Tests |
|-----------|---------------|
| Empty phrase list | Lesson with no phrases renders gracefully |
| Missing audio file | Audio player handles missing file without crashing |
| Offline mode | Core lesson flow works without network |
| Duplicate progress sync | Upsert prevents duplicate records |
| SM-2 minimum ease | Ease factor never drops below 1.3 |

## Test File Organization

Mirror the source directory structure for test files:

```
src/
  App.test.tsx                  # App component test
  lib/
    spaced-repetition.test.ts   # SM-2 algorithm tests
  hooks/
    useAudioPlayer.test.ts      # Audio hook tests
```

## Test Naming

Use descriptive `it("...")` strings that read as behavior specifications:

```typescript
it("renders the app name")
it("calculates next review interval correctly")
it("handles offline gracefully")
it("never drops ease below minimum threshold")
it("syncs progress to Supabase on completion")
```

## `beforeEach` Cleanup

Always reset mocks between tests to prevent state leakage:

```typescript
beforeEach(() => {
  vi.clearAllMocks();
});
```

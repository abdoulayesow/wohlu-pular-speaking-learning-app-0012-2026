# Supabase Client Patterns

Codebase-grounded examples for Supabase client usage in Wohlu.

## Call Structure: Validate -> Query -> Handle Error -> Return

Every Supabase call follows this sequence:

```typescript
async function fetchLessonPhrases(lessonId: string): Promise<Phrase[]> {
  // 1. VALIDATE — guard clauses
  if (!lessonId) {
    throw new Error("lessonId is required");
  }

  // 2. QUERY — call Supabase
  const { data, error } = await supabase
    .from("phrases")
    .select("id, pular, english, audio_ref, cultural_note")
    .eq("lesson_id", lessonId)
    .order("sort_order");

  // 3. HANDLE ERROR — check before using data
  if (error) {
    throw new Error(`Failed to fetch phrases: ${error.message}`);
  }

  // 4. RETURN — typed data
  return data;
}
```

## Guard Clauses and Early Returns

Validate at the top; return or throw immediately. This keeps the happy path unindented.

```typescript
// Auth check first
const { data: { user }, error: authError } = await supabase.auth.getUser();
if (authError || !user) {
  throw new Error("Not authenticated");
}

// Input validation
if (!moduleId) {
  throw new Error("moduleId is required");
}
```

## Always Check `.error`

Every Supabase query can fail. Always check `.error` before using `.data`.

```typescript
// Good — error checked
const { data, error } = await supabase.from("progress").select("*").eq("user_id", userId);
if (error) {
  console.error("Failed to fetch progress:", error.message);
  return [];
}
return data;

// Bad — error ignored, data could be null
const { data } = await supabase.from("progress").select("*");
return data.map(...); // Runtime error if query failed
```

## Row-Level Security (RLS)

Rely on RLS policies for authorization. The Supabase client automatically uses the authenticated user's JWT.

```typescript
// RLS policy ensures users only see their own progress
// No manual user_id filtering needed in client code
const { data } = await supabase
  .from("progress")
  .select("*");
// RLS policy: auth.uid() = user_id
```

Never use the service role key in client-side code — it bypasses RLS.

## Upsert for Idempotent Operations

Use upsert for progress syncing to handle both insert and update cases:

```typescript
const { error } = await supabase
  .from("progress")
  .upsert({
    user_id: userId,
    phrase_id: phraseId,
    ease: newEase,
    interval: newInterval,
    next_review: nextReviewDate,
  }, {
    onConflict: "user_id,phrase_id",
  });
```

## Typed Queries

Use the generated database types for type-safe queries:

```typescript
import type { Database } from "../lib/database.types";

type PhraseRow = Database["public"]["Tables"]["phrases"]["Row"];

const { data } = await supabase
  .from("phrases")
  .select("*")
  .returns<PhraseRow[]>();
```

## Offline-First Pattern

For offline support, check network status before syncing:

```typescript
async function syncProgress(pending: ProgressUpdate[]): Promise<void> {
  if (!navigator.onLine) {
    // Queue for later — stored in localStorage or IndexedDB
    return;
  }

  for (const update of pending) {
    const { error } = await supabase.from("progress").upsert(update);
    if (error) {
      // Keep in queue for retry
      continue;
    }
    // Remove from pending queue
  }
}
```

## Storage for Audio Files

Use Supabase Storage for audio file access:

```typescript
function getAudioUrl(audioRef: string): string {
  const { data } = supabase.storage
    .from("audio")
    .getPublicUrl(audioRef);
  return data.publicUrl;
}
```

Audio files are cached by the service worker for offline use.

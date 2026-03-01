import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock Supabase to prevent real network calls during tests.
// Test-specific env vars (VITE_SUPABASE_URL etc.) are loaded from .env.test.
vi.mock("@supabase/supabase-js", () => ({
  createClient: () => ({
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => Promise.resolve({ data: [], error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      upsert: () => Promise.resolve({ data: null, error: null }),
    }),
    auth: {
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: vi.fn() } },
      }),
      getSession: () =>
        Promise.resolve({ data: { session: null }, error: null }),
      signUp: () =>
        Promise.resolve({ data: { user: null, session: null }, error: null }),
      signInWithPassword: () =>
        Promise.resolve({ data: { user: null, session: null }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
    },
  }),
}));

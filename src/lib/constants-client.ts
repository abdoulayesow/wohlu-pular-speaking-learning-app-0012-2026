/** Client-safe constants — safe to bundle into the browser */

function requireEnv(key: string): string {
  const value: unknown = import.meta.env[key];
  if (typeof value !== "string" || value === "") {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
}

export const SUPABASE_URL = requireEnv("VITE_SUPABASE_URL");
export const SUPABASE_ANON_KEY = requireEnv("VITE_SUPABASE_ANON_KEY");
export const PLAUSIBLE_DOMAIN = requireEnv("VITE_PLAUSIBLE_DOMAIN");

/**
 * Server-only constants — NEVER import this file in client-side code.
 * These values must only be used in API routes or server functions.
 */

const value = process.env["SUPABASE_SERVICE_ROLE_KEY"];
if (!value) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
export const SUPABASE_SERVICE_ROLE_KEY: string = value;

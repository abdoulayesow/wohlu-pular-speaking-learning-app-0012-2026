import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./constants-client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

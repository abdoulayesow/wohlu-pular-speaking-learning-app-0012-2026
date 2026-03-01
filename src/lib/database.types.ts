/** Generated-style Supabase database types — keep in sync with migrations */

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          email: string;
          reason: string | null;
          source: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          reason?: string | null;
          source?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          reason?: string | null;
          source?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          onboarding_completed: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          onboarding_completed?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          display_name?: string | null;
          onboarding_completed?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          completed_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          lesson_id?: string;
          completed_at?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      phrase_progress: {
        Row: {
          id: string;
          user_id: string;
          phrase_id: string;
          easiness_factor: number;
          interval_days: number;
          repetitions: number;
          next_review: string;
          last_reviewed: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          phrase_id: string;
          easiness_factor?: number;
          interval_days?: number;
          repetitions?: number;
          next_review?: string;
          last_reviewed?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          phrase_id?: string;
          easiness_factor?: number;
          interval_days?: number;
          repetitions?: number;
          next_review?: string;
          last_reviewed?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      streaks: {
        Row: {
          id: string;
          user_id: string;
          current_streak: number;
          longest_streak: number;
          last_activity_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          current_streak?: number;
          longest_streak?: number;
          last_activity_date?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          current_streak?: number;
          longest_streak?: number;
          last_activity_date?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
  };
}

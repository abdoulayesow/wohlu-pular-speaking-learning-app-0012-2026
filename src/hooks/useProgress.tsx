import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "./useAuth";
import type { LessonProgress, PhraseProgress, Streak } from "../content/schema";
import {
  SM2_INITIAL_EASE,
  SM2_MIN_EASE,
  SM2_INITIAL_INTERVAL_DAYS,
} from "../lib/constants";

interface ProgressContextValue {
  lessons: LessonProgress[];
  phrases: PhraseProgress[];
  streak: Streak;
  markLessonComplete: (lessonId: string) => Promise<void>;
  updatePhraseReview: (phraseId: string, quality: number) => Promise<void>;
  phrasesReadyForReview: () => PhraseProgress[];
  isLessonComplete: (lessonId: string) => boolean;
  completedLessonCount: (moduleId: string, lessonIds: string[]) => number;
}

const DEFAULT_STREAK: Streak = {
  current_streak: 0,
  longest_streak: 0,
  last_activity_date: "",
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [lessons, setLessons] = useState<LessonProgress[]>([]);
  const [phrases, setPhrases] = useState<PhraseProgress[]>([]);
  const [streak, setStreak] = useState<Streak>(DEFAULT_STREAK);

  useEffect(() => {
    if (!user) return;

    async function loadProgress() {
      const [lessonRes, phraseRes, streakRes] = await Promise.all([
        supabase.from("lesson_progress").select("*"),
        supabase.from("phrase_progress").select("*"),
        supabase.from("streaks").select("*"),
      ]);

      if (lessonRes.data) {
        setLessons(
          lessonRes.data.map((row) => ({
            lesson_id: row.lesson_id,
            completed: !!row.completed_at,
            completed_at: row.completed_at,
          })),
        );
      }
      if (phraseRes.data) {
        setPhrases(
          phraseRes.data.map((row) => ({
            phrase_id: row.phrase_id,
            ease_factor: row.easiness_factor,
            interval: row.interval_days,
            next_review: row.next_review,
            repetitions: row.repetitions,
          })),
        );
      }
      if (streakRes.data && streakRes.data.length > 0) {
        const row = streakRes.data[0];
        setStreak({
          current_streak: row.current_streak,
          longest_streak: row.longest_streak,
          last_activity_date: row.last_activity_date ?? "",
        });
      }
    }

    void loadProgress();
  }, [user]);

  const markLessonComplete = useCallback(
    async (lessonId: string) => {
      const now = new Date().toISOString();
      const entry: LessonProgress = {
        lesson_id: lessonId,
        completed: true,
        completed_at: now,
      };

      setLessons((prev) => {
        const idx = prev.findIndex((l) => l.lesson_id === lessonId);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = entry;
          return updated;
        }
        return [...prev, entry];
      });

      if (user) {
        await supabase.from("lesson_progress").upsert({
          user_id: user.id,
          lesson_id: lessonId,
          completed_at: now,
        });
      }
    },
    [user],
  );

  const updatePhraseReview = useCallback(
    async (phraseId: string, quality: number) => {
      setPhrases((prev) => {
        const existing = prev.find((p) => p.phrase_id === phraseId);
        const updated = computeSM2(existing, phraseId, quality);
        const filtered = prev.filter((p) => p.phrase_id !== phraseId);
        return [...filtered, updated];
      });

      if (user) {
        const existing = phrases.find((p) => p.phrase_id === phraseId);
        const updated = computeSM2(existing, phraseId, quality);
        await supabase.from("phrase_progress").upsert({
          user_id: user.id,
          phrase_id: updated.phrase_id,
          easiness_factor: updated.ease_factor,
          interval_days: updated.interval,
          next_review: updated.next_review,
          repetitions: updated.repetitions,
        });
      }
    },
    [user, phrases],
  );

  const phrasesReadyForReview = useCallback((): PhraseProgress[] => {
    const now = new Date().toISOString();
    return phrases.filter((p) => p.next_review <= now);
  }, [phrases]);

  const isLessonComplete = useCallback(
    (lessonId: string): boolean => {
      return lessons.some((l) => l.lesson_id === lessonId && l.completed);
    },
    [lessons],
  );

  const completedLessonCount = useCallback(
    (_moduleId: string, lessonIds: string[]): number => {
      return lessonIds.filter((id) =>
        lessons.some((l) => l.lesson_id === id && l.completed),
      ).length;
    },
    [lessons],
  );

  return (
    <ProgressContext.Provider
      value={{
        lessons,
        phrases,
        streak,
        markLessonComplete,
        updatePhraseReview,
        phrasesReadyForReview,
        isLessonComplete,
        completedLessonCount,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

function computeSM2(
  existing: PhraseProgress | undefined,
  phraseId: string,
  quality: number,
): PhraseProgress {
  const ease = existing?.ease_factor ?? SM2_INITIAL_EASE;
  const reps = existing?.repetitions ?? 0;
  const interval = existing?.interval ?? SM2_INITIAL_INTERVAL_DAYS;

  let newEase = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (newEase < SM2_MIN_EASE) newEase = SM2_MIN_EASE;

  let newInterval: number;
  let newReps: number;

  if (quality < 3) {
    newReps = 0;
    newInterval = SM2_INITIAL_INTERVAL_DAYS;
  } else {
    newReps = reps + 1;
    if (newReps === 1) {
      newInterval = 1;
    } else if (newReps === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEase);
    }
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + newInterval);

  return {
    phrase_id: phraseId,
    ease_factor: newEase,
    interval: newInterval,
    next_review: nextReview.toISOString(),
    repetitions: newReps,
  };
}

/** Content schema types for Wohlu lesson data */

export interface Phrase {
  id: string;
  pular: string;
  english: string;
  audio: string;
  cultural_note: string;
  category: string;
}

export interface Exercise {
  type: "match_phrase_to_meaning" | "audio_to_illustration";
  phrase_ids: string[];
  instruction: string;
}

export interface Tindol {
  pular: string;
  english: string;
  audio: string;
}

export interface Lesson {
  module_id: string;
  lesson_id: string;
  title: string;
  situation_description: string;
  illustration: string;
  phrases: Phrase[];
  exercises: Exercise[];
  tindol: Tindol | null;
  next_lesson: string | null;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

/** Progress tracking types */

export interface PhraseProgress {
  phrase_id: string;
  ease_factor: number;
  interval: number;
  next_review: string;
  repetitions: number;
}

export interface LessonProgress {
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
}

export interface Streak {
  current_streak: number;
  longest_streak: number;
  last_activity_date: string;
}

import { Link } from "react-router";
import type { Lesson } from "../../content/schema";

interface LessonCompleteProps {
  lesson: Lesson;
}

function LessonComplete({ lesson }: LessonCompleteProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* CSS-only star celebration */}
      <div className="relative mb-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent-gold/20">
          <svg
            className="h-14 w-14 text-accent-gold"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Decorative sparkle dots */}
        <div className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-primary/60" aria-hidden="true" />
        <div className="absolute -left-3 top-4 h-2 w-2 rounded-full bg-accent-gold/60" aria-hidden="true" />
        <div className="absolute -bottom-1 right-3 h-2 w-2 rounded-full bg-success/60" aria-hidden="true" />
      </div>

      <h2 className="mb-2 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
        You did it!
      </h2>
      <p className="mb-2 text-lg font-medium text-primary">
        {lesson.title}
      </p>
      <p className="mb-8 text-slate-500 dark:text-slate-400">
        You learned {lesson.phrases.length} new phrases. Jaraama!
      </p>

      <div className="flex w-full flex-col gap-3">
        {lesson.next_lesson && (
          <Link
            to={`/modules/${lesson.module_id}/lessons/${lesson.next_lesson}`}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Next Lesson
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        )}

        <Link
          to={`/modules/${lesson.module_id}`}
          className="flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-slate-200 font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Back to Module
        </Link>
      </div>
    </div>
  );
}

export default LessonComplete;

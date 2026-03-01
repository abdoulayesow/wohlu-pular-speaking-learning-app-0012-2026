import { Link } from "react-router";
import type { Lesson } from "../../content/schema";

type LessonStatus = "completed" | "active" | "locked";

interface LessonListItemProps {
  lesson: Lesson;
  status: LessonStatus;
}

function LessonListItem({ lesson, status }: LessonListItemProps) {
  if (status === "active") {
    return (
      <Link
        to={`/modules/${lesson.module_id}/lessons/${lesson.lesson_id}`}
        className="flex items-center gap-4 rounded-xl bg-primary p-4 text-white shadow-lg shadow-primary/20 ring-4 ring-primary/10 transition-shadow hover:shadow-xl"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold">{lesson.title}</h4>
          <p className="text-sm text-white/90">{lesson.situation_description.slice(0, 60)}...</p>
        </div>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    );
  }

  if (status === "completed") {
    return (
      <Link
        to={`/modules/${lesson.module_id}/lessons/${lesson.lesson_id}`}
        className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg className="h-6 w-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 dark:text-slate-200">{lesson.title}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{lesson.situation_description.slice(0, 60)}...</p>
        </div>
        <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      </Link>
    );
  }

  // Locked
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 opacity-60 dark:border-slate-700 dark:bg-slate-800/30">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-500 dark:text-slate-400">{lesson.title}</h4>
        <p className="text-sm text-slate-400 dark:text-slate-500">{lesson.situation_description.slice(0, 60)}...</p>
      </div>
    </div>
  );
}

export default LessonListItem;

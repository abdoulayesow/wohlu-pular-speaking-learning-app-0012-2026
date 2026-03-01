import { Link, useParams } from "react-router";
import { getModule } from "../content/loader";
import { useProgress } from "../hooks/useProgress";
import BottomNav from "../components/shared/BottomNav";
import ProgressBar from "../components/shared/ProgressBar";
import LessonListItem from "../components/module/LessonListItem";
import type { LessonStep } from "../hooks/useLessonState";

function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = getModule(moduleId ?? "");
  const { isLessonComplete } = useProgress();

  if (!mod) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-light dark:bg-bg-dark">
        <p className="text-slate-500">Module not found.</p>
      </div>
    );
  }

  const completedCount = mod.lessons.filter((l) =>
    isLessonComplete(l.lesson_id),
  ).length;
  const totalLessons = mod.lessons.length;
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Determine lesson statuses
  function getLessonStatus(index: number): LessonStep | "completed" | "active" | "locked" {
    const lesson = mod!.lessons[index];
    if (isLessonComplete(lesson.lesson_id)) return "completed";
    // First incomplete lesson is active
    const firstIncompleteIndex = mod!.lessons.findIndex(
      (l) => !isLessonComplete(l.lesson_id),
    );
    if (index === firstIncompleteIndex) return "active";
    return "locked";
  }

  return (
    <div className="min-h-screen bg-bg-light pb-24 dark:bg-bg-dark">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 border-b border-primary/10 bg-bg-light/95 px-4 py-4 backdrop-blur-sm dark:bg-bg-dark/95">
        <div className="mx-auto flex max-w-2xl items-center gap-4">
          <Link
            to="/home"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Back to home"
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {mod.title}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl pb-6">
        {/* Module intro + progress */}
        <section className="bg-gradient-to-br from-primary/5 to-transparent p-6">
          <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
            {mod.description}
          </p>
          <div className="rounded-xl border border-primary/5 bg-white p-4 shadow-sm dark:bg-slate-800/50">
            <div className="mb-2 flex items-end justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Module Progress
              </span>
              <span className="text-sm font-medium text-slate-500">
                {completedCount} of {totalLessons} lessons complete
              </span>
            </div>
            <ProgressBar value={progress} />
          </div>
        </section>

        {/* Lesson list */}
        <section className="space-y-4 px-6 py-4">
          <h3 className="mb-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            Lessons
          </h3>
          {mod.lessons.map((lesson, i) => (
            <LessonListItem
              key={lesson.lesson_id}
              lesson={lesson}
              status={getLessonStatus(i) as "completed" | "active" | "locked"}
            />
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default ModulePage;

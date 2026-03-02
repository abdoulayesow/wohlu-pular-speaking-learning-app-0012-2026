import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useProgress } from "../hooks/useProgress";
import { getAllModules } from "../content/loader";
import BottomNav from "../components/shared/BottomNav";
import ContinueLearningCard from "../components/home/ContinueLearningCard";
import DailyReviewCard from "../components/home/DailyReviewCard";
import ModuleListCard from "../components/home/ModuleListCard";

function HomePage() {
  const { user } = useAuth();
  const { isLessonComplete, phrasesReadyForReview, streak } = useProgress();
  const modules = getAllModules();

  const nextLesson = findNextLesson(modules, isLessonComplete);
  const reviewCount = phrasesReadyForReview().length;

  return (
    <div className="min-h-screen bg-bg-light pb-24 dark:bg-bg-dark">
      {/* Header */}
      <header className="bg-pattern rounded-b-[2rem] bg-[#fdfaf3] p-6 pb-8 shadow-sm dark:bg-[#2a1a10]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            {streak.current_streak > 0 && (
              <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="text-sm text-primary" aria-hidden="true">
                  &hearts;
                </span>
                <span className="text-sm font-bold tracking-tight text-primary">
                  {streak.current_streak}-day streak
                </span>
              </div>
            )}
            <Link
              to="/settings"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/20"
              aria-label="Profile"
            >
              <svg
                className="h-5 w-5 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Jam waali,
            </h1>
            <p className="text-2xl font-medium text-primary">
              {user?.email?.split("@")[0] ?? "Learner"}!
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto -mt-6 max-w-2xl space-y-6 px-4 pb-6">
        {nextLesson && (
          <ContinueLearningCard
            module={nextLesson.module}
            lesson={nextLesson.lesson}
            progress={nextLesson.progress}
          />
        )}

        <DailyReviewCard reviewCount={reviewCount} />

        {/* Modules section */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Your Modules
          </h3>
          {modules.map((mod, i) => {
            const completedCount = mod.lessons.filter((l) =>
              isLessonComplete(l.lesson_id),
            ).length;
            const locked = i > 0 && !isPreviousModuleComplete(modules, i, isLessonComplete);

            return (
              <ModuleListCard
                key={mod.id}
                module={mod}
                completedCount={completedCount}
                locked={locked}
              />
            );
          })}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function findNextLesson(
  modules: ReturnType<typeof getAllModules>,
  isComplete: (id: string) => boolean,
) {
  for (const mod of modules) {
    for (let i = 0; i < mod.lessons.length; i++) {
      const lesson = mod.lessons[i];
      if (!isComplete(lesson.lesson_id)) {
        const completedBefore = mod.lessons
          .slice(0, i)
          .filter((l) => isComplete(l.lesson_id)).length;
        const progress = Math.round((completedBefore / mod.lessons.length) * 100);
        return { module: mod, lesson, progress };
      }
    }
  }
  return null;
}

function isPreviousModuleComplete(
  modules: ReturnType<typeof getAllModules>,
  currentIndex: number,
  isComplete: (id: string) => boolean,
): boolean {
  if (currentIndex === 0) return true;
  const prevModule = modules[currentIndex - 1];
  return prevModule.lessons.every((l) => isComplete(l.lesson_id));
}

export default HomePage;

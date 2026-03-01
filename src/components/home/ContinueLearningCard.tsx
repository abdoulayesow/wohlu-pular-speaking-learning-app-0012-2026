import { Link } from "react-router";
import type { Lesson, Module } from "../../content/schema";
import ProgressBar from "../shared/ProgressBar";

interface ContinueLearningCardProps {
  module: Module;
  lesson: Lesson;
  progress: number;
}

function ContinueLearningCard({
  module,
  lesson,
  progress,
}: ContinueLearningCardProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-xl">
      {/* Decorative circle */}
      <div
        className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-white/80">
          Continue Learning
        </span>
        <h3 className="mt-2 mb-1 text-xl font-bold">{lesson.title}</h3>
        <p className="mb-4 text-sm text-white/90">{module.title}</p>

        <div className="mb-6 space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span>Lesson Progress</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} color="white" />
        </div>

        <Link
          to={`/modules/${module.id}/lessons/${lesson.lesson_id}`}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-white font-bold text-primary shadow-lg transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <span>Continue</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default ContinueLearningCard;

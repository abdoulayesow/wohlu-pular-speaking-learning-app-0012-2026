import { Link } from "react-router";
import type { Module } from "../../content/schema";
import ProgressBar from "../shared/ProgressBar";

interface ModuleListCardProps {
  module: Module;
  completedCount: number;
  locked: boolean;
}

function ModuleListCard({ module, completedCount, locked }: ModuleListCardProps) {
  const totalLessons = module.lessons.length;
  const progress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  const card = (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-sm transition-shadow dark:bg-slate-800/50 ${
        locked
          ? "border-slate-200/60 opacity-75 dark:border-slate-700/60"
          : "border-slate-200 hover:shadow-lg dark:border-slate-700"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-2 ${
              locked
                ? "bg-slate-100 dark:bg-slate-700"
                : "bg-primary/10"
            }`}
          >
            <svg
              className={`h-6 w-6 ${locked ? "text-slate-400" : "text-primary"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4
              className={`text-sm font-bold ${
                locked
                  ? "text-slate-600 dark:text-slate-400"
                  : "text-slate-900 dark:text-slate-100"
              }`}
            >
              {module.title}
            </h4>
            <p className="text-xs text-slate-500">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
        </div>

        {locked ? (
          <svg
            className="h-5 w-5 text-slate-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5 text-slate-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </div>

      <ProgressBar value={progress} color={locked ? "primary" : "primary"} />
    </div>
  );

  if (locked) return card;

  return (
    <Link to={`/modules/${module.id}`} className="block">
      {card}
    </Link>
  );
}

export default ModuleListCard;

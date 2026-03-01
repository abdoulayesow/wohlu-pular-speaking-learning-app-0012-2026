interface DailyReviewCardProps {
  reviewCount: number;
}

function DailyReviewCard({ reviewCount }: DailyReviewCardProps) {
  return (
    <section className="flex items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-orange-100/50 p-5 dark:bg-primary/10">
      <div className="flex-1">
        <h4 className="font-bold text-slate-900 dark:text-slate-100">
          Daily Review
        </h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {reviewCount > 0
            ? `${reviewCount} phrase${reviewCount === 1 ? "" : "s"} ready for review.`
            : "All caught up! Great work."}
        </p>
      </div>

      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-bg-dark">
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
    </section>
  );
}

export default DailyReviewCard;

interface ProgressDotsProps {
  total: number;
  current: number;
}

function ProgressDots({ total, current }: ProgressDotsProps) {
  const indices = Array.from({ length: total }, (_, i) => i);

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Step ${current + 1} of ${total}`}
    >
      {indices.map((i) => (
        <div
          key={i}
          aria-hidden="true"
          className={[
            "rounded-full transition-all duration-300",
            i === current
              ? "h-3 w-8 bg-primary"
              : "h-2.5 w-2.5 bg-slate-300 dark:bg-slate-600",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default ProgressDots;

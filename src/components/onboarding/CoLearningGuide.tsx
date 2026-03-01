const TIPS = [
  {
    emoji: "🎧",
    title: "Listen first",
    description:
      "Play the audio and listen together before trying to repeat. Let the sounds wash over you.",
    bg: "bg-primary/5 dark:bg-primary/10",
  },
  {
    emoji: "👐",
    title: "Repeat together",
    description:
      "Say each phrase at the same time. Children love when parents make mistakes too!",
    bg: "bg-accent-gold/5 dark:bg-accent-gold/10",
  },
  {
    emoji: "🌟",
    title: "Celebrate effort",
    description:
      "Every attempt is progress. Praise trying, not perfection. Joy is the best teacher.",
    bg: "bg-accent-green/5 dark:bg-accent-green/10",
  },
] as const;

interface CoLearningGuideProps {
  onNext: () => void;
}

function CoLearningGuide({ onNext }: CoLearningGuideProps) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-center font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
        How to learn together
      </h1>

      <ul className="mb-8 space-y-4">
        {TIPS.map((tip) => (
          <li
            key={tip.title}
            className={`flex items-start gap-4 rounded-2xl p-4 ${tip.bg}`}
          >
            <span className="text-3xl leading-none" aria-hidden="true">
              {tip.emoji}
            </span>
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                {tip.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onNext}
        className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Next
      </button>
    </div>
  );
}

export default CoLearningGuide;

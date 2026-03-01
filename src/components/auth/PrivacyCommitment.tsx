const GUARANTEES = [
  {
    title: "No camera access — ever",
    description:
      "We never request camera permissions. Learning is audio and touch only.",
  },
  {
    title: "No child data stored",
    description:
      "You are the sole account holder. No names, ages, or child information collected.",
  },
  {
    title: "No ads or third-party tracking",
    description:
      "Plausible Analytics only — cookieless and privacy-first. Your data is never sold.",
  },
  {
    title: "Works offline",
    description:
      "Core lessons cache to your device. Your family\u2019s progress stays with you.",
  },
] as const;

function CheckCircleIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface PrivacyCommitmentProps {
  onAccept: () => void;
}

function PrivacyCommitment({ onAccept }: PrivacyCommitmentProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 font-serif text-3xl">Our promise to your family</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Before you begin, we want to be fully transparent.
        </p>
      </div>

      <ul className="space-y-4 rounded-2xl border border-primary/10 bg-accent-gold/5 p-6 dark:border-primary/20 dark:bg-accent-gold/10">
        {GUARANTEES.map((g) => (
          <li key={g.title} className="flex gap-3">
            <CheckCircleIcon />
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                {g.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {g.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onAccept}
        className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        I understand &mdash; Continue
      </button>
    </div>
  );
}

export default PrivacyCommitment;

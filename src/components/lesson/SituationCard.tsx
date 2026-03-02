import { useState } from "react";

interface SituationCardProps {
  description: string;
  illustration: string;
  onNext: () => void;
}

function SituationCard({ description, illustration, onNext }: SituationCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Illustration or placeholder */}
      <div className="mb-6 h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent-gold/5 dark:from-primary/10 dark:to-accent-gold/10">
        {!imgError ? (
          <img
            src={illustration}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg className="h-16 w-16 text-primary/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}
      </div>

      <p className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      <button
        type="button"
        onClick={onNext}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Start Listening
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
}

export default SituationCard;

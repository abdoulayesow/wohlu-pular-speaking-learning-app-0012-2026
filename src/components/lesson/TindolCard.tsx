import type { Tindol } from "../../content/schema";
import AudioPlayButton from "./AudioPlayButton";

interface TindolCardProps {
  tindol: Tindol;
  onNext: () => void;
}

function TindolCard({ tindol, onNext }: TindolCardProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent-gold">
        Tindol &mdash; Pular Proverb
      </p>

      <div className="mb-6 w-full rounded-2xl border-2 border-accent-gold/30 bg-accent-gold/5 p-6 dark:border-accent-gold/40 dark:bg-accent-gold/10">
        <p className="mb-3 text-center font-serif text-2xl italic leading-relaxed text-slate-800 dark:text-slate-200">
          &ldquo;{tindol.pular}&rdquo;
        </p>
        <p className="text-center text-base text-slate-600 dark:text-slate-400">
          {tindol.english}
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <AudioPlayButton src={tindol.audio} />
      </div>

      <button
        type="button"
        onClick={onNext}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Complete Lesson
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
}

export default TindolCard;

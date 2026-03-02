import type { Phrase } from "../../content/schema";
import AudioPlayButton from "./AudioPlayButton";

interface PhraseCardProps {
  phrase: Phrase;
}

function PhraseCard({ phrase }: PhraseCardProps) {
  return (
    <div className="flex w-full shrink-0 snap-center flex-col items-center px-2">
      <div className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        {/* Pular text */}
        <p className="mb-1 text-center font-serif text-4xl font-bold leading-tight text-primary">
          {phrase.pular}
        </p>

        {/* English translation */}
        <p className="mb-5 text-center text-base font-medium text-slate-500 dark:text-slate-400">
          {phrase.english}
        </p>

        {/* Audio button */}
        <div className="mb-5 flex justify-center">
          <AudioPlayButton src={phrase.audio} />
        </div>

        {/* Cultural note */}
        {phrase.cultural_note && (
          <div className="rounded-2xl border border-accent-gold/20 bg-accent-gold/5 p-4 dark:border-accent-gold/30 dark:bg-accent-gold/10">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {phrase.cultural_note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhraseCard;

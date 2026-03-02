import { useState } from "react";
import type { Phrase } from "../../content/schema";
import AudioPlayButton from "./AudioPlayButton";

function shuffleOptions(phrases: Phrase[], phrase: Phrase): string[] {
  const others = phrases
    .filter((p) => p.id !== phrase.id)
    .map((p) => p.english);
  const distractors = others.sort(() => Math.random() - 0.5).slice(0, 3);
  const all = [...distractors, phrase.english];
  return all.sort(() => Math.random() - 0.5);
}

interface MatchExerciseProps {
  phrases: Phrase[];
  onNext: () => void;
}

function MatchExercise({ phrases, onNext }: MatchExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState(false);
  const [options, setOptions] = useState(() => shuffleOptions(phrases, phrases[0]));

  const phrase = phrases[currentIndex];
  const isLast = currentIndex >= phrases.length - 1;

  function handleSelect(option: string) {
    if (selected) return; // Already answered
    setSelected(option);
    setCorrect(option === phrase.english);
  }

  function handleContinue() {
    if (isLast) {
      onNext();
      return;
    }
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelected(null);
    setCorrect(false);
    setOptions(shuffleOptions(phrases, phrases[nextIndex]));
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        Question {currentIndex + 1} of {phrases.length}
      </p>

      {/* Pular phrase + audio */}
      <p className="mb-2 text-center font-serif text-3xl font-bold text-primary">
        {phrase.pular}
      </p>
      <div className="mb-6 flex justify-center">
        <AudioPlayButton src={phrase.audio} />
      </div>

      {/* Options grid */}
      <div className="mb-6 w-full space-y-3">
        {options.map((option) => {
          let style = "border-slate-200 bg-white hover:border-primary/40 dark:border-slate-700 dark:bg-slate-800";

          if (selected) {
            if (option === phrase.english) {
              style = "border-success bg-success/10 dark:border-success dark:bg-success/20";
            } else if (option === selected) {
              style = "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20";
            } else {
              style = "border-slate-200 bg-white opacity-50 dark:border-slate-700 dark:bg-slate-800";
            }
          }

          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              disabled={!!selected}
              className={`min-h-[48px] w-full rounded-xl border-2 px-4 py-3 text-left font-medium transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${style}`}
            >
              <span className="text-slate-800 dark:text-slate-200">
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {selected && (
        <div className="mb-4 w-full">
          {correct ? (
            <p className="text-center text-lg font-bold text-success">
              Jaraama! Well done!
            </p>
          ) : (
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              Almost! The answer is highlighted above. Listen again!
            </p>
          )}
        </div>
      )}

      {/* Continue button */}
      {selected && (
        <button
          type="button"
          onClick={handleContinue}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {isLast ? "Finish Practice" : "Next Question"}
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default MatchExercise;

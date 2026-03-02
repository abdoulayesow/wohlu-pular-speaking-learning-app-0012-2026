import { useRef, useState, useEffect } from "react";
import type { Phrase } from "../../content/schema";
import PhraseCard from "./PhraseCard";

interface PhraseListProps {
  phrases: Phrase[];
  onNext: () => void;
}

function PhraseList({ phrases, onNext }: PhraseListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewedCount, setViewedCount] = useState(1);
  const allViewed = viewedCount >= phrases.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function handleScroll() {
      if (!el || el.clientWidth === 0) return;
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setViewedCount((prev) => Math.max(prev, index + 1));
    }

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Phrase counter */}
      <p className="mb-4 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        Phrase {Math.min(viewedCount, phrases.length)} of {phrases.length}
      </p>

      {/* Scroll-snap carousel */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Phrase cards"
        tabIndex={0}
        onKeyDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          if (e.key === "ArrowRight") {
            el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
          } else if (e.key === "ArrowLeft") {
            el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
          }
        }}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl pb-4 scrollbar-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        style={{ scrollbarWidth: "none" }}
      >
        {phrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>

      {/* Swipe hint or continue button */}
      {allViewed ? (
        <button
          type="button"
          onClick={onNext}
          className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Continue to Practice
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      ) : (
        <p className="mt-2 text-center text-sm text-slate-400 dark:text-slate-500">
          Swipe to see all phrases &rarr;
        </p>
      )}
    </div>
  );
}

export default PhraseList;

interface FirstGreetingProps {
  onComplete: () => void;
}

function FirstGreeting({ onComplete }: FirstGreetingProps) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-center font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
        Your first phrase
      </h1>

      <div className="mb-4 text-center">
        <p className="font-serif text-6xl font-bold leading-tight text-primary">
          A jaraama
        </p>
        <p className="mt-3 text-base font-medium text-slate-500 dark:text-slate-400">
          Thank you / Peace be upon you
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <button
          type="button"
          aria-label="Play pronunciation"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <svg
            className="ml-0.5 h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="sr-only">Hear it spoken</span>
        </button>
      </div>

      <div className="mb-8 rounded-2xl border border-accent-gold/20 bg-accent-gold/5 p-4 dark:border-accent-gold/30 dark:bg-accent-gold/10">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          In Fuuta Jallon culture, &ldquo;A jaraama&rdquo; is more than
          &ldquo;thank you&rdquo; &mdash; it expresses gratitude for
          someone&rsquo;s presence and acknowledges their dignity.
        </p>
      </div>

      <button
        type="button"
        onClick={onComplete}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Start learning &rarr;
      </button>
    </div>
  );
}

export default FirstGreeting;

interface WelcomeScreenProps {
  onNext: () => void;
}

function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-accent-gold/20 to-accent-green/20 shadow-xl"
        role="img"
        aria-label="Family learning together"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="ml-1 h-10 w-10 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <h1 className="mb-1 font-serif text-4xl font-bold text-slate-900 dark:text-slate-100">
        Karibu Wohlu!
      </h1>
      <p className="mb-4 text-sm font-medium text-primary">Welcome to Wohlu</p>
      <p className="mb-10 max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400">
        You&rsquo;re about to start a meaningful journey. Together, you&rsquo;ll
        preserve your heritage and give your children a gift that lasts forever.
      </p>

      <button
        type="button"
        onClick={onNext}
        className="flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Next
      </button>
    </div>
  );
}

export default WelcomeScreen;

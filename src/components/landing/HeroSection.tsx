import { APP_NAME } from "../../lib/constants";

function HeroSection() {
  return (
    <section className="bg-pattern relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-12 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          {APP_NAME}
        </h1>
      </div>

      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
          Teach your children the Pular your{" "}
          <span className="italic text-primary">parents taught you.</span>
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Preserve your heritage with an app designed for the Fuuta Jallon
          dialect. Authentic, meaningful, and built for the next generation.
        </p>
        <a
          href="#waitlist"
          className="inline-block transform rounded-full bg-primary px-10 py-4 font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary-dark active:scale-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Join the Waitlist
        </a>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-lg">
        <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-accent-gold/10 blur-3xl" aria-hidden="true" />
        <div
          className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-accent-gold/10 to-accent-green/10 shadow-2xl dark:from-primary/20 dark:via-accent-gold/20 dark:to-accent-green/20"
          role="img"
          aria-label="Stylized illustration of parent and child with traditional Fulani geometric motifs"
        >
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-text-secondary">
              Parent &amp; child illustration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

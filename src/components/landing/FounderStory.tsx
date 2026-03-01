function FounderStory() {
  return (
    <section className="bg-accent-gold/5 px-6 py-24 dark:bg-accent-gold/10">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-primary/20 to-accent-gold/20 shadow-xl dark:border-slate-800">
          <span
            className="text-2xl font-bold text-primary"
            aria-label="Founder avatar"
          >
            A
          </span>
        </div>

        <blockquote className="mb-6 font-serif text-2xl italic text-slate-800 md:text-3xl dark:text-slate-200">
          &ldquo;I realized my children were losing the connection to our roots.
          I built Wohlu for my own kids, so they can speak to their
          grandparents in our native tongue.&rdquo;
        </blockquote>

        <p className="font-bold text-primary">&mdash; Ablo, Founder of Wohlu</p>
      </div>
    </section>
  );
}

export default FounderStory;

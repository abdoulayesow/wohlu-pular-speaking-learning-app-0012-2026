interface StepProps {
  label: string;
  badgeColor: string;
  title: string;
  description: string;
  placeholderBg: string;
  placeholderAlt: string;
  reverse?: boolean;
}

function Step({
  label,
  badgeColor,
  title,
  description,
  placeholderBg,
  placeholderAlt,
  reverse = false,
}: StepProps) {
  const imageEl = (
    <div className="w-full md:w-1/2">
      <div
        className={`flex aspect-square w-full items-center justify-center rounded-3xl p-4 ${placeholderBg}`}
        role="img"
        aria-label={placeholderAlt}
      >
        <p className="px-4 text-center text-sm font-medium text-text-secondary" aria-hidden="true">
          {placeholderAlt}
        </p>
      </div>
    </div>
  );

  const textEl = (
    <div className="w-full text-left md:w-1/2">
      <span
        className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-bold ${badgeColor}`}
      >
        {label}
      </span>
      <h3 className="mb-4 font-serif text-3xl">{title}</h3>
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );

  return (
    <div
      className={`flex flex-col items-center gap-12 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {imageEl}
      {textEl}
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-4 font-serif text-4xl">How it works</h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-primary" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-3xl space-y-24">
        <Step
          label="STEP 1"
          badgeColor="bg-primary/10 text-primary"
          title="Listen together"
          description="Experience authentic Pular phrases with their proper cultural context. No dry vocabulary lists—just the way we speak at home."
          placeholderBg="bg-primary/5"
          placeholderAlt="Graphic showing a smartphone playing audio of Pular phrases with cultural icons"
        />
        <Step
          label="STEP 2"
          badgeColor="bg-accent-gold/10 text-accent-gold"
          title="Practice together"
          description="Interactive matching exercises and games designed for four hands on one screen. Make learning Pular the highlight of your day."
          placeholderBg="bg-accent-gold/5"
          placeholderAlt="Illustration of matching game with Pular words and family illustrations"
          reverse
        />
        <Step
          label="STEP 3"
          badgeColor="bg-accent-green/10 text-accent-green"
          title="Grow together"
          description={`Track your child\u2019s progress as they unlock new cultural milestones. Watch their vocabulary expand from \u201COn jaraama\u201D to full conversations.`}
          placeholderBg="bg-accent-green/5"
          placeholderAlt="Growth chart decorated with traditional Fulani fabric patterns"
        />
      </div>
    </section>
  );
}

export default HowItWorks;

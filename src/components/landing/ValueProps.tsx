function VolumeUpIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

function ValueCard({
  icon,
  iconBg,
  iconColor,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-bg-light p-8 transition-shadow hover:shadow-lg dark:border-primary/20 dark:bg-bg-dark">
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <h3 className="mb-3 font-serif text-2xl">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

function ValueProps() {
  return (
    <section className="bg-white px-6 py-24 dark:bg-slate-900/50">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
        <ValueCard
          icon={<VolumeUpIcon />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          title="Native Fuuta Jallon pronunciation"
          description="Every phrase recorded by real Pular speakers. Not AI, not synthesized. Hear the real soul of our language."
        />
        <ValueCard
          icon={<FamilyIcon />}
          iconBg="bg-accent-gold/10"
          iconColor="text-accent-gold"
          title="Built for families to learn together"
          description="10-minute sessions designed for parent and child, side by side. Bonding through language."
        />
        <ValueCard
          icon={<ShieldIcon />}
          iconBg="bg-accent-green/10"
          iconColor="text-accent-green"
          title="No camera. No ads. No child data."
          description="Your family's privacy is sacred. Period. We focus on teaching, not tracking."
        />
      </div>
    </section>
  );
}

export default ValueProps;

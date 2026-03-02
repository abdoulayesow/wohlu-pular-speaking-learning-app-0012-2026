interface ProgressBarProps {
  value: number;
  color?: "primary" | "success" | "white";
  label?: string;
}

const trackColors = {
  primary: "bg-primary/15 dark:bg-primary/25",
  success: "bg-success/15 dark:bg-success/25",
  white: "bg-white/20",
};

const fillColors = {
  primary: "bg-primary",
  success: "bg-success",
  white: "bg-white",
};

function ProgressBar({ value, color = "primary", label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full ${trackColors[color]}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-all duration-300 ${fillColors[color]}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default ProgressBar;

import type { LessonStep } from "../../hooks/useLessonState";

interface LessonStepIndicatorProps {
  currentStep: LessonStep;
  hasTindol: boolean;
}

const ALL_STEPS: LessonStep[] = ["situation", "listen", "practice", "tindol", "complete"];

function LessonStepIndicator({ currentStep, hasTindol }: LessonStepIndicatorProps) {
  const steps = hasTindol
    ? ALL_STEPS
    : ALL_STEPS.filter((s) => s !== "tindol");

  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="flex gap-1.5" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemax={steps.length}>
      {steps.map((step, i) => (
        <div
          key={step}
          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
            i <= currentIndex
              ? "bg-primary"
              : "bg-slate-200 dark:bg-slate-700"
          }`}
        />
      ))}
    </div>
  );
}

export default LessonStepIndicator;

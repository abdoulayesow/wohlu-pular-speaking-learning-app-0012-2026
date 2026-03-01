import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../lib/supabase";
import ProgressDots from "../components/onboarding/ProgressDots";
import WelcomeScreen from "../components/onboarding/WelcomeScreen";
import CoLearningGuide from "../components/onboarding/CoLearningGuide";
import FirstGreeting from "../components/onboarding/FirstGreeting";

const TOTAL_STEPS = 3;

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  async function finishOnboarding() {
    if (user) {
      await supabase
        .from("profiles")
        .update({ onboarding_completed: true })
        .eq("id", user.id);
    }
    void navigate("/home");
  }

  function handleSkip() {
    void navigate("/home");
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg-light px-6 py-8 dark:bg-bg-dark">
      <div className="mb-8 flex items-center justify-between">
        <ProgressDots total={TOTAL_STEPS} current={step} />
        <button
          type="button"
          onClick={handleSkip}
          className="rounded px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Skip
        </button>
      </div>

      <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center">
        {step === 0 && <WelcomeScreen onNext={() => setStep(1)} />}
        {step === 1 && <CoLearningGuide onNext={() => setStep(2)} />}
        {step === 2 && <FirstGreeting onComplete={finishOnboarding} />}
      </main>
    </div>
  );
}

export default OnboardingPage;

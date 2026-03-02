import type { Lesson } from "../../content/schema";
import { useLessonState } from "../../hooks/useLessonState";
import { useProgress } from "../../hooks/useProgress";
import LessonStepIndicator from "./LessonStepIndicator";
import SituationCard from "./SituationCard";
import PhraseList from "./PhraseList";
import MatchExercise from "./MatchExercise";
import TindolCard from "./TindolCard";
import LessonComplete from "./LessonComplete";

interface LessonViewerProps {
  lesson: Lesson;
}

function LessonViewer({ lesson }: LessonViewerProps) {
  const hasTindol = lesson.tindol !== null;
  const { step, next } = useLessonState(hasTindol);
  const { markLessonComplete } = useProgress();

  function handleComplete() {
    void markLessonComplete(lesson.lesson_id);
    next();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      {/* Step indicator */}
      <div className="mb-6">
        <LessonStepIndicator currentStep={step} hasTindol={hasTindol} />
      </div>

      {/* Step content */}
      {step === "situation" && (
        <SituationCard
          description={lesson.situation_description}
          illustration={lesson.illustration}
          onNext={next}
        />
      )}

      {step === "listen" && (
        <PhraseList phrases={lesson.phrases} onNext={next} />
      )}

      {step === "practice" && (
        <MatchExercise
          phrases={lesson.phrases}
          onNext={hasTindol ? next : handleComplete}
        />
      )}

      {step === "tindol" && lesson.tindol && (
        <TindolCard tindol={lesson.tindol} onNext={handleComplete} />
      )}

      {step === "complete" && <LessonComplete lesson={lesson} />}
    </div>
  );
}

export default LessonViewer;

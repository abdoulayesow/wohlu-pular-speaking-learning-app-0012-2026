import { useReducer } from "react";

export type LessonStep =
  | "situation"
  | "listen"
  | "practice"
  | "tindol"
  | "complete";

interface LessonState {
  step: LessonStep;
  hasTindol: boolean;
}

type LessonAction = { type: "NEXT" };

const STEP_ORDER: LessonStep[] = [
  "situation",
  "listen",
  "practice",
  "tindol",
  "complete",
];

export function lessonReducer(
  state: LessonState,
  action: LessonAction,
): LessonState {
  if (action.type !== "NEXT") return state;

  const currentIndex = STEP_ORDER.indexOf(state.step);
  if (currentIndex === -1 || currentIndex >= STEP_ORDER.length - 1) {
    return state;
  }

  let nextIndex = currentIndex + 1;

  // Skip tindol step if lesson has none
  if (STEP_ORDER[nextIndex] === "tindol" && !state.hasTindol) {
    nextIndex += 1;
  }

  return { ...state, step: STEP_ORDER[nextIndex] };
}

interface UseLessonStateReturn {
  step: LessonStep;
  next: () => void;
  canGoNext: boolean;
}

export function useLessonState(hasTindol: boolean): UseLessonStateReturn {
  const [state, dispatch] = useReducer(lessonReducer, {
    step: "situation",
    hasTindol,
  });

  return {
    step: state.step,
    next: () => dispatch({ type: "NEXT" }),
    canGoNext: state.step !== "complete",
  };
}

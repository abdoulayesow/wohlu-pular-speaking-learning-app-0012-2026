import { Link, useParams } from "react-router";
import { getLesson } from "../content/loader";
import LessonViewer from "../components/lesson/LessonViewer";

function LessonPage() {
  const { moduleId, lessonId } = useParams<{
    moduleId: string;
    lessonId: string;
  }>();

  const lesson = getLesson(moduleId ?? "", lessonId ?? "");

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg-light dark:bg-bg-dark">
        <p className="text-slate-500">Lesson not found.</p>
        <Link
          to="/home"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-primary/10 bg-bg-light/95 px-4 py-3 backdrop-blur-sm dark:bg-bg-dark/95">
        <div className="mx-auto flex max-w-2xl items-center gap-4">
          <Link
            to={`/modules/${lesson.module_id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Back to module"
          >
            <svg
              className="h-6 w-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="font-serif text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {lesson.title}
          </h1>
        </div>
      </header>

      <LessonViewer lesson={lesson} />
    </div>
  );
}

export default LessonPage;

import { createBrowserRouter } from "react-router";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { default: LandingPage } = await import("./pages/LandingPage");
          return { Component: LandingPage };
        },
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            lazy: async () => {
              const { default: LoginPage } = await import("./pages/LoginPage");
              return { Component: LoginPage };
            },
          },
          {
            path: "/signup",
            lazy: async () => {
              const { default: SignupPage } = await import(
                "./pages/SignupPage"
              );
              return { Component: SignupPage };
            },
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/onboarding",
            lazy: async () => {
              const { default: OnboardingPage } = await import(
                "./pages/OnboardingPage"
              );
              return { Component: OnboardingPage };
            },
          },
          {
            path: "/home",
            lazy: async () => {
              const { default: HomePage } = await import("./pages/HomePage");
              return { Component: HomePage };
            },
          },
          {
            path: "/modules/:moduleId",
            lazy: async () => {
              const { default: ModulePage } = await import(
                "./pages/ModulePage"
              );
              return { Component: ModulePage };
            },
          },
          {
            path: "/progress",
            lazy: async () => {
              const ComingSoon = () => (
                <div className="flex min-h-screen flex-col items-center justify-center bg-bg-light px-4 dark:bg-bg-dark">
                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                    Progress tracking coming soon!
                  </p>
                </div>
              );
              return { Component: ComingSoon };
            },
          },
          {
            path: "/settings",
            lazy: async () => {
              const ComingSoon = () => (
                <div className="flex min-h-screen flex-col items-center justify-center bg-bg-light px-4 dark:bg-bg-dark">
                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                    Settings coming soon!
                  </p>
                </div>
              );
              return { Component: ComingSoon };
            },
          },
          {
            path: "/modules/:moduleId/lessons/:lessonId",
            lazy: async () => {
              const { default: LessonPage } = await import(
                "./pages/LessonPage"
              );
              return { Component: LessonPage };
            },
          },
        ],
      },
    ],
  },
]);

export default router;

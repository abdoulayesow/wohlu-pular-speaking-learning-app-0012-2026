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
        ],
      },
    ],
  },
]);

export default router;

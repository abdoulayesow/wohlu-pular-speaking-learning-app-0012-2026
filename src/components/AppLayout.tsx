import { Suspense } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "./LoadingScreen";

function AppLayout() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

export default AppLayout;

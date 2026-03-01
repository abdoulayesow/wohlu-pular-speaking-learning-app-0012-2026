import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { ProgressProvider } from "../hooks/useProgress";
import LoadingScreen from "./LoadingScreen";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <ProgressProvider>
      <Outlet />
    </ProgressProvider>
  );
}

export default ProtectedRoute;

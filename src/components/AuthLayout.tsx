import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LoadingScreen from "./LoadingScreen";

/** Wraps login/signup — redirects authenticated users to /home */
function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;
  if (user) return <Navigate to="/home" replace />;

  return <Outlet />;
}

export default AuthLayout;

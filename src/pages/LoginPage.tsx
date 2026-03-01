import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import ErrorAlert from "../components/auth/ErrorAlert";

function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (typeof email !== "string" || typeof password !== "string") return;

    const { error: signInError } = await signIn(email, password);
    setLoading(false);

    if (signInError) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    void navigate("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-light px-6 py-12 dark:bg-bg-dark">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl font-bold text-primary">Wohlu</p>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-white px-8 py-10 shadow-2xl dark:border-primary/20 dark:bg-slate-900">
          <h1 className="mb-1 font-serif text-3xl text-slate-900 dark:text-slate-100">Welcome back</h1>
          <p className="mb-8 text-slate-500 dark:text-slate-400">
            Sign in to continue your family&rsquo;s journey.
          </p>

          {error && <ErrorAlert message={error} />}

          <form onSubmit={handleSubmit} className="space-y-5">
            <AuthInput
              id="login-email"
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
            <AuthInput
              id="login-password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Your password"
            />

            <AuthButton loading={loading}>Sign in</AuthButton>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don&rsquo;t have an account?{" "}
            <Link
              to="/signup"
              className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

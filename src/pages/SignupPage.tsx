import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import ErrorAlert from "../components/auth/ErrorAlert";
import PrivacyCommitment from "../components/auth/PrivacyCommitment";

type Step = "form" | "privacy";

function SignupPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const confirm = form.get("confirm");
    if (typeof email !== "string" || typeof password !== "string" || typeof confirm !== "string") return;

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUp(email, password);
    setLoading(false);

    if (signUpError) {
      setError(signUpError);
      return;
    }

    setStep("privacy");
  }

  function handleAccept() {
    void navigate("/onboarding");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-light px-6 py-12 dark:bg-bg-dark">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl font-bold text-primary">Wohlu</p>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-white px-8 py-10 shadow-2xl dark:border-primary/20 dark:bg-slate-900">
          {step === "privacy" ? (
            <PrivacyCommitment onAccept={handleAccept} />
          ) : (
            <>
              <h1 className="mb-1 font-serif text-3xl text-slate-900 dark:text-slate-100">Create your account</h1>
              <p className="mb-8 text-slate-500 dark:text-slate-400">
                Start your family&rsquo;s Pular learning journey today.
              </p>

              {error && <ErrorAlert message={error} />}

              <form onSubmit={handleSubmit} className="space-y-5">
                <AuthInput
                  id="signup-email"
                  name="email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />
                <AuthInput
                  id="signup-password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="At least 8 characters"
                />
                <AuthInput
                  id="signup-confirm"
                  name="confirm"
                  label="Confirm password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Repeat your password"
                />
                <AuthButton loading={loading}>Create account</AuthButton>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

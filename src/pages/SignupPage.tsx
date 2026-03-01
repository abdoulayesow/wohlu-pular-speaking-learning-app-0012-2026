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
    <div className="flex min-h-screen items-center justify-center bg-bg-light px-4 py-12 dark:bg-bg-dark">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col overflow-hidden rounded-3xl shadow-2xl md:flex-row">

          {/* ── Identity panel ────────────────────────────────── */}
          <div className="relative flex flex-col justify-between bg-[#221610] px-8 py-8 md:w-[42%] md:px-10 md:py-14">
            {/* Subtle West-African diamond lattice */}
            <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="signup-lattice" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="none" stroke="#ec5b13" strokeWidth="1.5"/>
                    <circle cx="16" cy="16" r="3" fill="#ec5b13"/>
                    <circle cx="0"  cy="0"  r="1.5" fill="#ec5b13"/>
                    <circle cx="32" cy="0"  r="1.5" fill="#ec5b13"/>
                    <circle cx="0"  cy="32" r="1.5" fill="#ec5b13"/>
                    <circle cx="32" cy="32" r="1.5" fill="#ec5b13"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#signup-lattice)"/>
              </svg>
            </div>

            {/* Wordmark */}
            <div className="relative">
              <p className="font-serif text-4xl font-bold text-primary">Wohlu</p>
              <p className="mt-1.5 text-[10px] tracking-[0.2em] text-primary/50 uppercase">
                Pular · Family · Heritage
              </p>
            </div>

            {/* Editorial quote — desktop only */}
            <blockquote className="relative mt-8 hidden md:block">
              <p className="font-serif text-base italic leading-relaxed text-white/70">
                &ldquo;Every phrase your child learns is a thread that ties them to where they come from.&rdquo;
              </p>
              <div className="mt-5 h-px w-8 bg-primary/40" />
            </blockquote>
          </div>

          {/* ── Form panel ────────────────────────────────────── */}
          <div className="flex-1 bg-white px-8 py-10 dark:bg-[#1e1208] md:px-10 md:py-14">
            {step === "privacy" ? (
              <PrivacyCommitment onAccept={handleAccept} />
            ) : (
              <>
                <h1 className="mb-1 font-serif text-3xl text-slate-900 dark:text-slate-100">
                  Create your account
                </h1>
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
    </div>
  );
}

export default SignupPage;

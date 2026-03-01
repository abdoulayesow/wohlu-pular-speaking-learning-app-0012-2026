import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    void navigate("/");
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <header className="border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <p className="font-serif text-2xl font-bold text-primary">Wohlu</p>
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-10 text-center">
          <p className="font-serif text-6xl font-bold text-slate-900 dark:text-slate-100">
            J&agrave;mm waaw
          </p>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
            All is well &mdash; a Pular greeting of peace
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent-gold/10 to-accent-green/10 p-8 text-center shadow-lg dark:from-primary/20 dark:via-accent-gold/20 dark:to-accent-green/20">
          <p className="mb-2 font-serif text-2xl font-bold text-slate-800 dark:text-slate-100">
            Continue learning
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Lessons coming soon &mdash; you&rsquo;re on the list!
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

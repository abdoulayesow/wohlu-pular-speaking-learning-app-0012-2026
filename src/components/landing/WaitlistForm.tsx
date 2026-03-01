import { type FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const reason = (form.get("reason") as string) || null;
    const source = (form.get("source") as string) || null;

    const { error } = await supabase
      .from("waitlist")
      .insert({ email, reason, source });

    if (error) {
      // PostgreSQL unique_violation — duplicate email; treat as success
      if (error.code === "23505") {
        setStatus("success");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
  }

  const isSubmitting = status === "submitting";

  return (
    <section className="px-6 py-24" id="waitlist">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/5 bg-white shadow-2xl dark:bg-slate-900">
        <div className="p-8 text-center md:p-12">
          <h2 className="mb-6 font-serif text-4xl">Be the first to know</h2>
          <p className="mb-8 text-slate-600 dark:text-slate-400">
            Join the waiting list and help us shape the future of Pular language
            learning for the diaspora.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl bg-success/10 p-8 text-center dark:bg-success/20">
              <p className="text-lg font-semibold text-success dark:text-emerald-400">
                Thank you for joining! We&rsquo;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
                >
                  {errorMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="waitlist-email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border-slate-200 px-4 py-3 focus-visible:border-primary focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div>
                <label
                  htmlFor="waitlist-reason"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Why do you want to learn Pular?
                </label>
                <textarea
                  id="waitlist-reason"
                  name="reason"
                  rows={3}
                  placeholder="I want my daughter to speak with her grandmother..."
                  className="w-full rounded-xl border-slate-200 px-4 py-3 focus-visible:border-primary focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div>
                <label
                  htmlFor="waitlist-source"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  How did you hear about us?
                </label>
                <select
                  id="waitlist-source"
                  name="source"
                  className="w-full rounded-xl border-slate-200 px-4 py-3 focus-visible:border-primary focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
                >
                  <option value="whatsapp">WhatsApp</option>
                  <option value="friend_family">Friend/Family</option>
                  <option value="mosque">Mosque</option>
                  <option value="social_media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Joining\u2026" : "Join the Waitlist \u2014 Be First"}
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                We value your privacy. No spam, just updates on our progress.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;

import type { ComponentPropsWithoutRef } from "react";

interface AuthInputProps extends ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
  error?: string;
}

function AuthInput({ id, label, error, className = "", ...props }: AuthInputProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        id={id}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? true : undefined}
        className={[
          "w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500",
          error
            ? "border-red-400 focus-visible:border-red-400 dark:border-red-500"
            : "border-slate-200 focus-visible:border-primary dark:border-slate-700",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthInput;

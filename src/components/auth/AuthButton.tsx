import type { ComponentPropsWithoutRef } from "react";

interface AuthButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

function AuthButton({
  loading = false,
  children,
  disabled,
  type = "submit",
  className = "",
  ...props
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={[
        "flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl",
        "bg-primary font-bold text-white shadow-lg shadow-primary/20",
        "transition-all hover:bg-primary-dark active:scale-[0.98]",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {loading ? "Please wait\u2026" : children}
    </button>
  );
}

export default AuthButton;

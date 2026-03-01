function LoadingScreen() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-bg-light dark:bg-bg-dark"
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Loading&hellip;
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;

import { useAudio } from "../../hooks/useAudio";

interface AudioPlayButtonProps {
  src: string;
}

function AudioPlayButton({ src }: AudioPlayButtonProps) {
  const { play, stop, playing, error } = useAudio(src);

  if (error) {
    return (
      <button
        type="button"
        disabled
        className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800"
        aria-label="Audio unavailable"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={playing ? stop : play}
      aria-label={playing ? "Stop audio" : "Play pronunciation"}
      className={`flex h-14 w-14 items-center justify-center rounded-full transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        playing
          ? "animate-pulse bg-primary text-white shadow-lg shadow-primary/30"
          : "bg-primary/10 text-primary hover:bg-primary/20"
      }`}
    >
      {playing ? (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}

export default AudioPlayButton;

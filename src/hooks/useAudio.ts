import { useCallback, useEffect, useRef, useState } from "react";

interface UseAudioReturn {
  play: () => void;
  stop: () => void;
  playing: boolean;
  error: boolean;
}

export function useAudio(src: string): UseAudioReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);

    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("error", () => {
      setError(true);
      setPlaying(false);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlaying(false));
      audio.removeEventListener("error", () => setError(true));
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(() => {
    if (error || !audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => setError(true));
    setPlaying(true);
  }, [error]);

  const stop = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  }, []);

  return { play, stop, playing, error };
}

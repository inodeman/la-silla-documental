import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { DURATION, scenes, type Scene } from "@/data/timeline";

function fmt(seconds: number) {
  const s = Math.min(DURATION, Math.max(0, Math.floor(seconds)));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function sceneAt(t: number): Scene {
  let current = scenes[0];
  for (const scene of scenes) {
    if (t + 0.001 >= scene.start) current = scene;
    else break;
  }
  return current;
}

export function Documentary() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const scene = sceneAt(t);
  const pristine = !playing && t < 0.15;
  const finished = !playing && t > DURATION - 0.35;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => setT(Math.min(DURATION, video.currentTime || 0));
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setT(DURATION);
    };
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code !== "Space" || event.repeat) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "BUTTON" || target.tagName === "VIDEO")) return;
      event.preventDefault();
      void toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    if (video.currentTime >= DURATION - 0.2) {
      video.currentTime = 0;
      setT(0);
    }
    try {
      await video.play();
    } catch {
      setPlaying(false);
    }
  }

  function seek(next: number) {
    const video = videoRef.current;
    const clamped = Math.min(DURATION, Math.max(0, next));
    if (video) video.currentTime = clamped;
    setT(clamped);
  }

  async function jump(next: number) {
    seek(next);
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
    } catch {
      setPlaying(false);
    }
  }

  return (
    <main className="shell">
      <aside className="index">
        <p className="index-kicker">Documental · 2:45</p>
        <h1 className="index-title">La silla</h1>
        <p className="index-note">
          Video vertical con narración y animación. Del diez al uno. Pulsa play: el audio va dentro del archivo.
        </p>
        <div className="index-list">
          {scenes
            .filter((item) => item.rank != null)
            .map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === scene.id ? "index-item is-on" : "index-item"}
                onClick={() => void jump(item.start)}
              >
                <span className="index-rank">{item.rank}</span>
                <span className="index-name">{item.name}</span>
                <span className="index-years">{item.years}</span>
              </button>
            ))}
        </div>
      </aside>

      <section className="stage" aria-label="Video del documental La Silla">
        <video
          ref={videoRef}
          className="film"
          src="/la-silla.mp4"
          poster="/poster.jpg"
          controls
          playsInline
          preload="auto"
        />
        {!playing ? (
          <button type="button" className="play-fab" onClick={() => void toggle()}>
            {finished ? <RotateCcw size={18} /> : <Play size={18} />}
            {pristine ? "Ver video · 2:45" : finished ? "Volver a ver" : "Seguir"}
          </button>
        ) : null}
        <p className="time-readout film-time">{fmt(t)} / 2:45</p>
      </section>
    </main>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { DURATION, scenes, type Line, type Scene } from "@/data/timeline";

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

function lineAt(lines: Line[], t: number): Line {
  const hit = lines.find((line) => t >= line.start && t < line.end);
  if (hit) return hit;
  if (t < lines[0].start) return lines[0];
  return lines[lines.length - 1];
}

function groupLines(lines: Line[]): Line[] {
  const out: Line[] = [];
  for (const line of lines) {
    const prev = out[out.length - 1];
    const dur = line.end - line.start;
    if (prev && (dur < 1.05 || prev.end - prev.start < 1.05)) {
      prev.end = line.end;
      prev.text = `${prev.text} ${line.text}`;
      prev.plate = line.plate ?? prev.plate;
    } else {
      out.push({ ...line });
    }
  }
  return out;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

export function Documentary() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    const tick = () => {
      const audio = audioRef.current;
      if (audio) setT(Math.min(DURATION, audio.currentTime));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code !== "Space" || event.repeat) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "BUTTON")) return;
      event.preventDefault();
      void toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const scene = sceneAt(t);
  const lines = useMemo(
    () => (scene.id === "open" || scene.id === "end" ? scene.lines : groupLines(scene.lines)),
    [scene],
  );
  const line = lineAt(lines, t);
  const progress =
    scene.end > scene.start ? Math.min(1, Math.max(0, (t - scene.start) / (scene.end - scene.start))) : 0;
  const swapped = Boolean(scene.swapImage && scene.swapAt != null && t >= scene.swapAt);
  const photo = swapped ? scene.swapImage : scene.image;
  const pristine = !playing && t < 0.15;
  const finished = !playing && t > DURATION - 0.35;

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    if (audio.currentTime >= DURATION - 0.2) {
      audio.currentTime = 0;
      setT(0);
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  function seek(next: number) {
    const audio = audioRef.current;
    const clamped = Math.min(DURATION, Math.max(0, next));
    if (audio) audio.currentTime = clamped;
    setT(clamped);
  }

  async function jump(next: number) {
    seek(next);
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  const kenBurns =
    reduced || !photo
      ? undefined
      : { transform: `scale(${1.05 + progress * 0.12}) translate3d(${progress * -1.5}%, ${progress * -2.2}%, 0)` };

  return (
    <main className="shell">
      <aside className="index">
        <p className="index-kicker">Documental · 2:45</p>
        <h1 className="index-title">La silla</h1>
        <p className="index-note">
          Del diez al uno. Un recuento en voz alta: los hechos se narran, el orden es una lectura.
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

      <section className="stage" aria-label="Documental vertical La Silla" onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("button, input, a")) return;
        void toggle();
      }}>
        <audio
          ref={audioRef}
          src="/audio/master.mp3"
          preload="auto"
          onEnded={() => {
            setPlaying(false);
            setT(DURATION);
          }}
        />

        {photo ? (
          <div className={swapped ? "photo is-map" : "photo"} key={photo}>
            <img src={photo} alt={swapped ? "Mapa del territorio cedido en 1848 y 1853" : scene.name} style={kenBurns} />
          </div>
        ) : null}
        <div className="grade" />
        <div className="vignette" />
        <div className="grain" />
        {t > 0.05 ? <div className="flash" key={scene.id} /> : null}
        <div className="corners" />

        {scene.id === "p1" ? (
          <div className="rise" aria-hidden="true">
            <span style={{ height: `${Math.round(progress * 100)}%` }} />
          </div>
        ) : null}

        <div className="topbar">
          <p className="kicker">{scene.id === "open" ? "La silla" : scene.kicker || "La silla"}</p>
          <p className="clock">
            {fmt(t)} / 2:45
          </p>
        </div>

        {scene.rank == null ? (
          <div className="headline-wrap" key={line.start}>
            <h2 className="headline">{line.text.replace(/\.$/, "")}</h2>
            <div className="headline-rule" />
          </div>
        ) : (
          <p className={`rank-num${scene.rank === 1 ? " is-one" : ""}`} key={scene.id}>
            {scene.rank}
          </p>
        )}

        {scene.rank != null ? (
          <div className="ident">
            <h2 className="ident-name">{scene.name}</h2>
            <p className="ident-years">{scene.years}</p>
          </div>
        ) : null}

        {swapped ? <p className="map-chip">1848 · Guadalupe Hidalgo · La Mesilla</p> : null}

        {line.plate ? (
          <aside className="plate" key={line.start}>
            <p className="plate-k">Corte federal · Brooklyn</p>
            <p className="plate-t">Genaro García Luna</p>
            <p>{line.plate}</p>
          </aside>
        ) : null}

        {scene.rank != null ? <p className="caption">{line.text}</p> : null}

        {!playing ? (
          <button type="button" className="play-fab" onClick={() => void toggle()}>
            {finished ? <RotateCcw size={18} /> : <Play size={18} />}
            {pristine ? "Empezar · 2:45" : finished ? "Volver a ver" : "Seguir"}
          </button>
        ) : null}

        <div className="controls">
          <button type="button" className="icon-btn" onClick={() => void toggle()} aria-label={playing ? "Pausar" : "Reproducir"}>
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <input
            className="seek"
            type="range"
            min={0}
            max={DURATION}
            step={0.1}
            value={Math.min(DURATION, t)}
            aria-label="Posición del documental"
            onChange={(event) => seek(Number(event.target.value))}
          />
          <span className="time-readout">{fmt(DURATION)}</span>
        </div>
      </section>
    </main>
  );
}

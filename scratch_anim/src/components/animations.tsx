import { useEffect, useRef, useState, type CSSProperties } from "react";

type AnimProps = { text: string; className?: string };

/* ---- Shared per-letter splitter for staggered effects ---- */
function SplitText({
  text,
  charClass,
  stagger = 45,
}: {
  text: string;
  charClass?: string;
  stagger?: number;
}) {
  return (
    <span aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className={`inline-block ${charClass ?? ""}`}
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 1 — Travelling gradient */
export function Shimmer({ text, className }: AnimProps) {
  return <span className={`text-shimmer ${className ?? ""}`}>{text}</span>;
}

/* 2 — Springy bounce, one letter at a time */
export function LetterWave({ text, className }: AnimProps) {
  return (
    <span className={className}>
      <SplitText
        text={text}
        stagger={45}
        charClass="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[0.45em]"
      />
    </span>
  );
}

/* 3 — Colour ripple letter by letter */
export function ColorCascade({ text, className }: AnimProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block text-white/30 transition-colors duration-300 group-hover:[color:var(--c)]"
          style={
            {
              "--c": `hsl(${(i * 32) % 360} 90% 65%)`,
              transitionDelay: `${i * 40}ms`,
            } as CSSProperties
          }
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 4 — RGB glitch tear */
export function Glitch({ text, className }: AnimProps) {
  return (
    <span className={`glitch ${className ?? ""}`} data-text={text}>
      {text}
    </span>
  );
}

/* 5 — Flickering neon tube */
export function Neon({ text, className }: AnimProps) {
  return <span className={`text-neon ${className ?? ""}`}>{text}</span>;
}

/* 6 — Vertical word swap */
export function SlideSwap({
  text,
  swap,
  className,
}: AnimProps & { swap: string }) {
  return (
    <span
      className={`relative inline-block h-[1.15em] overflow-hidden align-bottom leading-[1.15] ${className ?? ""}`}
    >
      <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute inset-0 block translate-y-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent transition-transform duration-[600ms] ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:translate-y-0">
        {swap}
      </span>
    </span>
  );
}

/* 7 — Underline draws from the centre */
export function UnderlineSweep({ text, className }: AnimProps) {
  return (
    <span className={`relative pb-1 ${className ?? ""}`}>
      {text}
      <span className="absolute bottom-0 left-0 h-[3px] w-full origin-center scale-x-0 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </span>
  );
}

/* 8 — Full 3D flip */
export function Spin3D({ text, className }: AnimProps) {
  return (
    <span className={`inline-block [perspective:700px] ${className ?? ""}`}>
      <span className="inline-block [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.6,0.05,0.2,1)] group-hover:[transform:rotateX(360deg)]">
        {text}
      </span>
    </span>
  );
}

/* 9 — Outline cross-fades into a solid fill */
export function OutlineFill({ text, className }: AnimProps) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <span className="text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] group-hover:-translate-y-2 group-hover:opacity-0">
        {text}
      </span>
      <span className="pointer-events-none absolute inset-0 translate-y-2 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {text}
      </span>
    </span>
  );
}

/* 10 — Layered chromatic shadows */
export function Stack({ text, className }: AnimProps) {
  return <span className={`text-stack ${className ?? ""}`}>{text}</span>;
}

/* 11 — Typewriter with blinking caret */
export function Typewriter({ text, className }: AnimProps) {
  const len = text.length;
  return (
    <span
      className={`typewriter font-mono ${className ?? ""}`}
      style={
        {
          "--tw-w": `${len}ch`,
          animationName: "tw-type, tw-blink",
          animationDuration: "0.85s, 0.7s",
          animationTimingFunction: `steps(${len}), step-end`,
          animationIterationCount: "1, infinite",
          animationFillMode: "forwards, none",
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
}

/* 12 — Blur snaps into glowing focus */
export function BlurFocus({ text, className }: AnimProps) {
  return (
    <span
      className={`inline-block text-white/25 blur-[6px] transition-all duration-500 ease-out group-hover:text-white group-hover:blur-0 group-hover:[text-shadow:0_0_30px_rgba(56,189,248,0.65)] ${className ?? ""}`}
    >
      {text}
    </span>
  );
}

/* 13 — Random glyphs resolve to the word */
export function Scramble({ text, className }: AnimProps) {
  const [out, setOut] = useState(text);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const run = () => {
    if (timer.current) window.clearTimeout(timer.current);
    const pool = "!<>-_\\/[]{}=+*^?#01ABCDEF";
    const len = text.length;
    const total = len * 6;
    let frame = 0;

    const tick = () => {
      const reveal = Math.floor((frame / total) * len);
      let s = "";
      for (let i = 0; i < len; i++) {
        const c = text[i];
        if (c === " ") {
          s += " ";
          continue;
        }
        s += i < reveal ? c : pool[(Math.random() * pool.length) | 0];
      }
      setOut(s);
      frame += 1;
      if (frame > total) {
        setOut(text);
        timer.current = null;
        return;
      }
      timer.current = window.setTimeout(tick, 35);
    };
    tick();
  };

  return (
    <span className={className} onMouseEnter={run} aria-label={text}>
      {out}
    </span>
  );
}

/* 14 — Domino Tilt */
export function DominoTilt({ text, className }: AnimProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block origin-bottom-left transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[20deg] group-hover:translate-x-1 group-hover:text-amber-400"
          style={{ transitionDelay: `${i * 35}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 15 — Split Doors Reveal */
export function SplitDoors({ text, className }: AnimProps) {
  return (
    <span className={`relative inline-block ${className ?? ""}`} aria-label={text}>
      {/* Top half */}
      <span
        aria-hidden
        className="block [clip-path:inset(0_0_50%_0)] transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:-translate-y-2 group-hover:text-rose-400"
      >
        {text}
      </span>
      {/* Bottom half */}
      <span
        aria-hidden
        className="absolute inset-0 block [clip-path:inset(50%_0_0_0)] transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:translate-y-2 group-hover:text-cyan-400"
      >
        {text}
      </span>
      {/* Center glowing reveal bar */}
      <span className="pointer-events-none absolute left-0 top-1/2 -mt-[1px] h-[2px] w-full scale-x-0 bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-500 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#f59e0b]" />
    </span>
  );
}

/* 16 — Highlighter Sweep */
export function HighlighterSweep({ text, className }: AnimProps) {
  return (
    <span className={`highlighter-mask inline-block ${className ?? ""}`}>
      {text}
      <span className="highlighter-bg" />
    </span>
  );
}

/* 17 — Spotlight Torch */
export function SpotlightTorch({ text, className }: AnimProps) {
  return (
    <span
      className={`relative inline-block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-white/20 transition-all duration-500 group-hover:text-transparent group-hover:drop-shadow-[0_0_22px_rgba(251,191,36,0.6)] ${className ?? ""}`}
    >
      {text}
    </span>
  );
}

/* 18 — Tracking Spring */
export function TrackingSpring({ text, className }: AnimProps) {
  return (
    <span
      className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:tracking-[0.25em] group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_16px_rgba(52,211,153,0.6)] ${className ?? ""}`}
    >
      {text}
    </span>
  );
}

/* 19 — Strikethrough Slash */
export function SlashStrike({ text, className }: AnimProps) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <span className="slash-text inline-block transition-all duration-300">
        {text}
      </span>
      <span className="slash-line" />
    </span>
  );
}

/* 20 — Saloon Door 3D */
export function SaloonDoor3D({ text, className }: AnimProps) {
  return (
    <span className={`inline-block [perspective:800px] ${className ?? ""}`} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block [transform-style:preserve-3d] transition-all duration-500 ease-[cubic-bezier(0.6,0.05,0.2,1)] group-hover:rotateY-[180deg] group-hover:text-fuchsia-400"
          style={{ transitionDelay: `${i * 45}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 21 — Smoke Dissolve */
export function SmokeDissolve({ text, className }: AnimProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:rotate-[15deg] group-hover:scale-150 group-hover:blur-[8px] group-hover:opacity-0"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 22 — Matrix Cyber Rain */
export function MatrixCyber({ text, className }: AnimProps) {
  const [out, setOut] = useState(text);
  const timer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const run = () => {
    if (timer.current) window.clearTimeout(timer.current);
    const katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01";
    const len = text.length;
    const total = len * 7;
    let frame = 0;

    const tick = () => {
      const reveal = Math.floor((frame / total) * len);
      let s = "";
      for (let i = 0; i < len; i++) {
        const c = text[i];
        if (c === " ") {
          s += " ";
          continue;
        }
        s += i < reveal ? c : katakana[(Math.random() * katakana.length) | 0];
      }
      setOut(s);
      frame += 1;
      if (frame > total) {
        setOut(text);
        timer.current = null;
        return;
      }
      timer.current = window.setTimeout(tick, 40);
    };
    tick();
  };

  return (
    <span
      className={`font-mono transition-colors duration-300 group-hover:text-[#00ff66] group-hover:drop-shadow-[0_0_14px_rgba(0,255,102,0.8)] ${className ?? ""}`}
      onMouseEnter={run}
      aria-label={text}
    >
      {out}
    </span>
  );
}

/* 23 — Water Reflection */
export function WaterReflection({ text, className }: AnimProps) {
  return (
    <span className={`relative inline-flex flex-col items-center ${className ?? ""}`}>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-sky-300">
        {text}
      </span>
      <span
        aria-hidden
        className="reflection-wave absolute top-full block select-none bg-gradient-to-b from-sky-400 to-transparent bg-clip-text text-transparent opacity-20 [transform:scaleY(-1)]"
      >
        {text}
      </span>
    </span>
  );
}

/* 24 — Slam Stamp */
export function SlamStamp({ text, className }: AnimProps) {
  return (
    <span className={`animate-slam inline-block transition-colors duration-200 group-hover:text-rose-500 ${className ?? ""}`}>
      {text}
    </span>
  );
}

/* 25 — Party Jiggle */
export function PartyJiggle({ text, className }: AnimProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="party-char inline-block transition-colors duration-300"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* 26 — Speed Skew Trails */
export function SpeedSkew({ text, className }: AnimProps) {
  return <span className={`speed-text inline-block ${className ?? ""}`}>{text}</span>;
}

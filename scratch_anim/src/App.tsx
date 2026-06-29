import { useState } from "react";
import {
  Shimmer,
  LetterWave,
  ColorCascade,
  Glitch,
  Neon,
  SlideSwap,
  UnderlineSweep,
  Spin3D,
  OutlineFill,
  Stack,
  Typewriter,
  BlurFocus,
  Scramble,
  DominoTilt,
  SplitDoors,
  SpotlightTorch,
  HighlighterSweep,
  TrackingSpring,
  SlashStrike,
  SaloonDoor3D,
  SmokeDissolve,
  MatrixCyber,
  WaterReflection,
  SlamStamp,
  PartyJiggle,
  SpeedSkew,
} from "./components/animations";

const BASE = "text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight select-none";

type Category = "All" | "Color & Glow" | "Motion & 3D" | "Cyber & Typography";

type Demo = {
  name: string;
  desc: string;
  accent: string;
  category: Category;
  node: React.ReactNode;
};

const demos: Demo[] = [
  {
    name: "Highlighter Sweep",
    desc: "A vibrant neon marker block sweeps behind the text.",
    accent: "#facc15",
    category: "Color & Glow",
    node: <HighlighterSweep text="Highlight" className={BASE} />,
  },
  {
    name: "Domino Tilt",
    desc: "Letters tilt and drop like falling dominoes.",
    accent: "#f59e0b",
    category: "Motion & 3D",
    node: <DominoTilt text="Domino" className={BASE} />,
  },
  {
    name: "Split Doors",
    desc: "Word splits apart vertically to reveal a glowing neon bar.",
    accent: "#f43f5e",
    category: "Motion & 3D",
    node: <SplitDoors text="Splitter" className={BASE} />,
  },
  {
    name: "Spotlight Torch",
    desc: "Soft text illuminates brightly as your cursor shines over it.",
    accent: "#fbbf24",
    category: "Color & Glow",
    node: <SpotlightTorch text="Spotlight" className={BASE} />,
  },
  {
    name: "Tracking Spring",
    desc: "Letter spacing stretches out smoothly with an emerald glow.",
    accent: "#34d399",
    category: "Cyber & Typography",
    node: <TrackingSpring text="Expand" className={BASE} />,
  },
  {
    name: "Strikethrough Slash",
    desc: "A glowing cyber slash cuts right through the word.",
    accent: "#fb923c",
    category: "Cyber & Typography",
    node: <SlashStrike text="Slashed" className={BASE} />,
  },
  {
    name: "Saloon Door 3D",
    desc: "Letters swing 180° around the Y-axis in true 3D space.",
    accent: "#d946ef",
    category: "Motion & 3D",
    node: <SaloonDoor3D text="Saloon" className={BASE} />,
  },
  {
    name: "Smoke Dissolve",
    desc: "Letters float upwards and dissolve into hazy smoke.",
    accent: "#94a3b8",
    category: "Motion & 3D",
    node: <SmokeDissolve text="Vanishing" className={BASE} />,
  },
  {
    name: "Matrix Cyber Rain",
    desc: "Katakana cyber symbols decode into the final text.",
    accent: "#00ff66",
    category: "Cyber & Typography",
    node: <MatrixCyber text="Matrix" className={BASE} />,
  },
  {
    name: "Water Reflection",
    desc: "An inverted water reflection ripples beneath the text.",
    accent: "#38bdf8",
    category: "Color & Glow",
    node: <WaterReflection text="Ripple" className={BASE} />,
  },
  {
    name: "Slam Impact",
    desc: "Text scales up huge and slams down with a vivid drop shadow.",
    accent: "#f43f5e",
    category: "Motion & 3D",
    node: <SlamStamp text="Impact!" className={BASE} />,
  },
  {
    name: "Party Jiggle",
    desc: "Every character vibrates and dances with energetic hues.",
    accent: "#ec4899",
    category: "Color & Glow",
    node: <PartyJiggle text="Party!" className={BASE} />,
  },
  {
    name: "Speed Skew Trails",
    desc: "Text leans forward into high gear with trailing speed lines.",
    accent: "#ef4444",
    category: "Motion & 3D",
    node: <SpeedSkew text="Fast" className={BASE} />,
  },
  {
    name: "Gradient Shimmer",
    desc: "A travelling gradient glides across every glyph.",
    accent: "#a78bfa",
    category: "Color & Glow",
    node: <Shimmer text="Shimmer" className={BASE} />,
  },
  {
    name: "Letter Wave",
    desc: "Letters spring upward one after the other.",
    accent: "#f0abfc",
    category: "Motion & 3D",
    node: <LetterWave text="Bounce" className={BASE} />,
  },
  {
    name: "Colour Cascade",
    desc: "Hues ripple through the word, letter by letter.",
    accent: "#38bdf8",
    category: "Color & Glow",
    node: <ColorCascade text="Cascade" className={BASE} />,
  },
  {
    name: "RGB Glitch",
    desc: "Channels split and tear like a broken signal.",
    accent: "#ff3864",
    category: "Cyber & Typography",
    node: <Glitch text="Glitch" className={BASE} />,
  },
  {
    name: "Neon Glow",
    desc: "A flickering tube-light glow, straight from the 80s.",
    accent: "#2dd4bf",
    category: "Color & Glow",
    node: <Neon text="Neon" className={BASE} />,
  },
  {
    name: "Slide Swap",
    desc: "Swap words with a smooth vertical reveal.",
    accent: "#22d3ee",
    category: "Motion & 3D",
    node: <SlideSwap text="View" swap="More" className={BASE} />,
  },
  {
    name: "Underline Sweep",
    desc: "An underline draws itself out from the centre.",
    accent: "#818cf8",
    category: "Color & Glow",
    node: <UnderlineSweep text="Hover Me" className={BASE} />,
  },
  {
    name: "3D Flip",
    desc: "A full 360° rotation through real 3D space.",
    accent: "#c084fc",
    category: "Motion & 3D",
    node: <Spin3D text="Rotate" className={BASE} />,
  },
  {
    name: "Outline Fill",
    desc: "Stroked lettering fills with a solid gradient.",
    accent: "#f472b6",
    category: "Cyber & Typography",
    node: <OutlineFill text="Outline" className={BASE} />,
  },
  {
    name: "Vaporwave Stack",
    desc: "Layered chromatic shadows for a retro vibe.",
    accent: "#ffd23f",
    category: "Cyber & Typography",
    node: <Stack text="Retro" className={BASE} />,
  },
  {
    name: "Typewriter",
    desc: "Keys tap out the word with a blinking caret.",
    accent: "#4ade80",
    category: "Cyber & Typography",
    node: <Typewriter text="print()" className={BASE} />,
  },
  {
    name: "Blur Focus",
    desc: "Blur snaps into a crisp, glowing focus.",
    accent: "#60a5fa",
    category: "Color & Glow",
    node: <BlurFocus text="Focus" className={BASE} />,
  },
  {
    name: "Decrypt Scramble",
    desc: "Random glyphs resolve to reveal the word.",
    accent: "#fb923c",
    category: "Cyber & Typography",
    node: <Scramble text="Decrypt" className={BASE} />,
  },
];

function Card({ demo, index }: { demo: Demo; index: number }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/40">
      {/* glow wash on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 80% at 50% 0%, ${demo.accent}22, transparent 60%)`,
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/60">
          {demo.category}
        </span>
        <span
          className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-150"
          style={{ backgroundColor: demo.accent, boxShadow: `0 0 12px ${demo.accent}` }}
        />
      </div>

      <div className="relative flex min-h-[150px] flex-1 items-center justify-center py-6 text-center">
        {demo.node}
      </div>

      <div className="relative mt-4 border-t border-white/5 pt-4">
        <h3 className="text-sm font-semibold text-white/90">{demo.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/40">{demo.desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Color & Glow",
    "Motion & 3D",
    "Cyber & Typography",
  ];

  const filtered =
    activeTab === "All"
      ? demos
      : demos.filter((d) => d.category === activeTab);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="blob-a absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="blob-b absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-[130px]" />
        <div className="blob-a absolute bottom-[-15%] left-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06060a]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#06060a]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-fuchsia-500/30">
              H
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Hover<span className="text-white/40">Lab</span>
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {["Pure CSS", "No libraries", "React"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        {/* Hero */}
        <section className="py-14 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
            </span>
            {demos.length} interactive text effects
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Text <span className="text-shimmer-always">Hover</span> Animations
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            A living gallery of hover-driven typography. Run your cursor over
            any card below to see it in motion.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/25 scale-105"
                    : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {cat}
                <span className="ml-2 rounded-full bg-black/25 px-2 py-0.5 text-[10px] opacity-75">
                  {cat === "All" ? demos.length : demos.filter((d) => d.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((demo) => {
            const originalIndex = demos.findIndex((d) => d.name === demo.name);
            return <Card key={demo.name} demo={demo} index={originalIndex} />;
          })}
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-white/35">
            Built with React, Tailwind CSS &amp; a little CSS keyframe magic.
          </p>
          <p className="mt-2 font-mono text-xs text-white/25">
            hover → transform, clip-path, text-shadow, background-clip
          </p>
        </footer>
      </main>
    </div>
  );
}

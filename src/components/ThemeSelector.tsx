"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes: { id: "porsche" | "ferrari" | "lamborghini", label: string, color: string }[] = [
    { id: "porsche", label: "01", color: "#cc0000" }, // Porsche Red
    { id: "ferrari", label: "02", color: "#ff2800" }, // Rosso Corsa
    { id: "lamborghini", label: "03", color: "#00ff00" }, // Verde Mantis
  ];

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 lg:right-12 z-40 hidden md:flex flex-col gap-4 items-center">
      <div className="w-[1px] h-12 bg-white/20 mb-2"></div>
      <span className="text-[10px] uppercase tracking-[0.2em] font-editorial text-white/50 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        Select Specification
      </span>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className="relative group w-8 h-8 flex items-center justify-center rounded-full overflow-hidden"
          aria-label={`Select ${t.id} theme`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full border border-white/20 transition-all duration-500 ${theme === t.id ? 'scale-100 opacity-100' : 'scale-50 opacity-0 group-hover:scale-75 group-hover:opacity-50'}`}
          />
          <span 
            className="w-2 h-2 rounded-full transition-transform duration-500" 
            style={{ 
              backgroundColor: t.color,
              transform: theme === t.id ? 'scale(1.5)' : 'scale(1)'
            }} 
          />
        </button>
      ))}
    </div>
  );
}

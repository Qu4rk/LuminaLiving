"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Custom spring config for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }
    
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent-primary)] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{ backgroundColor: "var(--accent)" }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[var(--accent-secondary)] rounded-full pointer-events-none z-50"
        style={{ x: cursorX, y: cursorY, borderColor: "var(--accent)" }}
      />
    </>
  );
}

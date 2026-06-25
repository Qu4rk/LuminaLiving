"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, higher is faster
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.15 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // As the container scrolls through the viewport (0 to 1), 
  // move the image down by `speed * 100%`
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 w-full h-[120%] object-cover object-center"
      />
    </div>
  );
}

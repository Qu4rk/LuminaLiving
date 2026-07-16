"use client"

import React from "react"
import { motion } from "motion/react"

export function BouncingDots({ className = "" }: { className?: string }) {
  return (
    <div 
      className={className}
      style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', justifyContent: 'center' }}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          style={{ width: '6px', height: '6px', backgroundColor: '#AEE2FF', borderRadius: '50%' }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1.2,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

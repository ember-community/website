"use client";

import { useState, useEffect } from "react";
import { colors } from "@/lib/design-tokens";

interface Particle {
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  opacity: number;
  color: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        dur: 4 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.3,
        color: i % 3 === 0 ? colors.ember : colors.warmGold,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            ["--p-opacity" as string]: p.opacity,
            animation: `particleFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
import { colors } from "@/lib/design-tokens";

type FoxState = "idle" | "sleeping" | "speaking" | "happy" | "recording" | "celebrating";

interface FoxProps {
  size?: number;
  state?: FoxState;
}

const foxImage: Record<FoxState, string> = {
  idle: "/fox/smiling.png",
  speaking: "/fox/smiling.png",
  sleeping: "/fox/resting.png",
  happy: "/fox/smiling_tilting.png",
  recording: "/fox/smiling_tilting.png",
  celebrating: "/fox/smiling_tilting.png",
};

export default function Fox({ size = 120, state = "idle" }: FoxProps) {
  const glow = state === "recording" ? colors.ember : colors.warmGold;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Radial glow */}
      <div
        className="absolute rounded-full pointer-events-none animate-fox-pulse"
        style={{
          inset: -size * 0.4,
          background: `radial-gradient(circle, ${glow}28 0%, transparent 70%)`,
        }}
      />
      <Image
        src={foxImage[state]}
        alt="Ember fox"
        width={size}
        height={size}
        className="relative z-[1] object-contain"
        priority
      />
    </div>
  );
}

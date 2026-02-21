"use client";

import { colors } from "@/lib/design-tokens";

type FoxState = "idle" | "sleeping" | "speaking" | "happy" | "recording" | "celebrating";

interface FoxProps {
  size?: number;
  state?: FoxState;
}

export default function Fox({ size = 120, state = "idle" }: FoxProps) {
  const glow = state === "recording" ? colors.ember : colors.warmGold;
  const tailAnim = state === "recording" || state === "celebrating";

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
      {/* Fox SVG */}
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="relative z-[1]"
      >
        {/* Tail */}
        <g
          style={{
            transformOrigin: "130px 150px",
            animation: tailAnim ? "tailWag 0.6s ease-in-out infinite alternate" : "none",
          }}
        >
          <path
            d="M130 145 Q170 110 175 80 Q178 95 172 115 Q168 130 145 150"
            fill={colors.ember}
            opacity="0.9"
          />
          <path
            d="M172 80 Q175 90 170 105 Q165 115 155 125"
            fill={colors.warmGold}
            opacity="0.6"
          />
        </g>
        {/* Body */}
        <ellipse cx="100" cy="148" rx="42" ry="30" fill={colors.ember} opacity="0.9" />
        {/* Belly */}
        <ellipse cx="100" cy="152" rx="30" ry="18" fill={colors.warmGold} opacity="0.4" />
        {/* Head */}
        <circle cx="100" cy="108" r="32" fill={colors.ember} />
        {/* Ears */}
        <polygon points="74,82 68,52 88,78" fill={colors.ember} />
        <polygon points="126,82 132,52 112,78" fill={colors.ember} />
        {/* Inner ears */}
        <polygon points="76,78 72,58 86,76" fill={colors.warmGold} opacity="0.5" />
        <polygon points="124,78 128,58 114,76" fill={colors.warmGold} opacity="0.5" />
        {/* Face mask */}
        <ellipse cx="100" cy="116" rx="18" ry="14" fill={colors.firelight} opacity="0.9" />
        {/* Eyes */}
        {state === "sleeping" ? (
          <>
            <line x1="86" y1="104" x2="94" y2="104" stroke={colors.nightSky} strokeWidth="2" strokeLinecap="round" />
            <line x1="106" y1="104" x2="114" y2="104" stroke={colors.nightSky} strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="90" cy="104" rx="4" ry={state === "happy" ? 2 : 4.5} fill={colors.nightSky} />
            <ellipse cx="110" cy="104" rx="4" ry={state === "happy" ? 2 : 4.5} fill={colors.nightSky} />
            {state !== "happy" && (
              <>
                <circle cx="91.5" cy="102.5" r="1.2" fill="white" opacity="0.8" />
                <circle cx="111.5" cy="102.5" r="1.2" fill="white" opacity="0.8" />
              </>
            )}
          </>
        )}
        {/* Nose */}
        <ellipse cx="100" cy="113" rx="3" ry="2.5" fill={colors.nightSky} />
        {/* Happy smile */}
        {state === "happy" && (
          <path
            d="M95 116 Q100 121 105 116"
            fill="none"
            stroke={colors.nightSky}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
        {/* Celebrating sparkles */}
        {state === "celebrating" && (
          <>
            <circle cx="50" cy="70" r="3" fill={colors.warmGold}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="60" r="2.5" fill={colors.warmGold}>
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="130" r="2" fill={colors.warmGold}>
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}

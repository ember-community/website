"use client";

import { useState } from "react";
import Particles from "./Particles";
import Fox from "./Fox";
import PhoneMockup from "./PhoneMockup";
import RecordButton from "./RecordButton";
import EmailCapture from "./EmailCapture";
import { colors } from "@/lib/design-tokens";

export default function Hero() {
  const [foxHover, setFoxHover] = useState(false);

  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 md:px-10 pt-[120px] pb-20">
      <Particles />

      {/* Large ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.ember}0D 0%, transparent 70%)`,
        }}
      />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-[1100px] w-full relative z-[1]">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-ember/10 text-ember text-xs font-bold uppercase tracking-wider mb-6">
            Coming Soon — Join the Waitlist 🔥
          </div>

          <h1 className="font-display text-[42px] md:text-[56px] font-bold leading-[1.08] tracking-tight mb-5">
            Find your voice<br />
            <span className="bg-gradient-to-br from-ember to-warm-gold bg-clip-text text-transparent">
              by the fire
            </span>
          </h1>

          <p className="text-[17px] text-ash leading-relaxed max-w-[460px] mb-8 mx-auto lg:mx-0">
            Practice speaking 2 minutes a day. Get AI-powered feedback from your
            personal fox coach. Track your progress as your campfire grows.
          </p>

          {/* Email capture */}
          <div id="waitlist">
            <EmailCapture />
          </div>

          <div className="text-xs text-smoke mt-3 mb-6 lg:mb-0">
            Join 200+ people already on the waitlist. No spam, just fire.
          </div>
        </div>

        {/* Phone + Fox */}
        <div
          className="relative shrink-0"
          style={{ animation: "fadeUp 1s ease-out 0.3s both" }}
        >
          {/* Floating fox above phone */}
          <div
            className="absolute -top-[50px] -left-10 z-[2] animate-float cursor-pointer"
            onMouseEnter={() => setFoxHover(true)}
            onMouseLeave={() => setFoxHover(false)}
          >
            <Fox size={90} state={foxHover ? "happy" : "idle"} />
          </div>

          <PhoneMockup glow>
            <div className="flex flex-col items-center justify-between h-full pt-3 pb-4">
              {/* Day counter */}
              <div className="text-center">
                <div className="text-[10px] text-warm-gold font-bold uppercase tracking-widest">
                  Day 47
                </div>
                <div className="font-mono text-[10px] text-smoke mt-0.5">
                  🔥 12 day streak
                </div>
              </div>

              <Fox size={70} state="idle" />

              {/* Topic + Record */}
              <div className="text-center w-full">
                <div className="text-[10px] text-ash uppercase tracking-wider mb-1.5">
                  Today&apos;s Topic
                </div>
                <div className="font-heading text-sm leading-snug mb-4 px-2">
                  Describe a moment that changed your perspective
                </div>
                <RecordButton />
                <div className="text-[10px] text-smoke mt-2">
                  Tap to record &bull; 2:00
                </div>
              </div>

              {/* Streak dots */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <div
                    key={d}
                    className="flex items-center justify-center text-[7px]"
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background:
                        d <= 5
                          ? `radial-gradient(circle, ${colors.warmGold}, ${colors.ember})`
                          : colors.midnight,
                      border: d > 5 ? `1px solid ${colors.smoke}44` : "none",
                    }}
                  >
                    {d <= 5 && "🔥"}
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

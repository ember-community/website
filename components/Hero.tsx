import Particles from "./Particles";
import Fox from "./Fox";
import PhoneMockup from "./PhoneMockup";
import EmailCapture from "./EmailCapture";
import { colors } from "@/lib/design-tokens";

export default function Hero() {
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
            Coming to iOS — Get Notified 🔥
          </div>

          <h1 className="font-display text-[42px] md:text-[56px] font-bold leading-[1.08] tracking-tight mb-5">
            Find your voice<br />
            <span className="bg-gradient-to-br from-ember to-warm-gold bg-clip-text text-transparent">
              by the fire
            </span>
          </h1>

          <p className="text-[17px] text-ash leading-relaxed max-w-[460px] mb-8 mx-auto lg:mx-0">
            Spin a topic. Speak for 2 minutes. Build your streak. 50
            hand-crafted prompts across storytelling, opinions, pitches,
            reflections, and freestyle — your daily speaking habit, guided by a
            friendly fox.
          </p>

          {/* Email capture */}
          <div id="notify">
            <EmailCapture />
          </div>
        </div>

        {/* Phone + Fox */}
        <div
          className="relative shrink-0"
          style={{ animation: "fadeUp 1s ease-out 0.3s both" }}
        >
          <PhoneMockup glow>
            <div className="flex flex-col items-center justify-between h-full pt-3 pb-4">
              {/* Greeting */}
              <div className="text-center">
                <div className="font-heading text-sm text-firelight">
                  Good morning
                </div>
                <div className="font-mono text-[10px] text-smoke mt-0.5">
                  🔥 5 day streak
                </div>
              </div>

              <Fox size={60} state="idle" />

              {/* Topic reel */}
              <div className="text-center w-full">
                <div className="space-y-1.5 px-3 mb-3">
                  <div className="text-[10px] text-smoke/80 leading-snug truncate px-2">
                    Should everyone learn to cook?
                  </div>
                  <div
                    className="font-heading text-[13px] leading-snug px-3 py-1.5 rounded-lg"
                    style={{
                      background: `${colors.ember}15`,
                      border: `1px solid ${colors.ember}33`,
                    }}
                  >
                    A moment that changed your perspective
                  </div>
                  <div className="text-[10px] text-smoke/80 leading-snug truncate px-2">
                    Pitch your favourite book
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 justify-center">
                  <div
                    className="px-4 py-1.5 rounded-full text-[10px] font-semibold"
                    style={{
                      background: colors.deepNavy,
                      border: `1px solid ${colors.smoke}44`,
                      color: colors.ash,
                    }}
                  >
                    Spin
                  </div>
                  <div
                    className="px-4 py-1.5 rounded-full text-[10px] font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${colors.ember}, #C94420)`,
                    }}
                  >
                    Let&apos;s Start
                  </div>
                </div>
              </div>

            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

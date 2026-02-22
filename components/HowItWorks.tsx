const steps = [
  {
    step: "01",
    title: "Spin a Topic",
    desc: "Open the app and spin the reel. 50 prompts across storytelling, opinions, pitches, reflections, and freestyle — or browse and pick your own.",
  },
  {
    step: "02",
    title: "Speak for 2 Minutes",
    desc: "Tap start and speak freely. A clean timer counts you down. No scripts, no pressure. Just you and the fire.",
  },
  {
    step: "03",
    title: "Build Your Streak",
    desc: "Complete a session and watch your streak grow. Track your consistency with weekly dots and keep the fire burning.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6 md:px-10"
      style={{
        background: "linear-gradient(to bottom, #0A0F23, #0E1F2F44, #0A0F23)",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] text-ember font-bold uppercase tracking-widest mb-3">
            How It Works
          </div>
          <h2 className="font-display text-[40px] font-bold">
            Three steps. Two minutes.{" "}
            <span className="text-warm-gold">Every day.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
          {steps.map((s, i) => (
            <div key={i} className="contents">
              <div className="bg-deep-navy rounded-[20px] p-7 border border-smoke/20 transition-all duration-300 hover:-translate-y-1 hover:border-ember/[0.27] flex flex-col">
                <div className="inline-block self-start font-mono text-xs font-bold text-ember bg-ember/10 px-2.5 py-1 rounded-full mb-4">
                  {s.step}
                </div>
                <div className="font-heading text-xl mb-2">{s.title}</div>
                <div className="text-sm text-ash leading-relaxed">{s.desc}</div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-4 text-smoke/40 text-2xl select-none">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

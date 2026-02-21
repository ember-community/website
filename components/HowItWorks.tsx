import Fox from "./Fox";

type FoxState = "idle" | "recording" | "happy";

const steps: { step: string; title: string; desc: string; fox: FoxState }[] = [
  {
    step: "01",
    title: "Get a Topic",
    desc: "Open the app and receive today's speaking prompt. Storytelling, opinions, pitches — a new challenge every day.",
    fox: "idle",
  },
  {
    step: "02",
    title: "Speak for 2 Minutes",
    desc: "Hit the ember button and speak freely. No scripts, no pressure. Just you and the fire.",
    fox: "recording",
  },
  {
    step: "03",
    title: "Get Feedback",
    desc: "Your fox coach analyzes your recording and highlights exactly where to improve. Track your growth over time.",
    fox: "happy",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-5xl font-bold text-ember/20 mb-4">
                {s.step}
              </div>
              <div className="flex justify-center mb-4">
                <Fox size={80} state={s.fox} />
              </div>
              <div className="font-heading text-xl mb-2">{s.title}</div>
              <div className="text-sm text-ash leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

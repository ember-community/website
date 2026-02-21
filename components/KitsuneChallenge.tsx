const milestones = [
  { tails: 1, days: "7 days", label: "First Spark" },
  { tails: 3, days: "40 days", label: "Rising Voice" },
  { tails: 5, days: "90 days", label: "Storyteller" },
  { tails: 7, days: "180 days", label: "Council Elder" },
  { tails: 9, days: "365 days", label: "Nine-Tailed Master" },
];

export default function KitsuneChallenge() {
  return (
    <section
      className="py-24 px-6 md:px-10"
      style={{
        background: "linear-gradient(to bottom, #0A0F23, #0E1F2F66, #0A0F23)",
      }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <div className="text-[11px] text-ember font-bold uppercase tracking-widest mb-3">
          The Kitsune Challenge
        </div>
        <h2 className="font-display text-[40px] font-bold mb-3">
          Earn <span className="text-warm-gold">nine tails</span> in 365 days
        </h2>
        <p className="text-ash text-base max-w-[500px] mx-auto leading-relaxed mb-12">
          In Japanese mythology, the Kitsune grows a new tail with each century
          of wisdom. In Ember, your fox earns tails as you build your speaking
          streak.
        </p>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="bg-deep-navy rounded-2xl py-5 px-6 border border-smoke/20 min-w-[140px]"
            >
              <div className="font-mono text-2xl text-warm-gold mb-1">
                🦊 {"✦".repeat(m.tails)}
              </div>
              <div className="font-heading text-sm mb-1">{m.label}</div>
              <div className="text-[11px] text-ash">{m.days}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

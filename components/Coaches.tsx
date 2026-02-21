"use client";

const coaches = [
  {
    emoji: "🦊",
    name: "The Fox",
    skill: "Wit & Conciseness",
    unlock: "Day 7",
    desc: "Cuts through the noise. Flags filler words, detects rambling, scores your punchiness.",
    color: "#FF5E2B",
  },
  {
    emoji: "🐻",
    name: "The Bear",
    skill: "Pacing & Calm",
    unlock: "Day 30",
    desc: "Slows you down. Analyzes breathing, pause frequency, and whether you're rushing.",
    color: "#FAE4CF",
  },
  {
    emoji: "🐦‍⬛",
    name: "The Raven",
    skill: "Vocabulary & Structure",
    unlock: "Day 60",
    desc: "Sharpens your words. Suggests transitions, tracks word variety, maps your narrative arc.",
    color: "#8A9BAE",
  },
  {
    emoji: "🦌",
    name: "The Stag",
    skill: "Presence & Gravitas",
    unlock: "Day 120",
    desc: "Commands the room. Measures confidence, detects hedging, scores vocal energy.",
    color: "#F0B866",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] text-ember font-bold uppercase tracking-widest mb-3">
            The Campfire Council
          </div>
          <h2 className="font-display text-[40px] font-bold mb-3">
            Four coaches. Four skills.{" "}
            <span className="text-warm-gold">One voice.</span>
          </h2>
          <p className="text-ash text-base max-w-[500px] mx-auto leading-relaxed">
            Each woodland spirit specializes in a different dimension of
            communication. Unlock them as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coaches.map((c, i) => (
            <div
              key={i}
              className="bg-deep-navy rounded-[20px] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                border: `1px solid ${c.color}22`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${c.color}55`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${c.color}22`;
              }}
            >
              <div className="text-5xl mb-3">{c.emoji}</div>
              <div className="font-heading text-xl mb-1">{c.name}</div>
              <div
                className="text-[13px] font-semibold mb-1"
                style={{ color: c.color }}
              >
                {c.skill}
              </div>
              <div
                className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-3"
                style={{
                  background: `${c.color}15`,
                  color: c.color,
                }}
              >
                Unlocks {c.unlock}
              </div>
              <div className="text-[13px] text-ash leading-relaxed">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

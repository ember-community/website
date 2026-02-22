const features = [
  {
    icon: "🎰",
    title: "Spin for a Topic",
    desc: "A slot-machine reel with 50 speaking prompts. Spin to discover your next challenge, or browse and pick your own.",
  },
  {
    icon: "🎙️",
    title: "2-Minute Focus Sessions",
    desc: "A clean timer with circular progress, pause, and stop. Short enough for your morning routine, long enough to build real skill.",
  },
  {
    icon: "🦊",
    title: "Your Fox Companion",
    desc: "A friendly fox mascot guides your practice. It reacts to your progress and keeps you company by the fire.",
  },
  {
    icon: "📚",
    title: "50 Curated Topics",
    desc: "Hand-written prompts across 5 categories — storytelling, opinions, pitches, reflections, and freestyle. Browse, search, and filter.",
  },
  {
    icon: "🔥",
    title: "Streak Tracking",
    desc: "Track your current streak, longest streak, and total sessions. Weekly dots show your consistency at a glance.",
  },
  {
    icon: "✈️",
    title: "100% Offline",
    desc: "No internet required. No account to create. No data ever leaves your phone. Just you and the fire.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] text-ember font-bold uppercase tracking-widest mb-3">
            Features
          </div>
          <h2 className="font-display text-[40px] font-bold mb-3">
            Your personal <span className="text-warm-gold">campfire</span>
          </h2>
          <p className="text-ash text-base max-w-[500px] mx-auto leading-relaxed">
            Everything you need to build a daily speaking habit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-deep-navy rounded-[20px] p-7 border border-smoke/20 transition-all duration-300 hover:-translate-y-1 hover:border-ember/[0.27]"
            >
              <div className="text-[32px] mb-3.5">{f.icon}</div>
              <div className="font-heading text-lg mb-2">{f.title}</div>
              <div className="text-sm text-ash leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🎯",
    title: "Daily Topics",
    desc: "A new speaking prompt every day — storytelling, opinions, pitches, reflections. Never run out of things to say.",
  },
  {
    icon: "🎙️",
    title: "2-Minute Recording",
    desc: "Hit record and speak freely for 2 minutes. Short enough to fit in your morning routine. Long enough to build real skill.",
  },
  {
    icon: "🦊",
    title: "AI Fox Coach",
    desc: "Your fox analyzes clarity, conciseness, filler words, pacing, and engagement. Real feedback, not empty praise.",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Watch your scores improve over days, weeks, and months. Every session is data. Every day is growth.",
  },
  {
    icon: "🔥",
    title: "Streak System",
    desc: "Build your streak. Earn Kitsune tails. Watch your fox grow from a single tail to a legendary nine-tailed master.",
  },
  {
    icon: "🌲",
    title: "Campfire Council",
    desc: "Unlock new animal coaches as you progress — the Bear for pacing, the Raven for vocabulary, the Stag for presence.",
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
            The oldest form of human connection, powered by the newest technology.
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

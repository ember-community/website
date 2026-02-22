const categories = [
  {
    emoji: "📖",
    name: "Story",
    color: "#FF5E2B",
    topics: [
      "A moment that changed your perspective",
      "The strangest coincidence you've experienced",
    ],
  },
  {
    emoji: "💬",
    name: "Opinion",
    color: "#F0B866",
    topics: [
      "Should everyone learn to cook?",
      "Is social media making us better communicators?",
    ],
  },
  {
    emoji: "🎤",
    name: "Pitch",
    color: "#FAE4CF",
    topics: [
      "Sell your favourite book to a stranger",
      "Pitch a holiday destination to a friend",
    ],
  },
  {
    emoji: "🪞",
    name: "Reflect",
    color: "#8A9BAE",
    topics: [
      "What does confidence mean to you?",
      "A habit you're glad you started",
    ],
  },
  {
    emoji: "🎲",
    name: "Freestyle",
    color: "#C4A1FF",
    topics: [
      "Talk about whatever's on your mind",
      "Describe your perfect Saturday morning",
    ],
  },
];

export default function TopicShowcase() {
  return (
    <section id="topics" className="py-24 px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] text-ember font-bold uppercase tracking-widest mb-3">
            Topics
          </div>
          <h2 className="font-display text-[40px] font-bold mb-3">
            50 topics. 5 categories.
          </h2>
          <p className="text-ash text-base max-w-[500px] mx-auto leading-relaxed">
            Hand-written prompts to stretch your voice in every direction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-deep-navy rounded-[20px] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                border: `1px solid ${c.color}22`,
              }}
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <div className="font-heading text-xl mb-1">{c.name}</div>
              <div className="space-y-2.5 mt-4">
                {c.topics.map((t, j) => (
                  <div
                    key={j}
                    className="text-[13px] text-ash leading-relaxed px-3 py-2.5 rounded-lg"
                    style={{ background: `${c.color}0A` }}
                  >
                    &ldquo;{t}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

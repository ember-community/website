import Fox from "./Fox";
import { colors } from "@/lib/design-tokens";

export default function Vision() {
  return (
    <section className="py-24 px-6 md:px-10">
      <div
        className="max-w-[700px] mx-auto text-center rounded-3xl relative overflow-hidden"
        style={{
          background: colors.deepNavy,
          padding: "56px 48px",
          border: `1px solid ${colors.smoke}33`,
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.ember}11, transparent)`,
          }}
        />

        <div className="flex justify-center">
          <Fox size={70} state="happy" />
        </div>

        <h2 className="font-display text-[32px] font-bold mt-5 mb-4 leading-snug">
          &ldquo;The best communicators aren&apos;t born. They&apos;re{" "}
          <span className="text-warm-gold">forged by the fire.</span>&rdquo;
        </h2>

        <p className="text-ash text-[15px] leading-relaxed max-w-[500px] mx-auto">
          Ember was born from a simple realization: talking to a camera is hard.
          Storytelling doesn&apos;t come naturally. But with daily practice and
          honest feedback, anyone can find their voice. We&apos;re building the
          gym for your communication skills.
        </p>
      </div>
    </section>
  );
}

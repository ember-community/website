import Particles from "./Particles";
import Fox from "./Fox";
import EmailCapture from "./EmailCapture";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 md:px-10 text-center relative">
      <Particles />

      <div className="relative z-[1]">
        <div className="flex justify-center mb-6 animate-float">
          <Fox size={100} state="celebrating" />
        </div>

        <h2 className="font-display text-[44px] font-bold mb-3">
          Ready to sit by the fire?
        </h2>

        <p className="text-ash text-base max-w-[440px] mx-auto leading-relaxed mb-8">
          Join the waitlist and be the first to meet your fox coach when Ember
          launches.
        </p>

        <div className="flex justify-center">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}

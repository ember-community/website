import Counter from "./Counter";

export default function SocialProof() {
  return (
    <section className="py-10 px-6 md:px-10 border-t border-b border-smoke/[0.13]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto">
        <Counter end={2} label="Minutes a day" suffix=" min" />
        <Counter end={365} label="Day challenge" />
        <Counter end={4} label="AI coaches" />
        <Counter end={9} label="Tails to earn" />
      </div>
    </section>
  );
}

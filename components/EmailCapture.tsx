"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "submitted">("idle");

  const handleSubmit = async () => {
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("submitted");
    } catch {
      setStatus("submitted");
    }
  };

  if (status === "submitted") {
    return (
      <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ember/10 text-warm-gold text-[15px] font-semibold">
        🔥 You&apos;re on the list! The fox will find you.
      </div>
    );
  }

  return (
    <div className="flex gap-2.5 flex-wrap justify-center lg:justify-start">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="px-5 py-3.5 rounded-full border border-smoke/40 bg-deep-navy text-firelight text-[15px] font-sans w-[280px] outline-none focus:border-ember/50 transition-colors"
      />
      <button
        className="cta-btn"
        onClick={handleSubmit}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Notify Me"}
      </button>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
}

export default function Counter({ end, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = end / 40;
          const interval = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl font-bold text-warm-gold">
        {count}{suffix}
      </div>
      <div className="text-[13px] text-ash mt-1">{label}</div>
    </div>
  );
}

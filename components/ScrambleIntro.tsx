"use client";

import { useEffect, useMemo, useState } from "react";

const glyphs = "01<>[]{}#*+=/\\|";

function useStormStart() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("portfolio-booted")) {
      setStarted(true);
      return;
    }
    const begin = () => setStarted(true);
    window.addEventListener("portfolio-boot-complete", begin, { once: true });
    return () => window.removeEventListener("portfolio-boot-complete", begin);
  }, []);
  return started;
}

function scramble(text: string, progress: number) {
  return text.split("").map((character, index) => {
    if (character === " ") return " ";
    return index / Math.max(text.length, 1) < progress ? character : glyphs[(index * 11 + Math.floor(progress * 29)) % glyphs.length];
  }).join("");
}

export function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const started = useStormStart();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!started) return;
    const startedAt = performance.now();
    const timer = window.setInterval(() => {
      const value = Math.min((performance.now() - startedAt) / 3000, 1);
      setProgress(value);
      if (value === 1) window.clearInterval(timer);
    }, 42);
    return () => window.clearInterval(timer);
  }, [started]);
  return <span className={className}>{started ? scramble(text, progress) : text}</span>;
}

export default function ScrambleIntro() {
  const started = useStormStart();
  const fragments = useMemo(() => Array.from({ length: 74 }, (_, index) => ({ text: ["SQL", "RAG", "ETL", "ORA", "CI/CD", "0101", "JSON", "API", "KAFKA", "VECTOR", "PG", "RMAN"][index % 12], x: (index * 37) % 100, y: (index * 53) % 100, delay: (index % 18) * 0.045 })), []);
  if (!started) return null;
  return <div className="data-burst" aria-hidden="true">{fragments.map((fragment, index) => <span key={index} style={{ left: `${fragment.x}%`, top: `${fragment.y}%`, animationDelay: `${fragment.delay}s` }}>{fragment.text}</span>)}</div>;
}

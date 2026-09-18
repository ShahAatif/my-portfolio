"use client";

import { useEffect, useState } from "react";

export default function EasterEgg() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const newInput = prev + e.key.toLowerCase();
        if (newInput.includes("sudo hire-me")) {
          setShowOverlay(true);
          return "";
        }
        return newInput.slice(-20);
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!showOverlay) return null;

  return (
    <div
      className="fixed inset-0 bg-term-bg/95 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={() => setShowOverlay(false)}
    >
      <div
        className="bg-term-border border-2 border-term-green p-8 rounded-lg max-w-2xl max-h-96 overflow-y-auto font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-green mb-4">$ sudo hire-me</div>

        <div className="space-y-2 text-term-fg">
          <p className="text-amber">⚠️ You are attempting to hire Shah Aatif Bashir</p>
          <p>Access granted! Here's what you get:</p>

          <div className="my-4 space-y-1 text-cyan">
            <p>✓ Database administration expertise (RMAN, performance tuning)</p>
            <p>✓ Full-stack development skills (ASP.NET, Angular, REST APIs)</p>
            <p>✓ Strong foundation in Java, SQL, data structures</p>
            <p>✓ Production database operations experience</p>
            <p>✓ Problem-solving mindset and collaborative team player</p>
          </div>

          <p className="mt-4">Ready to build something great together!</p>
        </div>

        <div className="mt-6 text-center text-xs text-term-border">
          (click to close)
        </div>
      </div>
    </div>
  );
}

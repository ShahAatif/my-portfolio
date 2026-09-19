"use client";

import { useEffect, useState } from "react";

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("portfolio-booted")) {
      setVisible(false);
      return;
    }

    const reveal = window.setTimeout(() => setComplete(true), 3400);
    const dismiss = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-booted", "true");
      window.dispatchEvent(new Event("portfolio-boot-complete"));
      setVisible(false);
    }, 3900);

    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(dismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`boot-sequence ${complete ? "boot-complete" : ""}`} aria-hidden="true">
      <div className="boot-glow" />
      <div className="boot-panel">
        <p className="text-cyan">INITIALIZING AATIF.OS</p>
        <p className="mt-4 text-term-fg">[✓] Loading data infrastructure</p>
        <p className="text-term-fg">[✓] Verifying production systems</p>
        <p className="text-term-fg">[✓] Connecting engineering portfolio</p>
        <div className="boot-progress mt-5"><span /></div>
        <p className="mt-3 text-xs text-green">ACCESS GRANTED <span className="cursor">█</span></p>
      </div>
    </div>
  );
}

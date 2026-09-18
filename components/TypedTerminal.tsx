"use client";

import { useEffect, useState } from "react";

export default function TypedTerminal({
  lines,
  speed = 50,
}: {
  lines: string[];
  speed?: number;
}) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines, speed]);

  useEffect(() => {
    if (displayedLines.length === 0) {
      setDisplayedLines(new Array(lines.length).fill(""));
    }
  }, []);

  return (
    <div className="space-y-0 text-green">
      {displayedLines.map((line, idx) => (
        <div key={idx} className="flex">
          {line}
          {idx === currentLineIndex && <span className="cursor">▋</span>}
        </div>
      ))}
    </div>
  );
}

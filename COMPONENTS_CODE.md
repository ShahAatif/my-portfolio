# Component Code Files

Copy-paste each component into your `components/` folder.

---

## 1. TerminalWindow.tsx

```typescript
export default function TerminalWindow({
  children,
  title = "~/portfolio",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-term-border rounded-lg overflow-hidden shadow-2xl border border-term-green">
        <div className="bg-gradient-to-r from-term-border to-term-bg px-4 py-3 flex items-center justify-between border-b border-term-green">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-term-green font-mono">{title}</span>
          <div className="w-12" />
        </div>
        <div className="p-6 bg-term-bg text-term-fg font-mono text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
```

---

## 2. TypedTerminal.tsx

```typescript
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
```

---

## 3. Navbar.tsx

```typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/resume", label: "resume" },
    { href: "/contact", label: "contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-term-border border-b border-term-green">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg text-green font-bold hover:text-cyan">
          $ <span className="text-cyan">~</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition ${
                isActive(href)
                  ? "text-green border-b-2 border-green"
                  : "text-term-fg hover:text-cyan"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-green"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-term-bg border-t border-term-green p-4 space-y-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-sm transition ${
                isActive(href) ? "text-green" : "text-term-fg hover:text-cyan"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
```

---

## 4. EasterEgg.tsx

```typescript
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
```

---

## 5. ProjectCard.tsx

```typescript
import Link from "next/link";

interface Project {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  github?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-term-green rounded p-4 bg-term-border hover:border-term-cyan transition">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg text-green font-bold">{project.name}</h3>
          <p className="text-xs text-amber">{project.period}</p>
        </div>
      </div>

      <p className="text-sm text-term-fg mb-3">{project.description}</p>

      <ul className="space-y-1 mb-4 text-xs text-term-fg">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-cyan">→</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-term-bg text-cyan border border-term-cyan rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green hover:text-cyan transition inline-block"
        >
          → View on GitHub
        </Link>
      )}
    </div>
  );
}
```

---

## 6. ContactPanel.tsx

```typescript
"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || "Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    alert("Email copied!");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-cyan block mb-1">name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="your name"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="subject"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="your message..."
          rows={4}
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div className="flex gap-2">
        <a
          href={mailtoLink}
          className="flex-1 bg-term-green text-term-bg px-4 py-2 rounded font-bold text-center text-sm"
        >
          Send Email
        </a>
        <button
          onClick={handleCopyEmail}
          className="flex-1 border border-term-cyan text-term-cyan px-4 py-2 rounded text-sm"
        >
          Copy Email
        </button>
      </div>
    </div>
  );
}
```

---

**Continue with remaining components (Footer, JsonBlock, HireMeHint) following the same pattern.**

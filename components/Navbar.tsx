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

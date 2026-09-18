import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-term-green bg-term-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-term-fg md:flex-row">
        <p>
          <span className="text-green">$</span> echo &quot;© {year}{" "}
          {profile.name}&quot;
        </p>
        <div className="flex gap-4">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:text-green"
          >
            github
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:text-green"
          >
            linkedin
          </Link>
          <Link href="/contact" className="text-cyan hover:text-green">
            contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

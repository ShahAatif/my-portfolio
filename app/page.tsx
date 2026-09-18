import TypedTerminal from "@/components/TypedTerminal";
import TerminalWindow from "@/components/TerminalWindow";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Home() {
  const topSkills = ["Java", "SQL", "ASP.NET Core", "Angular", "Database Admin"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <TerminalWindow>
        <div className="space-y-6">
          <TypedTerminal
            lines={[
              `$ whoami`,
              `${profile.name}`,
              ``,
              `$ cat profile.json`,
              `{`,
              `  "role": "${profile.role}",`,
              `  "location": "${profile.location}",`,
              `  "status": "actively_coding",`,
              `  "contact": "${profile.email}"`,
              `}`,
            ]}
            speed={50}
          />

          <div className="mt-8 space-y-4">
            <h2 className="text-xl text-green">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-term-border p-3 rounded border border-term-border">
                <div className="text-cyan">Experience</div>
                <div className="text-green font-bold">2+ Years</div>
              </div>
              <div className="bg-term-border p-3 rounded border border-term-border">
                <div className="text-cyan">Projects</div>
                <div className="text-green font-bold">10+</div>
              </div>
              <div className="bg-term-border p-3 rounded border border-term-border">
                <div className="text-cyan">Languages</div>
                <div className="text-green font-bold">Java, SQL, C#, JS</div>
              </div>
              <div className="bg-term-border p-3 rounded border border-term-border">
                <div className="text-cyan">Speciality</div>
                <div className="text-green font-bold">Database Admin</div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-xl text-green">Top Skills</h2>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-term-border text-cyan text-sm border border-term-green rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-term-border space-y-3">
            <p className="text-sm text-term-fg">
              Database Administrator at IN Solutions Global Limited. Previously built full-stack applications at Capgemini.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="px-4 py-2 bg-term-green text-term-bg rounded font-bold hover:bg-term-cyan transition"
              >
                $ cd about
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 border border-term-green text-term-green rounded hover:bg-term-border transition"
              >
                $ ls projects
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 border border-term-cyan text-term-cyan rounded hover:bg-term-border transition"
              >
                $ cat resume
              </Link>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <div className="mt-12 text-center text-xs text-term-border">
        <p>tip: type <code className="text-cyan">sudo hire-me</code> anywhere on the site</p>
      </div>
    </div>
  );
}

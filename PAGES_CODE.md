# Page Files Code

Copy-paste each page into your `app/` folder.

---

## 1. `app/page.tsx` (Home Page)

```typescript
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
              <div className="bg-border p-3 rounded border border-term-border">
                <div className="text-cyan">Experience</div>
                <div className="text-green font-bold">2+ Years</div>
              </div>
              <div className="bg-border p-3 rounded border border-term-border">
                <div className="text-cyan">Projects</div>
                <div className="text-green font-bold">10+</div>
              </div>
              <div className="bg-border p-3 rounded border border-term-border">
                <div className="text-cyan">Languages</div>
                <div className="text-green font-bold">Java, SQL, C#, JS</div>
              </div>
              <div className="bg-border p-3 rounded border border-term-border">
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
```

---

## 2. `app/about/page.tsx` (About Page)

```typescript
import TerminalWindow from "@/components/TerminalWindow";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import JsonBlock from "@/components/JsonBlock";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <TerminalWindow title="~/about">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl text-green mb-4">About {profile.name}</h1>
              <div className="space-y-3 text-term-fg text-sm">
                {profile.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-xl text-green mb-4">$ cat skills.json</h2>
              <JsonBlock data={resume.skills} />
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-xl text-green mb-4">$ git log --oneline</h2>
              <div className="space-y-3 text-sm">
                {resume.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-term-cyan pl-4">
                    <div className="text-cyan">{edu.period}</div>
                    <div className="text-green font-bold">{edu.degree}</div>
                    <div className="text-term-fg text-xs">{edu.school}</div>
                    <div className="text-amber text-xs">{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-xl text-green mb-4">Certifications</h2>
              <div className="space-y-2 text-sm">
                {resume.certifications.map((cert, idx) => (
                  <div key={idx} className="text-term-fg">
                    ✓ {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
```

---

## 3. `app/projects/page.tsx` (Projects Page)

```typescript
import TerminalWindow from "@/components/TerminalWindow";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <TerminalWindow title="~/projects">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl text-green mb-2">$ ls -la projects/</h1>
              <p className="text-term-fg text-sm mb-6">
                A collection of production-ready applications and technical implementations.
              </p>
            </div>

            <div className="space-y-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
```

---

## 4. `app/resume/page.tsx` (Resume Page)

```typescript
import TerminalWindow from "@/components/TerminalWindow";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <TerminalWindow title="~/resume">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl text-green font-bold">{profile.name}</h1>
                <p className="text-sm text-cyan">{profile.role}</p>
              </div>
              <div className="text-right text-xs text-term-fg space-y-1">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
              </div>
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-lg text-green font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                {resume.experience.map((job, idx) => (
                  <div key={idx} className="border-l-2 border-term-cyan pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-green font-bold">{job.role}</h3>
                      <span className="text-xs text-amber">{job.period}</span>
                    </div>
                    <p className="text-xs text-cyan mb-2">{job.company}</p>
                    <ul className="space-y-1">
                      {job.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="text-xs text-term-fg flex gap-2">
                          <span className="text-green">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-lg text-green font-bold mb-4">Education</h2>
              <div className="space-y-3">
                {resume.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-term-purple pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-green font-bold">{edu.degree}</h3>
                      <span className="text-xs text-amber">{edu.period}</span>
                    </div>
                    <p className="text-xs text-cyan mb-1">{edu.school}</p>
                    <p className="text-xs text-term-fg">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-term-green pt-6">
              <h2 className="text-lg text-green font-bold mb-4">Cover Letter</h2>
              <div className="space-y-3 text-xs text-term-fg">
                {resume.coverLetter.split('\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-term-green pt-6 text-center">
              <Link
                href="/resume.pdf"
                download="Shah-Aatif-Bashir-Resume.pdf"
                className="inline-block px-6 py-2 bg-term-green text-term-bg rounded font-bold hover:bg-term-cyan transition"
              >
                $ download resume.pdf
              </Link>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
```

---

## 5. `app/contact/page.tsx` (Contact Page)

```typescript
import TerminalWindow from "@/components/TerminalWindow";
import ContactPanel from "@/components/ContactPanel";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <TerminalWindow title="~/contact">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl text-green mb-4">Get in Touch</h1>
              <p className="text-term-fg text-sm mb-6">
                I'd love to hear from you! Contact me about opportunities or just to say hello.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-term-green p-4 rounded">
                <h2 className="text-lg text-green font-bold mb-4">$ send message</h2>
                <ContactPanel />
              </div>

              <div className="space-y-4">
                <div className="border border-term-cyan p-4 rounded">
                  <h3 className="text-cyan font-bold mb-3">Direct Contact</h3>
                  <div className="space-y-2 text-sm text-term-fg">
                    <p>
                      <span className="text-green">📧 Email:</span><br />
                      <a href={`mailto:${profile.email}`} className="text-cyan hover:text-green">
                        {profile.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-green">📱 Phone:</span><br />
                      <a href={`tel:${profile.phone}`} className="text-cyan hover:text-green">
                        {profile.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border border-term-purple p-4 rounded">
                  <h3 className="text-purple font-bold mb-3">Social Links</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-green">
                        🐙 GitHub
                      </a>
                    </p>
                    <p>
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-green">
                        💼 LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
```

---

All page files created! Copy these into your `app/` directory.

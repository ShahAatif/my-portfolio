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

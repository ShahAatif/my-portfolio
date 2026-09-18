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

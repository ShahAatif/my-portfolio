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

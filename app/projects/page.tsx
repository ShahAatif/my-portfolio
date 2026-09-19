import TerminalWindow from "@/components/TerminalWindow";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export default function Projects() { return <div className="page-shell"><TerminalWindow title="~/projects"><div><p className="terminal-label">PORTFOLIO INDEX</p><h1 className="mt-2 text-2xl text-green">$ find projects/ -type f</h1><p className="mt-3 max-w-3xl text-sm text-term-fg">A growing collection of application, database, systems, and algorithm projects. Open any entry for the engineering notes.</p><div className="mt-7 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></TerminalWindow></div>; }

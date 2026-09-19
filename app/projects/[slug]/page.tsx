import { notFound } from "next/navigation";
import Link from "next/link";
import TerminalWindow from "@/components/TerminalWindow";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProject, projects } from "@/data/projects";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = getProject(slug); if (!project) notFound(); return <div className="page-shell"><TerminalWindow title={`~/projects/${project.slug}`}><Link className="text-xs text-cyan hover:text-green" href="/projects">← cd ../</Link><p className="mt-5 text-amber">$ cat project.md</p><h1 className="mt-2 text-3xl text-green"># {project.name}</h1><p className="mt-2 terminal-label">{project.type}</p><div className="mt-8"><ProjectCaseStudy project={project} /></div></TerminalWindow></div>; }

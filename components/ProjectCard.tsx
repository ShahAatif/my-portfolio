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

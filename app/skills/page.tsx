import TerminalWindow from "@/components/TerminalWindow";
import SkillsGrid from "@/components/SkillsGrid";
import JsonBlock from "@/components/JsonBlock";
import { skillGroups } from "@/data/skills";
export default function SkillsPage() { const json = Object.fromEntries(skillGroups.map((group) => [group.name, group.skills])); return <div className="page-shell"><TerminalWindow title="~/skills"><p className="terminal-label">ENGINEERING TOOLKIT</p><h1 className="mt-2 text-3xl text-green">$ skills --all</h1><p className="mt-4 text-sm text-term-fg">A practical stack spanning database operations, backend services, web applications, and developer tooling.</p><div className="mt-7"><SkillsGrid /></div><div className="mt-8"><p className="text-amber">$ cat skills.json</p><div className="mt-3"><JsonBlock data={json} /></div></div></TerminalWindow></div>; }

export default function TerminalWindow({
  children,
  title = "~/portfolio",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="terminal-window bg-term-border rounded-lg overflow-hidden shadow-2xl border border-term-green">
        <div className="bg-gradient-to-r from-term-border to-term-bg px-4 py-3 flex items-center justify-between border-b border-term-green">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-term-green font-mono">{title}</span>
          <div className="w-12" />
        </div>
        <div className="p-6 bg-term-bg text-term-fg font-mono text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

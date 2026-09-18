export default function JsonBlock({ data }: { data: unknown }) {
  const json = JSON.stringify(data, null, 2);

  return (
    <pre className="overflow-x-auto rounded border border-term-border bg-term-bg p-4 text-xs text-cyan">
      <code>{json}</code>
    </pre>
  );
}

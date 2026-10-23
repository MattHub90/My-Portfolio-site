export default function TechTags({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="rounded-md border border-sky/25 bg-sky/10 px-2.5 py-1 text-xs font-medium text-sky">
          {item}
        </li>
      ))}
    </ul>
  );
}

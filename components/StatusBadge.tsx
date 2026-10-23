type Status = "Live" | "In Progress" | "Coming Soon" | "Completed" | "In progress";

const styles: Record<Status, string> = {
  Live: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  Completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  "In Progress": "border-gold/40 bg-gold/10 text-gold",
  "In progress": "border-gold/40 bg-gold/10 text-gold",
  "Coming Soon": "border-sky/40 bg-sky/10 text-sky",
};

export default function StatusBadge({ status, className = "" }: { status: Status; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur ${styles[status]} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}

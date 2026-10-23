import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

// "Live Demo" and "GitHub" buttons. Each one is hidden when its link is empty.
export default function ProjectLinks({
  liveUrl,
  githubUrl,
  title,
  className = "",
}: {
  liveUrl: string;
  githubUrl: string;
  title: string;
  className?: string;
}) {
  if (!liveUrl && !githubUrl) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${title} (opens in a new tab)`}
          className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-dark to-gold px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-110"
        >
          <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code of ${title} on GitHub (opens in a new tab)`}
          className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-sky hover:text-sky"
        >
          <GitHubIcon className="size-4" /> GitHub
        </a>
      )}
    </div>
  );
}

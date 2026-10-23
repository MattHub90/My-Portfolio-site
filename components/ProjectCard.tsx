import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import StatusBadge from "./StatusBadge";
import TechTags from "./TechTags";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line border-t-2 border-t-gold/80 bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-sky/50 hover:shadow-[0_16px_40px_-18px] hover:shadow-sky/60">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <StatusBadge status={project.status} className="absolute left-3 top-3 bg-navy/70" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="flex items-start justify-between gap-3 text-lg font-semibold">
            {/* The ::after overlay makes the whole card clickable. */}
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-sky"
            >
              {project.title}
            </Link>
            <ArrowUpRight
              className="size-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        <TechTags items={project.tech} />
        <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} title={project.title} className="mt-auto" />
      </div>
    </article>
  );
}

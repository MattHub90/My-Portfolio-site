import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lightbulb, Target, UserRound } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { whatsappLink } from "@/lib/whatsapp";
import StatusBadge from "@/components/StatusBadge";
import TechTags from "@/components/TechTags";
import ProjectLinks from "@/components/ProjectLinks";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/BrandIcons";

// Builds one page per project in data/projects.ts when the site is built.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 750, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  // Any slug not in data/projects.ts shows the 404 page.
  if (!project) notFound();

  const sections = [
    { title: "The problem", body: project.problem, Icon: Target },
    { title: "My role", body: project.role, Icon: UserRound },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-6">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-sky"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to projects
      </Link>

      <Reveal>
        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            {project.categories.map((c) => (
              <span key={c} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-gold-gradient sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted">{project.summary}</p>
          <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} title={project.title} className="mt-6" />
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-line border-t-2 border-t-gold shadow-2xl shadow-black/40">
          <Image src={project.image} alt={`${project.title} preview`} fill priority sizes="(min-width: 896px) 848px, 100vw" className="object-cover" />
        </div>
      </Reveal>

      <div className="mt-14 space-y-12">
        <Reveal>
          <section aria-labelledby="overview">
            <h2 id="overview" className="font-serif text-2xl font-bold">Overview</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.overview}</p>
          </section>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {sections.map(({ title, body, Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <section className="h-full rounded-2xl border border-line bg-surface p-6">
                <h2 className="flex items-center gap-2 font-semibold">
                  <Icon className="size-5 text-gold" aria-hidden="true" /> {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section aria-labelledby="features">
            <h2 id="features" className="font-serif text-2xl font-bold">Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-line bg-surface/60 p-4 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="stack">
            <h2 id="stack" className="mb-4 font-serif text-2xl font-bold">Tech stack</h2>
            <TechTags items={project.tech} />
          </section>
        </Reveal>

        {project.gallery.length > 0 && (
          <section aria-labelledby="gallery">
            <Reveal>
              <h2 id="gallery" className="font-serif text-2xl font-bold">Gallery</h2>
            </Reveal>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <li key={src} className={project.gallery.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}>
                  <Reveal delay={i * 0.06}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(min-width: 896px) 424px, 100vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Reveal>
          <section aria-labelledby="learned" className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
            <h2 id="learned" className="flex items-center gap-2 font-serif text-2xl font-bold">
              <Lightbulb className="size-6 text-gold" aria-hidden="true" /> What I learned
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{project.learned}</p>
          </section>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface p-8 text-center">
            <p className="font-serif text-2xl font-bold">Want something like this?</p>
            <p className="text-muted">Tell me about your idea and let&apos;s build it together.</p>
            <a
              href={whatsappLink(`Hello Mathias, I saw your "${project.title}" project and I'd like something similar.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-[#0b141a] transition hover:brightness-110"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

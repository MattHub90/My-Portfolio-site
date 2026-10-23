"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "App", "Design"];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="projects-title"
        eyebrow="Selected work"
        title="Projects"
        description="Websites, apps and designs I've built or am building. Tap a card to read the full story."
      />

      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === f
                ? "bg-gradient-to-r from-gold-dark to-gold text-navy"
                : "border border-line bg-surface text-muted hover:border-sky hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {active === "All" ? "" : `${active} `}projects
      </p>
    </section>
  );
}

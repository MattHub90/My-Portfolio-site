"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
};

// A vertical timeline whose gold line "draws" itself as you scroll.
export default function Timeline({
  heading,
  icon,
  entries,
}: {
  heading: string;
  icon: "work" | "education";
  entries: TimelineEntry[];
}) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const Icon: LucideIcon = icon === "work" ? Briefcase : GraduationCap;

  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 font-serif text-2xl font-bold">
        <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {heading}
      </h3>
      <ol ref={ref} className="relative ml-4 space-y-8 pl-8">
        <span aria-hidden="true" className="absolute left-0 top-1 h-full w-px bg-line" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-0 top-1 h-full w-px origin-top bg-gradient-to-b from-gold via-gold to-sky"
        />
        {entries.map((entry, i) => (
          <li key={`${entry.title}-${entry.subtitle}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 size-[11px] rounded-full border-2 border-gold bg-navy shadow-[0_0_12px] shadow-gold/60"
            />
            <Reveal delay={i * 0.05} from="right">
              <div className="rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-sky/40">
                {entry.period && <p className="text-sm font-semibold text-sky">{entry.period}</p>}
                <h4 className="mt-1 font-semibold text-ink">{entry.title}</h4>
                <p className="text-sm text-gold">{entry.subtitle}</p>
                {entry.description && <p className="mt-2 text-sm leading-relaxed text-muted">{entry.description}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

import { Code2, Palette, Search, ShieldCheck, Sparkles, Terminal, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroupIcon } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groupIcons: Record<SkillGroupIcon, LucideIcon> = {
  code: Code2,
  terminal: Terminal,
  shield: ShieldCheck,
  sparkles: Sparkles,
  search: Search,
  palette: Palette,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="skills-title" eyebrow="Toolbox" title="Skills" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.icon];
            return (
              <li key={group.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-gold/50">
                    <h3 className="mb-4 flex items-center gap-3 font-semibold">
                      <span className="grid size-9 place-items-center rounded-lg bg-gold/10 text-gold">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      {group.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-sky/25 bg-sky/10 px-2.5 py-1 text-sm text-sky transition hover:bg-sky/20"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

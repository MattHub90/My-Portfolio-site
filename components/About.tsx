import { Languages } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading id="about-title" eyebrow="About me" title="Engineer, teacher, designer — and a careful thinker" />

      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="flex items-center gap-2 pt-2 text-base">
            <Languages className="size-5 text-sky" aria-hidden="true" />
            <span>
              {profile.languages.map((l, i) => (
                <span key={l.name}>
                  {i > 0 && " · "}
                  <span className="text-ink">{l.name}</span> ({l.level})
                </span>
              ))}
            </span>
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 self-start">
          {profile.stats.map((stat, i) => (
            <li key={stat.label}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line border-t-2 border-t-gold bg-surface p-6 text-center transition hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px] hover:shadow-gold/40">
                  <p className="font-serif text-4xl font-bold text-gold-gradient">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

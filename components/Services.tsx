import {
  Brain,
  Code2,
  FileText,
  GraduationCap,
  Headset,
  Laptop,
  Package,
  Palette,
  Presentation,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIcon } from "@/data/services";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Maps the icon names used in data/services.ts to real icons.
const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  brain: Brain,
  presentation: Presentation,
  palette: Palette,
  headset: Headset,
  file: FileText,
  wrench: Wrench,
  graduation: GraduationCap,
  laptop: Laptop,
  package: Package,
};

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services-title"
          eyebrow="What I do"
          title="Services"
          description="Project-based help for individuals, schools, churches and businesses — locally in Bamenda or remotely anywhere."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li key={service.title}>
                <Reveal delay={(i % 5) * 0.06} className="h-full">
                  <div className="group h-full rounded-2xl border border-line border-t-2 border-t-gold/80 bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-sky/50 hover:shadow-[0_12px_32px_-14px] hover:shadow-sky/50">
                    <span className="mb-4 grid size-11 place-items-center rounded-xl bg-sky/10 text-sky transition group-hover:bg-sky group-hover:text-navy">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
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

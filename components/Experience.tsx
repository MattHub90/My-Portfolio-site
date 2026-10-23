import { experience } from "@/data/experience";
import { education } from "@/data/education";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading id="experience-title" eyebrow="My journey" title="Experience & Education" />
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
        <Timeline
          heading="Experience"
          icon="work"
          entries={experience.map((e) => ({
            title: e.role,
            subtitle: e.organization,
            period: e.period,
            description: e.description,
          }))}
        />
        <Timeline
          heading="Education"
          icon="education"
          entries={education.map((e) => ({ title: e.degree, subtitle: e.institution, period: e.period }))}
        />
      </div>
    </section>
  );
}

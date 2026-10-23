import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="certifications-title"
          eyebrow="Always learning"
          title="Certifications"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <li key={cert.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line border-t-2 border-t-gold bg-surface p-6 transition hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-14px] hover:shadow-gold/50">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-gold/10 text-gold">
                      <Award className="size-5" aria-hidden="true" />
                    </span>
                    <StatusBadge status={cert.status} />
                  </div>
                  <h3 className="font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {cert.issuer}
                    {cert.year && ` · ${cert.year}`}
                  </p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-sky hover:underline"
                    >
                      View credential <ExternalLink className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">for {cert.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

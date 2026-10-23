import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Small label above the title, e.g. "What I do". */
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">{eyebrow}</p>
      <h2 id={id} className="font-serif text-3xl font-bold text-gold-gradient sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}

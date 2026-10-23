import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappLink } from "@/lib/whatsapp";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <div className="absolute left-1/2 top-1/3 size-[32rem] -translate-x-1/2 animate-glow rounded-full bg-gold/10 blur-[120px]" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">Contact</p>
          <h2 id="contact-title" className="font-serif text-3xl font-bold sm:text-4xl">
            Have a project in mind? <span className="text-gold-gradient">Let&apos;s work together.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">Book a free 15-minute consultation.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello Mathias, I'd like to book a free 15-minute consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-[#0b141a] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
            <a
              href={`mailto:${profile.contact.email}?subject=${encodeURIComponent("Free 15-minute consultation")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 px-6 py-3 font-semibold text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
            >
              <Mail className="size-5" aria-hidden="true" /> Email me
            </a>
          </div>

          <ul className="mt-10 space-y-4 text-muted">
            <li>
              <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center gap-3 transition hover:text-sky">
                <Mail className="size-5 text-gold" aria-hidden="true" /> {profile.contact.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition hover:text-sky">
                <Phone className="size-5 text-gold" aria-hidden="true" /> {profile.contact.phoneDisplay}{" "}
                <span className="text-xs">(Phone &amp; WhatsApp)</span>
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition hover:text-sky">
                <LinkedInIcon className="size-5 text-gold" /> linkedin.com/in/njala-mathias-ndi
              </a>
            </li>
            <li>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition hover:text-sky">
                <GitHubIcon className="size-5 text-gold" /> github.com/MattHub90
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

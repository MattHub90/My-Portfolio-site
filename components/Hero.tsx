import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import RotatingTitle from "./RotatingTitle";
import SocialLinks from "./SocialLinks";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Soft moving gold/blue glow behind the hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <div className="absolute -left-32 top-0 size-[28rem] animate-glow rounded-full bg-gold/20 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 size-[30rem] animate-glow rounded-full bg-sky/15 blur-[120px] [animation-delay:-7s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 md:grid-cols-[auto_1fr] md:gap-16 md:pt-20 lg:pb-28">
        <Reveal from="left" className="mx-auto">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/40 to-sky/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-gold/80 shadow-2xl shadow-black/50">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.displayName} in a blue outfit and graduation cap, working on a laptop`}
                width={250}
                height={424}
                priority
                sizes="(min-width: 640px) 250px, 210px"
                className="h-auto w-[210px] sm:w-[250px]"
              />
            </div>
          </div>
        </Reveal>

        <div className="text-center md:text-left">
          <Reveal delay={0.05}>
            {profile.status.available && (
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-4 py-1.5 text-sm font-medium text-[#6ee7a0]">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-whatsapp" />
                </span>
                {profile.status.label}
              </p>
            )}
            <h1 id="hero-title" className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              {profile.firstName} <span className="text-gold-gradient">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 text-xl font-medium sm:text-2xl">
              <RotatingTitle titles={profile.titles} />
            </p>
            <p className="mt-5 font-serif text-2xl italic text-gold">{profile.tagline}</p>
            <p className="mx-auto mt-4 max-w-xl text-muted md:mx-0">{profile.valueStatement}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="size-4 text-sky" aria-hidden="true" />
              {profile.location} · {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-dark to-gold px-6 py-3 font-semibold text-navy shadow-[0_0_28px_-8px] shadow-gold transition hover:-translate-y-0.5 hover:brightness-110"
              >
                View Projects <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-sky/60 px-6 py-3 font-semibold text-sky transition hover:-translate-y-0.5 hover:bg-sky/10"
              >
                <Download className="size-4" aria-hidden="true" /> Download CV
              </a>
            </div>
            <SocialLinks className="mt-6 justify-center md:justify-start" />
            <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Credentials">
              {profile.credentials.map((c) => (
                <li key={c} className="rounded-full border border-line bg-surface/80 px-3 py-1 text-xs text-muted">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

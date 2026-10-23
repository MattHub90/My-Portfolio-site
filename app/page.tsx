import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

// Structured data that helps Google show your name, role and links in search results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.displayName,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  jobTitle: profile.titles[0],
  email: `mailto:${profile.contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bamenda", addressCountry: "CM" },
  sameAs: [profile.socials.linkedin, profile.socials.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}

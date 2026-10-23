// ─────────────────────────────────────────────────────────────
// PROFILE — your personal details, links and About text.
// Change anything here and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const profile = {
  // Full name (used in SEO metadata) and the shorter name shown on the site.
  fullName: "Njala Mathias Ndi",
  displayName: "Njala Mathias",
  // The hero splits your name so the surname can be shown in gold.
  firstName: "Njala",
  lastName: "Mathias",
  initials: "NM",

  location: "Bamenda, Cameroon",
  availability: "Available for remote work worldwide",

  // Small badge at the top of the hero. Set `available` to false to hide the pulsing dot.
  status: { available: true, label: "Available for projects" },

  tagline: "You Think. I Create. Let's Build.",

  // These rotate in the hero, one at a time.
  titles: [
    "Software Engineer",
    "Web & App Developer",
    "AI Evaluator",
    "Graphic Designer",
    "Digital Consultant",
  ],

  // Short line under the tagline in the hero.
  valueStatement:
    "I build websites and apps that solve everyday problems, evaluate and test AI systems, and design presentations and brand materials — on a project basis, for clients anywhere.",

  // Shown in the About section. Each string is one paragraph.
  about: [
    "I'm a software engineer (B.Tech) with a second degree in Philosophy, which means I pair technical discipline with training in logic, argumentation and precise writing.",
    "Teaching Computer Science taught me to explain technical ideas clearly and to trace exactly where reasoning breaks down — a skill I now bring to building software and evaluating AI systems.",
    "I build web and mobile apps, work daily with AI tools (Claude, ChatGPT, Gemini, Perplexity) for research and prompt engineering, and I'm training in AI red teaming.",
    "I also run Vision Tech, a presentation and design service, and founded Vision Tech Ventures (VTV) — “Technology. Innovation. Growth” — a tech brand building solutions to common daily problems.",
  ],

  // Quick stats in the About section. `value` is the big number/text, `label` sits under it.
  stats: [
    { value: "5+", label: "Years designing" },
    { value: "2021", label: "Teaching since" },
    { value: "5", label: "Apps in progress" },
    { value: "2", label: "Degrees" },
  ],

  // Small chips shown under the hero buttons.
  credentials: [
    "B-Tech Software Engineering",
    "AI Career Essentials — ALX",
    "Certified Virtual Assistant — ALX",
  ],

  languages: [
    { name: "English", level: "Excellent" },
    { name: "French", level: "Fair" },
  ],

  // Paths are relative to the /public folder.
  photo: "/images/profile.jpg",
  cv: "/cv/Mathias-Njala-CV.pdf",

  contact: {
    email: "mathiasnjala@gmail.com",
    // Shown to visitors.
    phoneDisplay: "+237 678 488 510",
    // Digits only, with country code and no "+" — this is what WhatsApp needs.
    whatsappNumber: "237678488510",
    // Text that is pre-typed in WhatsApp when someone taps your WhatsApp button.
    whatsappMessage:
      "Hello Mathias, I found your portfolio and I'd like to talk about a project.",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/njala-mathias-ndi",
    github: "https://github.com/MattHub90",
  },

  // Your live website address. Change this after you connect a custom domain
  // (used for SEO, the sitemap and link previews).
  siteUrl: "https://my-portfolio-site.vercel.app",
};

export type Profile = typeof profile;

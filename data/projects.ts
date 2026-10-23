// ─────────────────────────────────────────────────────────────
// PROJECTS — the Projects grid and each /projects/<slug> detail page.
//
// TO ADD A PROJECT:
//   1. Put its images in /public/images/projects/
//   2. Copy one project object below, paste it into the list, and edit it.
//   That's it — the card and the detail page are created automatically.
// ─────────────────────────────────────────────────────────────

/** Used by the filter tabs (All, Web, App, Design). */
export type ProjectCategory = "Web" | "App" | "Design";

/** Controls the coloured badge on each card. */
export type ProjectStatus = "Live" | "In Progress" | "Coming Soon";

export type Project = {
  /** Used in the page address: /projects/<slug>. Lowercase, words joined with dashes, must be unique. */
  slug: string;
  title: string;
  /** One or two sentences shown on the card. */
  summary: string;
  /** One or more categories. A project with ["Web", "App"] shows under both tabs. */
  categories: ProjectCategory[];
  status: ProjectStatus;
  /** Technologies or tools, shown as small tags. */
  tech: string[];
  /** Main image (card + top of the detail page). Path inside /public. */
  image: string;
  /** Live website or app link. Leave "" to hide the "Live Demo" button. */
  liveUrl: string;
  /** GitHub repository link. Leave "" to hide the "GitHub" button. */
  githubUrl: string;

  // ── Detail page content ──
  /** A paragraph introducing the project. */
  overview: string;
  /** What problem does it solve, and for whom? */
  problem: string;
  /** What you personally did. */
  role: string;
  /** Main features as a bullet list. */
  features: string[];
  /** Extra screenshots for the gallery. Paths inside /public. Use [] for none. */
  gallery: string[];
  /** A short reflection on what you learned. */
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "our-lady-of-fatima-parish",
    title: "Our Lady of Fatima Parish Website",
    summary:
      "The official parish website — an online home for news, events and community engagement.",
    categories: ["Web"],
    status: "Live",
    tech: ["HTML", "CSS", "WordPress"],
    image: "/images/projects/our-lady-of-fatima-parish.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "A responsive website for Our Lady of Fatima Parish in Bamenda, giving parishioners one place to find announcements, upcoming events, Mass times and parish groups.",
    problem:
      "Parish news was shared mostly by word of mouth and printed notices, so many parishioners — especially younger members and those away from Bamenda — missed important updates.",
    role:
      "I handled the full project: gathering requirements with parish leaders, designing the layout, building the site in WordPress with custom HTML and CSS, and testing it across phones, tablets and desktops.",
    features: [
      "News and announcements section the parish can update without coding",
      "Events calendar for Masses, feasts and community activities",
      "Responsive layout that works well on low-cost phones",
      "Contact and location information for visitors",
    ],
    gallery: [
      "/images/projects/our-lady-of-fatima-parish-1.png",
      "/images/projects/our-lady-of-fatima-parish-2.png",
    ],
    learned:
      "Working with a non-technical client taught me to explain choices simply and to design an admin experience that is easy for volunteers to keep up to date.",
  },
  {
    slug: "vision-tech-ventures-website",
    title: "Vision Tech Ventures Website",
    summary: "The business website for VTV — Technology. Innovation. Growth.",
    categories: ["Web"],
    status: "In Progress",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/vision-tech-ventures-website.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "The online home of Vision Tech Ventures, presenting VTV's products, services and vision for building tech solutions to everyday problems in Cameroon and beyond.",
    problem:
      "VTV's products and services were spread across social media posts. Clients and partners needed one professional place to learn about the brand and get in touch.",
    role: "Founder, designer and developer — brand direction, content, UI design and development.",
    features: [
      "Product pages for VTV Payments, VIVA Errand Services and House Agent",
      "Service listings for Vision Tech presentation and design work",
      "Contact and WhatsApp enquiry options",
      "Fast, mobile-first design",
    ],
    gallery: ["/images/projects/vision-tech-ventures-website-1.png"],
    learned: "Being my own client is harder than it looks — it forced me to write a clear brief and stick to it.",
  },
  {
    slug: "vtv-payments",
    title: "VTV Payments",
    summary: "A payment orchestration platform that unifies multiple payment channels into one system.",
    categories: ["Web", "App"],
    status: "In Progress",
    tech: ["Next.js", "TypeScript", "REST APIs"],
    image: "/images/projects/vtv-payments.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "VTV Payments lets businesses accept and track payments from several channels — such as mobile money and cards — through a single integration and dashboard.",
    problem:
      "Small businesses often juggle separate accounts and apps for each payment method, which makes reconciliation slow and error-prone.",
    role: "Product owner and developer — system design, API integration planning and dashboard development.",
    features: [
      "One integration for multiple payment channels",
      "Unified transaction dashboard and reporting",
      "Payment status tracking and notifications",
      "Designed with security and reliability in mind",
    ],
    gallery: ["/images/projects/vtv-payments-1.png"],
    learned: "Payments demand careful thinking about failure cases — what happens when a step fails halfway matters as much as the happy path.",
  },
  {
    slug: "house-agent-app",
    title: "House Agent Search App",
    summary: "A real-estate app connecting house seekers with trusted house agents.",
    categories: ["App"],
    status: "In Progress",
    tech: ["Mobile App", "TypeScript", "Firebase"],
    image: "/images/projects/house-agent-app.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "House Agent helps people looking for a house or apartment find listings and contact verified agents directly from their phone.",
    problem:
      "Finding a house often means walking from area to area and relying on informal contacts, with little way to compare options or verify agents.",
    role: "Founder and developer — user research, app design and development.",
    features: [
      "Browse and filter listings by area, price and type",
      "Agent profiles with contact options",
      "Save favourite listings",
      "Simple listing tools for agents",
    ],
    gallery: ["/images/projects/house-agent-app-1.png"],
    learned: "Building for two sides of a marketplace means designing for both house seekers and agents at the same time.",
  },
  {
    slug: "viva-errand-services",
    title: "VIVA Errand Services",
    summary: "An app and website for booking errands and deliveries, including a delivery-agent app.",
    categories: ["App", "Web"],
    status: "In Progress",
    tech: ["Mobile App", "Web", "Maps"],
    image: "/images/projects/viva-errand-services.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "VIVA Errand Services lets customers book errands and deliveries online, while delivery agents receive, accept and complete jobs through their own app.",
    problem:
      "Booking errands by phone calls and chats is hard to track for both customers and the business, and agents have no clear view of their jobs.",
    role: "Developer and brand designer — app design, development and VIVA's brand materials.",
    features: [
      "Customer booking for errands and deliveries",
      "Delivery-agent app to accept and update jobs",
      "Order status updates for customers",
      "Admin view to manage requests",
    ],
    gallery: ["/images/projects/viva-errand-services-1.png"],
    learned: "Designing the agent app showed me how important offline-friendly, simple screens are for people working on the move.",
  },
  {
    slug: "bamenda-ride-booking-app",
    title: "Bamenda Ride Booking App",
    summary: "A ride-hailing app designed for the city of Bamenda (working name).",
    categories: ["App"],
    status: "In Progress",
    tech: ["Mobile App", "Maps", "Real-time"],
    image: "/images/projects/bamenda-ride-booking-app.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "A local ride-booking app that lets passengers in Bamenda request a ride, see the fare upfront and track their driver.",
    problem:
      "Getting a ride in Bamenda usually means waiting by the roadside and negotiating fares, with no way to plan ahead or share trip details for safety.",
    role: "Founder and developer — product planning, UX design and development.",
    features: [
      "Request a ride and see the fare upfront",
      "Live driver tracking",
      "Driver and passenger ratings",
      "Trip sharing for safety",
    ],
    gallery: ["/images/projects/bamenda-ride-booking-app-1.png"],
    learned: "Local context matters: landmarks are often more useful than street addresses for pickup points.",
  },
  {
    slug: "ai-workflow-global-website",
    title: "AI Workflow Global Website",
    summary: "A website for a business that helps teams automate work with AI workflows.",
    categories: ["Web"],
    status: "In Progress",
    tech: ["Next.js", "Tailwind CSS", "AI"],
    image: "/images/projects/ai-workflow-global-website.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "A marketing website presenting AI Workflow Global's automation services, case studies and booking options.",
    problem:
      "Many businesses know AI could save them time but don't know where to start. The site explains the services clearly and makes it easy to book a call.",
    role: "Web designer and developer.",
    features: [
      "Clear service pages explaining AI automation",
      "Case study section",
      "Consultation booking",
      "SEO-friendly, fast pages",
    ],
    gallery: ["/images/projects/ai-workflow-global-website-1.png"],
    learned: "Explaining AI to non-technical visitors needs plain language and concrete examples, not buzzwords.",
  },
  {
    slug: "design-showcase",
    title: "Design Showcase",
    summary: "A gallery of my flyers, brand packages, business cards and presentation designs.",
    categories: ["Design"],
    status: "Live",
    tech: ["Graphic Design", "Branding", "Presentations"],
    image: "/images/projects/design-showcase.png",
    liveUrl: "",
    githubUrl: "",
    overview:
      "A selection of design work for independent clients and businesses, including VIVA Errand Services — from brand packages to event programmes and pitch decks.",
    problem:
      "Small businesses and individuals need professional-looking materials to build trust, but often can't afford a large agency.",
    role: "Graphic and presentation designer through Vision Tech.",
    features: [
      "Brand packages and logos",
      "Business cards, flyers and posters",
      "Event programmes and newsletters",
      "Pitch, thesis defense and corporate presentations",
    ],
    gallery: [
      "/images/projects/design-showcase-1.png",
      "/images/projects/design-showcase-2.png",
      "/images/projects/design-showcase-3.png",
    ],
    learned: "Good design starts with listening — understanding the client's audience before opening any design tool.",
  },
];

/** Finds one project by its slug (used by the detail pages). */
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

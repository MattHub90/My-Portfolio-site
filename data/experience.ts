// ─────────────────────────────────────────────────────────────
// EXPERIENCE — the work timeline. Keep the most recent first.
// ─────────────────────────────────────────────────────────────

export type ExperienceItem = {
  /** Your job title or role. */
  role: string;
  /** Company, organisation or client. */
  organization: string;
  /** Dates as text, e.g. "2021 – Present". Leave empty ("") if not needed. */
  period: string;
  /** Short description of what you did. */
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Founder",
    organization: "Vision Tech Ventures (VTV)",
    period: "2025 – Present",
    description:
      "Building VTV Payments (a payment orchestration platform), a delivery-agent app for VIVA Errand Services, and a House Agent real-estate app.",
  },
  {
    role: "Web Designer & Developer",
    organization: "Our Lady of Fatima Parish, Bamenda",
    period: "2026",
    description:
      "Designed and built the parish's official website (HTML, CSS, WordPress) for news, events and community engagement — responsive and tested across devices.",
  },
  {
    role: "Computer Science Teacher",
    organization: "Saint Joseph College Mankon, Bamenda",
    period: "2021 – Present",
    description:
      "Teach programming and computing fundamentals; write clear, unambiguous tests and marking schemes.",
  },
  {
    role: "Graphic Designer",
    organization: "Independent clients, incl. VIVA Errand Services",
    period: "2020 – Present",
    description: "Brand packages, business cards, event programmes, flyers and newsletters.",
  },
  {
    role: "Presentation Designer",
    organization: "Vision Tech — Presentation Design Service",
    period: "",
    description: "Pitch decks, thesis defense presentations and corporate presentations.",
  },
];

// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS — the cards in the "Certifications" section.
// ─────────────────────────────────────────────────────────────

export type Certification = {
  /** Certificate or programme name. */
  title: string;
  /** Who issued it, e.g. "ALX Africa". */
  issuer: string;
  /** Year as text. Leave "" if unknown. */
  year: string;
  /** "Completed" shows a green badge, "In progress" shows an amber badge. */
  status: "Completed" | "In progress";
  /**
   * Optional link to the online credential (e.g. a Credly or certificate URL).
   * A "View credential" link only appears when this is filled in.
   */
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "AI Red Teaming 101",
    issuer: "Microsoft AI Red Team",
    year: "2026",
    status: "In progress",
    credentialUrl: "",
  },
  {
    title: "Artificial Intelligence Career Essentials",
    issuer: "ALX Africa",
    year: "2024",
    status: "Completed",
    credentialUrl: "",
  },
  {
    title: "Professional Foundations & Virtual Assistant Program",
    issuer: "ALX Africa",
    year: "2024",
    status: "Completed",
    credentialUrl: "",
  },
  {
    title: "AWS Cloud Computing Program",
    issuer: "ALX Africa",
    year: "",
    status: "In progress",
    credentialUrl: "",
  },
];

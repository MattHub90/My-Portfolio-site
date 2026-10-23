// ─────────────────────────────────────────────────────────────
// EDUCATION — the education timeline. Keep the most recent first.
// ─────────────────────────────────────────────────────────────

export type EducationItem = {
  /** Degree or diploma name. */
  degree: string;
  /** School or university. */
  institution: string;
  /** Year finished (or e.g. "2024 – 2026"). */
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology, Software Engineering",
    institution: "National Polytechnic University Institute, Bamenda",
    period: "2024",
  },
  {
    degree: "Higher National Diploma, Software Engineering",
    institution: "Kelden Bilingual Higher Institute of Professional Studies, Bamenda",
    period: "2023",
  },
  {
    degree: "Bachelor's Degree, Philosophy",
    institution: "Catholic University of Cameroon, Bamenda",
    period: "2021",
  },
];

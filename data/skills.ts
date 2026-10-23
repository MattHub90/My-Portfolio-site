// ─────────────────────────────────────────────────────────────
// SKILLS — grouped tags in the "Skills" section.
// To add a skill, add a string to the `items` list of a group.
// To add a new group, copy a whole group object.
// ─────────────────────────────────────────────────────────────

// Icon for the group heading (see components/Skills.tsx for the map).
export type SkillGroupIcon = "code" | "terminal" | "shield" | "sparkles" | "search" | "palette";

export type SkillGroup = {
  /** Group heading, e.g. "Programming". */
  title: string;
  icon: SkillGroupIcon;
  /** The skills shown as tags. */
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web & App Dev",
    icon: "code",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "WordPress", "Git/GitHub"],
  },
  {
    title: "Programming",
    icon: "terminal",
    items: ["Python", "C", "C++"],
  },
  {
    title: "AI & Evaluation",
    icon: "shield",
    items: [
      "Prompt engineering",
      "AI red teaming",
      "OWASP Top 10 for LLMs",
      "MITRE ATLAS",
      "Data annotation & quality review",
    ],
  },
  {
    title: "AI Tools",
    icon: "sparkles",
    items: ["Claude", "ChatGPT", "Gemini", "Perplexity", "Lovable", "Emergent"],
  },
  {
    title: "Research & QA",
    icon: "search",
    items: ["Fact-checking", "Source verification", "Software testing & debugging"],
  },
  {
    title: "Design & Office",
    icon: "palette",
    items: ["Graphic design", "Presentation design", "Microsoft Office", "Google Workspace"],
  },
];

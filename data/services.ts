// ─────────────────────────────────────────────────────────────
// SERVICES — the cards in the "Services" section.
// To add a service, copy one object and change its fields.
// ─────────────────────────────────────────────────────────────

// Icon names come from lucide-react. Browse them at https://lucide.dev/icons
// and add new ones to the `serviceIcons` map in components/Services.tsx.
export type ServiceIcon =
  | "code"
  | "brain"
  | "presentation"
  | "palette"
  | "headset"
  | "file"
  | "wrench"
  | "graduation"
  | "laptop"
  | "package";

export type Service = {
  /** Short name shown in bold. */
  title: string;
  /** One-line description under the title. */
  description: string;
  /** Which icon to show (see the list above). */
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    title: "Web & App Development",
    description: "Websites and mobile-friendly apps that solve real, everyday problems.",
    icon: "code",
  },
  {
    title: "AI Evaluation & Research",
    description: "Model testing, red teaming, prompt engineering and fact-checking.",
    icon: "brain",
  },
  {
    title: "Presentation Design",
    description: "Thesis defense, pitch and corporate decks through Vision Tech.",
    icon: "presentation",
  },
  {
    title: "Graphic Design",
    description: "Flyers, posters, brand packages and business cards.",
    icon: "palette",
  },
  {
    title: "Virtual Assistance",
    description: "Email, task and document management you can rely on.",
    icon: "headset",
  },
  {
    title: "Document Editing",
    description: "Clean formatting and careful proofreading.",
    icon: "file",
  },
  {
    title: "Tech Support",
    description: "Help with phones, laptops and PCs.",
    icon: "wrench",
  },
  {
    title: "PC Tutoring",
    description: "Practical digital skills training for beginners and teams.",
    icon: "graduation",
  },
  {
    title: "Tech Procurement",
    description: "Help choosing and buying the right computers and devices.",
    icon: "laptop",
  },
  {
    title: "Imports from China",
    description: "Phones, fashion and more, sourced for you.",
    icon: "package",
  },
];

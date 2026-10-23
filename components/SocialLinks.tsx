import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappLink } from "@/lib/whatsapp";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons";

const links = [
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon },
  { label: "WhatsApp", href: whatsappLink(), Icon: WhatsAppIcon },
  { label: "Email", href: `mailto:${profile.contact.email}`, Icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-sky hover:text-sky hover:shadow-[0_0_18px_-4px] hover:shadow-sky"
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

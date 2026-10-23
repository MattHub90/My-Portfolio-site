import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./BrandIcons";

// Floating "Chat on WhatsApp" button, fixed to the bottom-right of every page.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-[#0b141a] shadow-lg shadow-black/40 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-whatsapp/40" aria-hidden="true" />
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

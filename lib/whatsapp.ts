import { profile } from "@/data/profile";

/**
 * Builds a WhatsApp "click to chat" link that opens a chat with you,
 * with a message already typed in for the visitor.
 *
 * Example result: https://wa.me/237678488510?text=Hello%20Mathias...
 */
export function whatsappLink(message: string = profile.contact.whatsappMessage) {
  const base = `https://wa.me/${profile.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

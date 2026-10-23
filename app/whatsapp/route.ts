import { whatsappLink } from "@/lib/whatsapp";

// yoursite.com/whatsapp → opens a WhatsApp chat with you, greeting pre-typed.
// Share this short link on flyers, business cards, your email signature and social bios.
export function GET() {
  return Response.redirect(whatsappLink(), 307);
}

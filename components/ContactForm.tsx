"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./BrandIcons";

// No backend needed: the form opens the visitor's own email app (or WhatsApp)
// with their message already filled in.
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fullMessage = () => `Hello Mathias,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`;

  function handleEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(fullMessage());
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }

  function handleWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (form && !form.reportValidity()) return;
    window.open(whatsappLink(fullMessage()), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-line bg-navy px-4 py-3 text-ink placeholder:text-muted/70 transition focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30";

  return (
    <form onSubmit={handleEmail} className="space-y-4 rounded-2xl border border-line border-t-2 border-t-gold bg-surface p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Your email <span className="text-muted">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="jane@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Tell me about your project
        </label>
        <textarea id="message" name="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} placeholder="I need a website for…" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-dark to-gold px-6 py-3 font-semibold text-navy transition hover:brightness-110"
        >
          <Send className="size-4" aria-hidden="true" /> Send by email
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-[#0b141a] transition hover:brightness-110"
        >
          <WhatsAppIcon className="size-5" /> Send on WhatsApp
        </button>
      </div>
      <p className="text-xs text-muted">Both buttons open your own app with the message ready — nothing is stored on this site.</p>
    </form>
  );
}

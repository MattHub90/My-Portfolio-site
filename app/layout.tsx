import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/profile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const description = `${profile.displayName} — software engineer, web & app developer, AI evaluator and graphic designer in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.displayName} — Software Engineer & Web Developer`,
    template: `%s · ${profile.displayName}`,
  },
  description,
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  keywords: [
    "Njala Mathias",
    "software engineer Cameroon",
    "web developer Bamenda",
    "AI evaluator",
    "AI red teaming",
    "graphic designer",
    "presentation design",
    "Vision Tech Ventures",
  ],
  openGraph: {
    type: "website",
    siteName: profile.displayName,
    title: `${profile.displayName} — ${profile.tagline}`,
    description,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${profile.displayName} — ${profile.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.displayName} — ${profile.tagline}`,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-gold px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}

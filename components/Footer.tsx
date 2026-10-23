import { Suspense } from "react";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6">
        <p className="font-serif text-lg">
          {profile.displayName} <span className="text-gold">·</span> {profile.tagline}{" "}
          <span className="text-gold">·</span> Cameroon
        </p>
        <SocialLinks />
        <p className="text-sm text-muted">
          ©{" "}
          <Suspense fallback={null}>
            <CurrentYear />
          </Suspense>{" "}
          {profile.displayName}. Built with Next.js &amp; deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-serif text-7xl font-bold text-gold-gradient">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This page doesn&apos;t exist</h1>
      <p className="mt-3 text-muted">The link may be old or mistyped.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-gold-dark to-gold px-6 py-3 font-semibold text-navy transition hover:brightness-110"
      >
        Back to home
      </Link>
    </section>
  );
}

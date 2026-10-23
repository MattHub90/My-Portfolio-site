"use client";

// Runs in the browser so the year is always current without rebuilding the site.
export default function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}

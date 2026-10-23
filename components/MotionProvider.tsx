"use client";

import { MotionConfig } from "framer-motion";

// Makes every Framer Motion animation respect the visitor's
// "reduce motion" setting on their phone or computer.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

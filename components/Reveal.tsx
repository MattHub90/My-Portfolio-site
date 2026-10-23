"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before animating — use small steps (0.05–0.1) to stagger items. */
  delay?: number;
  /** Direction the content slides in from. */
  from?: "up" | "left" | "right";
};

const offsets = { up: { y: 24 }, left: { x: -24 }, right: { x: 24 } };

// Fades and slides its children in the first time they scroll into view.
export default function Reveal({ children, className, delay = 0, from = "up" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Shows one title at a time, swapping every few seconds.
export default function RotatingTitle({ titles, interval = 2600 }: { titles: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % titles.length), interval);
    return () => clearInterval(id);
  }, [titles.length, interval]);

  return (
    <span className="relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom">
      {/* Screen readers get the full list once instead of hearing it change. */}
      <span className="sr-only">{titles.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={titles[index]}
          aria-hidden="true"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap text-sky"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden="true" className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-sky" />
    </span>
  );
}

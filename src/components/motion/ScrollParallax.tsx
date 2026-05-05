"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Pixels to move on Y axis from start to end of scroll range. Negative = up */
  offset?: number;
  /** Optional scale at scroll end (e.g. 1.15) */
  scaleTo?: number;
};

export function ScrollParallax({
  children,
  className,
  offset = -120,
  scaleTo,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const wrapperClassName = ["relative", className].filter(Boolean).join(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [scaleTo ?? 1, 1, scaleTo ?? 1],
  );

  if (reduce) {
    return (
      <div ref={ref} className={wrapperClassName}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, scale: scaleTo !== undefined ? scale : undefined }}
      className={wrapperClassName}
    >
      {children}
    </motion.div>
  );
}

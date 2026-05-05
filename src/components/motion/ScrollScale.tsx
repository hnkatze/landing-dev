"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ScrollScaleProps = {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  fromOpacity?: number;
  toOpacity?: number;
};

/** Scales children from `from` → `to` while in viewport, then back. Great for big text. */
export function ScrollScale({
  children,
  className,
  from = 0.7,
  to = 1.05,
  fromOpacity = 0.4,
  toOpacity = 1,
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const wrapperClassName = ["relative", className].filter(Boolean).join(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, from]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [fromOpacity, toOpacity, toOpacity, fromOpacity],
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
      style={{ scale, opacity }}
      className={wrapperClassName}
    >
      {children}
    </motion.div>
  );
}

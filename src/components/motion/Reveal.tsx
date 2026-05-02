"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  y?: number;
  /** kept for API compat — ignored, blur is too expensive across many elements */
  blur?: number;
  scale?: number;
  /** kept for API compat — ignored, rotate forces extra layer */
  rotate?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 40,
  scale = 1,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px" });
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref as never}
      initial={{ opacity: 0, y, scale }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y, scale }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

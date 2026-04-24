"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  y?: number;
  blur?: number;
  scale?: number;
  rotate?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 60,
  blur = 12,
  scale = 0.9,
  rotate = 0,
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
      initial={{ opacity: 0, y, scale, filter: `blur(${blur}px)`, rotate }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotate: 0 }
          : { opacity: 0, y, scale, filter: `blur(${blur}px)`, rotate }
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

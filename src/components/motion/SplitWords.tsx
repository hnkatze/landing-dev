"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.12em]"
        >
          <motion.span
            className="inline-block will-change-transform origin-bottom"
            initial={{ y: "120%", rotateX: -50, opacity: 0 }}
            animate={
              inView
                ? { y: 0, rotateX: 0, opacity: 1 }
                : { y: "120%", rotateX: -50, opacity: 0 }
            }
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

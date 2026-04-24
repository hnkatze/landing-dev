"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useAnimationFrame,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Base scroll speed (px/s). Negative = right-to-left */
  baseVelocity?: number;
};

/**
 * Horizontal marquee whose speed is amplified by scroll velocity.
 * When user scrolls fast, marquee accelerates and changes direction.
 */
export function Marquee({
  children,
  className,
  baseVelocity = -50,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12" aria-hidden>{children}</span>
        <span className="block pr-12" aria-hidden>{children}</span>
        <span className="block pr-12" aria-hidden>{children}</span>
      </motion.div>
    </div>
  );
}

function wrap(min: number, max: number, v: number): number {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

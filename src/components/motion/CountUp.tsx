"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(reduce ? to : 0);
  const display = useTransform(value, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) {
      if (ref.current) ref.current.textContent = `${prefix}${to}${suffix}`;
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = String(latest);
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, reduce, to, prefix, suffix, duration, value, display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduce ? to : 0}
      {suffix}
    </span>
  );
}

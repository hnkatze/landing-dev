"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { useEffect, useMemo, useState, type ReactNode } from "react";

const ANCHOR_OFFSET = -80;
const smoothEase = (t: number) => 1 - Math.pow(1 - t, 3);

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const options = useMemo<LenisOptions>(
    () => ({
      anchors: reduceMotion
        ? { offset: ANCHOR_OFFSET, immediate: true }
        : { offset: ANCHOR_OFFSET, duration: 1.05, easing: smoothEase },
      autoRaf: true,
      gestureOrientation: "vertical",
      smoothWheel: !reduceMotion,
      stopInertiaOnNavigate: true,
      wheelMultiplier: 0.85,
    }),
    [reduceMotion],
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ElementType,
  type ReactElement,
} from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/\\";

type Trigger = "hover" | "inview" | "mount";

type CipherTextProps<E extends ElementType = "span"> = {
  text: string;
  /** When the scramble runs. Default: "hover" */
  trigger?: Trigger;
  /** Total duration in ms. Default 600 */
  duration?: number;
  /** Optional className passed to the rendered element */
  className?: string;
  /** Custom element. Default "span" */
  as?: E;
} & Omit<ComponentProps<E>, "children" | "ref">;

/**
 * CipherText — letters scramble through random glyphs before settling.
 * Uses textContent + setInterval, so it doesn't trigger layout.
 */
export function CipherText<E extends ElementType = "span">({
  text,
  trigger = "hover",
  duration = 600,
  className,
  as,
  ...rest
}: CipherTextProps<E>): ReactElement {
  const Tag = (as ?? "span") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const play = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const start = performance.now();
    const len = text.length;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      let out = "";
      // Reveal letters from left to right; the rest scrambles
      const revealCount = Math.floor(t * (len + 4)) - 4;
      for (let i = 0; i < len; i++) {
        const ch = text[i];
        if (ch === " " || ch === "\n") {
          out += ch;
          continue;
        }
        if (i < revealCount) {
          out += ch;
        } else {
          out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
      }
      el.textContent = out;
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        el.textContent = text;
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [text, duration]);

  // Mount-time triggers
  useEffect(() => {
    if (trigger === "mount") {
      play();
      return;
    }
    if (trigger === "inview") {
      const el = ref.current;
      if (!el || hasPlayed) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              play();
              setHasPlayed(true);
              io.disconnect();
              break;
            }
          }
        },
        { threshold: 0.4 },
      );
      io.observe(el);
      return () => io.disconnect();
    }
    return;
  }, [trigger, play, hasPlayed]);

  // Cleanup pending RAFs on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Hover handlers (only attached when trigger === "hover")
  const onEnter = trigger === "hover" ? play : undefined;
  const onFocus = trigger === "hover" ? play : undefined;

  return (
    <Tag
      ref={ref as never}
      className={className}
      onMouseEnter={onEnter}
      onFocus={onFocus}
      {...rest}
    >
      {text}
    </Tag>
  );
}

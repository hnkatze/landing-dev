"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Line = { prompt: string; text: string; tone?: "muted" | "ok" | "warn" };

const SCENES: Line[][] = [
  [
    { prompt: "$", text: "git pull origin main" },
    { prompt: ">", text: "fast-forward · 12 files changed" },
    { prompt: "$", text: "pnpm build", tone: "muted" },
    { prompt: "✓", text: "compiled in 4.2s", tone: "ok" },
  ],
  [
    { prompt: "$", text: "deploy → vercel" },
    { prompt: ">", text: "uploading edge functions..." },
    { prompt: "✓", text: "live: cliente.dev", tone: "ok" },
    { prompt: ">", text: "lighthouse 99 / 100", tone: "muted" },
  ],
  [
    { prompt: "$", text: "n8n run automation/leads" },
    { prompt: ">", text: "form → crm → slack" },
    { prompt: "✓", text: "+8 leads procesados", tone: "ok" },
    { prompt: ">", text: "tiempo ahorrado: 3h", tone: "muted" },
  ],
  [
    { prompt: "$", text: "claude --review pr#42" },
    { prompt: ">", text: "scanning diff..." },
    { prompt: "!", text: "1 sugerencia menor", tone: "warn" },
    { prompt: "✓", text: "merge ready", tone: "ok" },
  ],
];

const TYPE_SPEED = 18; // ms per char
const HOLD_MS = 2400; // pause after typing
const FADE_MS = 320;

export function ConsoleBlock({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [sceneIdx, setSceneIdx] = useState(0);
  const [rendered, setRendered] = useState<Line[]>([]);
  const [typingText, setTypingText] = useState("");
  const [typingIdx, setTypingIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "hold" | "fading">("typing");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduce) return;

    const scene = SCENES[sceneIdx];

    if (phase === "typing") {
      const line = scene[typingIdx];
      if (!line) {
        timerRef.current = setTimeout(() => setPhase("hold"), 0);
        return;
      }
      if (typingText.length < line.text.length) {
        timerRef.current = setTimeout(() => {
          setTypingText(line.text.slice(0, typingText.length + 1));
        }, TYPE_SPEED);
      } else {
        // commit current line, advance to next
        timerRef.current = setTimeout(() => {
          setRendered((prev) => [...prev, line]);
          setTypingText("");
          setTypingIdx(typingIdx + 1);
        }, 180);
      }
    } else if (phase === "hold") {
      timerRef.current = setTimeout(() => setPhase("fading"), HOLD_MS);
    } else if (phase === "fading") {
      timerRef.current = setTimeout(() => {
        setRendered([]);
        setTypingText("");
        setTypingIdx(0);
        setSceneIdx((i) => (i + 1) % SCENES.length);
        setPhase("typing");
      }, FADE_MS);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, typingText, typingIdx, sceneIdx, reduce]);

  const scene = SCENES[sceneIdx];
  const currentLine = reduce ? undefined : scene[typingIdx];
  const visibleRendered = reduce ? SCENES[0] : rendered;

  return (
    <div
      className={[
        "font-mono text-[10px] sm:text-[11px] leading-[1.7] tracking-[0.02em]",
        "bg-ink text-paper/90",
        "border border-ink",
        "px-3 py-2.5 sm:px-4 sm:py-3",
        "w-[19rem] sm:w-[20rem] min-h-[10.25rem] sm:min-h-[10.75rem]",
        "shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25)]",
        "transition-opacity",
        !reduce && phase === "fading" ? "opacity-0" : "opacity-100",
        className,
      ].join(" ")}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-hidden
    >
      {/* Header bar */}
      <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-paper/10">
        <span className="size-1.5 rounded-full bg-paper/30" />
        <span className="size-1.5 rounded-full bg-paper/30" />
        <span className="size-1.5 rounded-full bg-paper/30" />
        <span className="ml-2 text-[9px] tracking-[var(--tracking-mono)] uppercase text-paper/40">
          devstudio · live
        </span>
      </div>

      {/* Lines already typed */}
      {visibleRendered.map((l, i) => (
        <Row key={i} line={l} />
      ))}

      {/* Currently typing line */}
      {currentLine && phase === "typing" && (
        <Row
          line={{ ...currentLine, text: typingText }}
          showCursor
        />
      )}

      {/* Idle cursor when scene finished typing */}
      {!reduce && phase === "hold" && (
        <div className="flex gap-2">
          <span className="text-paper/40">$</span>
          <span className="inline-block w-2 h-3 bg-paper/80 align-middle animate-blink" />
        </div>
      )}
    </div>
  );
}

function Row({ line, showCursor = false }: { line: Line; showCursor?: boolean }) {
  const promptColor =
    line.tone === "ok"
      ? "text-emerald-400/90"
      : line.tone === "warn"
        ? "text-amber-400/90"
        : line.prompt === ">"
          ? "text-paper/40"
          : "text-paper/60";
  const textColor =
    line.tone === "ok"
      ? "text-paper"
      : line.tone === "warn"
        ? "text-paper"
        : line.tone === "muted"
          ? "text-paper/60"
          : "text-paper/90";

  return (
    <div className="flex gap-2">
      <span className={promptColor}>{line.prompt}</span>
      <span className={textColor}>
        {line.text}
        {showCursor && (
          <span className="inline-block w-1.5 h-3 bg-paper/80 align-middle ml-0.5 animate-blink" />
        )}
      </span>
    </div>
  );
}

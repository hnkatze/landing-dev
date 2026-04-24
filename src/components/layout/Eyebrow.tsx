import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "invert";
};

const toneClass: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  default: "text-ink",
  muted: "text-muted",
  invert: "text-muted-soft",
};

export function Eyebrow({ children, className, tone = "muted" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono uppercase text-[11px] tracking-[var(--tracking-mono)]",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
};

export function Section({ id, children, className, invert = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        invert ? "bg-ink text-paper" : "bg-paper text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
};

export function Container({ children, className, bleed = false }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        bleed
          ? "px-0"
          : "px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-30 max-w-[var(--container-editorial)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

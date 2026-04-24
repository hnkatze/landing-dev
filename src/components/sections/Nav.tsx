"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

const links = [
  { label: "SERVICIOS", href: "#servicios" },
  { label: "PROCESO", href: "#proceso" },
  { label: "EQUIPO", href: "#equipo" },
  { label: "CONTACTO", href: "#contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-ink/10"
          : "bg-transparent border-transparent",
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          <a href="#" className="flex items-center gap-2">
            <span className="block size-3 bg-ink" aria-hidden />
            <span className="font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase font-medium">
              DEVSTUDIO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase hover:opacity-60 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden md:flex items-center gap-1.5 font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase hover:opacity-60 transition-opacity"
          >
            AGENDAR
            <ArrowUpRight />
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-transform",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-ink transition-transform",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pb-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[var(--tracking-mono)] uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 font-mono text-xs tracking-[var(--tracking-mono)] uppercase"
            >
              AGENDAR <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </Container>
    </motion.header>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

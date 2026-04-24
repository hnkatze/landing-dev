"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

const nav = ["Servicios", "Proceso", "Equipo", "Contacto"];
const social = ["Twitter / X", "LinkedIn", "GitHub", "Instagram"];
const legal = ["Privacidad", "Términos", "Cookies"];

export function Footer() {
  return (
    <footer className="bg-ink text-paper pt-24 md:pt-32 pb-10 overflow-x-clip">
      <Container>
        <ScrollScale from={0.6} to={1.15} fromOpacity={0.2} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-none tracking-[-0.05em] mb-16 md:mb-24 break-all text-paper"
            style={{ fontSize: "clamp(4rem, 18vw, 13rem)" }}
          >
            devstudio.
          </h2>
        </ScrollScale>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pt-10">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow tone="invert">01  contacto</Eyebrow>
            <a
              href="mailto:hola@devstudio.dev"
              className="font-medium text-paper hover:opacity-70 transition-opacity"
            >
              hola@devstudio.dev
            </a>
            <span className="text-sm text-muted-soft">+504 9999-0000</span>
            <span className="text-sm text-muted-soft">
              Tegucigalpa · Remoto LATAM
            </span>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-3.5">
            <Eyebrow tone="invert">02  navegación</Eyebrow>
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="text-sm text-paper hover:opacity-70 transition-opacity w-fit"
              >
                {n}
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3.5">
            <Eyebrow tone="invert">03  social</Eyebrow>
            {social.map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-paper hover:opacity-70 transition-opacity w-fit"
              >
                {s}
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4">
            <Eyebrow tone="invert">04  newsletter</Eyebrow>
            <p className="text-sm text-paper leading-relaxed max-w-[28ch]">
              Una vez al mes. Sin ruido.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-between border-b border-paper py-3 max-w-xs"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="flex-1 bg-transparent text-sm placeholder:text-muted text-paper outline-none"
                aria-label="Correo electrónico"
              />
              <button
                type="submit"
                aria-label="Suscribirse"
                className="text-paper hover:opacity-70 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>

        <div className="mt-20 pt-6 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
            © 2026 Devstudio · Todos los derechos reservados
          </span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legal.map((l) => (
              <a
                key={l}
                href="#"
                className="font-mono text-[11px] tracking-[0.1em] uppercase hover:opacity-70 transition-opacity"
              >
                {l}
              </a>
            ))}
            <a
              href="#top"
              className="font-mono text-[11px] tracking-[0.1em] uppercase font-medium inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            >
              VOLVER ARRIBA
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 10V2M6 2L2 6M6 2L10 6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

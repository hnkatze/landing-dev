"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ScrollScale } from "@/components/motion/ScrollScale";

export function FinalCTA() {
  return (
    <section id="contacto" className="bg-ink text-paper py-32 md:py-40 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow tone="invert" className="block text-center mb-12">
            09  /  CONTACTO  /  HABLEMOS
          </Eyebrow>
        </Reveal>

        <div className="[perspective:1200px]">
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-10 text-paper"
            style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          >
            <SplitWords text="Tu turno." />
          </h2>
        </div>

        <Reveal delay={0.3} y={40} blur={6} scale={0.95}>
          <p className="max-w-xl mx-auto text-center text-base md:text-lg leading-relaxed text-paper/85">
            Cuéntanos qué necesitas y te enviamos una propuesta concreta en 48
            horas.
          </p>
        </Reveal>

        <Reveal delay={0.4} y={40} blur={4} scale={0.95}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a
              href="mailto:hola@devstudio.dev"
              className="group font-mono text-sm tracking-[0.12em] uppercase inline-flex items-center gap-2 transition-all duration-300 hover:text-paper/70 hover:-translate-y-0.5"
            >
              → SOLICITAR COTIZACIÓN
            </a>
            <a
              href="#contacto"
              className="group font-mono text-sm tracking-[0.12em] uppercase inline-flex items-center gap-2 text-muted-soft hover:text-paper transition-all duration-300 hover:-translate-y-0.5"
            >
              AGENDAR LLAMADA →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

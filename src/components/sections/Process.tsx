"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

const steps = [
  {
    n: "01",
    title: "Análisis",
    desc: "Entendemos tu negocio, objetivos y restricciones para diseñar la mejor solución.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Definimos arquitectura, UX e interfaces antes de escribir una línea de código.",
  },
  {
    n: "03",
    title: "Desarrollo",
    desc: "Iteraciones cortas, código limpio y revisiones constantes para garantizar calidad.",
  },
  {
    n: "04",
    title: "Entrega",
    desc: "Despliegue, capacitación y acompañamiento post-lanzamiento.",
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="proceso" className="bg-ink text-paper py-24 md:py-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow tone="invert" className="block text-center mb-6">
            05  ·  PROCESO  ·  CÓMO TRABAJAMOS
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.7} to={1.1} fromOpacity={0.3} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24 text-paper"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Método.
          </h2>
        </ScrollScale>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-paper/30">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-8 md:p-10 min-h-[260px] md:min-h-[320px] flex flex-col justify-between border-b border-paper/30 lg:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-paper/30 lg:border-r lg:border-paper/30 lg:last:border-r-0"
            >
              <span className="font-mono text-3xl">{s.n}</span>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-soft max-w-[28ch]">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

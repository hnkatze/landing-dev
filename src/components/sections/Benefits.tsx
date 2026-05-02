"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";
import { CountUp } from "@/components/motion/CountUp";

type Stat = {
  display: React.ReactNode;
  cap: string;
  body: string;
};

const stats: Stat[] = [
  {
    display: (
      <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
        <CountUp to={12} prefix="+" />
        <span className="text-[0.4em] font-mono tracking-[var(--tracking-mono)] uppercase opacity-70">
          AÑOS
        </span>
      </span>
    ),
    cap: "EXPERIENCIA COMBINADA",
    body: "Suma de años de los integrantes del equipo construyendo producto, web, móvil y backend.",
  },
  {
    display: (
      <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
        <CountUp to={40} prefix="+" />
        <span className="text-[0.4em] font-mono tracking-[var(--tracking-mono)] uppercase opacity-70">
          HRS/MES
        </span>
      </span>
    ),
    cap: "AHORRO OPERATIVO",
    body: "Horas operativas ahorradas cada mes con flujos automatizados (n8n, Zapier, IA, bots).",
  },
  {
    display: <span className="whitespace-nowrap">24/7</span>,
    cap: "DISPONIBILIDAD",
    body: "Producto SaaS, apps móviles y soporte para que tu negocio nunca se detenga.",
  },
];

export function Benefits() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-paper text-ink py-24 md:py-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-6">
            06 — BENEFICIOS — POR QUÉ NOSOTROS
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.7} to={1.1} fromOpacity={0.3} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Resultados.
          </h2>
        </ScrollScale>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {stats.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : i * 0.12,
                ease: [0.34, 1.4, 0.64, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div
                className="font-display font-semibold leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                {s.display}
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-ink w-full origin-left"
              />
              <Eyebrow tone="muted">{s.cap}</Eyebrow>
              <p className="text-sm leading-relaxed text-ink">{s.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

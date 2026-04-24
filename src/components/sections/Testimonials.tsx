"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

const featured = {
  quote:
    "Automatizaron procesos que antes nos llevaban días enteros. Ahora todo corre solo y el equipo se enfoca en lo que importa.",
  author: "MARÍA GONZÁLEZ  /  COO, LOGÍSTICA ANDES",
};

const cols = [
  {
    quote:
      "Lanzaron nuestra app móvil en 8 semanas y la calidad superó expectativas.",
    author: "DIEGO RAMÍREZ  /  FOUNDER, FITTRACK",
  },
  {
    quote:
      "Su equipo se siente como una extensión del nuestro. Recomendados al 100%.",
    author: "LUCÍA PÉREZ  /  CTO, NIMBUS",
  },
  {
    quote:
      "Entregaron a tiempo y con calidad. Comunicación impecable durante todo el proyecto.",
    author: "CARLOS MEJÍA  /  CEO, ANDA",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="trabajo" className="bg-paper text-ink py-24 md:py-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-12 md:mb-16">
            08  /  CLIENTES  /  LO QUE DICEN
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.75} to={1.08} fromOpacity={0.4} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Voces.
          </h2>
        </ScrollScale>

        <Reveal y={50} blur={8} scale={0.9}>
          <blockquote className="max-w-4xl mx-auto text-center">
            <p
              className="font-sans text-ink leading-snug"
              style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)" }}
            >
              {featured.quote}
            </p>
            <footer className="mt-8">
              <Eyebrow tone="muted">{featured.author}</Eyebrow>
            </footer>
          </blockquote>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20 md:mt-28 [perspective:1200px]">
          {cols.map((c, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 80,
                rotateZ: i % 2 === 0 ? -4 : 4,
                rotateY: i % 2 === 0 ? -20 : 20,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateZ: 0,
                rotateY: 0,
                filter: "blur(0px)",
              }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.85,
                delay: reduce ? 0 : i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6 will-change-transform"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px bg-ink w-full origin-left"
              />
              <p className="text-sm leading-relaxed text-ink">{c.quote}</p>
              <Eyebrow tone="muted">{c.author}</Eyebrow>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

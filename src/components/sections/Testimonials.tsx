"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

const featured = {
  quote:
    "Pasamos de tener apenas presencia en redes a un sitio que nos llega clientes nuevos cada semana. La gente nos encuentra en Google buscando taller mecánico en San Pedro Sula y termina escribiéndonos directo.",
  author: "GERARDO SÁNCHEZ  /  PROPIETARIO, TALLER GERARDITO",
};

const cols = [
  {
    quote:
      "Acá en Bonito Oriental el boca a boca era todo lo que teníamos. Ahora la gente nos encuentra por internet, ve los trabajos en la galería y ya nos llaman seguros de que sabemos lo que hacemos.",
    author: "HECTOR HENRÍQUEZ  /  PROPIETARIO, TALLER LOS CAMILOS",
  },
  {
    quote:
      "Necesitábamos una plataforma que reflejara el peso de nuestra labor social. Entendieron la causa y entregaron algo limpio, escalable y fácil de mantener.",
    author: "DIRECCIÓN  /  HONDURAS SOCIAL",
  },
  {
    quote:
      "Tener un portal donde yo misma puedo subir productos, cambiar precios y manejar el catálogo me cambió la vida. Ya no dependo de nadie para actualizar la tienda.",
    author: "FUNDADORA  /  SCRUNSHES HN",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="trabajo" className="bg-paper text-ink py-24 md:py-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-12 md:mb-16">
            09  /  CLIENTES  /  LO QUE DICEN
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

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20 md:mt-28">
          {cols.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
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

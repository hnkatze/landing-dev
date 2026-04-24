"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

const services = [
  {
    n: "01",
    title: "Desarrollo web",
    desc: "Frontend y backend a medida con stacks robustos y modernos.",
  },
  {
    n: "02",
    title: "Backend & APIs",
    desc: "APIs, microservicios e integraciones para conectar tus sistemas.",
  },
  {
    n: "03",
    title: "Apps móviles",
    desc: "Aplicaciones nativas y multiplataforma para iOS y Android.",
  },
  {
    n: "04",
    title: "Escritorio",
    desc: "Herramientas de escritorio multiplataforma listas para producción.",
  },
  {
    n: "05",
    title: "Automatización",
    desc: "n8n, Zapier, bots y workflows que ahorran horas cada semana.",
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="bg-paper text-ink py-24 md:py-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-8 md:mb-12">
            03   /   SERVICIOS   /   WHAT WE DO
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.85} to={1.08} fromOpacity={0.5} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-16 md:mb-24"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
          >
            Lo que hacemos.
          </h2>
        </ScrollScale>
      </Container>

      <ul className="border-t border-ink [perspective:1200px]">
        {services.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -100 : 100,
              rotateY: i % 2 === 0 ? -25 : 25,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              filter: "blur(0px)",
            }}
            viewport={{ margin: "-15% 0px -15% 0px" }}
            transition={{
              duration: 0.85,
              delay: reduce ? 0 : i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-ink will-change-transform"
          >
            <a
              href="#contacto"
              className="group block transition-colors duration-500 hover:bg-ink hover:text-paper"
            >
              <Container>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-end gap-x-6 gap-y-4 py-7 md:py-9">
                  <span className="font-mono text-2xl md:text-2xl">
                    {s.n}
                  </span>

                  <h3
                    className="font-display font-semibold tracking-[-0.02em] leading-[1.05]"
                    style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
                  >
                    {s.title}
                  </h3>

                  <div className="col-span-2 md:col-span-1 md:max-w-xs flex flex-col gap-3 md:items-end md:text-right">
                    <p className="text-sm leading-relaxed text-muted group-hover:text-paper/70 transition-colors duration-500">
                      {s.desc}
                    </p>
                    <span className="font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase inline-flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-2">
                      → VER MÁS
                    </span>
                  </div>
                </div>
              </Container>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

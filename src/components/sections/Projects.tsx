"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

type Project = {
  n: string;
  client: string;
  title: string;
  desc: string;
  stack: string[];
  url: string;
  display: string;
  scope: string;
  year: string;
  image: string;
};

const projects: Project[] = [
  {
    n: "01",
    client: "Taller Gerardito",
    title: "Diagnóstico electrónico automotriz",
    desc: "Sitio corporativo para un taller especializado en mecánica y diagnóstico electrónico en San Manuel, Cortés. Captación por WhatsApp, galería y proceso del taller.",
    stack: ["Next.js", "Tailwind", "SEO", "WhatsApp"],
    url: "https://www.tallergerardito.com",
    display: "tallergerardito.com",
    scope: "WEB · SEO · LEADS",
    year: "2025",
    image: "/projects/tallergerardito.jpg",
  },
  {
    n: "02",
    client: "Taller Los Camilos",
    title: "Soldadura y construcción para el campo",
    desc: "Web para un taller con +15 años de experiencia en pailas ganaderas, maquinaria agrícola y soldadura de arco eléctrico en Bonito Oriental, Colón.",
    stack: ["Next.js", "Tailwind", "Galería"],
    url: "https://www.tallerloscamilos.com",
    display: "tallerloscamilos.com",
    scope: "WEB · CATÁLOGO",
    year: "2025",
    image: "/projects/tallerloscamilos.jpg",
  },
  {
    n: "03",
    client: "Honduras Social",
    title: "Fundación para el desarrollo comunitario",
    desc: "Plataforma institucional para una fundación con +10 años empoderando mujeres, jóvenes y personas con discapacidad. Proyectos, equipo, donaciones y red internacional.",
    stack: ["Next.js", "CMS", "Donaciones"],
    url: "https://www.hondurassocial.org",
    display: "hondurassocial.org",
    scope: "ONG · CONTENIDO",
    year: "2025",
    image: "/projects/hondurassocial.jpg",
  },
  {
    n: "04",
    client: "Scrunshes HN",
    title: "Tienda con portal de autogestión",
    desc: "E-commerce de accesorios para el cabello con un panel administrativo a medida — la dueña sube productos, cambia precios y maneja categorías sin depender de nadie.",
    stack: ["Next.js", "Admin Panel", "CMS"],
    url: "https://www.scrunsheshn.com",
    display: "scrunsheshn.com",
    scope: "E-COMMERCE · ADMIN",
    year: "2025",
    image: "/projects/scrunsheshn.jpg",
  },
];

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proyectos"
      className="bg-paper text-ink py-24 md:py-32 overflow-x-clip"
    >
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-6">
            04 / PROYECTOS / TRABAJO REAL
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.7} to={1.1} fromOpacity={0.3} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Proyectos.
          </h2>
        </ScrollScale>

        <Reveal delay={0.15} y={30} blur={4} scale={0.95}>
          <p className="max-w-xl mx-auto text-center text-base md:text-lg leading-relaxed text-muted mb-16 md:mb-24">
            Una muestra de clientes públicos. Hay más bajo NDA — pedinos
            referencias.
          </p>
        </Reveal>
      </Container>

      <ul className="border-t border-ink">
        {projects.map((p, i) => (
          <motion.li
            key={p.n}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-12% 0px -12% 0px" }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-ink"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-colors duration-500 hover:bg-ink hover:text-paper"
            >
              <Container>
                <div
                  className={[
                    "grid items-center gap-y-8 md:gap-x-12 lg:gap-x-16 py-10 md:py-16",
                    "md:grid-cols-2",
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  {/* Visual: browser-style frame with screenshot */}
                  <div className="relative">
                    <div className="relative overflow-hidden border border-ink/15 group-hover:border-paper/20 transition-colors duration-500 bg-paper">
                      {/* Editorial browser bar */}
                      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-ink/10 group-hover:border-paper/15 bg-paper/95 transition-colors duration-500">
                        <span className="size-2 rounded-full bg-ink/20 group-hover:bg-paper/30 transition-colors duration-500" />
                        <span className="size-2 rounded-full bg-ink/20 group-hover:bg-paper/30 transition-colors duration-500" />
                        <span className="size-2 rounded-full bg-ink/20 group-hover:bg-paper/30 transition-colors duration-500" />
                        <span className="ml-3 font-mono text-[10px] tracking-[var(--tracking-mono)] text-muted truncate">
                          {p.display}
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] bg-paper">
                        <Image
                          src={p.image}
                          alt={`Captura del sitio ${p.client}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    {/* Decorative offset frame */}
                    <span
                      aria-hidden
                      className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 inset-x-0 inset-y-0 border border-ink/20 group-hover:border-paper/20 transition-colors duration-500 -z-0 pointer-events-none translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4 md:gap-5">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl md:text-3xl">
                        {p.n}
                      </span>
                      <span className="h-px flex-1 bg-current opacity-20" />
                      <Eyebrow
                        tone="muted"
                        className="group-hover:text-paper/60 transition-colors duration-500"
                      >
                        {p.scope}
                      </Eyebrow>
                    </div>

                    <Eyebrow
                      tone="muted"
                      className="group-hover:text-paper/60 transition-colors duration-500"
                    >
                      {p.client} · {p.year}
                    </Eyebrow>

                    <h3
                      className="font-display font-semibold tracking-[-0.02em] leading-[1.05]"
                      style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
                    >
                      {p.title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-muted group-hover:text-paper/70 transition-colors duration-500 max-w-xl">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] tracking-[var(--tracking-mono)] uppercase px-2.5 py-1 border border-current opacity-70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <span className="mt-2 font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase inline-flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-2">
                      {p.display} ↗
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

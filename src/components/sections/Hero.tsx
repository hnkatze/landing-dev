"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(heroProgress, [0, 1], [0, -200]);
  const headlineScale = useTransform(heroProgress, [0, 1], [1, 0.85]);
  const headlineOpacity = useTransform(heroProgress, [0, 0.6, 1], [1, 0.5, 0]);

  const { scrollYProgress: photoProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoScale = useTransform(photoProgress, [0, 0.5, 1], [1.3, 1, 1.15]);
  const photoY = useTransform(photoProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={heroRef} className="relative bg-paper text-ink">
      <Container>
        <div className="flex items-center justify-between border-y border-ink/10 py-4">
          <Eyebrow>01</Eyebrow>
          <Eyebrow>AGENCIA DE SOFTWARE</Eyebrow>
          <Eyebrow>EST. 2020</Eyebrow>
        </div>
      </Container>

      <Container>
        <motion.div
          style={
            reduce
              ? undefined
              : { y: headlineY, scale: headlineScale, opacity: headlineOpacity }
          }
          className="pt-10 pb-6 md:pt-16 md:pb-8 lg:pt-24 lg:pb-12"
        >
          <h1
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] [perspective:1000px]"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            <span className="block">
              <SplitWords text="Software que mueve" />
            </span>
            <span className="block">
              <SplitWords text="tu negocio." delay={0.2} />
            </span>
          </h1>
        </motion.div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-10 md:py-16 border-t border-ink/10">
          <Reveal y={40} blur={6} scale={0.95}>
            <div className="flex flex-col gap-2">
              <Eyebrow>NOTA DEL EQUIPO</Eyebrow>
              <Eyebrow>N°01</Eyebrow>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={40} blur={6} scale={0.95}>
            <p className="text-base leading-relaxed text-ink max-w-md">
              Construimos productos digitales a medida: web, móvil, escritorio y
              automatización. Equipo pequeño, criterio grande.
            </p>
          </Reveal>

          <Reveal delay={0.2} y={40} blur={6} scale={0.95}>
            <a
              href="#contacto"
              className="group flex items-center gap-2 md:justify-end text-sm font-medium hover:opacity-60 transition-opacity"
            >
              SOLICITAR COTIZACIÓN
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </Container>

      <div ref={photoRef} className="relative w-full overflow-hidden">
        <motion.div
          style={reduce ? undefined : { scale: photoScale, y: photoY }}
          className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] will-change-transform"
        >
          <Image
            src="/images/hero.jpg"
            alt="Espacio de trabajo del equipo de devstudio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-end justify-between px-5 sm:px-8 lg:px-16 xl:px-24 pb-6 md:pb-8">
            <Eyebrow tone="invert" className="text-paper">
              TEGUCIGALPA / REMOTO
            </Eyebrow>
            <Eyebrow tone="invert" className="text-paper hidden sm:inline">
              N°01 — HERO
            </Eyebrow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 8H13M13 8L8 3M13 8L8 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

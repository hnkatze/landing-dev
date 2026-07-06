"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Fragment, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { CipherText } from "@/components/motion/CipherText";
import { cdn } from "@/lib/cdn";

// CSS-driven variant of SplitWords for above-the-fold content: the words
// are visible in the server HTML and animate at first paint instead of
// waiting for hydration (keeps LCP early).
function HeroWords({
  text,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  // The space must live OUTSIDE the overflow wrapper: trailing whitespace
  // inside an inline-block is collapsed by the browser.
  return words.map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
        <span
          className="hero-word"
          style={{ animationDelay: `${delay + i * stagger}s` }}
        >
          {word}
        </span>
      </span>
      {i < words.length - 1 ? " " : null}
    </Fragment>
  ));
}

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(heroProgress, [0, 1], [0, -120]);
  const headlineOpacity = useTransform(heroProgress, [0, 0.7, 1], [1, 0.6, 0]);

  const { scrollYProgress: photoProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(photoProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={heroRef} className="relative bg-paper text-ink overflow-hidden">
      <Container>
        <div className="flex items-center justify-between border-y border-ink/10 py-4">
          <Eyebrow>01</Eyebrow>
          <Eyebrow>AGENCIA DE SOFTWARE</Eyebrow>
          <Eyebrow>+12 AÑOS COMBINADOS</Eyebrow>
        </div>
      </Container>

      <Container>
        <motion.div
          style={reduce ? undefined : { y: headlineY, opacity: headlineOpacity }}
          className="pt-10 pb-6 md:pt-16 md:pb-8 lg:pt-24 lg:pb-12"
        >
          <h1
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] [perspective:1000px]"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            <span className="block">
              <HeroWords text="Automatización e IA" />
            </span>
            <span className="block">
              <HeroWords text="para tu negocio." delay={0.2} />
              <span
                aria-hidden
                className="inline-block align-middle ml-2 md:ml-4 w-[0.08em] h-[0.7em] bg-ink animate-blink translate-y-[-0.05em]"
              />
            </span>
          </h1>
        </motion.div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-10 md:py-16 border-t border-ink/10">
          <div className="hero-fade-up">
            <div className="flex flex-col gap-2">
              <Eyebrow>NOTA DEL EQUIPO</Eyebrow>
              <Eyebrow>N°01</Eyebrow>
            </div>
          </div>

          <div className="hero-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-base leading-relaxed text-ink max-w-md">
              Diseñamos flujos de automatización, agentes de IA y servidores
              MCP para tu operación. También construimos software a medida
              —web, móvil y escritorio— y damos tutorías y charlas. Equipo
              pequeño, criterio grande.
            </p>
          </div>

          <div className="hero-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#contacto"
              className="group flex items-center gap-2 md:justify-end text-sm font-medium hover:opacity-60 transition-opacity"
            >
              <CipherText text="SOLICITAR COTIZACIÓN" duration={650} />
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Container>

      <div ref={photoRef} className="relative w-full overflow-hidden">
        <motion.div
          style={reduce ? undefined : { y: photoY }}
          className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] will-change-transform"
        >
          <Image
            src={cdn("/media/altumcode-P2SkP_PXhlU-unsplash.jpg")}
            alt="Espacio de trabajo del estudio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-end justify-between px-5 sm:px-8 lg:px-16 xl:px-24 pb-6 md:pb-8">
            <Eyebrow tone="invert" className="text-paper">
              SAN PEDRO SULA / REMOTO LATAM
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

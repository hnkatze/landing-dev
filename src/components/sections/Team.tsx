"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";

type Member = {
  n: string;
  name: string;
  initials: string;
  role: string;
  tag: string;
  avatar: string;
};

const team: Member[] = [
  {
    n: "01",
    name: "Camilo Henríquez",
    initials: "CH",
    role: "Full Stack",
    tag: "AI TOOLING",
    avatar: "/teams/1.png",
  },
  {
    n: "02",
    name: "Daniel Brizuela",
    initials: "DB",
    role: "Full Stack",
    tag: "WEB / API",
    avatar: "/teams/2.png",
  },
  {
    n: "03",
    name: "Jafeth Ventura",
    initials: "JV",
    role: "Mobile Developer",
    tag: "iOS / ANDROID",
    avatar: "/teams/3.png",
  },
  {
    n: "04",
    name: "Edgardo Wilchez",
    initials: "EW",
    role: "Mobile · Frontend",
    tag: "RN / WEB",
    avatar: "/teams/4.png",
  },
];

export function Team() {
  const reduce = useReducedMotion();

  return (
    <section
      id="equipo"
      className="bg-paper text-ink py-24 md:py-32 overflow-x-clip"
    >
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-6">
            07 — EQUIPO — QUIÉNES SOMOS
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.75} to={1.08} fromOpacity={0.4} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-4 md:mb-6"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Equipo.
          </h2>
        </ScrollScale>

        <Reveal delay={0.15} y={30} blur={4} scale={0.95}>
          <p className="max-w-xl mx-auto text-center text-base md:text-lg leading-relaxed text-muted mb-16 md:mb-24">
            Cuatro personas, cero intermediarios. Hablás directo con quien
            construye tu producto.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 border border-ink/15 [perspective:1500px]">
          {team.map((m, i) => (
            <motion.li
              key={m.n}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: -30,
                rotateY: i % 2 === 0 ? -15 : 15,
                scale: 0.9,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.85,
                delay: reduce ? 0 : i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-paper will-change-transform group"
            >
              <article className="relative h-full p-8 md:p-10 lg:p-12 flex flex-col gap-6 md:gap-8 overflow-hidden transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                {/* Number top-right */}
                <span className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase text-muted group-hover:text-muted-soft transition-colors duration-500">
                  07 / {m.n}
                </span>

                {/* Avatar block — square with photo */}
                <div className="relative w-fit">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-10% 0px" }}
                    transition={{
                      duration: 0.8,
                      delay: reduce ? 0 : i * 0.12 + 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={[
                      "relative size-24 md:size-28 lg:size-32",
                      "bg-ink overflow-hidden",
                      "transition-all duration-500",
                      "group-hover:rotate-[-6deg] group-hover:scale-105",
                      "will-change-transform origin-bottom-left",
                    ].join(" ")}
                  >
                    <Image
                      src={m.avatar}
                      alt={`Foto de ${m.name}`}
                      fill
                      sizes="(min-width: 1024px) 8rem, (min-width: 768px) 7rem, 6rem"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    {/* Initials overlay — visible by default, fades on hover */}
                    <span
                      aria-hidden
                      className={[
                        "absolute inset-0 flex items-center justify-center",
                        "font-display font-semibold tracking-[-0.04em] leading-none",
                        "text-4xl md:text-5xl lg:text-6xl text-paper",
                        "bg-ink/55 mix-blend-multiply",
                        "opacity-100 group-hover:opacity-0 transition-opacity duration-500",
                      ].join(" ")}
                    >
                      {m.initials}
                    </span>
                  </motion.div>

                  {/* Decorative offset square */}
                  <span
                    aria-hidden
                    className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 size-24 md:size-28 lg:size-32 border border-ink/20 group-hover:border-paper/30 transition-colors duration-500 -z-0"
                  />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-3 mt-auto">
                  <h3
                    className="font-display font-semibold tracking-[-0.02em] leading-[1.05]"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                  >
                    {m.name}
                  </h3>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-base md:text-lg leading-tight">
                      {m.role}
                    </span>
                    <span className="font-mono text-[10px] tracking-[var(--tracking-mono)] uppercase px-2.5 py-1 border border-current opacity-70">
                      {m.tag}
                    </span>
                  </div>
                </div>

                {/* Reveal arrow on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 font-mono text-[11px] tracking-[var(--tracking-mono)] uppercase inline-flex items-center gap-2"
                >
                  →
                </span>
              </article>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

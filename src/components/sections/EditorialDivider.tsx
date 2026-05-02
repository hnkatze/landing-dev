"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { SplitWords } from "@/components/motion/SplitWords";

export function EditorialDivider() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      aria-hidden={false}
      className="relative w-full overflow-hidden bg-ink text-paper"
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/media/josep-martins-zuiQPl0mEhs-unsplash.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-50"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/70" />

      <Container>
        <div className="relative z-10 py-28 md:py-40 lg:py-52 flex flex-col items-center text-center gap-8">
          <Eyebrow tone="invert" className="text-paper">
            ENTRE LA IDEA Y EL CÓDIGO
          </Eyebrow>

          <h2
            className="font-display font-semibold leading-[0.95] tracking-[-0.04em] max-w-5xl text-paper [perspective:1200px]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            <SplitWords text="Hacemos producto" />
            <span className="block">
              <SplitWords text="que se nota." delay={0.25} />
            </span>
          </h2>

          <p className="max-w-xl text-base md:text-lg leading-relaxed text-paper/80">
            Cada proyecto pasa por nuestras manos como si fuera el único.
            Editorial en la forma, técnico en el fondo.
          </p>
        </div>
      </Container>
    </section>
  );
}

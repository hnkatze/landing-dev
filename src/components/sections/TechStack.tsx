"use client";

import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollScale } from "@/components/motion/ScrollScale";
import { Marquee } from "@/components/motion/Marquee";

const rows = [
  { text: "React / Next.js / Angular / Vue / Node.js / NestJS", velocity: -15 },
  { text: "Python / Go / Postgres / MongoDB / Redis / Docker", velocity: 20 },
  { text: "Flutter / React Native / Swift / Kotlin / Electron", velocity: -18 },
  { text: "AWS / GCP / Kubernetes / n8n / Zapier / OpenAI", velocity: 22 },
];

export function TechStack() {
  return (
    <section className="bg-paper text-ink pb-24 md:pb-32 overflow-x-clip">
      <Container>
        <Reveal y={30} blur={4} scale={0.95}>
          <Eyebrow className="block text-center mb-6">
            07 — STACK — CON QUÉ CONSTRUIMOS
          </Eyebrow>
        </Reveal>

        <ScrollScale from={0.7} to={1.1} fromOpacity={0.3} toOpacity={1}>
          <h2
            className="font-display font-semibold text-center leading-[0.95] tracking-[-0.04em] mb-12 md:mb-20"
            style={{ fontSize: "clamp(3.25rem, 13vw, 11rem)" }}
          >
            Stack.
          </h2>
        </ScrollScale>
      </Container>

      <div className="flex flex-col gap-3 md:gap-5">
        {rows.map((r, i) => (
          <Marquee key={i} baseVelocity={r.velocity}>
            <span
              className="font-display font-medium tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
            >
              {r.text}
            </span>
          </Marquee>
        ))}
      </div>
    </section>
  );
}

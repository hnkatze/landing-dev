"use client";

import Image from "next/image";
import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";

const words = ["IDEA", "CODIGO", "PRODUCTO", "IMPACTO"];

const stages = [
  {
    n: "01",
    label: "DISCOVERY",
    title: "Brief claro",
    body: "Traducimos el problema real antes de mover una pieza del sistema.",
  },
  {
    n: "02",
    label: "SYSTEM MAP",
    title: "Arquitectura visible",
    body: "Definimos flujos, datos e integraciones con criterio de producto.",
  },
  {
    n: "03",
    label: "BUILD LOOP",
    title: "Interfaz en movimiento",
    body: "Prototipo, desarrollo y ajustes cortos hasta que todo se siente natural.",
  },
  {
    n: "04",
    label: "LAUNCH",
    title: "Entrega con traccion",
    body: "Publicamos, medimos y dejamos el producto listo para operar.",
  },
];

const railOne = "NEXT.JS / APIS / MOBILE / AUTOMATION / SAAS / OPS /";
const railTwo = "BRIEF -> FLOW -> UI -> BACKEND -> DEPLOY -> GROWTH ->";

export function EditorialDivider() {
  return (
    <>
      <MobileProcessScene />
      <DesktopKineticScene />
    </>
  );
}

function DesktopKineticScene() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const rawVelocity = useMotionValue(0);

  const syncVelocity = useCallback(
    (lenis: Lenis) => {
      rawVelocity.set(lenis.velocity);
    },
    [rawVelocity],
  );

  useLenis(syncVelocity, [syncVelocity]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const velocity = useSpring(rawVelocity, {
    damping: 28,
    stiffness: 180,
    mass: 0.35,
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const wordY = useTransform(
    scrollYProgress,
    [0, 0.24, 0.46, 0.68, 0.9],
    ["0%", "0%", "-25%", "-50%", "-75%"],
  );
  const stageY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.42, 0.64, 0.86],
    ["0rem", "0rem", "-14rem", "-28rem", "-42rem"],
  );
  const progressScale = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0.92, 1, 1, 0.96],
  );
  const frameX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "2%", "4%"]);
  const velocityTilt = useTransform(velocity, [-45, 0, 45], [-5, 0, 5]);
  const velocityDrift = useTransform(velocity, [-45, 0, 45], [-32, 0, 32]);
  const velocityCounter = useTransform(velocity, [-45, 0, 45], [28, 0, -28]);
  const scanlineX = useTransform(velocity, [-45, 0, 45], ["-18%", "0%", "18%"]);

  return (
    <section
      ref={ref}
      className={[
        "relative hidden bg-ink text-paper overflow-x-clip xl:block",
        reduce ? "py-28" : "h-[260vh]",
      ].join(" ")}
    >
      <div
        className={[
          reduce ? "relative min-h-[720px] py-10" : "sticky top-0 min-h-[100svh]",
          "overflow-hidden flex items-center",
        ].join(" ")}
      >
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: bgY, scale: bgScale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/media/josep-martins-zuiQPl0mEhs-unsplash.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover grayscale opacity-55"
          />
        </motion.div>
        <SectionBackdrop />

        <InfiniteRail text={railOne} position="top" />
        <InfiniteRail text={railTwo} position="bottom" reverse />

        <Container>
          <div className="relative z-10 grid min-h-[100svh] grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] items-center gap-16 py-28">
            <div className="relative z-20 max-w-3xl">
              <Eyebrow tone="invert" className="mb-7 block text-paper">
                ENTRE LA IDEA Y EL CODIGO
              </Eyebrow>

              <div className="h-[clamp(4.9rem,6.35vw,7.3rem)] [clip-path:inset(0_-18rem_0_0)]">
                <motion.div
                  style={reduce ? undefined : { y: wordY }}
                  className="will-change-transform"
                >
                  {words.map((word) => (
                    <span
                      key={word}
                      className="block font-display font-semibold leading-none tracking-normal text-[clamp(4.9rem,6.35vw,7.3rem)]"
                    >
                      {word}
                    </span>
                  ))}
                </motion.div>
              </div>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/78 md:text-lg">
                Hacemos que cada avance se sienta tangible: estrategia,
                arquitectura, interfaz y entrega empujando en la misma direccion.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-paper/50">
                  00
                </span>
                <span className="relative h-px flex-1 overflow-hidden bg-paper/18">
                  <motion.span
                    aria-hidden
                    style={reduce ? undefined : { scaleX: progressScale }}
                    className="absolute inset-y-0 left-0 w-full origin-left bg-paper"
                  />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-paper/50">
                  100
                </span>
              </div>
            </div>

            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      x: frameX,
                      scale: frameScale,
                      rotateZ: velocityTilt,
                    }
              }
              className="relative z-10 mx-auto w-full will-change-transform"
            >
              <motion.div
                aria-hidden
                style={reduce ? undefined : { x: velocityCounter }}
                className="absolute -left-4 top-10 hidden h-32 w-32 border border-emerald-300/40 2xl:block"
              />
              <motion.div
                aria-hidden
                style={reduce ? undefined : { x: velocityDrift }}
                className="absolute -right-5 bottom-12 hidden h-24 w-40 border border-sky-300/35 2xl:block"
              />

              <ProcessWindow scanlineX={scanlineX} stageY={stageY} reduce={reduce} />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function MobileProcessScene() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-ink text-paper overflow-hidden xl:hidden">
      <div className="absolute inset-0">
        <Image
          src="/media/josep-martins-zuiQPl0mEhs-unsplash.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale opacity-45"
        />
      </div>
      <SectionBackdrop />
      <InfiniteRail text={railOne} position="top" />
      <InfiniteRail text={railTwo} position="bottom" reverse />

      <Container>
        <div className="relative z-10 py-28 md:py-32">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Eyebrow tone="invert" className="mb-6 block text-paper">
              ENTRE LA IDEA Y EL CODIGO
            </Eyebrow>

            <h2 className="font-display text-[clamp(3rem,13vw,6.6rem)] font-semibold leading-[0.95] tracking-normal text-paper">
              IDEA.
              <span className="block">CODIGO.</span>
              <span className="block">PRODUCTO.</span>
              <span className="block">IMPACTO.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/78 md:text-lg">
              Hacemos que cada avance se sienta tangible: estrategia,
              arquitectura, interfaz y entrega empujando en la misma direccion.
            </p>
          </motion.div>

          <div className="mt-12 md:mt-16">
            <ProcessWindow reduce={reduce} />
          </div>

          <ul className="mt-12 grid grid-cols-1 border-t border-paper/20 md:grid-cols-2">
            {stages.map((stage, index) => (
              <motion.li
                key={stage.n}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{
                  duration: 0.65,
                  delay: reduce ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-paper/20 py-7 md:p-7 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-paper/20"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl leading-none text-paper">
                    {stage.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-mono)] text-paper/45">
                    {stage.label}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold leading-tight tracking-normal text-paper">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/65">
                  {stage.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function ProcessWindow({
  scanlineX,
  stageY,
  reduce,
}: {
  scanlineX?: MotionValue<string>;
  stageY?: MotionValue<string>;
  reduce: boolean | null;
}) {
  const visibleStages = stageY ? stages : stages.slice(0, 1);

  return (
    <div className="relative border border-paper/24 bg-paper/[0.08] shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-paper/16 bg-paper/[0.08] px-4 py-3">
        <span className="size-2 rounded-full bg-rose-300/75" />
        <span className="size-2 rounded-full bg-amber-300/75" />
        <span className="size-2 rounded-full bg-emerald-300/75" />
        <span className="ml-3 truncate font-mono text-[10px] uppercase tracking-[var(--tracking-mono)] text-paper/50">
          devstudio/process-live
        </span>
      </div>

      <div className="grid gap-px bg-paper/14 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[240px] bg-ink md:min-h-[260px]">
          <Image
            src="/media/james-mckinven-B3FwR-Hf9w8-unsplash.jpg"
            alt="Workspace visual for the devstudio process"
            fill
            sizes="(min-width: 1280px) 42vw, 100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <motion.div
            aria-hidden
            style={!reduce && scanlineX ? { x: scanlineX } : undefined}
            className="absolute inset-y-0 left-1/2 w-px bg-paper/70 shadow-[0_0_34px_rgba(255,255,255,0.8)]"
          />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-paper/18 bg-ink/72">
            {["UI", "API", "OPS"].map((item) => (
              <span
                key={item}
                className="border-r border-paper/14 px-4 py-3 font-mono text-[10px] uppercase tracking-[var(--tracking-mono)] text-paper/62 last:border-r-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-ink/92 p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-5">
            <Eyebrow tone="invert" className="text-paper/55">
              KINETIC PIPELINE
            </Eyebrow>
            <span className="h-px flex-1 bg-paper/18" />
          </div>

          <div className="h-[14rem] overflow-hidden">
            <motion.div
              style={!reduce && stageY ? { y: stageY } : undefined}
              className="will-change-transform"
            >
              {visibleStages.map((stage) => (
                <article
                  key={stage.n}
                  className="flex h-[14rem] flex-col justify-between border-t border-paper/18 py-5 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl leading-none text-paper">
                      {stage.n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-mono)] text-paper/45">
                      {stage.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-tight tracking-normal text-paper">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/62">
                      {stage.body}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-ink/78" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35"
      />
    </>
  );
}

function InfiniteRail({
  text,
  position,
  reverse = false,
}: {
  text: string;
  position: "top" | "bottom";
  reverse?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={[
        "absolute inset-x-0 z-30 overflow-hidden border-paper/18 bg-ink/84 py-3 text-paper/42 backdrop-blur-sm",
        position === "top" ? "top-0 border-y" : "bottom-0 border-y",
      ].join(" ")}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
      }}
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: `${reverse ? "rail-marquee-reverse" : "rail-marquee"} 24s linear infinite`,
        }}
      >
        <RailGroup text={text} />
        <RailGroup text={text} />
      </div>
    </div>
  );
}

function RailGroup({ text }: { text: string }) {
  return (
    <div className="flex min-w-max shrink-0">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="block pr-8 font-mono text-[10px] uppercase tracking-[var(--tracking-mono)] md:pr-12 md:text-xs"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

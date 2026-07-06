import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";

export const metadata: Metadata = {
  title: "Términos",
  description:
    "Términos y condiciones de uso de flujoo: servicios ofrecidos, uso del sitio, propiedad intelectual y responsabilidad.",
  alternates: { canonical: "/terminos" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line/10">
        <Container>
          <div className="flex items-center justify-between py-6">
            <Link
              href="/"
              className="font-display font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity"
            >
              flujoo.
            </Link>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-muted hover:text-ink transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.05]">
              Términos y Condiciones
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-muted">
              Última actualización: julio 2026
            </p>

            <div className="mt-16 flex flex-col gap-12 md:gap-14">
              <Section title="1. Sobre flujoo">
                <p>
                  flujoo es un estudio de software con base en San Pedro
                  Sula, Honduras. Ofrecemos servicios de automatización de
                  procesos, agentes de inteligencia artificial, integraciones
                  vía MCPs (Model Context Protocol), desarrollo de software a
                  medida y tutorías técnicas. Al usar este sitio o contratar
                  nuestros servicios, aceptás los términos descritos aquí.
                </p>
              </Section>

              <Section title="2. Uso del sitio">
                <p>
                  Podés navegar flujoo.dev libremente para conocer nuestros
                  servicios y contactarnos. No está permitido usar el sitio
                  para fines ilegales, intentar vulnerar su seguridad, ni
                  extraer o reutilizar su contenido de forma masiva sin
                  autorización previa.
                </p>
              </Section>

              <Section title="3. Propiedad intelectual">
                <p>
                  El contenido de este sitio (textos, diseño, marca, código
                  visible en la interfaz y materiales publicados) es
                  propiedad de flujoo, salvo que se indique lo contrario. No
                  podés copiar, distribuir ni reutilizar este contenido con
                  fines comerciales sin nuestro consentimiento por escrito.
                </p>
              </Section>

              <Section title="4. Disponibilidad del sitio">
                <p>
                  Hacemos un esfuerzo razonable por mantener flujoo.dev
                  disponible y funcionando correctamente, pero no garantizamos
                  que el sitio esté libre de interrupciones, errores o
                  tiempos de inactividad. Podemos modificar, suspender o
                  descontinuar partes del sitio en cualquier momento.
                </p>
              </Section>

              <Section title="5. Limitación de responsabilidad">
                <p>
                  flujoo no se hace responsable por daños indirectos,
                  pérdidas de datos o interrupciones de negocio derivados del
                  uso o la imposibilidad de uso de este sitio. Los servicios
                  contratados directamente con flujoo se rigen por los
                  acuerdos específicos que firmemos con cada cliente, los
                  cuales prevalecen sobre estos términos generales en caso de
                  conflicto.
                </p>
              </Section>

              <Section title="6. Ley aplicable y jurisdicción">
                <p>
                  Estos términos se rigen por las leyes de la República de
                  Honduras. Cualquier disputa relacionada con el uso de este
                  sitio o nuestros servicios se resolverá ante los tribunales
                  competentes de Honduras.
                </p>
              </Section>

              <Section title="7. Cambios a estos términos">
                <p>
                  Podemos actualizar estos términos de tanto en tanto. La
                  versión vigente siempre estará publicada en esta página con
                  su fecha de actualización.
                </p>
              </Section>

              <Section title="8. Contacto">
                <p>
                  Si tenés preguntas sobre estos términos, escribinos a{" "}
                  <a
                    href="mailto:hola@flujoo.dev"
                    className="font-medium text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    hola@flujoo.dev
                  </a>
                  .
                </p>
              </Section>
            </div>
          </div>
        </Container>
      </main>

      <footer className="border-t border-line/10 mt-24">
        <Container>
          <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
              © 2026 flujoo · Todos los derechos reservados
            </span>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
            >
              Volver al inicio
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="font-display font-medium text-xl md:text-2xl tracking-[-0.01em]">
        {title}
      </h2>
      <div className="mt-4 text-base md:text-lg leading-relaxed text-ink-soft [&_a]:text-ink [&_li]:text-ink-soft">
        {children}
      </div>
    </section>
  );
}

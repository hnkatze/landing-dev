import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";

export const metadata: Metadata = {
  title: "Privacidad — flujoo",
  description:
    "Política de privacidad de flujoo: qué datos recopilamos a través del chat y el newsletter, cómo los usamos y tus derechos.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[var(--tracking-mono)] text-muted">
              Última actualización: julio 2026
            </p>

            <div className="mt-16 flex flex-col gap-12 md:gap-14">
              <Section title="1. Quién es responsable de tus datos">
                <p>
                  flujoo es un estudio de software con base en San Pedro Sula,
                  Honduras, dedicado a automatización, agentes de IA, MCPs y
                  desarrollo de software a medida. Esta política explica qué
                  información recopilamos cuando visitás{" "}
                  <span className="font-medium text-ink">flujoo.dev</span>,
                  cómo la usamos y qué derechos tenés sobre ella.
                </p>
              </Section>

              <Section title="2. Qué información recopilamos">
                <p>
                  Recopilamos información en dos puntos del sitio, siempre por
                  algo que vos nos compartís directamente:
                </p>
                <ul className="mt-4 flex flex-col gap-3 list-disc pl-5">
                  <li>
                    <span className="font-medium text-ink">
                      Chat del sitio:
                    </span>{" "}
                    los mensajes que escribís y cualquier dato de contacto
                    (nombre, correo, teléfono) que decidas compartir durante
                    la conversación.
                  </li>
                  <li>
                    <span className="font-medium text-ink">Newsletter:</span>{" "}
                    tu dirección de correo electrónico, si te suscribís
                    voluntariamente.
                  </li>
                </ul>
              </Section>

              <Section title="3. Cómo procesamos tu información">
                <p>
                  Usamos esta información para responder tus consultas y
                  contactar a personas interesadas en nuestros servicios. El
                  chat del sitio está conectado a un flujo de automatización
                  interno: tus mensajes son procesados por herramientas de
                  automatización propias y asistentes de inteligencia
                  artificial para ayudarnos a entender tu consulta y darte
                  seguimiento más rápido. No usamos esta información para
                  ningún otro propósito.
                </p>
              </Section>

              <Section title="4. Con quién compartimos tu información">
                <p>
                  No vendemos tus datos a terceros. La información que nos
                  compartís se usa únicamente dentro de flujoo, con las
                  herramientas de automatización e IA mencionadas arriba, para
                  operar el sitio y darte respuesta.
                </p>
              </Section>

              <Section title="5. Cuánto tiempo conservamos tus datos">
                <p>
                  Conservamos tu información durante un período razonable,
                  mientras sea necesario para responder tu consulta o
                  mantener el contacto que iniciaste. Si querés que
                  eliminemos tus datos antes, escribinos y lo hacemos.
                </p>
              </Section>

              <Section title="6. Cookies y analítica">
                <p>
                  Hoy en día flujoo.dev no usa cookies de rastreo ni
                  herramientas de analítica de terceros. Si eso cambia en el
                  futuro, actualizaremos esta política para reflejarlo antes
                  de implementar cualquier cambio.
                </p>
              </Section>

              <Section title="7. Tus derechos">
                <p>
                  Podés pedirnos acceso, rectificación o eliminación de tus
                  datos personales en cualquier momento, escribiendo a{" "}
                  <a
                    href="mailto:hola@flujoo.dev"
                    className="font-medium text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    hola@flujoo.dev
                  </a>
                  . Respondemos directamente, sin intermediarios.
                </p>
              </Section>

              <Section title="8. Cambios a esta política">
                <p>
                  Si actualizamos esta política, publicaremos la nueva
                  versión en esta misma página con la fecha de actualización
                  correspondiente.
                </p>
              </Section>

              <Section title="9. Contacto">
                <p>
                  Para cualquier duda sobre esta política de privacidad,
                  escribinos a{" "}
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

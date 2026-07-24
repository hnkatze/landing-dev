import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/layout/Eyebrow";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad de flujoo: qué datos recopilamos en el sitio, el newsletter y nuestros bots de WhatsApp, cómo los usamos y tus derechos.",
  alternates: { canonical: "/privacidad" },
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
                  Honduras, dedicado a automatización, agentes de IA, servidores
                  MCP y desarrollo de software a medida (web, móvil y
                  escritorio). Esta política aplica a{" "}
                  <span className="font-medium text-ink">flujoo.dev</span>, a
                  nuestros bots de WhatsApp y otros canales de mensajería, y a
                  cualquier aplicación, SaaS o producto digital que publiquemos
                  bajo la marca flujoo. Explica qué información recopilamos,
                  cómo la usamos y qué derechos tenés sobre ella.
                </p>
                <p className="mt-4">
                  Si un producto específico de flujoo necesita una política
                  adicional o distinta a esta, lo indicaremos claramente dentro
                  de ese producto.
                </p>
              </Section>

              <Section title="2. Qué información recopilamos">
                <p>
                  Recopilamos información en los siguientes puntos de contacto,
                  siempre por algo que vos nos compartís directamente o que se
                  genera al usar nuestros productos:
                </p>
                <ul className="mt-4 flex flex-col gap-3 list-disc pl-5">
                  <li>
                    <span className="font-medium text-ink">
                      Chat del sitio web:
                    </span>{" "}
                    los mensajes que escribís y cualquier dato de contacto
                    (nombre, correo, teléfono) que decidas compartir durante la
                    conversación.
                  </li>
                  <li>
                    <span className="font-medium text-ink">Newsletter:</span> tu
                    dirección de correo electrónico, si te suscribís
                    voluntariamente.
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      WhatsApp (WhatsApp Business Platform / Meta):
                    </span>{" "}
                    cuando le escribís a uno de nuestros números de WhatsApp
                    Business, recopilamos tu número de teléfono, tu nombre de
                    perfil (si lo compartís públicamente en WhatsApp), el
                    contenido de los mensajes que enviás, y metadatos de la
                    conversación (hora, estado de entrega) necesarios para
                    responderte.
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Apps y otros productos flujoo:
                    </span>{" "}
                    cuando publiquemos aplicaciones adicionales, recopilaremos
                    únicamente los datos necesarios para su funcionamiento,
                    descritos dentro de cada producto o en un anexo a esta
                    política.
                  </li>
                </ul>
                <p className="mt-4">
                  No recopilamos datos sensibles (salud, religión, orientación
                  sexual, datos biométricos, etc.) a menos que vos los compartas
                  voluntariamente en el contenido de un mensaje, y en ese caso
                  no los usamos con ningún propósito distinto al de responder tu
                  consulta.
                </p>
              </Section>

              <Section title="3. Cómo procesamos tu información">
                <p>
                  Usamos esta información para responder tus consultas, dar
                  seguimiento a personas interesadas en nuestros servicios, y
                  operar nuestros bots y productos correctamente. En particular:
                </p>
                <ul className="mt-4 flex flex-col gap-3 list-disc pl-5">
                  <li>
                    El chat del sitio y nuestros bots de WhatsApp están
                    conectados a flujos de automatización internos (n8n) y a
                    modelos de inteligencia artificial de terceros (por ejemplo,
                    OpenAI) que procesan el texto de tus mensajes para generar
                    una respuesta y mantener contexto de la conversación.
                  </li>
                  <li>
                    Guardamos un historial reciente de la conversación (memoria
                    de corto plazo) para que el asistente pueda mantener
                    contexto mientras hablás con él. Este historial tiene una
                    ventana limitada y no se usa para entrenar modelos de
                    terceros.
                  </li>
                  <li>
                    No usamos tu información para publicidad, ni la usamos con
                    fines distintos a los descritos en esta política.
                  </li>
                </ul>
              </Section>

              <Section title="4. Con quién compartimos tu información">
                <p>
                  No vendemos tus datos a terceros. Compartimos información
                  únicamente con:
                </p>
                <ul className="mt-4 flex flex-col gap-3 list-disc pl-5">
                  <li>
                    <span className="font-medium text-ink">
                      Proveedores de infraestructura y automatización
                    </span>{" "}
                    que usamos para operar nuestros productos (por ejemplo,
                    nuestro proveedor de hosting para n8n, y proveedores de
                    modelos de IA como OpenAI), estrictamente para procesar tu
                    solicitud.
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Meta / WhatsApp Business Platform
                    </span>
                    , en la medida necesaria para enviarte y recibirte mensajes
                    por ese canal, sujeto también a las{" "}
                    <a
                      href="https://www.facebook.com/privacy/policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                      políticas de privacidad de Meta
                    </a>
                    .
                  </li>
                  <li>
                    Autoridades, únicamente cuando la ley nos obligue a hacerlo.
                  </li>
                </ul>
              </Section>

              <Section title="5. Cuánto tiempo conservamos tus datos">
                <p>
                  Conservamos tu información durante un período razonable,
                  mientras sea necesario para responder tu consulta, mantener el
                  contacto que iniciaste, o cumplir obligaciones legales. Los
                  mensajes de WhatsApp se conservan mientras la conversación
                  esté activa y por un período posterior razonable para dar
                  seguimiento; si querés que eliminemos tus datos antes,
                  escribinos y lo hacemos.
                </p>
              </Section>

              <Section title="6. Tus derechos sobre tu información en WhatsApp">
                <p>
                  Además de tus derechos generales (sección 8), en WhatsApp
                  específicamente:
                </p>
                <ul className="mt-4 flex flex-col gap-3 list-disc pl-5">
                  <li>
                    Podés dejar de recibir mensajes nuestros en cualquier
                    momento simplemente bloqueando el número o pidiéndonos que
                    dejemos de escribirte.
                  </li>
                  <li>
                    Podés pedirnos la eliminación de tu historial de
                    conversación escribiéndonos por el mismo canal o a nuestro
                    correo.
                  </li>
                </ul>
              </Section>

              <Section title="7. Cookies y analítica">
                <p>
                  Hoy en día flujoo.dev no usa cookies de rastreo ni
                  herramientas de analítica de terceros. Si eso cambia en el
                  futuro, o si alguna app futura de flujoo las usa,
                  actualizaremos esta política para reflejarlo antes de
                  implementar cualquier cambio.
                </p>
              </Section>

              <Section title="8. Tus derechos">
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

              <Section title="9. Menores de edad">
                <p>
                  Nuestros productos están dirigidos a negocios y profesionales
                  adultos. No recopilamos intencionalmente información de
                  menores de edad. Si detectamos que hemos recopilado datos de
                  un menor sin consentimiento verificable de su tutor, los
                  eliminaremos.
                </p>
              </Section>

              <Section title="10. Cambios a esta política">
                <p>
                  Si actualizamos esta política, publicaremos la nueva versión
                  en esta misma página con la fecha de actualización
                  correspondiente. Para cambios materiales que afecten cómo
                  usamos tus datos, haremos un esfuerzo razonable por
                  notificarte a través del mismo canal donde interactuaste con
                  nosotros.
                </p>
              </Section>

              <Section title="11. Contacto">
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
              © 2026 flujoo · San Pedro Sula, Honduras · Todos los derechos
              reservados
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

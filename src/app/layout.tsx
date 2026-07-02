import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";
import { cdn } from "@/lib/cdn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://flujoo.dev";
const title = "flujoo — Automatización, agentes de IA y software a medida";
const description =
  "Estudio de software en San Pedro Sula para todo LATAM. Diseñamos flujos de automatización, construimos agentes de IA y servidores MCP, y desarrollamos productos web y móviles a medida.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "automatización de procesos",
    "agentes de IA",
    "servidores MCP",
    "n8n",
    "desarrollo web",
    "desarrollo móvil",
    "software a medida",
    "Honduras",
    "San Pedro Sula",
    "LATAM",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: siteUrl,
    siteName: "flujoo",
    title,
    description,
    images: [
      {
        url: cdn("/og.png"),
        width: 1200,
        height: 630,
        alt: "flujoo — automatización, agentes de IA y MCPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [cdn("/og.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "flujoo",
  url: siteUrl,
  email: "hola@flujoo.dev",
  logo: cdn("/brand/logo.png"),
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Pedro Sula",
    addressCountry: "HN",
  },
  areaServed: "Latin America",
  knowsAbout: [
    "automatización",
    "agentes de IA",
    "MCP",
    "desarrollo web",
    "desarrollo móvil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

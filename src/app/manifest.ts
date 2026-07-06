import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "flujoo — Automatización, agentes de IA y software a medida",
    short_name: "flujoo",
    description:
      "Estudio de software en San Pedro Sula para todo LATAM. Flujos de automatización, agentes de IA, servidores MCP y productos web y móviles a medida.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/icon.png",
        sizes: "608x608",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = { role: "user" | "assistant"; content: string };
type Body = { messages: ChatMessage[]; sessionId: string };

export async function POST(req: NextRequest) {
  const webhook = process.env.N8N_WEBHOOK_URL;

  if (!webhook) {
    return Response.json(
      {
        reply:
          "El chat aún no está conectado. Configurá N8N_WEBHOOK_URL en .env.local pa' activarlo.",
      },
      { status: 200 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lastUserMsg = [...body.messages].reverse().find((m) => m.role === "user");
  if (!lastUserMsg) {
    return Response.json({ error: "No user message" }, { status: 400 });
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.N8N_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        sessionId: body.sessionId,
        message: lastUserMsg.content,
        history: body.messages,
        source: "devstudio-landing",
      }),
    });

    if (!upstream.ok) {
      return Response.json(
        { reply: "Algo se cayó del lado del servidor. Probá de nuevo en un momento." },
        { status: 200 },
      );
    }

    const data = (await upstream.json()) as { reply?: string; output?: string };
    const reply =
      data.reply ?? data.output ?? "Recibí tu mensaje. Te respondemos pronto.";

    return Response.json({ reply });
  } catch {
    return Response.json(
      { reply: "No pude conectar con el flujo. Intentá más tarde." },
      { status: 200 },
    );
  }
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Msg = { role: "user" | "assistant"; content: string; id: string };

const SUGGESTIONS = [
  "¿Qué incluye una cotización?",
  "Tengo una idea de app móvil",
  "¿Cuánto tarda un MVP?",
];

const INITIAL_MSG: Msg = {
  id: "welcome",
  role: "assistant",
  content:
    "Hola 👋 soy el asistente de devstudio. Contame brevemente qué necesitás y te conecto con el equipo.",
};

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

export function ChatButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [unread, setUnread] = useState(false);
  const sessionIdRef = useRef<string>(uid());
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, messages]);

  useEffect(() => {
    if (!open) return;

    const t = setTimeout(() => inputRef.current?.focus(), 200);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const userMsg: Msg = { id: uid(), role: "user", content: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await res.json()) as { reply?: string };
      const reply =
        data.reply ?? "No pude responder ahora. Probá de nuevo en un momento.";

      setMessages((m) => [...m, { id: uid(), role: "assistant", content: reply }]);
      if (!open) setUnread(true);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "assistant",
          content: "Hubo un problema de red. Volvé a intentar.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        type="button"
        aria-label={open ? "Cerrar chat" : "Abrir chat con devstudio"}
        aria-expanded={open}
        aria-controls="chat-panel"
        onClick={() => {
          setOpen((o) => !o);
          setUnread(false);
        }}
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed z-[60] bottom-5 right-5 md:bottom-6 md:right-6",
          "size-14 md:size-16 rounded-full bg-ink text-paper",
          "flex items-center justify-center shadow-lg shadow-ink/25",
          "hover:scale-105 active:scale-95 transition-transform",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={reduce ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={reduce ? false : { rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduce ? undefined : { rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block relative"
            >
              <ChatIcon />
              {unread && (
                <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-paper border border-ink" />
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Chat con devstudio"
            data-lenis-prevent
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed z-[55] bg-paper text-ink border border-ink/15 shadow-2xl shadow-ink/20",
              "flex flex-col overflow-hidden",
              // Mobile: full width sheet, leaves room for FAB
              "inset-x-3 bottom-24 max-h-[70vh] rounded-2xl",
              // Desktop: anchored bottom-right
              "md:inset-x-auto md:right-6 md:bottom-28 md:w-[400px] md:max-h-[600px]",
            )}
          >
            <header className="flex items-center justify-between gap-3 px-5 py-4 border-b border-ink/10 bg-ink text-paper">
              <div className="flex items-center gap-3">
                <span
                  className="block size-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-[var(--tracking-mono)] uppercase text-muted-soft">
                    devstudio · asistente
                  </span>
                  <span className="text-sm font-medium">Estamos en línea</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-paper/70 hover:text-paper transition-colors p-1 -m-1"
                aria-label="Cerrar"
              >
                <CloseIcon />
              </button>
            </header>

            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3"
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} role={m.role} content={m.content} />
              ))}
              {sending && <TypingIndicator />}
            </div>

            {messages.length <= 2 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2 border-t border-ink/10 pt-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    disabled={sending}
                    className="text-xs px-3 py-1.5 rounded-full border border-ink/20 hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-ink/10 p-3 flex items-end gap-2 bg-paper"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder="Escribí tu mensaje…"
                disabled={sending}
                className={cn(
                  "flex-1 resize-none bg-transparent outline-none",
                  "px-3 py-2 text-sm leading-relaxed max-h-32",
                  "placeholder:text-muted",
                )}
                aria-label="Mensaje"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label="Enviar"
                className={cn(
                  "shrink-0 size-9 rounded-full bg-ink text-paper",
                  "flex items-center justify-center",
                  "disabled:opacity-30 disabled:cursor-not-allowed",
                  "hover:scale-105 active:scale-95 transition-transform",
                )}
              >
                <SendIcon />
              </button>
            </form>

            <p className="px-5 pb-3 text-[10px] font-mono tracking-[0.1em] uppercase text-muted text-center">
              Powered by n8n · respuestas pueden no ser instantáneas
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ role, content }: { role: Msg["role"]; content: string }) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
          isUser
            ? "bg-ink text-paper rounded-br-sm"
            : "bg-ink/5 text-ink rounded-bl-sm",
        )}
      >
        {content}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-ink/5 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
        {[0, 0.15, 0.3].map((d, i) => (
          <motion.span
            key={i}
            className="block size-1.5 rounded-full bg-ink/50"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: d }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

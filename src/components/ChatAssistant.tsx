"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Mail, MessageCircle, Send, X } from "lucide-react";
import { getChatReply, quickPrompts } from "@/lib/chatbot";
import { profile } from "@/lib/data";

type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  suggestEmail?: boolean;
};

const welcome: Message = {
  id: "welcome",
  role: "bot",
  text: `Hi! I’m an assistant for ${profile.firstName} ${profile.lastName}. Ask about skills, experience, testing, or availability — and I’ll help before you email him.`,
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const endRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, typing, open, reduceMotion]);

  const replyTo = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    const reply = getChatReply(trimmed);

    window.setTimeout(
      () => {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "bot",
            text: reply.text,
            suggestEmail: reply.suggestEmail,
          },
        ]);
        setTyping(false);
      },
      reduceMotion ? 120 : 650 + Math.min(trimmed.length * 12, 500),
    );
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    replyTo(input);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="mb-3 flex h-[min(34rem,72vh)] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-line bg-fog shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-slate to-teal px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <Bot size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-bold">Ask Pius Assistant</p>
                  <p className="text-xs text-white/80">Answers common questions 24/7</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-br-md bg-teal text-white"
                        : "rounded-bl-md border border-line bg-white text-ink"
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.suggestEmail && (
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal transition-colors hover:bg-teal hover:text-white"
                      >
                        <Mail size={12} />
                        Email {profile.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-line bg-white px-3.5 py-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:240ms]" />
                    </div>
                  </div>
                </div>
              )}

              {messages.length < 3 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => replyTo(prompt)}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-teal hover:text-teal"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={onSubmit} className="border-t border-line bg-white p-3">
              <div className="flex items-center gap-2 rounded-full border border-line bg-fog px-3 py-1.5 focus-within:border-teal">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-ink-soft/60"
                  aria-label="Chat message"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-teal-deep disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-ink-soft">
                For direct contact:{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-semibold text-teal hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-colors hover:bg-teal-deep"
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="hidden sm:inline">{open ? "Close" : "Chat with AI"}</span>
      </motion.button>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  RotateCcw,
  Phone,
  Calendar,
  Settings,
  ArrowRight,
  ArrowUp,
  Sparkles,
  MapPin,
  School,
  GraduationCap,
  ClipboardList,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { PHONE_HREF } from "@/lib/contact";
import {
  processUserMessage,
  AssistantAction,
  AssistantSource,
  PageAgentConfigState,
} from "@/lib/pageAgentService";
import { SUGGESTED_QUESTIONS } from "@/data/bcnKnowledgeIndex";

interface ChatMessage {
  id: string;
  sender: "assistant" | "user";
  text: string;
  sources?: AssistantSource[];
  actions?: AssistantAction[];
  isFallback?: boolean;
  // The welcome message feeds the welcome screen cards instead of rendering as a bubble
  suggestions?: string[];
  isWelcome?: boolean;
  // Loaded from sessionStorage: already seen, so it does not replay its entrance
  restored?: boolean;
  timestamp: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: "msg-welcome",
  sender: "assistant",
  text: "Merhaba, size nasıl yardımcı olabilirim?",
  sources: [],
  actions: [
    {
      type: "OPEN_ADMISSION_MODAL",
      label: "Randevu al",
      payload: "randevu",
    },
    {
      type: "NAVIGATE",
      label: "İletişim bilgileri",
      payload: "/iletisim",
    },
  ],
  suggestions: SUGGESTED_QUESTIONS.slice(0, 3),
  isWelcome: true,
  timestamp: "Şimdi",
};

// One icon per welcome card, in the order of the suggested questions above
const SUGGESTION_ICONS = [School, GraduationCap, ClipboardList];

// Incoming-message entrance: a calm rise and fade with the smooth-out ease
const ENTER_EASE = [0.22, 1, 0.36, 1] as const;
function enter(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: ENTER_EASE, delay },
  };
}
// Rows glide up when a new message pushes them, instead of jumping
const ROW_LAYOUT = { layout: { duration: 0.45, ease: ENTER_EASE } };

// First question choreography (seconds): the crest flies to the greeting bubble, the greeting arrives,
// then the visitor's question, then the typing indicator. The reply waits until the sequence has played.
const OPENING = { crest: 0.8, greeting: 0.35, question: 1.0, typing: 1.5 };
const OPENING_MIN_REPLY_MS = 2600;
// Clearing the chat brings the welcome screen back with a short settle-in
const WELCOME_ENTER = { duration: 0.4, ease: ENTER_EASE };
const MIN_REPLY_MS = 900;
const elapsedSince = (from = 0) => performance.now() - from;

// The visitor's clock is only known in the browser; prerendered HTML says "Merhaba"
const noopSubscribe = () => () => {};
const getHour = () => new Date().getHours();
const getServerHour = () => null;

function greetingFor(hour: number | null) {
  if (hour === null) return "Merhaba";
  if (hour >= 5 && hour < 12) return "Günaydın";
  if (hour >= 12 && hour < 18) return "İyi günler";
  return "İyi akşamlar";
}

export default function SmartWebAssistant() {
  const router = useRouter();
  const pathname = usePathname();
  const { openAdmission } = useModal();

  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTracing, setIsTracing] = useState(false);
  // Bumped on "clear chat" so the crest does not fly back from the old conversation
  const [chatRun, setChatRun] = useState(0);
  const avatarLayoutId = `bcn-greeting-avatar-${chatRun}`;

  // Draw the eye to the ask bar: a light traces its border a single lap on every page load,
  // every in-site page change and when the browser restores the page from its back/forward cache.
  const [traceRun, setTraceRun] = useState(0);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTraceRun((run) => run + 1); // new key remounts the bar so the animation restarts cleanly
      setIsTracing(true);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      setTraceRun((run) => run + 1);
      setIsTracing(true);
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Alibaba Page Agent optional BYO config
  const [pageAgentConfig, setPageAgentConfig] = useState<PageAgentConfigState>({
    enabled: false,
    apiKey: "",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    model: "qwen-plus",
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore messages from sessionStorage on initial mount for continuous session
  useEffect(() => {
    try {
      const savedMessages = sessionStorage.getItem("bcn_chat_history");
      if (savedMessages) {
        // Older sessions stored a previous welcome text; always show the current one
        const restored: ChatMessage[] = JSON.parse(savedMessages);
        setMessages(restored.map((m) => (m.id === INITIAL_MESSAGE.id ? INITIAL_MESSAGE : { ...m, restored: true })));
      }
      const savedConfig = localStorage.getItem("bcn_pageagent_config");
      if (savedConfig) {
        setPageAgentConfig(JSON.parse(savedConfig));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save messages to sessionStorage when updated
  useEffect(() => {
    try {
      if (messages.length > 0) {
        sessionStorage.setItem("bcn_chat_history", JSON.stringify(messages));
      }
    } catch {
      // ignore
    }
  }, [messages]);

  // Scroll to bottom on new message or typing state change
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus the input on open; Escape collapses the chat; tell the page (WhatsApp button) it is open
  useEffect(() => {
    document.body.dataset.aiOpen = String(isOpen);
    if (!isOpen) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 250);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const isOpeningSend = messages.length === 1;
    const startedAt = elapsedSince();
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      // Process query using Verified RAG & Action Dispatcher
      const result = await processUserMessage(text, pathname);

      // Keep the typing indicator up long enough to read, and let the opening sequence finish first
      const minWait = isOpeningSend ? OPENING_MIN_REPLY_MS : MIN_REPLY_MS;
      await new Promise((resolve) => setTimeout(resolve, Math.max(0, minWait - elapsedSince(startedAt))));

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: result.answer,
        sources: result.sources,
        actions: result.actions,
        isFallback: result.isFallback,
        timestamp: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: "assistant",
          text: "Bağlantı sırasında bir hata oluştu. Lütfen tekrar deneyiniz veya iletişim sayfamızdan bize ulaşınız.",
          sources: [{ title: "İletişim", route: "/iletisim" }],
          actions: [
            {
              type: "NAVIGATE",
              label: "İletişim Sayfasına Git",
              payload: "/iletisim",
            },
          ],
          isFallback: true,
          timestamp: "Şimdi",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: AssistantAction) => {
    switch (action.type) {
      case "NAVIGATE":
        router.push(action.payload);
        // keep open or minimize on mobile
        if (window.innerWidth < 640) setIsOpen(false);
        break;
      case "OPEN_ADMISSION_MODAL":
        openAdmission();
        if (window.innerWidth < 640) setIsOpen(false);
        break;
      case "CALL_PHONE":
        window.location.href = `tel:${action.payload}`;
        break;
      case "SCROLL_TO":
        const target = document.querySelector(action.payload);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          if (window.innerWidth < 640) setIsOpen(false);
        }
        break;
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setChatRun((run) => run + 1);
    sessionStorage.removeItem("bcn_chat_history");
  };

  const savePageAgentConfig = (cfg: PageAgentConfigState) => {
    setPageAgentConfig(cfg);
    localStorage.setItem("bcn_pageagent_config", JSON.stringify(cfg));
    setIsSettingsOpen(false);
  };

  // Before the first question the panel is a welcome screen, not a conversation
  const isEmpty = messages.length === 1 && Boolean(messages[0].isWelcome);
  const hour = useSyncExternalStore(noopSubscribe, getHour, getServerHour);

  return (
    <>
      {/* Floating launcher, labelled as an AI assistant so visitors know they are not talking to staff */}
      <aside aria-label="BCN Akıllı Web Asistanı Bileşeni">
      {/* One box, two states: the ask bar grows upward (Y axis only) into the chat, keeping its
          width, radius and navy surface. Height uses the transitions.dev accordion (grid rows 0fr → 1fr). */}
      <div
        className={`fixed bottom-6 left-4 sm:left-auto sm:w-[380px] sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-50 ${
          isOpen ? "right-4" : "right-[84px]"
        }`}
      >
        <div
          key={traceRun}
          role="region"
          aria-label="BCN yapay zekâ asistanı"
          data-open={isOpen}
          onAnimationEnd={(e) => {
            if (e.animationName === "ai-trace-glow") setIsTracing(false);
          }}
          className={`t-acc relative flex flex-col rounded-[24px] bg-[#0B1524] text-white border border-white/15 shadow-xl focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/40 transition-colors ${
            isTracing && !isOpen ? "ai-bar-trace" : ""
          }`}
        >
          {/* Chat body: collapsed to 0 height until open */}
          <div className="t-acc-panel">
            <div className="t-acc-panel-inner" inert={!isOpen}>
              <div className="relative flex flex-col h-[min(560px,calc(100svh-160px))] sm:h-[min(560px,calc(100svh-200px))]">
                {/* A single cobalt light behind the welcome screen; it fades once the conversation starts */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-t-[24px] bg-[radial-gradient(120%_70%_at_30%_0%,rgba(37,99,235,0.35),transparent_70%)] transition-opacity duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isEmpty ? "opacity-100" : "opacity-0"
                  }`}
                />
                {/* No header band: reset/close float over the top of the conversation */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-16 rounded-t-[24px] bg-gradient-to-b from-[#0B1524] from-60% to-transparent ${
                    isEmpty ? "hidden" : ""
                  }`}
                />
                <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleResetChat}
                    title="Sohbeti temizle"
                    aria-label="Sohbeti temizle"
                    className="size-10 sm:size-9 inline-flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-ring-light"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  {process.env.NODE_ENV === "development" && (
                    <button
                      type="button"
                      onClick={() => setIsSettingsOpen(true)}
                      title="Geliştirici ayarları"
                      aria-label="Geliştirici ayarları"
                      className="size-10 sm:size-9 inline-flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-ring-light"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    title="Kapat"
                    aria-label="Asistanı kapat"
                    className="size-10 sm:size-9 inline-flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-ring-light"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative flex-1 min-h-0">
                {/* Exactly one view is mounted at a time, so welcome and chat can never overlap */}
                {isEmpty ? (
                  <motion.div
                    key="welcome"
                    initial={chatRun > 0 ? { opacity: 0, y: 8, filter: "blur(2px)" } : false}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={WELCOME_ENTER}
                    className="absolute inset-0 overflow-y-auto flex flex-col px-4 pt-4 pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
                  >
                    {/* Same layoutId as the greeting bubble's avatar: the crest flies there on the first question */}
                    <motion.div layoutId={avatarLayoutId} transition={{ duration: OPENING.crest, ease: ENTER_EASE }} className="size-10">
                      <Image
                        src="/images/bcn/logo-crest.png"
                        alt=""
                        width={40}
                        height={40}
                        className="size-full rounded-full bg-white object-contain ring-1 ring-white/20"
                      />
                    </motion.div>
                    <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-white text-balance">
                      {greetingFor(hour)},
                      <span className="block text-slate-300">size nasıl yardımcı olabilirim?</span>
                    </h2>

                    {/* All starters stacked in view: nothing hidden behind a sideways scroll */}
                    <div className="mt-auto pt-6 flex flex-col gap-2">
                      {INITIAL_MESSAGE.actions?.map((act) => (
                        <WelcomeCard
                          key={act.label}
                          icon={act.type === "OPEN_ADMISSION_MODAL" ? Calendar : MapPin}
                          label={act.label}
                          onClick={() => handleActionClick(act)}
                        />
                      ))}
                      {INITIAL_MESSAGE.suggestions?.map((q, i) => (
                        <WelcomeCard
                          key={q}
                          icon={SUGGESTION_ICONS[i] ?? Sparkles}
                          label={q}
                          onClick={() => handleSendMessage(q)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                <div
                  key="chat"
                  className="absolute inset-0 overflow-y-auto px-3 pt-12 pb-3 flex flex-col gap-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
                  <div className="mt-auto" aria-hidden="true" />
                  {messages.map((msg, index) => {
                    const isUser = msg.sender === "user";
                    // The conversation is just starting: greeting arrives first, then the visitor's question
                    const isOpening = messages.length === 2 && !messages[1].restored;
                    const motionProps =
                      msg.restored || (msg.isWelcome && !isOpening)
                        ? { initial: false as const }
                        : enter(isOpening ? (index === 0 ? OPENING.greeting : OPENING.question) : 0);
                    return (
                      <motion.div
                        key={msg.id}
                        layout="position"
                        transition={ROW_LAYOUT}
                        className={`flex gap-2 ${isUser ? "justify-end" : "items-start"}`}
                      >
                        {!isUser &&
                          (msg.isWelcome ? (
                            <motion.div layoutId={avatarLayoutId} transition={{ duration: OPENING.crest, ease: ENTER_EASE }} className="shrink-0">
                              <AssistantAvatar />
                            </motion.div>
                          ) : (
                            <motion.div {...motionProps} className="shrink-0">
                              <AssistantAvatar />
                            </motion.div>
                          ))}
                        <motion.div
                          {...motionProps}
                          className={`flex flex-col min-w-0 ${isUser ? "items-end max-w-[85%]" : "items-start flex-1"}`}
                        >
                          <div
                            className={`max-w-full rounded-2xl p-3 leading-relaxed ${
                              isUser
                                ? "bg-[#1E3A8A] text-white rounded-br-md"
                                : "bg-white/[0.06] text-slate-100 border border-white/10 rounded-tl-md"
                            }`}
                          >
                            <div className="whitespace-pre-line text-sm">
                              {msg.isWelcome ? `${greetingFor(hour)}, size nasıl yardımcı olabilirim?` : msg.text}
                            </div>

                            {msg.sources && msg.sources.length > 0 && (
                              <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
                                <span className="text-xs font-semibold text-slate-300">Kaynak:</span>
                                {msg.sources.map((src, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                      router.push(src.route);
                                      if (window.innerWidth < 640) setIsOpen(false);
                                    }}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-white font-semibold text-xs border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
                                  >
                                    <span>{src.title}</span>
                                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                  </button>
                                ))}
                              </div>
                            )}

                            {!msg.isWelcome && msg.actions && msg.actions.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {msg.actions.map((act, i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() => handleActionClick(act)}
                                    className="inline-flex items-center gap-1.5 min-h-9 px-3 rounded-lg border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-colors cursor-pointer"
                                  >
                                    <ActionIcon type={act.type} />
                                    <span>{act.label}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {!msg.isWelcome && <span className="text-xs text-slate-400 mt-1 px-1">{msg.timestamp}</span>}
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {isTyping && (
                    <motion.div
                      {...enter(messages.length === 2 && !messages[1].restored ? OPENING.typing : 0.15)}
                      layout="position"
                      className="flex items-start gap-2"
                    >
                    <AssistantAvatar />
                    <div className="flex items-center gap-2 p-3 rounded-2xl rounded-tl-md w-fit bg-white/[0.06] border border-white/10 text-xs" role="status">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                      <span className="text-slate-300">Yanıt hazırlanıyor…</span>
                    </div>
                    </motion.div>
                  )}

                  <div ref={chatEndRef} />
                </div>
                )}
                </div>

                <p className="px-4 pb-2 text-center text-xs text-slate-400">
                  Yapay zekâ hata yapabilir. Kesin bilgi için{" "}
                  <a href={PHONE_HREF} className="font-semibold text-white underline underline-offset-2 whitespace-nowrap">
                    {INSTITUTION_INFO.phone}
                  </a>
                </p>

              </div>
            </div>
          </div>

          {/* Input row: the same row in both states */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const text = inputVal.trim();
              if (!isOpen) setIsOpen(true);
              if (text) handleSendMessage(text);
            }}
            className="flex items-center gap-1.5 h-12 px-1.5 shrink-0"
          >
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Yapay zekâ asistanını aç"
              className="size-9 shrink-0 inline-flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-ring-light"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              aria-label="Yapay zekâ asistanına soru sorun"
              placeholder={isOpen ? "Sorunuzu yazın…" : "Yapay zekâ asistanına sorun…"}
              className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isOpen && (!inputVal.trim() || isTyping)}
              aria-label={inputVal.trim() ? "Soruyu gönder" : "Yapay zekâ asistanını aç"}
              aria-expanded={isOpen}
              className={`size-9 shrink-0 inline-flex items-center justify-center rounded-full transition-colors cursor-pointer focus-ring-light disabled:opacity-40 disabled:cursor-not-allowed ${
                inputVal.trim() ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Settings Modal (Alibaba PageAgent Configuration) */}
      <AnimatePresence>
        {process.env.NODE_ENV === "development" && isSettingsOpen && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 text-slate-800"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#17263D]">
                      Alibaba Page Agent Ayarları
                    </h3>
                    <p className="text-xs text-slate-500">
                      Özerk Tarayıcı & Model Entegrasyonu
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="p-1 text-slate-500 hover:text-slate-600 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs leading-relaxed">
                  <span className="font-bold">Aktif Çalışma Modu:</span> Varsayılan
                  olarak web sitemiz{" "}
                  <strong>ücretsiz ve sıfır API maliyeti</strong> olan BCN Doğrulanmış
                  İçerik & Eylem Motorunu kullanır. Dilerseniz kendi OpenAI / Qwen /
                  Ollama modelinizi bağlayabilirsiniz.
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700">
                    Özerk DOM Ajanı (Page Agent)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="enablePageAgent"
                      checked={pageAgentConfig.enabled}
                      onChange={(e) =>
                        setPageAgentConfig({
                          ...pageAgentConfig,
                          enabled: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded text-[#1E3A8A]"
                    />
                    <label
                      htmlFor="enablePageAgent"
                      className="text-slate-600 font-medium cursor-pointer"
                    >
                      Harici Model / Alibaba DashScope API Bağlantısını Etkinleştir
                    </label>
                  </div>
                </div>

                {pageAgentConfig.enabled && (
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Model Base URL (OpenAI / Qwen / Ollama)
                      </label>
                      <input
                        type="text"
                        value={pageAgentConfig.baseURL}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            baseURL: e.target.value,
                          })
                        }
                        placeholder="https://dashscope.aliyuncs.com/compatible-mode/v1"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        API Anahtarı (API Key)
                      </label>
                      <input
                        type="password"
                        value={pageAgentConfig.apiKey}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            apiKey: e.target.value,
                          })
                        }
                        placeholder="sk-..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                      <span className="text-xs text-slate-500 mt-0.5 block">
                        API anahtarınız yalnızca tarayıcınızın yerel depolama
                        alanında saklanır.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Model Adı
                      </label>
                      <input
                        type="text"
                        value={pageAgentConfig.model}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            model: e.target.value,
                          })
                        }
                        placeholder="qwen-plus / gpt-4o-mini / llama3"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  İptal
                </button>
                <button
                  type="button"
                  onClick={() => savePageAgentConfig(pageAgentConfig)}
                  className="px-4 py-2 rounded-xl bg-[#17263D] text-white font-semibold text-xs hover:bg-[#1E3A8A] transition-colors cursor-pointer"
                >
                  Ayarları Kaydet
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </aside>
    </>
  );
}

// School crest as the assistant's small profile picture next to its messages
function AssistantAvatar() {
  return (
    <Image
      src="/images/bcn/logo-crest.png"
      alt=""
      width={28}
      height={28}
      className="size-7 shrink-0 mt-0.5 rounded-full bg-white object-contain ring-1 ring-white/20"
    />
  );
}

function WelcomeCard({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full min-h-12 shrink-0 flex items-center gap-3 px-3 py-2.5 rounded-2xl border border-white/10 bg-white/[0.05] text-left hover:bg-white/10 transition-colors cursor-pointer focus-ring-light"
    >
      <span className="size-7 shrink-0 inline-flex items-center justify-center rounded-full bg-white/10 text-white">
        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
      <span className="text-sm leading-snug text-slate-100">{label}</span>
    </button>
  );
}

function ActionIcon({ type }: { type: AssistantAction["type"] }) {
  if (type === "OPEN_ADMISSION_MODAL") return <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  if (type === "NAVIGATE") return <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  if (type === "CALL_PHONE") return <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />;
  return null;
}
